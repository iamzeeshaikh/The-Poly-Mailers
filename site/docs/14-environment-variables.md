# Environment variables still to configure

The site builds, deploys and serves without any of these. What does not work
until they are set is **sending** the quote and contact forms — the endpoint
validates the submission correctly, then returns a polite failure naming the
email address instead, and logs the misconfiguration server-side.

`.env.example` in the project root carries the same list with inline notes.

## Required for the forms to send

| Variable | Example | Notes |
| --- | --- | --- |
| `SMTP_HOST` | `smtp.provider.com` | Hostname of the sending service |
| `SMTP_PORT` | `587` | 465 is treated as implicit TLS; anything else uses STARTTLS |
| `SMTP_USER` | — | Account or API user |
| `SMTP_PASS` | — | Password or API key |

## Recommended, with working defaults

| Variable | Default if unset | Notes |
| --- | --- | --- |
| `SMTP_TO` | `info@thepolymailers.com` | Where enquiries are delivered |
| `SMTP_FROM_NAME` | `The Poly Mailers` | Display name on the notification |
| `SMTP_FROM_EMAIL` | `info@thepolymailers.com` | **Must be an address the provider is authorised to send as** |

## Where to set them

Locally: copy `.env.example` to `.env`. That file is git-ignored.

On Vercel: Project → Settings → Environment Variables, for Production and
Preview. The endpoint is a serverless function, so the values are read at
request time and never reach the browser.

## Deliverability checklist

Setting the four required variables makes the form send. Making the mail arrive
reliably needs three more things, none of which is a code change:

1. **SPF** — publish a TXT record authorising your provider to send for
   `thepolymailers.com`.
2. **DKIM** — publish the provider's signing key.
3. **DMARC** — publish a policy record; start at `p=none` and monitor before
   tightening.

`SMTP_FROM_EMAIL` must be on the domain those records cover. If it is not, mail
will send and then land in spam, which is harder to diagnose than a failure.

## Deliberately absent

No analytics, advertising, tag-manager, consent-platform, chat-widget, CRM or
error-reporting variables exist, because the site loads none of those. It ships
with zero third-party requests.

Adding any of them means updating the `Content-Security-Policy` in
`vercel.json`, which currently permits no external origins at all. That is the
intended friction: a third-party script cannot be added by accident.

## Rate limiting at scale

The limiter in `src/pages/api/quote.ts` is in-memory and therefore per instance.
Across several serverless instances the effective limit is higher than the
configured five per ten minutes. It is a speed bump against scripted abuse, and
the layered validation is what actually protects the endpoint.

If a hard guarantee is needed, replace the `hits` map with a shared store
(Vercel KV, Upstash or similar). The interface is two functions and does not
touch the validation logic.

## Analytics, if it is wanted later

Nothing on the site depends on it. If it is added, prefer a provider that needs
no cookie banner, and remember the CSP will need a `script-src` and
`connect-src` entry for that origin.

## Google Search Console and Merchant Center

Neither is configured. Search Console verification is usually a DNS TXT record
or an HTML file in `public/`; either is trivial to add.

Merchant Center is not applicable: it requires product prices and availability,
and this is a quote-based business with neither. Submitting a feed would mean
inventing the data the rest of the site deliberately refuses to invent.
