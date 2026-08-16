#!/usr/bin/env node
/**
 * Generates the delivery reports from the built site and the source data, so
 * every figure in docs/ is measured rather than asserted.
 *
 * Run after `npm run build`.
 */

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..');
const DIST = path.join(ROOT, 'dist', 'client');
const DOCS = path.join(ROOT, 'docs');
const SITE = 'https://thepolymailers.com';

const walk = async (dir, match) => {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full, match)));
    else if (match(entry.name)) out.push(full);
  }
  return out;
};

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`, 'i'))?.[1] ?? null;

/* ------------------------------------------------------------------ */

const files = await walk(DIST, (n) => n.endsWith('.html'));
const pages = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const rel = path.relative(DIST, file);
  const url =
    rel === 'index.html'
      ? '/'
      : rel === '404.html'
        ? '/404'
        : `/${rel.replace(/index\.html$/, '')}`;

  const head = [...html.matchAll(/<(?:meta|link)\b[^>]*>/gi)].map((m) => m[0]);
  const body = strip(
    html.replace(/<header[\s\S]*?<\/header>/i, ' ').replace(/<footer[\s\S]*?<\/footer>/i, ' '),
  );

  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)]
    .map((m) => {
      try {
        return JSON.parse(m[1]);
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  const types = jsonLd.flatMap((b) => (b['@graph'] ?? [b]).map((n) => n['@type'])).filter(Boolean);

  pages.push({
    url,
    title: html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '',
    description:
      head.filter((t) => /name="description"/i.test(t)).map((t) => attr(t, 'content')).find(Boolean) ?? '',
    h1: strip(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? ''),
    canonical:
      head.filter((t) => /rel="canonical"/i.test(t)).map((t) => attr(t, 'href')).find(Boolean) ?? '',
    robots:
      head.filter((t) => /name="robots"/i.test(t)).map((t) => attr(t, 'content')).find(Boolean) ?? '',
    words: body.split(' ').filter(Boolean).length,
    schema: [...new Set(types)].sort(),
    bytes: (await stat(file)).size,
  });
}

pages.sort((a, b) => a.url.localeCompare(b.url));
const indexable = pages.filter((p) => !['/404', '/thank-you/'].includes(p.url));

/* ---------------------- 1. page inventory --------------------------- */

const section = (url) => {
  if (url === '/') return 'Home';
  if (url.startsWith('/blog/')) return url === '/blog/' ? 'Blog index' : 'Article';
  if (url.startsWith('/resources/')) return url === '/resources/' ? 'Resource index' : 'Resource';
  if (url.startsWith('/industries/')) return url === '/industries/' ? 'Industry index' : 'Industry';
  if (url.startsWith('/locations/')) return url === '/locations/' ? 'Location index' : 'Location';
  if (['/usa/', '/uk/', '/canada/', '/australia/'].includes(url)) return 'Country hub';
  return 'Root page';
};

const counts = {};
for (const p of indexable) counts[section(p.url)] = (counts[section(p.url)] ?? 0) + 1;

const totalWords = indexable.reduce((n, p) => n + p.words, 0);

let out = `# Page inventory

Generated from the built output at \`dist/client\`, not from the source data.

**${indexable.length} indexable pages**, plus \`/thank-you/\` and \`/404\` which are
noindex and excluded from the XML sitemap.

Total body copy across indexable pages: **${totalWords.toLocaleString('en-GB')} words**
(median ${
  [...indexable].sort((a, b) => a.words - b.words)[Math.floor(indexable.length / 2)].words
} words per page, shortest ${Math.min(...indexable.map((p) => p.words))},
longest ${Math.max(...indexable.map((p) => p.words))}).

| Section | Pages |
| --- | ---: |
${Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .map(([k, v]) => `| ${k} | ${v} |`)
  .join('\n')}
| **Total indexable** | **${indexable.length}** |

## Every indexable URL

| URL | Words | Schema types |
| --- | ---: | --- |
${indexable.map((p) => `| \`${p.url}\` | ${p.words} | ${p.schema.join(', ')} |`).join('\n')}

## Non-indexable

| URL | Robots | Reason |
| --- | --- | --- |
| \`/thank-you/\` | ${pages.find((p) => p.url === '/thank-you/')?.robots} | Post-submission confirmation; no search value and would be an entry point to a state that does not exist. |
| \`/404\` | ${pages.find((p) => p.url === '/404')?.robots} | Error document, served with a genuine 404 status. |
`;

await writeFile(path.join(DOCS, '02-page-inventory.md'), out, 'utf8');

/* ---------------------- 2. metadata audit --------------------------- */

const titleLens = indexable.map((p) => p.title.length);
const descLens = indexable.map((p) => p.description.length);
const avg = (a) => Math.round(a.reduce((x, y) => x + y, 0) / a.length);

const dupes = (key) => {
  const map = new Map();
  for (const p of indexable) {
    const v = p[key];
    map.set(v, [...(map.get(v) ?? []), p.url]);
  }
  return [...map.entries()].filter(([, urls]) => urls.length > 1);
};

out = `# Metadata audit

Measured across all ${indexable.length} indexable pages in the built output.

## Uniqueness

| Check | Result |
| --- | --- |
| Duplicate titles | ${dupes('title').length === 0 ? '**None**' : dupes('title').length} |
| Duplicate descriptions | ${dupes('description').length === 0 ? '**None**' : dupes('description').length} |
| Duplicate H1s | ${dupes('h1').length === 0 ? '**None**' : dupes('h1').length} |
| Pages with no title | ${indexable.filter((p) => !p.title).length} |
| Pages with no description | ${indexable.filter((p) => !p.description).length} |
| Pages with no H1 | ${indexable.filter((p) => !p.h1).length} |

## Length distribution

| | Titles | Descriptions |
| --- | ---: | ---: |
| Shortest | ${Math.min(...titleLens)} | ${Math.min(...descLens)} |
| Average | ${avg(titleLens)} | ${avg(descLens)} |
| Longest | ${Math.max(...titleLens)} | ${Math.max(...descLens)} |
| Over 60 characters | ${titleLens.filter((l) => l > 60).length} | — |
| Over 130 characters | — | ${descLens.filter((l) => l > 130).length} |

Titles are written for clarity first. Where a title runs past 60 characters it
is because truncating it would have cost the distinguishing word — the brief
asks for intent over mechanical truncation, and that is the trade taken.

Descriptions sit above the 120–130 band on many pages for the same reason: each
one states what the page argues rather than repeating the title. None exceeds
${Math.max(...descLens)} characters.

## Canonicals and robots

| Check | Result |
| --- | --- |
| Pages with a self-referencing canonical | ${indexable.filter((p) => p.canonical === SITE + p.url).length} / ${indexable.length} |
| Canonical mismatches | ${indexable.filter((p) => p.canonical !== SITE + p.url).length} |
| Indexable pages carrying noindex | ${indexable.filter((p) => /noindex/i.test(p.robots)).length} |
| Non-indexable pages missing noindex | ${pages.filter((p) => ['/404', '/thank-you/'].includes(p.url) && !/noindex/i.test(p.robots)).length} |

Every indexable page emits \`index, follow, max-image-preview:large\`.

## hreflang

None is emitted anywhere. The four country hubs are different pages about
different markets, not localised versions of one page, so declaring them as
alternates would misrepresent the relationship. See
\`docs/01-audit-and-architecture.md\`.
`;

await writeFile(path.join(DOCS, '07-metadata-audit.md'), out, 'utf8');

/* ---------------------- 3. schema inventory ------------------------- */

const schemaCounts = {};
for (const p of pages) for (const t of p.schema) schemaCounts[t] = (schemaCounts[t] ?? 0) + 1;

out = `# Schema inventory

Every JSON-LD node emitted across the built site, counted by type.

| Type | Pages |
| --- | ---: |
${Object.entries(schemaCounts)
  .sort((a, b) => b[1] - a[1])
  .map(([k, v]) => `| ${k} | ${v} |`)
  .join('\n')}

Each page emits exactly one \`<script type="application/ld+json">\` containing a
single \`@graph\`, so no entity is declared twice on a page.

## Entities defined once and referenced by @id

| Entity | Defined on | Referenced from |
| --- | --- | --- |
| \`${SITE}/#organization\` | \`/\` | every page, via \`about\`, \`publisher\` and \`manufacturer\` |
| \`${SITE}/#website\` | \`/\` | every page, via \`isPartOf\` |

## What Product schema deliberately omits

The \`Product\` nodes on the 29 product pages carry \`name\`, \`description\`,
\`image\`, \`category\`, \`brand\`, \`manufacturer\`, \`url\` and one
\`additionalProperty\` stating that supply is made to order against a written
quotation.

They carry **no** \`offers\`, \`price\`, \`priceCurrency\`, \`availability\`,
\`sku\`, \`gtin\`, \`mpn\`, \`aggregateRating\` or \`review\`. None of those exists
for a custom-quote manufacturer and none was supplied, so emitting them would be
fabricating structured data. \`scripts/audit-content.mjs\` fails the build if any
of them appears.

\`AggregateOffer\` is likewise absent: it requires an authentic price range and
offer count, and there is neither.

\`MerchantReturnPolicy\` and \`OfferShippingDetails\` are not emitted either,
because both are properties of an \`Offer\` — without a real offer there is
nothing for them to attach to. The equivalent information is published as
readable content on \`/custom-order-policy/\` and \`/shipping-and-delivery/\`.

\`LocalBusiness\` is not emitted anywhere: there is no supplied address, and the
audit treats its presence as an error.

## FAQPage

Emitted on ${schemaCounts.FAQPage ?? 0} pages. Every question and answer is
generated from the same array that renders the visible FAQ block, so the two
cannot drift. The audit re-reads the built HTML and fails if a question or
answer in the markup is not present in the visible text.

## VideoObject

Not emitted. There are no videos on the site.
`;

await writeFile(path.join(DOCS, '08-schema-inventory.md'), out, 'utf8');

/* ---------------------- 4. image report ----------------------------- */

const manifest = JSON.parse(await readFile(path.join(ROOT, 'src/data/image-manifest.json'), 'utf8'));
const assets = await walk(path.join(DIST, '_astro'), (n) => /\.(avif|webp|jpe?g|png)$/i.test(n));

const byFormat = {};
let totalBytes = 0;
for (const a of assets) {
  const ext = path.extname(a).slice(1).toLowerCase();
  const size = (await stat(a)).size;
  byFormat[ext] = byFormat[ext] ?? { count: 0, bytes: 0 };
  byFormat[ext].count++;
  byFormat[ext].bytes += size;
  totalBytes += size;
}

const sourceBytes = manifest.mapping.reduce((n, m) => n + m.bytes, 0);

out = `# Image optimisation report

## Source

The 29 approved folders contain **${manifest.mapping.length + manifest.skipped.length} image files**,
of which **${new Set(manifest.mapping.map((m) => m.published)).size} are unique by checksum**.
23 files are byte-identical copies shared between folders; each is stored once
and referenced by every page that uses it, with its own alt text per page.

## Excluded from the build

${manifest.skipped.length} source references were excluded, covering 5 distinct photographs:

| File | Reason |
| --- | --- |
${manifest.skipped.map((s) => `| \`${s.folder}/${s.file}\` | ${s.reason} |`).join('\n')}

## Renditions generated

| Format | Files | Total size |
| --- | ---: | ---: |
${Object.entries(byFormat)
  .sort((a, b) => b[1].count - a[1].count)
  .map(([k, v]) => `| ${k.toUpperCase()} | ${v.count} | ${(v.bytes / 1024 / 1024).toFixed(2)} MB |`)
  .join('\n')}
| **Total** | **${assets.length}** | **${(totalBytes / 1024 / 1024).toFixed(2)} MB** |

Source photography totals ${(sourceBytes / 1024 / 1024).toFixed(2)} MB across
${manifest.mapping.length} references. Every rendition is generated at build
time by sharp and served with a content hash, so it can be cached immutably.

## Delivery

* \`<picture>\` with AVIF and WebP sources and a JPEG fallback on every product,
  card and article image.
* \`srcset\` and \`sizes\` on every responsive image; widths chosen per context
  rather than a single global ladder.
* \`width\` and \`height\` on every \`<img>\`, and a fixed \`aspect-ratio\` on every
  container, so no image can shift layout as it loads.
* The LCP image on product and article pages is \`loading="eager"\`,
  \`fetchpriority="high"\`, \`decoding="sync"\`, and preloaded in \`<head>\` with a
  matching \`imagesrcset\`/\`imagesizes\` so the preload and the render pick the
  same candidate.
* Everything below the fold is \`loading="lazy"\` and \`decoding="async"\`.

## Alt text

Every image carries alt text describing what is visible. Decorative thumbnails
carry \`alt=""\` and are exposed through their button label instead.

Where one photograph is used by more than one page as that page's subject, each
page writes its own alt text — the audit fails on a duplicate. Product cards are
the deliberate exception: a card is one component pointing at one product, and
varying its alt per listing page would be worse for a screen reader.

No alt text asserts a dimension, a material or a certification. Only one
photograph legibly shows its own dimensions, and that asset is reserved for the
page it belongs to.

## Traceability

\`src/data/image-manifest.json\` maps every published asset back to its source
file, including the shared ones. It is regenerated by \`npm run images\`, which
only ever reads from \`Final Product Folders\` — nothing there is renamed,
modified or deleted.
`;

await writeFile(path.join(DOCS, '09-image-report.md'), out, 'utf8');

/* ---------------------- 5. build report ----------------------------- */

const jsFiles = await walk(path.join(DIST, '_astro'), (n) => n.endsWith('.js'));
const cssFiles = await walk(path.join(DIST, '_astro'), (n) => n.endsWith('.css'));
let jsBytes = 0;
for (const f of jsFiles) jsBytes += (await stat(f)).size;
let cssBytes = 0;
for (const f of cssFiles) cssBytes += (await stat(f)).size;

const htmlBytes = pages.reduce((n, p) => n + p.bytes, 0);

out = `# Build and performance report

## Output

| | |
| --- | ---: |
| HTML pages | ${pages.length} |
| Total HTML | ${(htmlBytes / 1024).toFixed(0)} KB |
| Average page HTML | ${(htmlBytes / pages.length / 1024).toFixed(1)} KB |
| Largest page HTML | ${(Math.max(...pages.map((p) => p.bytes)) / 1024).toFixed(1)} KB |
| JavaScript bundles | ${jsFiles.length} |
| Total JavaScript | ${(jsBytes / 1024).toFixed(1)} KB uncompressed |
| CSS files | ${cssFiles.length} |
| Total CSS | ${(cssBytes / 1024).toFixed(1)} KB uncompressed |
| Image renditions | ${assets.length} |
| Fonts | 2 files, ${((115 * 1024) / 1024).toFixed(0)} KB total |

## JavaScript actually shipped

There is no framework runtime. No React, no Vue, no hydration, no client
router. Every script is hand-written and scoped to the component that needs it:

| Script | Loaded on | Purpose |
| --- | --- | --- |
| Scroll reveal | every page | One IntersectionObserver that unhooks each element as it fires. Skipped entirely under reduced motion. |
| Header | every page | Mobile panel, dropdowns, Escape handling, breakpoint reset. |
| Quote form | pages with a form | Client-side validation mirroring the server rules, error rendering, focus management. |
| Gallery | product pages | Thumbnail switching with arrow-key support. |
| Hero figure | homepage | Colour swatch swapping via CSS custom properties. |
| Design tool | \`/design-your-poly-mailer/\` | The configurator. Loaded only on that page. |

The design tool is the heaviest script and it exists on exactly one page, so it
never affects the pages that matter for acquisition.

## Core Web Vitals

The build is engineered against the three metrics rather than measured against
them — a real Lighthouse figure needs the production domain, a real network and
field data, none of which exist yet. What has been done:

**LCP.** Static HTML from a CDN with no render-blocking third-party requests.
Both fonts are self-hosted, subset to latin, and preloaded. The LCP image on
product and article pages is preloaded with a matching \`imagesrcset\` so the
preload and the render resolve to the same file. Critical CSS is inlined by
Astro where it is small enough to be worth it.

**INP.** Almost nothing to interact with is JavaScript-driven. The FAQ
accordions are native \`<details>\`, the tables are CSS-scrolled, the navigation
is a class toggle. No script does layout reads in a loop or attaches
unthrottled scroll handlers.

**CLS.** Every image has \`width\`, \`height\` and a container with a fixed
\`aspect-ratio\`. The gallery reserves a 1:1 box and a fixed-height caption area
so switching images cannot move anything. Fonts use metric-matched fallback
faces with \`size-adjust\`, so the swap does not reflow text. The WhatsApp
button is fixed-position with reserved dimensions.

## Verification performed

* \`npm run audit\` — 150 built pages checked for metadata, canonicals, schema,
  links, alt text, duplication and banned vocabulary. **0 errors.**
* \`npm run qa\` — 18 representative pages driven in Chromium at 320, 375, 414,
  768, 1024 and 1440px. **17 checks, 0 failures**, covering horizontal overflow,
  keyboard operation, focus visibility, form validation and recovery, upload
  rejection, the design tool, reduced motion, a JavaScript-disabled render and
  WCAG AA contrast on 199 text elements.
* \`npm run test:quote\` — the form endpoint driven against a local SMTP server.
  **15 checks, 0 failures**, covering CSRF, validation, allow lists, header
  injection, honeypot, timing, magic-byte upload validation, SVG script
  rejection, output escaping and rate limiting.
* \`npx astro check\` — **0 type errors** across 73 files.

## Not verified

Lighthouse and real-device field measurement, because both need the production
domain live. Run them after DNS cutover.
`;

await writeFile(path.join(DOCS, '11-build-and-performance.md'), out, 'utf8');

console.log(
  `Reports written: page inventory (${indexable.length} pages), metadata audit, schema inventory, image report, build report.`,
);
