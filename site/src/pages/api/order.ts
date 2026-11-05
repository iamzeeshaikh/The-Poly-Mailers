/** Orders from /checkout/. Every line is re-priced here from src/lib/order.ts
 *  and the product catalog, so a tampered browser can never change what an
 *  order costs. The office gets the order (subject leads with the payment
 *  method); the buyer gets a confirmation copy. Spam signals only LABEL the
 *  email ("[Possible spam]"), they never refuse an order: the owner's rule is
 *  that no lead is ever dropped. Google's Storebot test orders are labelled
 *  the same way and go through like any other order. */
import type { APIRoute } from 'astro';
import { productBySlug } from '~/data/products';
import { sendMail, smtpConfigured } from '~/lib/mail';
import { BRAND, SITE_URL } from '~/lib/site';
import {
  UNIT_PRICE, ORDER_PREFIX, normalizeQty, lineTotal, money, SHIP_COUNTRIES, COD_COUNTRIES, PAYMENT_METHODS,
} from '~/lib/order';

export const prerender = false;

/** Packaging sites send every lead and order to exactly these two inboxes. */
const RECIPIENTS = ['dev@zeecustomboxes.com', 'shanimazhar82@gmail.com'];
const MAX_UPLOAD_BYTES = 12 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(['pdf', 'ai', 'eps', 'svg', 'psd', 'jpg', 'jpeg', 'png', 'webp', 'gif', 'tif', 'tiff', 'zip']);
const MAX_LINES = 30;

const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const clean = (value: unknown, limit = 2000) => String(value ?? '').replace(CONTROL_CHARS, '').trim().slice(0, limit);
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();
const isEmail = (value: string) => /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]{2,}$/.test(value);
const esc = (value: string) => value
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
const fail = (message: string, status: number) => json({ ok: false, error: message }, status);

function orderRef() {
  const now = new Date();
  const ymd = `${String(now.getUTCFullYear()).slice(2)}${String(now.getUTCMonth() + 1).padStart(2, '0')}${String(now.getUTCDate()).padStart(2, '0')}`;
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let tail = '';
  for (const byte of crypto.getRandomValues(new Uint8Array(4))) tail += alphabet[byte % alphabet.length];
  return `${ORDER_PREFIX}-${ymd}-${tail}`;
}

/** Soft per-instance rate limit: generous enough that a burst of Merchant
 *  Center test orders never trips it, tight enough to stop a script. */
const hits = new Map<string, number[]>();
const limited = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 40;
};

const CONTACT = `call ${BRAND.phoneDisplay} or email ${BRAND.email}`;

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail('We could not read the order. Please try again.', 400);
  }

  const v = {
    name: clean(form.get('name'), 120),
    company: clean(form.get('company'), 140),
    email: clean(form.get('email'), 160),
    phone: clean(form.get('phone'), 40),
    country: clean(form.get('country'), 2).toUpperCase(),
    address1: clean(form.get('address1'), 200),
    address2: clean(form.get('address2'), 200),
    city: clean(form.get('city'), 100),
    region: clean(form.get('region'), 60),
    postal: clean(form.get('postal'), 20),
    payment: clean(form.get('payment'), 12),
    notes: clean(form.get('notes'), 3000),
    honeypot: clean(form.get('company_website'), 200),
    submittedAt: Number(clean(form.get('submitted_at'), 20)),
    sourceUrl: clean(form.get('source_url'), 300),
    items: clean(form.get('items'), 8000),
  };

  if (!v.name) return fail('Please add your name.', 422);
  if (!isEmail(v.email)) return fail('Please add a valid email address.', 422);
  if (!v.phone) return fail('Please add a phone number.', 422);
  if (!v.address1 || !v.city || !v.postal) return fail('Please fill in the delivery address.', 422);
  const country = SHIP_COUNTRIES.find((entry) => entry.code === v.country);
  if (!country) return fail('Online orders ship to the United States, United Kingdom, Canada and Australia. Send a quote request for other countries.', 422);
  const method = PAYMENT_METHODS.find((entry) => entry.id === v.payment) ?? PAYMENT_METHODS[0];
  if (method.id === 'cod' && !COD_COUNTRIES.includes(country.code)) {
    return fail('Cash on delivery is available for addresses in the United States and Canada. Choose PayPal invoice or bank transfer.', 422);
  }

  // Never trust the browser's prices: rebuild every line from the catalog.
  let raw: unknown = [];
  try { raw = JSON.parse(v.items || '[]'); } catch { raw = []; }
  const lines = (Array.isArray(raw) ? raw : []).slice(0, MAX_LINES)
    .map((entry) => {
      const slug = clean((entry as { slug?: unknown })?.slug, 120);
      const qty = normalizeQty((entry as { qty?: unknown })?.qty);
      const product = productBySlug.get(slug);
      return product && qty ? { slug, name: product.name, url: `${SITE_URL}/${slug}/`, qty, total: lineTotal(qty) } : null;
    })
    .filter((line): line is NonNullable<typeof line> => Boolean(line));
  if (!lines.length) return fail('Your order is empty. Choose a poly mailer first.', 422);
  const total = Math.round(lines.reduce((sum, line) => sum + line.total, 0) * 100) / 100;
  const units = lines.reduce((sum, line) => sum + line.qty, 0);

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return fail(`Too many orders from this connection. Please ${CONTACT}.`, 429);

  // Spam signals label the email; they never refuse the order.
  const userAgent = request.headers.get('user-agent') || '';
  const spam: string[] = [];
  if (v.honeypot) spam.push('hidden field filled');
  if (v.submittedAt && Date.now() - v.submittedAt < 1500) spam.push('submitted under 1.5 seconds after the page loaded');
  if ((v.notes.match(/https?:\/\//gi) || []).length > 3) spam.push('more than three links in the notes');
  const storebot = /storebot-google/i.test(userAgent) || /@(?:[\w-]+\.)*joonix\.net$/i.test(v.email) || /@storebotmail\./i.test(v.email);
  if (storebot) spam.push('Google Merchant Center test order (Storebot)');
  const spamLine = spam.length ? `Spam check: ${spam.join('; ')}` : '';

  // Attachment: one artwork file, type- and size-checked; a bad file is dropped and noted, never a refusal.
  const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];
  let fileNote = '';
  const upload = form.get('artwork');
  if (upload && typeof upload !== 'string' && 'size' in upload && upload.size) {
    const file = upload as File;
    const safeName = file.name.replace(/[\r\n\\/]+/g, '-').replace(/[^\w.\- ()]/g, '').slice(0, 180) || 'artwork';
    const extension = safeName.split('.').pop()?.toLowerCase() || '';
    if (!ALLOWED_EXTENSIONS.has(extension)) fileNote = `Artwork file "${safeName}" was not attached: file type not accepted.`;
    else if (file.size > MAX_UPLOAD_BYTES) fileNote = `Artwork file "${safeName}" was not attached: over 12 MB.`;
    else attachments.push({ filename: safeName, content: Buffer.from(await file.arrayBuffer()), contentType: file.type || undefined });
  }

  const ref = orderRef();
  const address = [
    v.address1, v.address2,
    [v.city, v.region, v.postal].filter(Boolean).join(', '),
    country.name,
  ].filter(Boolean).join('\n');
  const payLine = method.id === 'cod'
    ? 'Cash on delivery: the customer pays when the mailers arrive'
    : `${method.name}: send the invoice after the customer approves the proof`;
  const itemText = lines.map((line) => `- ${line.name}: ${line.qty.toLocaleString('en-US')} units, ${money(line.total)}`).join('\n');
  const td = 'style="padding:7px 12px;border-bottom:1px solid #e2ddd3;font-family:Arial,sans-serif;font-size:14px"';
  const itemHtml = `<table style="border-collapse:collapse;max-width:760px">${lines
    .map((line) => `<tr><td ${td}><a href="${line.url}">${esc(line.name)}</a></td><td ${td}>${line.qty.toLocaleString('en-US')} units</td><td ${td} align="right">${money(line.total)}</td></tr>`)
    .join('')}<tr><td ${td}>Shipping</td><td ${td}></td><td ${td} align="right">Confirmed with the proof</td></tr><tr><th align="left" ${td}>Total (before shipping)</th><td ${td}></td><th ${td} align="right">${money(total)}</th></tr></table>`;

  const officeText = [
    `PAYMENT: ${payLine}`, spamLine, `Order ${ref}`, '', itemText,
    `Total: ${money(total)} for ${units.toLocaleString('en-US')} units at ${money(UNIT_PRICE)} per unit, shipping to be confirmed with the proof`, '',
    `Name: ${v.name}`, v.company ? `Business: ${v.company}` : '', `Email: ${v.email}`, `Phone: ${v.phone}`,
    '', 'Ship to:', address, '',
    v.notes ? `Notes: ${v.notes}` : '', fileNote, attachments.length ? `Attached: ${attachments.map((file) => file.filename).join(', ')}` : 'No artwork attached.',
    v.sourceUrl ? `Submitted from: ${v.sourceUrl}` : '', `Received: ${new Date().toISOString().replace('T', ' ').slice(0, 19)} UTC`,
    `Site: ${BRAND.domain}`,
  ].filter((entry) => entry !== '').join('\n');
  const officeHtml = `<div style="font-family:Arial,Helvetica,sans-serif;color:#171a20;line-height:1.5">
<p style="font-size:16px;background:#e9edfd;padding:10px 12px;margin:0 0 10px"><b>PAYMENT:</b> ${esc(payLine)}</p>
${spamLine ? `<p style="background:#fde3d8;padding:8px 12px;margin:0 0 10px">${esc(spamLine)}</p>` : ''}
<h2 style="margin:0 0 10px;font-size:19px">Order ${ref}</h2>
${itemHtml}
<p>${esc(v.name)}${v.company ? `<br>${esc(v.company)}` : ''}<br><a href="mailto:${esc(v.email)}">${esc(v.email)}</a><br>${esc(v.phone)}</p>
<p><b>Ship to</b><br>${esc(address).replace(/\n/g, '<br>')}</p>
${v.notes ? `<p><b>Notes</b><br>${esc(v.notes).replace(/\n/g, '<br>')}</p>` : ''}
${fileNote ? `<p style="color:#9f1d1d">${esc(fileNote)}</p>` : ''}
<p style="color:#5c6470;font-size:13px">${attachments.length ? `Attached: ${esc(attachments.map((file) => file.filename).join(', '))}` : 'No artwork attached.'}${v.sourceUrl ? ` · Submitted from ${esc(v.sourceUrl)}` : ''} · ${BRAND.domain}</p>
</div>`;

  const steps = [
    'We check your artwork and email a free digital proof. If a file or a dimension is missing we ask for it first.',
    'You approve the proof or ask for changes. Nothing runs before you approve. Shipping cost and the production schedule are confirmed with the proof.',
    method.detail,
    `Your mailers are counted by carton before dispatch and shipped to ${country.name}.`,
  ];
  const buyerText = [
    `Hi ${v.name},`, '', `Thank you for your order ${ref} with ${BRAND.name}.`, '', itemText, 'Shipping: confirmed with your proof',
    `Total before shipping: ${money(total)}`, `Payment: ${method.name}`, '', 'What happens next:',
    ...steps.map((step, index) => `${index + 1}. ${step}`), '', 'Ship to:', address, '',
    `Questions? Call ${BRAND.phoneDisplay} or reply to this email and quote your order number.`, BRAND.name,
  ].join('\n');
  const buyerHtml = `<div style="font-family:Arial,Helvetica,sans-serif;color:#171a20;font-size:15px;line-height:1.5">
<p>Hi ${esc(v.name)},</p><p>Thank you for your order <b>${ref}</b> with ${BRAND.name}.</p>
${itemHtml}<p><b>Payment:</b> ${esc(method.name)}</p>
<p><b>What happens next</b></p><ol>${steps.map((step) => `<li>${esc(step)}</li>`).join('')}</ol>
<p><b>Ship to</b><br>${esc(address).replace(/\n/g, '<br>')}</p>
<p>Questions? Call ${esc(BRAND.phoneDisplay)} or reply to this email and quote your order number.</p><p>${BRAND.name}</p></div>`;

  // ORDER_DRY_RUN=1 (local QA only) skips the SMTP send and still returns a real order number.
  if (process.env.ORDER_DRY_RUN === '1') {
    console.log('[order] dry run', ref, money(total), method.id, country.code, spamLine || 'clean');
    return json({ ok: true, ref, total, payment: method.id, dryRun: true });
  }

  if (!smtpConfigured()) {
    console.error('[order] SMTP not configured; order lost unless logged:', ref, officeText);
    return fail(`Our mail service is temporarily unavailable. Please ${CONTACT} and we will take the order by hand.`, 503);
  }

  try {
    await sendMail({
      to: RECIPIENTS,
      replyTo: `"${oneLine(v.name).replace(/"/g, '')}" <${oneLine(v.email)}>`,
      subject: oneLine(`${spam.length ? '[Possible spam] ' : ''}New order ${ref}: ${money(total)}, ${method.name} | ${BRAND.domain}`),
      text: officeText,
      html: officeHtml,
      attachments,
    });
  } catch (error) {
    console.error('[order] office send failed', ref, error);
    return fail(`We could not send your order just now. Please try again, or ${CONTACT}.`, 502);
  }

  // The buyer's copy is a courtesy; if it fails the order still stands.
  try {
    await sendMail({
      to: `"${oneLine(v.name).replace(/"/g, '')}" <${oneLine(v.email)}>`,
      replyTo: BRAND.email,
      subject: `Your order ${ref} with ${BRAND.name}`,
      text: buyerText,
      html: buyerHtml,
    });
  } catch (error) {
    console.error('[order] buyer copy failed', ref, error);
  }

  console.log('[order] accepted', ref, money(total), `${units} units`, method.id, country.code, spamLine || 'clean');
  return json({ ok: true, ref, total, payment: method.id });
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ ok: false, error: 'This endpoint accepts POST submissions from the checkout.' }), {
    status: 405,
    headers: { allow: 'POST', 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
