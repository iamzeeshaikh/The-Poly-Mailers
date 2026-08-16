# Form and upload test report

Two independent test suites cover the quote form: one in a real browser
(`npm run qa`) and one against the live endpoint with a throwaway SMTP server
(`npm run test:quote`). Both pass with zero failures.

## Endpoint tests — 15 checks, 0 failures

Run against `astro dev` with a minimal SMTP listener capturing delivered mail,
so every assertion is about what actually left the server rather than what the
code appears to do.

| Check | Result |
| --- | --- |
| `GET /api/quote/` | 405 with an `Allow: POST` header |
| Cross-origin POST | Refused with 403 before the handler runs; nothing sent |
| Valid submission | 200, redirect to `/thank-you/`, exactly one message delivered |
| Mail headers | `From` is ours, `Reply-To` is the enquirer, `To` is the sales inbox |
| Server-side validation | Invalid email and missing consent both rejected with per-field errors |
| Allow lists | A country and product outside the permitted lists are rejected, not passed through |
| Header injection | CR/LF in name and email rejected before any mail is constructed |
| Honeypot | Answered as success, nothing delivered |
| Timing trap | A submission faster than a human could type is discarded silently |
| Upload magic bytes | An executable renamed `.pdf` is rejected on content, not extension |
| Upload accepted | A genuine PDF is attached under a randomised filename |
| SVG sanitisation | An SVG containing a `<script>` element is refused |
| SVG accepted | A script-free SVG is accepted |
| Output escaping | HTML in the message is escaped in the HTML part of the email |
| Rate limiting | Repeated submissions from one address are throttled with 429 |

## Browser tests — form-specific results

| Check | Result |
| --- | --- |
| Empty submission | 7 inline errors, 7 fields marked `aria-invalid`, no navigation |
| Recovery after failure | Entered values preserved; focus moves to the offending field |
| Honeypot in the DOM | Present, `aria-hidden`, clipped, `tabindex="-1"` |
| Client-side upload validation | A disallowed extension is rejected before submission |

## Layered defences

Validation is deliberately duplicated. The browser gives immediate feedback; the
server assumes the browser was bypassed entirely.

**Both sides import the same rules** from `src/lib/quote.ts`, so client and
server can never diverge on what is acceptable.

### Spam

* **Honeypot** — a `company_url` field, visually clipped, `aria-hidden`, removed
  from the tab order. A submission that fills it receives a success response and
  is discarded, so a bot learns nothing from the reply.
* **Timing trap** — a hidden timestamp set on page load. Anything submitted in
  under three seconds is treated the same way.
* **Rate limiting** — five submissions per address per ten minutes.

### Uploads

Three independent checks, all of which must pass:

1. The extension is on the allow list (`pdf`, `ai`, `eps`, `psd`, `svg`, `png`,
   `jpg`, `jpeg`).
2. The reported MIME type is on that extension's allow list.
3. The leading bytes match a known signature for the claimed format.

SVG has no binary signature, so it is parsed instead: it must open with an XML
declaration or an `<svg>` element, and is refused if it contains a `<script>`
element, an inline event-handler attribute, or a `javascript:` URL.

Limits: 12 MB per file, 24 MB total, 3 files.

Accepted files are held in memory only long enough to be attached to the
notification email. **Nothing is written to disk and nothing is given a public
URL**, which removes the entire class of upload-path vulnerabilities rather than
mitigating it. Attachments carry a randomised filename and a generic
`application/octet-stream` content type, so a browser-reported type can never
influence how the attachment is handled.

### Injection

* Name and email are rejected outright if they contain CR, LF, U+2028 or U+2029.
* The `From` address is always ours; the enquirer's address goes in `Reply-To`.
  This keeps SPF and DKIM valid and closes the header-injection route by design
  rather than by filtering.
* Every user-supplied value is HTML-escaped before entering the email body.
* Astro's same-origin check rejects cross-site form POSTs with 403.

### Failure handling

If SMTP is not configured, the endpoint logs the misconfiguration server-side
and returns a polite failure that names the email address instead. It never
tells the browser which variable is missing.

## Not tested

Delivery against a real SMTP provider, because no credentials were supplied. The
transport code is standard nodemailer and the message construction is verified,
but SPF, DKIM and DMARC alignment can only be confirmed once the real host,
credentials and sending domain exist. See `docs/14-environment-variables.md`.
