import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import {
  ALLOWED_UPLOADS,
  MAX_FILES,
  MAX_TOTAL_UPLOAD_BYTES,
  MAX_UPLOAD_BYTES,
  escapeHtml,
  extensionOf,
  isFreeEmailHost,
  validateQuote,
  type Errors,
  type QuoteFields,
} from '~/lib/quote';
import { BRAND } from '~/lib/site';

export const prerender = false;

/* ------------------------------------------------------------------ *
 * Rate limiting
 *
 * In-memory, per instance. It is a speed bump against scripted abuse, not a
 * distributed limiter — a serverless deployment runs several instances and each
 * keeps its own window. The real protection is the layered validation below.
 * If this site ever needs a hard guarantee, move the store to Upstash/KV; the
 * interface below is deliberately small enough to swap.
 * ------------------------------------------------------------------ */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  return (forwarded?.split(',')[0] ?? real ?? 'unknown').trim();
}

/* ------------------------------------------------------------------ *
 * Upload validation
 * ------------------------------------------------------------------ */

function hex(bytes: Uint8Array, length: number): string {
  return Array.from(bytes.slice(0, length))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Three independent checks. A file must pass all of them:
 *   1. Extension is on the allow list.
 *   2. Reported MIME type is on that extension's allow list.
 *   3. Leading bytes match one of that extension's known signatures.
 *
 * SVG has no binary signature, so it is validated by parsing instead: it must
 * open with an <svg> or XML declaration and must not contain a script element,
 * an event handler attribute, or a javascript: URL.
 */
async function checkFile(file: File): Promise<string | null> {
  const ext = extensionOf(file.name);
  const rule = ALLOWED_UPLOADS.find((a) => a.ext === ext);
  if (!rule) {
    return `"${file.name}" is not an accepted format.`;
  }
  if (file.size === 0) return `"${file.name}" is empty.`;
  if (file.size > MAX_UPLOAD_BYTES) {
    return `"${file.name}" is larger than ${Math.round(MAX_UPLOAD_BYTES / 1024 / 1024)} MB.`;
  }

  const reportedType = (file.type || '').toLowerCase();
  if (reportedType && !(rule.mimes as readonly string[]).includes(reportedType)) {
    return `"${file.name}" does not match the format its extension claims.`;
  }

  const head = new Uint8Array(await file.slice(0, 512).arrayBuffer());

  if (ext === 'svg') {
    const text = new TextDecoder().decode(
      new Uint8Array(await file.slice(0, 4096).arrayBuffer()),
    );
    const trimmed = text.trimStart().toLowerCase();
    if (!trimmed.startsWith('<?xml') && !trimmed.startsWith('<svg') && !trimmed.startsWith('<!doctype svg')) {
      return `"${file.name}" does not look like an SVG file.`;
    }
    const whole = await file.text();
    if (/<script[\s>]/i.test(whole) || /\son\w+\s*=/i.test(whole) || /javascript:/i.test(whole)) {
      return `"${file.name}" contains scripting and cannot be accepted. Export it as a plain SVG or send a PDF.`;
    }
    return null;
  }

  if (rule.magic.length) {
    const matches = rule.magic.some((sig) => hex(head, sig.length / 2) === sig);
    if (!matches) {
      return `"${file.name}" does not match the format its extension claims.`;
    }
  }

  return null;
}

/**
 * Uploaded files are never written to disk and never given a public URL. They
 * are held in memory only long enough to be attached to the notification email,
 * under a randomised filename that keeps the original for reference in the body.
 */
function safeAttachmentName(original: string): string {
  const ext = extensionOf(original);
  const random = crypto.randomUUID().replace(/-/g, '').slice(0, 16);
  return `artwork-${random}.${ext}`;
}

/* ------------------------------------------------------------------ */

const THANK_YOU = '/thank-you/';

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });
}

/**
 * The form is submitted two ways and the response has to suit both.
 *
 * With JavaScript, the enhanced handler sends `Accept: application/json` and
 * navigates on the payload. Without it, the browser performs a plain form POST
 * and renders whatever comes back — so returning JSON there would leave the
 * person staring at `{"ok":true}` instead of the thank-you page.
 */
function wantsJson(request: Request): boolean {
  return (request.headers.get('accept') ?? '').includes('application/json');
}

/** Success. JSON callers navigate themselves; browsers are redirected. */
function succeeded(request: Request): Response {
  if (wantsJson(request)) return json({ ok: true, redirect: THANK_YOU });
  return new Response(null, {
    // 303 so the browser follows with GET. A 302 would leave some clients
    // re-POSTing the form on refresh.
    status: 303,
    headers: { location: THANK_YOU, 'cache-control': 'no-store' },
  });
}

/**
 * Failure. Without JavaScript there is no client-side validation either, so a
 * plain browser can genuinely arrive here — and it needs readable HTML rather
 * than an error object. Every value is escaped; nothing is reflected raw.
 */
function failed(request: Request, errors: Errors, status: number): Response {
  if (wantsJson(request)) return json({ ok: false, errors }, status);

  const items = Object.values(errors)
    .filter(Boolean)
    .map((message) => `<li>${escapeHtml(String(message))}</li>`)
    .join('');

  const page = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Your request needs a correction</title>
<style>
  body{margin:0;padding:2.5rem 1.25rem;background:#f7f6f3;color:#171a20;
       font:16px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif}
  main{max-width:34rem;margin:0 auto}
  h1{font-size:1.6rem;line-height:1.2;margin:0 0 .75rem}
  ul{padding-left:1.15rem}
  a{color:#2340ad}
</style></head>
<body><main>
<h1>Your request needs a correction</h1>
<p>Nothing was sent. Please go back and fix the following, then submit again.</p>
<ul>${items}</ul>
<p><a href="javascript:history.back()">Go back to the form</a>, or email
<a href="mailto:info@thepolymailers.com">info@thepolymailers.com</a> instead.</p>
</main></body></html>`;

  return new Response(page, {
    status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  if (rateLimited(clientKey(request))) {
    return failed(
      request,
      {
        form: 'Too many requests from this connection. Wait a few minutes, or email info@thepolymailers.com.',
      } satisfies Errors,
      429,
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return failed(request, { form: 'That request could not be read.' }, 400);
  }

  // Honeypot: a real person never sees this field.
  if (String(form.get('company_url') ?? '').trim() !== '') {
    // Answer as though it succeeded so a bot learns nothing from the response.
    return succeeded(request);
  }

  // Timing trap: a human cannot complete this form in under three seconds.
  const startedAt = Number(form.get('started_at') ?? 0);
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < 3000) {
    return succeeded(request);
  }

  const fields: Partial<QuoteFields> = {
    name: String(form.get('name') ?? '').trim(),
    email: String(form.get('email') ?? '').trim(),
    phone: String(form.get('phone') ?? '').trim(),
    country: String(form.get('country') ?? '').trim(),
    product: String(form.get('product') ?? '').trim(),
    size: String(form.get('size') ?? '').trim(),
    quantity: String(form.get('quantity') ?? '').trim(),
    message: String(form.get('message') ?? '').trim(),
    consent: form.get('consent') === 'yes',
    design: String(form.get('design') ?? '').slice(0, 8000),
    source: String(form.get('source') ?? '').slice(0, 200),
  };

  const errors = validateQuote(fields);

  const uploads = form
    .getAll('artwork')
    .filter((f): f is File => f instanceof File && f.size > 0);

  if (uploads.length > MAX_FILES) {
    errors.artwork = `Attach no more than ${MAX_FILES} files.`;
  } else {
    const total = uploads.reduce((sum, f) => sum + f.size, 0);
    if (total > MAX_TOTAL_UPLOAD_BYTES) {
      errors.artwork = `Those files total more than ${Math.round(
        MAX_TOTAL_UPLOAD_BYTES / 1024 / 1024,
      )} MB together.`;
    } else {
      for (const file of uploads) {
        const problem = await checkFile(file);
        if (problem) {
          errors.artwork = problem;
          break;
        }
      }
    }
  }

  if (Object.keys(errors).length) {
    return failed(request, errors, 422);
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO, SMTP_FROM_NAME, SMTP_FROM_EMAIL } =
    import.meta.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // Fail loudly in the server log, politely to the visitor. Never leak which
    // variable is missing to the browser.
    console.error('[quote] SMTP is not configured — set the variables in .env.example.');
    return failed(
      request,
      {
        form: `Your request could not be sent right now. Please email ${BRAND.email} and we will pick it up.`,
      } satisfies Errors,
      503,
    );
  }

  const port = Number(SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: String(SMTP_HOST),
    port,
    secure: port === 465,
    auth: { user: String(SMTP_USER), pass: String(SMTP_PASS) },
  });

  const e = escapeHtml;
  const rows: [string, string][] = [
    ['Name', fields.name!],
    ['Email', fields.email!],
    ['Phone / WhatsApp', fields.phone!],
    ['Country', fields.country!],
    ['Product', fields.product!],
    ['Size', fields.size || '—'],
    ['Quantity', fields.quantity!],
    ['Page', fields.source || '—'],
  ];

  const designNote = fields.design
    ? `<h3 style="font:600 14px system-ui;margin:24px 0 8px">Design tool configuration</h3>
       <pre style="font:12px ui-monospace,monospace;white-space:pre-wrap;background:#f4f4f5;padding:12px;border-radius:6px;margin:0">${e(
         fields.design,
       )}</pre>`
    : '';

  const html = `<!doctype html><html><body style="font:14px/1.6 system-ui,-apple-system,sans-serif;color:#111">
  <h2 style="font:600 18px system-ui;margin:0 0 4px">Quotation request</h2>
  <p style="margin:0 0 20px;color:#666">${e(fields.product!)} — ${e(fields.quantity!)} — ${e(
    fields.country!,
  )}</p>
  <table style="border-collapse:collapse;width:100%;max-width:640px">
    ${rows
      .map(
        ([k, v]) =>
          `<tr><th style="text-align:left;padding:7px 12px 7px 0;border-bottom:1px solid #eee;width:150px;font:600 13px system-ui;color:#555">${e(
            k,
          )}</th><td style="padding:7px 0;border-bottom:1px solid #eee">${e(v)}</td></tr>`,
      )
      .join('')}
  </table>
  ${
    fields.message
      ? `<h3 style="font:600 14px system-ui;margin:24px 0 8px">Message</h3><p style="white-space:pre-wrap;margin:0">${e(
          fields.message,
        )}</p>`
      : ''
  }
  ${designNote}
  ${
    uploads.length
      ? `<p style="margin:24px 0 0;color:#666;font-size:13px">${uploads.length} artwork file(s) attached: ${uploads
          .map((f) => e(f.name))
          .join(', ')}</p>`
      : '<p style="margin:24px 0 0;color:#666;font-size:13px">No artwork attached.</p>'
  }
  ${
    isFreeEmailHost(fields.email!)
      ? '<p style="margin:16px 0 0;color:#92400e;font-size:12px">Sender used a personal email domain.</p>'
      : ''
  }
</body></html>`;

  const text = [
    'Quotation request',
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    fields.message ? `Message:\n${fields.message}` : 'No message.',
    fields.design ? `\nDesign configuration:\n${fields.design}` : '',
    uploads.length ? `\n${uploads.length} artwork file(s) attached.` : '\nNo artwork attached.',
  ].join('\n');

  const attachments = await Promise.all(
    uploads.map(async (file) => ({
      filename: safeAttachmentName(file.name),
      content: Buffer.from(await file.arrayBuffer()),
      // Never let the browser-reported type drive how the attachment is served.
      contentType: 'application/octet-stream',
    })),
  );

  try {
    await transporter.sendMail({
      // The From address is always ours. The visitor's address goes in Reply-To,
      // which keeps SPF and DKIM valid and closes the header-injection route.
      from: `"${SMTP_FROM_NAME ?? BRAND.name}" <${SMTP_FROM_EMAIL ?? BRAND.email}>`,
      to: String(SMTP_TO ?? BRAND.email),
      replyTo: `"${fields.name!.replace(/"/g, '')}" <${fields.email}>`,
      subject: `Quote request — ${fields.product} — ${fields.country}`,
      text,
      html,
      attachments,
    });
  } catch (error) {
    console.error('[quote] send failed:', error);
    return failed(
      request,
      {
        form: `Your request could not be sent. Please try again, or email ${BRAND.email}.`,
      } satisfies Errors,
      502,
    );
  }

  return succeeded(request);
};

/** Anything other than POST is not a valid way to reach this endpoint. */
export const GET: APIRoute = () =>
  new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
