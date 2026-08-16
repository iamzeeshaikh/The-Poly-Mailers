# The Poly Mailers

Static Astro site for **thepolymailers.com** — custom poly mailer manufacturing
for the US, UK, Canada and Australia.

148 indexable pages, no CMS, no database, one server endpoint, no third-party
requests.

## Running it

```bash
npm install
npm run dev          # local development
npm run verify       # build + type check + content audit + regenerate reports
npm run qa           # Playwright browser QA (needs a built dist/)
npm run test:quote   # endpoint security tests against a throwaway SMTP server
npm run test:smtp    # live send through the real provider in .env
```

`npm run build` runs `astro build` and then prunes the unreferenced originals
that Astro's content-collection image pipeline emits.

Forms need SMTP credentials. Copy `.env.example` to `.env` — see
[`docs/14-environment-variables.md`](docs/14-environment-variables.md).

## Verified state

| Check | Result |
| --- | --- |
| `npm run build` | 150 HTML pages, 148 indexable, 0 errors |
| `astro check` | 0 errors, 0 warnings, 0 hints |
| `npm run audit` | 0 errors, 0 warnings across 150 built pages |
| `npm run qa` | 17 / 17 pass |
| `npm run test:quote` | 15 / 15 pass |
| `npm run test:smtp` | 2 / 2 pass — real enquiry delivered |
| Internal links | 1,466 contextual, 0 orphans, 0 broken, 0 generic anchors |
| Client JavaScript | 15.0 KB total across the whole site |

## How it is put together

```
src/
  data/          typed content — products, locations, industries, resources
  content/blog/  markdown articles with a typed frontmatter schema
  lib/           claims discipline, schema builders, validation contract
  components/    reusable UI
  views/         page views dispatched from the single root dynamic route
  pages/
    [slug].astro   one root route for products, collections and hubs
    api/quote.ts   the only server-rendered endpoint
scripts/         build, audit, QA and report generation
docs/            the deliverables below
```

Two decisions shape most of the rest:

**One root dynamic route.** Products, collections, capability pages and country
hubs all live at the root. Separate `[product]`, `[collection]`, `[country]`
routes would compete for the same URL pattern, so a single `[slug].astro`
dispatches to a view component, with a build-time guard that throws on a
duplicate slug.

**Claims cannot be typed in.** `SpecRow` in `src/lib/claims.ts` has `options[]`
and `note` — and no `value` field. A fabricated gauge, percentage or lead time
has nowhere to go in the content model. The content audit then re-checks the
built HTML for the same thing.

## Deliverables

| # | Document |
| ---: | --- |
| — | [Source audit, keyword map and architecture](docs/01-audit-and-architecture.md) |
| 1 | [Page inventory](docs/02-page-inventory.md) |
| 2 | [Product inventory — all 29 URLs](docs/03-product-inventory.md) |
| 3 | [Blog inventory](docs/04-blog-inventory.md) |
| 4 | [Resource inventory](docs/05-resource-inventory.md) |
| 5 | [Industry inventory](docs/06-industry-inventory.md) |
| 6 | [Country and location inventory](docs/06b-location-inventory.md) |
| 7 | [Metadata audit](docs/07-metadata-audit.md) |
| 8 | [Schema inventory](docs/08-schema-inventory.md) |
| 9 | [Image report](docs/09-image-report.md) |
| 10 | [Internal link audit](docs/10-internal-link-audit.md) |
| 11 | [Build and performance report](docs/11-build-and-performance.md) |
| 12 | [Accessibility report](docs/12-accessibility-report.md) |
| 13 | [Form and upload test report](docs/13-form-and-upload-tests.md) |
| 14 | [Environment variables still to configure](docs/14-environment-variables.md) |
| 15 | [Unverified specifications and open items](docs/15-open-items.md) |
| 16 | [Security review](docs/16-security-review.md) |

Documents 1–11 are generated from the built output by `npm run reports`, so they
describe what shipped rather than what was intended.

## Deploying

Vercel, static output with one serverless function for `/api/quote/`.
`vercel.json` carries the response headers, the immutable cache rules for
`/fonts/` and `/_astro/`, and a `no-store` + `noindex` rule for `/api/`.

Set the SMTP variables in Project → Settings → Environment Variables before the
first production deploy, or the forms will validate and then decline to send.
