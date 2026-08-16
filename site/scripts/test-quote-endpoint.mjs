#!/usr/bin/env node
/**
 * End-to-end test of the quote endpoint against a throwaway local SMTP server.
 *
 * Starts a minimal SMTP listener, points the dev server's environment at it,
 * posts a series of good and hostile requests, and asserts on what the server
 * accepts, what it rejects, and what actually lands in the mailbox.
 *
 * Usage: node scripts/test-quote-endpoint.mjs
 */

import { createServer } from 'node:net';
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const SMTP_PORT = 2599;
const DEV_PORT = 4623;

const received = [];
const results = [];
const pass = (name, detail = '') => results.push({ ok: true, name, detail });
const fail = (name, detail) => results.push({ ok: false, name, detail });

/* ------------------------------------------------------------------ *
 * A minimal SMTP server. Enough of the protocol for nodemailer to
 * complete a session and hand us the message.
 * ------------------------------------------------------------------ */

const smtp = createServer((socket) => {
  let buffer = '';
  let inData = false;
  let message = '';

  socket.write('220 localhost ESMTP test\r\n');

  socket.on('data', (chunk) => {
    buffer += chunk.toString('utf8');

    while (true) {
      if (inData) {
        const end = buffer.indexOf('\r\n.\r\n');
        if (end === -1) return;
        message += buffer.slice(0, end);
        buffer = buffer.slice(end + 5);
        inData = false;
        received.push(message);
        message = '';
        socket.write('250 OK queued\r\n');
        continue;
      }

      const nl = buffer.indexOf('\r\n');
      if (nl === -1) return;
      const line = buffer.slice(0, nl);
      buffer = buffer.slice(nl + 2);
      const cmd = line.split(' ')[0].toUpperCase();

      if (cmd === 'EHLO' || cmd === 'HELO') {
        socket.write('250-localhost\r\n250-AUTH PLAIN LOGIN\r\n250 SIZE 52428800\r\n');
      } else if (cmd === 'AUTH') {
        socket.write('235 authenticated\r\n');
      } else if (cmd === 'MAIL' || cmd === 'RCPT') {
        socket.write('250 OK\r\n');
      } else if (cmd === 'DATA') {
        inData = true;
        socket.write('354 send data\r\n');
      } else if (cmd === 'QUIT') {
        socket.write('221 bye\r\n');
        socket.end();
        return;
      } else {
        socket.write('250 OK\r\n');
      }
    }
  });

  socket.on('error', () => {});
});

await new Promise((resolve) => smtp.listen(SMTP_PORT, '127.0.0.1', resolve));

/* ------------------------------------------------------------------ *
 * Dev server with the endpoint live
 * ------------------------------------------------------------------ */

const dev = spawn(
  'npx',
  ['astro', 'dev', '--port', String(DEV_PORT), '--host', '127.0.0.1'],
  {
    cwd: process.cwd(),
    env: {
      ...process.env,
      SMTP_HOST: '127.0.0.1',
      SMTP_PORT: String(SMTP_PORT),
      SMTP_USER: 'test',
      SMTP_PASS: 'test',
      SMTP_TO: 'info@thepolymailers.com',
      SMTP_FROM_NAME: 'The Poly Mailers',
      SMTP_FROM_EMAIL: 'info@thepolymailers.com',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  },
);

let devLog = '';
dev.stdout.on('data', (d) => (devLog += d.toString()));
dev.stderr.on('data', (d) => (devLog += d.toString()));

// Wait for the dev server to answer.
const base = `http://127.0.0.1:${DEV_PORT}`;
let up = false;
for (let i = 0; i < 60; i++) {
  await sleep(500);
  try {
    const r = await fetch(`${base}/api/quote/`, { method: 'GET' });
    if (r.status === 405) {
      up = true;
      break;
    }
  } catch {
    /* not up yet */
  }
}

if (!up) {
  console.error('Dev server did not start.\n', devLog.slice(-2000));
  process.exit(1);
}
pass('endpoint method guard', 'GET /api/quote/ returns 405 with an Allow header');

/* ------------------------------------------------------------------ */

const form = (overrides = {}, files = []) => {
  const fd = new FormData();
  const base = {
    name: 'Alex Buyer',
    email: 'alex@examplebrand.com',
    phone: '+44 7700 900123',
    country: 'United Kingdom',
    product: '10x13 Poly Mailers',
    size: '10x13',
    quantity: '5,000 – 10,000',
    message: 'We ship folded tees with a card and a returns slip.',
    consent: 'yes',
    source: '/request-a-quote/',
    started_at: String(Date.now() - 30_000),
  };
  for (const [k, v] of Object.entries({ ...base, ...overrides })) {
    if (v !== null) fd.append(k, v);
  }
  for (const f of files) fd.append('artwork', f.blob, f.name);
  return fd;
};

/**
 * Astro enforces a same-origin check on form POSTs to server routes, so a
 * request without a matching Origin header is refused before our handler runs.
 * A real browser sends one; this test has to supply it explicitly.
 */
let client = 0;
/**
 * The enhanced (JavaScript) path. `Accept: application/json` is what tells the
 * endpoint to answer with a payload rather than redirecting a browser, so it
 * belongs in the request the same way the real form sends it.
 */
const post = (fd, ip) =>
  fetch(`${base}/api/quote/`, {
    method: 'POST',
    body: fd,
    headers: {
      origin: base,
      accept: 'application/json',
      // A distinct address per case, so the suite does not trip its own
      // rate limiter. One case below deliberately reuses a single address.
      'x-forwarded-for': ip ?? `203.0.113.${++client}`,
    },
  });

/** A plain browser form POST — no JavaScript, so no Accept negotiation. */
const postAsBrowser = (fd, ip) =>
  fetch(`${base}/api/quote/`, {
    method: 'POST',
    body: fd,
    redirect: 'manual',
    headers: {
      origin: base,
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'x-forwarded-for': ip ?? `203.0.113.${++client}`,
    },
  });

/* 0. Cross-origin POSTs are refused before the handler runs. */
{
  const before = received.length;
  const res = await fetch(`${base}/api/quote/`, {
    method: 'POST',
    body: form(),
    headers: { origin: 'https://attacker.example' },
  });
  await sleep(400);
  if (res.status >= 400 && received.length === before) {
    pass('csrf origin check', `cross-origin POST refused with ${res.status}, nothing sent`);
  } else {
    fail('csrf origin check', `status ${res.status}, delivered ${received.length - before}`);
  }
}

/* 1. A valid submission is accepted and delivered. */
{
  const before = received.length;
  const res = await post(form());
  const body = await res.json();
  await sleep(600);
  if (res.status === 200 && body.ok && body.redirect === '/thank-you/' && received.length === before + 1) {
    pass('valid submission', 'accepted, redirected to /thank-you/, one message delivered');
  } else {
    fail('valid submission', `status ${res.status} body ${JSON.stringify(body)} delivered ${received.length - before}`);
  }
}

/* 2. The delivered message is addressed correctly and escapes user input. */
{
  const msg = received.at(-1) ?? '';
  // Nodemailer omits quotes around a display name that needs none, so the
  // assertion checks the parts rather than one exact serialisation.
  const fromOk = /From: "?The Poly Mailers"? <info@thepolymailers\.com>/.test(msg);
  const replyOk = /Reply-To:.*alex@examplebrand\.com/.test(msg);
  const toOk = /To: info@thepolymailers\.com/.test(msg);
  if (fromOk && replyOk && toOk) {
    pass('mail headers', 'From is ours, Reply-To is the enquirer, To is the sales inbox');
  } else {
    const fromLine = msg.split(/\r?\n/).find((l) => l.startsWith('From:')) ?? '(no From line)';
    fail('mail headers', `from:${fromOk} replyTo:${replyOk} to:${toOk} — ${fromLine}`);
  }
}

/* 3. Server-side validation rejects a bad payload even though the client
      would have caught it first. */
{
  const res = await post(form({ email: 'not-an-email', consent: null }));
  const body = await res.json();
  if (res.status === 422 && body.errors?.email && body.errors?.consent) {
    pass('server validation', 'invalid email and missing consent both rejected with field errors');
  } else {
    fail('server validation', `status ${res.status} body ${JSON.stringify(body)}`);
  }
}

/* 4. Values outside the allow lists are rejected rather than passed through. */
{
  const res = await post(form({ country: 'Freedonia', product: 'Anything I Like' }));
  const body = await res.json();
  if (res.status === 422 && body.errors?.country && body.errors?.product) {
    pass('allow lists', 'country and product outside the permitted lists are rejected');
  } else {
    fail('allow lists', `status ${res.status} body ${JSON.stringify(body)}`);
  }
}

/* 5. Header injection through the name and email fields. */
{
  const res = await post(
    form({
      name: 'Attacker\r\nBcc: victim@example.com',
      email: 'a@b.com\nBcc: victim@example.com',
    }),
  );
  const body = await res.json();
  if (res.status === 422 && body.errors?.name && body.errors?.email) {
    pass('header injection', 'CR/LF in name and email rejected before any mail is built');
  } else {
    fail('header injection', `status ${res.status} body ${JSON.stringify(body)}`);
  }
}

/* 6. Honeypot: silently accepted, never delivered. */
{
  const before = received.length;
  const res = await post(form({ company_url: 'http://spam.example' }));
  const body = await res.json();
  await sleep(500);
  if (res.status === 200 && body.ok && received.length === before) {
    pass('honeypot', 'bot submission answered as success but nothing was sent');
  } else {
    fail('honeypot', `status ${res.status} delivered ${received.length - before}`);
  }
}

/* 7. Timing trap. */
{
  const before = received.length;
  const res = await post(form({ started_at: String(Date.now() - 200) }));
  await sleep(400);
  if (res.status === 200 && received.length === before) {
    pass('timing trap', 'submission faster than a human is discarded silently');
  } else {
    fail('timing trap', `delivered ${received.length - before}`);
  }
}

/* 8. Upload validation: extension, MIME and magic bytes must all agree. */
{
  // An executable renamed to .pdf: extension allowed, content is not a PDF.
  const fakePdf = new Blob([new Uint8Array([0x4d, 0x5a, 0x90, 0x00])], {
    type: 'application/pdf',
  });
  const res = await post(form({}, [{ blob: fakePdf, name: 'payload.pdf' }]));
  const body = await res.json();
  if (res.status === 422 && /does not match the format/.test(body.errors?.artwork ?? '')) {
    pass('upload magic bytes', 'a non-PDF renamed to .pdf is rejected on content, not extension');
  } else {
    fail('upload magic bytes', `status ${res.status} body ${JSON.stringify(body)}`);
  }
}

{
  // A genuine PDF header is accepted.
  const realPdf = new Blob([new TextEncoder().encode('%PDF-1.7\n%artwork')], {
    type: 'application/pdf',
  });
  const before = received.length;
  const res = await post(form({}, [{ blob: realPdf, name: 'artwork.pdf' }]));
  await sleep(700);
  const msg = received.at(-1) ?? '';
  if (res.status === 200 && received.length === before + 1 && /artwork-[a-f0-9]{16}\.pdf/.test(msg)) {
    pass('upload accepted', 'a genuine PDF is attached under a randomised filename');
  } else {
    fail('upload accepted', `status ${res.status}, randomised name present: ${/artwork-[a-f0-9]{16}\.pdf/.test(msg)}`);
  }
}

{
  // An SVG carrying script must be refused.
  const nastySvg = new Blob(
    [new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>')],
    { type: 'image/svg+xml' },
  );
  const res = await post(form({}, [{ blob: nastySvg, name: 'logo.svg' }]));
  const body = await res.json();
  if (res.status === 422 && /scripting/.test(body.errors?.artwork ?? '')) {
    pass('svg sanitisation', 'an SVG containing a script element is refused');
  } else {
    fail('svg sanitisation', `status ${res.status} body ${JSON.stringify(body)}`);
  }
}

{
  // A clean SVG is accepted.
  const cleanSvg = new Blob(
    [new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10"/></svg>')],
    { type: 'image/svg+xml' },
  );
  const res = await post(form({}, [{ blob: cleanSvg, name: 'mark.svg' }]));
  if (res.status === 200) pass('svg accepted', 'a script-free SVG is accepted');
  else fail('svg accepted', `status ${res.status}`);
}

/* 9. HTML in the message must be escaped in the email body. */
{
  await sleep(400);
  const before = received.length;
  await post(form({ message: 'Hello <img src=x onerror=alert(1)> & "quoted"' }));
  await sleep(700);
  const msg = received.at(-1) ?? '';
  const decoded = msg
    .replace(/=\r?\n/g, '')
    .replace(/=([0-9A-F]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));

  // Only the HTML part needs escaping. The plain-text alternative is not
  // markup, so the literal string appearing there is correct rather than a
  // failure — checking the whole message would conflate the two.
  const htmlPart = decoded.slice(decoded.indexOf('Content-Type: text/html'));
  const escaped = htmlPart.includes('&lt;img');
  const rawInHtml = /<img src=x onerror/.test(htmlPart);

  if (received.length === before + 1 && escaped && !rawInHtml) {
    pass(
      'output escaping',
      'HTML in the message is escaped in the HTML part; the plain-text part carries it literally, as it should',
    );
  } else {
    fail('output escaping', `escapedInHtml:${escaped} rawInHtml:${rawInHtml}`);
  }
}

/* 10. Rate limiting. */
{
  let limited = false;
  for (let i = 0; i < 12; i++) {
    const res = await post(form({ message: `burst ${i}` }), '198.51.100.7');
    if (res.status === 429) {
      limited = true;
      break;
    }
  }
  if (limited) pass('rate limiting', 'repeated submissions from one connection are throttled with 429');
  else fail('rate limiting', 'no 429 after 12 rapid submissions');
}

/* Without JavaScript the browser posts the form itself and renders whatever
   comes back, so a success has to be a redirect to the thank-you page rather
   than a JSON payload nobody can read. */
{
  const before = received.length;
  const res = await postAsBrowser(form());
  const location = res.headers.get('location');
  if (res.status === 303 && location === '/thank-you/' && received.length === before + 1) {
    pass('no-js success', 'plain form POST answered with 303 to /thank-you/, and the mail was sent');
  } else {
    fail('no-js success', `status ${res.status}, location ${location}, ${received.length - before} sent`);
  }
}

/* And a failure has to be readable HTML, not an error object. There is no
   client-side validation on this path either, so a browser genuinely lands
   here. */
{
  const before = received.length;
  const res = await postAsBrowser(form({ email: 'not-an-email', consent: null }));
  const body = await res.text();
  const type = res.headers.get('content-type') ?? '';
  if (
    res.status === 422 &&
    type.includes('text/html') &&
    /Check the email address/.test(body) &&
    /noindex/.test(body) &&
    received.length === before
  ) {
    pass('no-js validation', 'plain form POST answered with a readable noindex HTML page; nothing sent');
  } else {
    fail('no-js validation', `status ${res.status}, type ${type}, ${body.slice(0, 160)}`);
  }
}

/* ------------------------------------------------------------------ */

dev.kill('SIGTERM');
smtp.close();

const failures = results.filter((r) => !r.ok);
console.log('\nQuote endpoint tests\n');
for (const r of results) {
  console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? `\n      ${r.detail}` : ''}`);
}
console.log(`\n${results.length - failures.length} passed, ${failures.length} failed.\n`);

process.exit(failures.length ? 1 : 0);
