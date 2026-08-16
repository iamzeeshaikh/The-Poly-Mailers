# Security review

The site is static HTML with one server endpoint. That shape removes most of the
attack surface a conventional CMS carries — there is no database, no admin
login, no session, no user-generated content stored anywhere, and no plugin
system. What remains is the form endpoint and the headers.

## Attack surface

| Surface | Exposure | Control |
| --- | --- | --- |
| 148 static pages | None beyond content | Prerendered at build; no server execution per request |
| `POST /api/quote/` | The only writable endpoint | Layered validation, tested in `npm run test:quote` |
| File uploads | Attachments to a notification email | Never written to disk, never given a URL |
| Static assets | Cacheable, content-hashed | Immutable caching, no upload path |

## Verified controls

All 15 assertions below are executed by `npm run test:quote` against a running
server with a live SMTP capture. See `docs/13-form-and-upload-tests.md`.

### Request-level

* **Method restriction** — anything other than POST returns 405 with `Allow`.
* **Same-origin enforcement** — Astro's origin check rejects cross-site form
  POSTs with 403 before the handler runs. Verified with an attacker origin.
* **Rate limiting** — five submissions per client address per ten minutes,
  returning 429. In-memory and therefore per instance; see the caveat below.

### Input

* **Server-side validation of every field**, importing the same rules the
  browser uses so the two cannot diverge.
* **Allow lists** for country, product and quantity. A value outside the list is
  rejected rather than passed through into an email.
* **Length caps** on every free-text field.
* **Header-injection rejection** — CR, LF, U+2028 and U+2029 in name or email
  are refused before any message is constructed.
* **Consent required**, checked server-side rather than trusted from the client.

### Uploads

Three independent checks, all of which must pass:

1. Extension on the allow list.
2. Reported MIME type on that extension's allow list.
3. Leading bytes matching a known signature for the claimed format.

SVG is parsed rather than sniffed: it must open as XML or `<svg>`, and is
rejected if it contains a `<script>` element, an inline event handler, or a
`javascript:` URL.

Limits are 12 MB per file, 24 MB total, 3 files.

**Files are never written to disk and never given a public URL.** They exist in
memory only long enough to be attached to the notification email, under a
randomised filename with a generic `application/octet-stream` content type. This
eliminates the upload-path class of vulnerabilities rather than mitigating it —
there is no path to traverse and no file to request.

### Output

* Every user-supplied value is HTML-escaped before entering the email body.
* The plain-text alternative carries values literally, which is correct: it is
  not markup.
* The `From` address is always ours and the enquirer's address goes in
  `Reply-To`, which keeps SPF and DKIM valid and removes the header-injection
  route structurally.
* Error responses never reveal which environment variable is missing or what the
  server-side failure was.

## Response headers

Set in `vercel.json` and applied to every response:

| Header | Value |
| --- | --- |
| `Content-Security-Policy` | `default-src 'self'` with no external origins permitted at all; `frame-ancestors 'none'`; `object-src 'none'`; `base-uri 'self'`; `form-action 'self'`; `upgrade-insecure-requests` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Every sensitive feature denied; only `fullscreen` allowed to self |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `X-DNS-Prefetch-Control` | `off` |

The CSP permits no external hosts because the site loads none. Adding any
third-party script requires an explicit CSP change, which is the intended
friction rather than an oversight.

`'unsafe-inline'` is present for `script-src` and `style-src`. Astro inlines a
small bootstrap script and scoped component styles; removing it would require
nonce or hash generation at the edge, which the static output cannot do. Given
that no external origin can load and no user content is rendered as HTML, the
residual risk is low — but it is a real deviation from a strict CSP and is
recorded here rather than glossed over.

## Secrets

* No credential appears in the repository. `.env` is git-ignored, `.env.example`
  contains placeholders only.
* SMTP values are read server-side inside the endpoint and never reach the
  browser.
* No API key is stored in a settings file, a permission rule or any client
  script.

## Dependencies

`npm audit` reports three high-severity findings, all the same root cause: a
ReDoS advisory in `path-to-regexp`, reached through `@vercel/routing-utils`
inside `@astrojs/vercel`.

**Assessment: not exploitable in this deployment.** The package parses route
patterns from the Astro config during the build. It is not part of the deployed
static output and not part of the serverless function, and it never sees a value
derived from a request.

The advertised fix downgrades `@astrojs/vercel` from 11.x to 8.x, which is both
a breaking change and an older adapter. Not taken. Worth revisiting when the
adapter ships a patched dependency.

Runtime dependencies are Astro, its sitemap integration, the Vercel adapter,
nodemailer and sharp. There is no client-side framework and no analytics,
advertising or tag-management code.

## Residual risks

1. **Rate limiting is per instance.** A serverless deployment runs several, so
   the effective limit is higher than five per ten minutes. The layered
   validation is what actually protects the endpoint; move the limiter to a
   shared store if a hard guarantee is needed.
2. **`'unsafe-inline'` in the CSP**, as described above.
3. **Mail deliverability is unconfigured.** Until SPF, DKIM and DMARC are
   published for the sending domain, the From address can be spoofed by others,
   which is a domain-reputation risk rather than a site vulnerability.
4. **No independent penetration test.** Everything here is self-assessed and
   test-covered, which is not the same as having been attacked by someone trying.
