#!/usr/bin/env node
/**
 * Live SMTP check. Unlike `test-quote-endpoint.mjs`, which captures mail with a
 * throwaway local server, this one talks to the real provider using the values
 * in `.env` and sends one genuine message to SMTP_TO.
 *
 * It runs in two stages so a failure says which half is wrong:
 *
 *   1. Authenticate against the host. Proves SMTP_HOST, SMTP_PORT, SMTP_USER
 *      and SMTP_PASS without sending anything.
 *   2. POST a real submission through the shipped endpoint, so the message that
 *      arrives is the one a visitor's enquiry would produce — not a synthetic
 *      one written by this script.
 *
 * Nothing here is imported by the site. Run it with `npm run test:smtp`.
 */

import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import net from 'node:net';
import nodemailer from 'nodemailer';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/* ---------------------------- env ---------------------------------- */

const env = {};
try {
  const raw = await readFile(path.join(ROOT, '.env'), 'utf8');
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
    if (m) env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
} catch {
  console.error('No .env file found. Copy .env.example to .env and fill it in.');
  process.exit(1);
}

const missing = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'].filter((k) => !env[k]);
if (missing.length) {
  console.error(`\nCannot run: ${missing.join(', ')} ${missing.length === 1 ? 'is' : 'are'} empty in .env.\n`);
  if (missing.includes('SMTP_PASS') && /gmail\.com$/.test(env.SMTP_HOST ?? '')) {
    console.error('For Gmail this must be a 16-character App Password, not the account');
    console.error('password. Generate one at https://myaccount.google.com/apppasswords');
    console.error('(2-Step Verification must be on for the option to appear).\n');
  }
  process.exit(1);
}

const results = [];
const pass = (name, detail) => results.push({ ok: true, name, detail });
const fail = (name, detail) => results.push({ ok: false, name, detail });

/* --------------------- stage 1: authenticate ------------------------ */

const port = Number(env.SMTP_PORT);
const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port,
  secure: port === 465,
  auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
});

try {
  await transporter.verify();
  pass('authentication', `${env.SMTP_USER} accepted by ${env.SMTP_HOST}:${port}`);
} catch (err) {
  fail('authentication', err.message);
  report();
  if (/username and password not accepted|invalid login|535/i.test(err.message)) {
    console.error('Gmail rejects normal account passwords over SMTP. Use an App Password.\n');
  }
  process.exit(1);
}

/* ------------------ stage 2: send through the endpoint --------------- */

const freePort = await new Promise((resolve) => {
  const s = net.createServer();
  s.listen(0, () => {
    const { port: p } = s.address();
    s.close(() => resolve(p));
  });
});

/* Astro 7 daemonises `astro dev`, so a killed child leaves the server running
   and the next run refuses to bind. Stop any survivor before starting, and stop
   this one on the way out however the script exits. */
const stopDaemon = () =>
  new Promise((resolve) => {
    const s = spawn('npx', ['astro', 'dev', 'stop'], { cwd: ROOT, stdio: 'ignore' });
    s.on('exit', resolve);
    s.on('error', resolve);
  });

await stopDaemon();
process.on('exit', () => spawn('npx', ['astro', 'dev', 'stop'], { cwd: ROOT, stdio: 'ignore' }));

const server = spawn('npx', ['astro', 'dev', '--port', String(freePort)], {
  cwd: ROOT,
  env: { ...process.env, ...env },
  stdio: ['ignore', 'pipe', 'pipe'],
});

const origin = `http://localhost:${freePort}`;
const serverLog = [];
server.stdout.on('data', (d) => serverLog.push(String(d)));
server.stderr.on('data', (d) => serverLog.push(String(d)));

const ready = async () => {
  for (let i = 0; i < 120; i++) {
    try {
      const r = await fetch(`${origin}/`);
      if (r.ok) return true;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
};

if (!(await ready())) {
  fail('dev server', `did not start on ${origin}\n${serverLog.join('')}`);
  server.kill();
  report();
  process.exit(1);
}

const stamp = new Date().toISOString();
const body = new FormData();
body.set('name', 'Deliverability check');
body.set('email', env.SMTP_TO || env.SMTP_USER);
body.set('company', 'The Poly Mailers');
body.set('phone', '+44 7458 651107');
body.set('country', 'United States');
body.set('product', '10x13 Poly Mailers');
body.set('quantity', '1,000 – 5,000');
body.set('message', `Live SMTP verification sent at ${stamp}. If this arrived, the quote form works end to end.`);
body.set('consent', 'yes');
body.set('company_url', '');
body.set('started_at', String(Date.now() - 30_000));

let res;
try {
  res = await fetch(`${origin}/api/quote/`, {
    method: 'POST',
    body,
    headers: { origin },
    redirect: 'manual',
  });
} catch (err) {
  fail('endpoint', err.message);
  server.kill();
  report();
  process.exit(1);
}

const text = await res.text().catch(() => '');
if (res.status === 200 || res.status === 303) {
  pass('endpoint send', `HTTP ${res.status} — message accepted and handed to ${env.SMTP_HOST}`);
} else {
  fail('endpoint send', `HTTP ${res.status} ${text.slice(0, 400)}`);
}

const rewritten = serverLog.join('').match(/from address/i);
if (rewritten) fail('from address', 'the provider objected to SMTP_FROM_EMAIL');

server.kill();
await stopDaemon();

report();

function report() {
  console.log('');
  for (const r of results) {
    console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}`);
    console.log(`      ${r.detail}`);
  }
  const bad = results.filter((r) => !r.ok).length;
  console.log(`\n${results.length - bad} passed, ${bad} failed.`);
  if (!bad) {
    console.log(`\nCheck ${env.SMTP_TO || env.SMTP_USER} for a message from`);
    console.log(`"${env.SMTP_FROM_NAME}" <${env.SMTP_FROM_EMAIL}>.`);
    console.log('');
    console.log('If the From address shows as ' + env.SMTP_USER + ' instead, Gmail rewrote');
    console.log('it because ' + (env.SMTP_FROM_EMAIL ?? '') + ' is not a verified send-as alias.');
    console.log('See docs/14-environment-variables.md.');
  }
  console.log('');
}
