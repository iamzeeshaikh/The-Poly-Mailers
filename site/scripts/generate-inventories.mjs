#!/usr/bin/env node
/**
 * Generates the content inventories (products, blog, resources, industries,
 * locations) directly from the source data, including the SEO plan recorded
 * against each page. Every page on this site carries a `plan` describing its
 * intent, audience, primary keyword and cannibalisation boundary; these
 * inventories surface that rather than re-describing it by hand.
 */

import { writeFile, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..');
const DOCS = path.join(ROOT, 'docs');

/* The data modules are TypeScript, so they are read as text and the fields we
   need are extracted, rather than compiled. This keeps the script dependency
   free and means it cannot drift from what shipped: it reads the same files the
   build reads. */

const read = (rel) => readFile(path.join(ROOT, 'src', rel), 'utf8');

const field = (block, name) => {
  const m = block.match(new RegExp(`\\n\\s{4}${name}:\\s*(?:'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)")`));
  return (m?.[1] ?? m?.[2] ?? '').replace(/\\'/g, "'").replace(/\\"/g, '"');
};

const planField = (block, name) => {
  const plan = block.match(/plan:\s*\{([\s\S]*?)\n\s{4}\},/)?.[1] ?? '';
  const m = plan.match(new RegExp(`${name}:\\s*(?:\\n\\s*)?(?:'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)")`));
  return (m?.[1] ?? m?.[2] ?? '').replace(/\\'/g, "'");
};

const splitRecords = (source) =>
  source
    .split(/\n\s{2}\{\n/)
    .slice(1)
    .map((b) => '  {\n' + b);

/* ------------------------- products -------------------------------- */

const productFiles = ['sizes', 'colors', 'print', 'sustainable', 'protective', 'specialty'];
const products = [];

for (const f of productFiles) {
  const src = await read(`data/products/${f}.ts`);
  for (const block of splitRecords(src)) {
    const slug = field(block, 'slug');
    if (!slug) continue;
    products.push({
      slug,
      name: field(block, 'name'),
      group: f,
      primary: planField(block, 'primaryKeyword'),
      intent: planField(block, 'intent'),
      nearest: planField(block, 'nearestPage'),
      boundary: planField(block, 'boundary'),
    });
  }
}

let out = `# Product inventory

All ${products.length} approved products. Every URL is root-level with a trailing
slash, and every page carries its own primary keyword, search intent and a
stated boundary against its nearest internal competitor.

| # | Product | URL | Primary keyword |
| ---: | --- | --- | --- |
${products
  .map((p, i) => `| ${i + 1} | ${p.name} | \`/${p.slug}/\` | ${p.primary} |`)
  .join('\n')}

## Search intent and cannibalisation boundaries

Recorded per page in \`plan\` on each product record, so the reasoning travels
with the content rather than living in a separate spreadsheet.

${products
  .map(
    (p) => `### ${p.name} — \`/${p.slug}/\`

* **Intent:** ${p.intent}
* **Nearest internal page:** \`${p.nearest}\`
* **Boundary:** ${p.boundary}`,
  )
  .join('\n\n')}
`;

await writeFile(path.join(DOCS, '03-product-inventory.md'), out, 'utf8');

/* --------------------------- blog ---------------------------------- */

const blogDir = path.join(ROOT, 'src', 'content', 'blog');
const blogFiles = (await readdir(blogDir)).filter((f) => f.endsWith('.md'));
const posts = [];

for (const f of blogFiles) {
  const src = await readFile(path.join(blogDir, f), 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const get = (k) => fm.match(new RegExp(`^${k}:\\s*(.+)$`, 'm'))?.[1]?.trim() ?? '';
  const body = src.replace(/^---[\s\S]*?---/, '');
  posts.push({
    slug: f.replace(/\.md$/, ''),
    title: get('title'),
    intent: get('intent'),
    primary: get('primaryKeyword'),
    published: get('published'),
    words: body.split(/\s+/).filter(Boolean).length,
    refs: /^references:\s*\[\]/m.test(fm) ? 0 : (fm.match(/^\s+- label:/gm) ?? []).length,
    faqs: (fm.match(/^\s+- q:/gm) ?? []).length,
  });
}

posts.sort((a, b) => a.published.localeCompare(b.published));

out = `# Blog inventory

${posts.length} articles. Each was checked against the others for intent overlap
before writing; the intent column is what separates them.

| Article | URL | Primary keyword | Words | FAQs | Sources |
| --- | --- | --- | ---: | ---: | ---: |
${posts
  .map(
    (p) =>
      `| ${p.title} | \`/blog/${p.slug}/\` | ${p.primary} | ${p.words} | ${p.faqs} | ${p.refs} |`,
  )
  .join('\n')}

Total: **${posts.reduce((n, p) => n + p.words, 0).toLocaleString('en-GB')} words**,
averaging ${Math.round(posts.reduce((n, p) => n + p.words, 0) / posts.length)} per article.

## Search intent, verified distinct

${posts.map((p) => `* **${p.title}** — ${p.intent}`).join('\n')}

## Structure applied to every article

* One H1, from the title. H2 and H3 only below it, in order.
* At least one bulleted section and one numbered section per article, both
  carrying real information rather than restating the prose.
* An FAQ section where questions genuinely arise; ${posts.filter((p) => p.faqs > 0).length}
  of ${posts.length} articles have one.
* Author and reviewer named, with separate published, updated and reviewed
  dates — reviewed means a person confirmed it is still accurate, which is not
  the same as when it last changed.
* A relevant hero image with its own alt text, distinct from the alt text used
  for the same photograph on its product page.
* A "notes on sources" block wherever a claim needs external verification.
  ${posts.filter((p) => p.refs > 0).length} of ${posts.length} articles carry one; the rest make no claim
  that requires a citation, and manufacturing citations to look rigorous would
  be worse than having none.
* No colons in titles or headings. No "Conclusion" or "Final Thoughts" heading.
* At most one contextual internal link per section, with descriptive anchor text.
`;

await writeFile(path.join(DOCS, '04-blog-inventory.md'), out, 'utf8');

/* ------------------------- resources ------------------------------- */

const resourceSrc = await read('data/resources.ts');
const resources = splitRecords(resourceSrc)
  .filter((b) => field(b, 'slug'))
  .map((b) => ({
    slug: field(b, 'slug'),
    h1: field(b, 'h1'),
    summary: field(b, 'summary'),
    primary: planField(b, 'primaryKeyword'),
    nearest: planField(b, 'nearestPage'),
    boundary: planField(b, 'boundary'),
  }));

out = `# Resource inventory

${resources.length} reference guides. These are tables and checklists you return
to, as distinct from the articles, which are arguments read once.

Several are written to be used against any supplier's quotation, including one
that is not ours — that is deliberate, and it is stated on the resources index.

| Guide | URL | Primary keyword |
| --- | --- | --- |
${resources.map((r) => `| ${r.h1} | \`/resources/${r.slug}/\` | ${r.primary} |`).join('\n')}

## Purpose and boundary

Each resource states the capability or product page it must not duplicate.

${resources
  .map(
    (r) => `### ${r.h1}

* **Purpose:** ${r.summary}
* **Nearest internal page:** \`${r.nearest}\`
* **Boundary:** ${r.boundary}`,
  )
  .join('\n\n')}
`;

await writeFile(path.join(DOCS, '05-resource-inventory.md'), out, 'utf8');

/* ------------------------- industries ------------------------------ */

const industrySrc = await read('data/industries.ts');
const industries = splitRecords(industrySrc)
  .filter((b) => field(b, 'slug'))
  .map((b) => ({
    slug: field(b, 'slug'),
    name: field(b, 'name'),
    summary: field(b, 'summary'),
    primary: planField(b, 'primaryKeyword'),
    problem: planField(b, 'problem'),
    angle: planField(b, 'angle'),
  }));

out = `# Industry inventory

${industries.length} sectors, each written around the operational problem that
category actually has rather than around the products.

| Sector | URL | Primary keyword |
| --- | --- | --- |
${industries.map((i) => `| ${i.name} | \`/industries/${i.slug}/\` | ${i.primary} |`).join('\n')}

## The problem each page solves

${industries
  .map(
    (i) => `### ${i.name}

* **Problem:** ${i.problem}
* **Angle unique to this page:** ${i.angle}`,
  )
  .join('\n\n')}

## Sectors deliberately excluded

No page was written for categories that predominantly ship in cartons. A page
recommending a flexible bag for rigid, crush-sensitive goods would be a page
arguing against itself, and the industries index says so rather than leaving the
absence unexplained.
`;

await writeFile(path.join(DOCS, '06-industry-inventory.md'), out, 'utf8');

/* ------------------------- locations ------------------------------- */

const locationFiles = [
  'us-states-a',
  'us-states-b',
  'us-cities-a',
  'us-cities-b',
  'uk-cities',
  'ca-au-cities',
];
const locations = [];

for (const f of locationFiles) {
  const src = await read(`data/locations/${f}.ts`);
  for (const block of splitRecords(src)) {
    const slug = field(block, 'slug');
    if (!slug) continue;
    locations.push({
      slug,
      name: field(block, 'name'),
      market: field(block, 'market'),
      kind: field(block, 'kind'),
      region: field(block, 'region'),
      angle: field(block, 'angle'),
      primary: field(block, 'primaryKeyword'),
    });
  }
}

const byMarket = {};
for (const l of locations) (byMarket[l.market] ??= []).push(l);

out = `# Country and location inventory

Four country hubs and ${locations.length} regional pages.

| Market | Hub | State pages | City pages |
| --- | --- | ---: | ---: |
${Object.entries(byMarket)
  .map(
    ([m, list]) =>
      `| ${m === 'usa' ? 'United States' : m === 'uk' ? 'United Kingdom' : m[0].toUpperCase() + m.slice(1)} | \`/${m}/\` | ${
        list.filter((l) => l.kind === 'state').length
      } | ${list.filter((l) => l.kind === 'city').length} |`,
  )
  .join('\n')}
| **Total** | **4 hubs** | **${locations.filter((l) => l.kind === 'state').length}** | **${
  locations.filter((l) => l.kind === 'city').length
}** |

## Every location page and the angle it owns

The test applied to each: if the place name were swapped for another, would the
page still be true? Where the answer was yes, the page was rewritten until it
was no.

${Object.entries(byMarket)
  .map(
    ([m, list]) => `### ${
      m === 'usa'
        ? 'United States'
        : m === 'uk'
          ? 'United Kingdom'
          : m[0].toUpperCase() + m.slice(1)
    }

| Page | URL | Angle |
| --- | --- | --- |
${list.map((l) => `| ${l.name} | \`/locations/${l.slug}/\` | ${l.angle} |`).join('\n')}`,
  )
  .join('\n\n')}

## Rules applied to every location page

* No local address, phone number, branch, depot or collection point is implied
  anywhere. Each page states that orders are produced to order and shipped.
* The single displayed phone number is never labelled as local to any market.
* No population figures, market-size statistics or other local data. Sector
  notes describe what a place is commercially known for, which is general
  knowledge, not invented data.
* Section order, block types, FAQs, product recommendations, CTA wording and
  internal-link destinations all vary between pages by design.
* The build fails on duplicate slugs, and the content audit fails on similar
  content within the location family.
`;

await writeFile(path.join(DOCS, '06b-location-inventory.md'), out, 'utf8');

console.log(
  `Inventories written: ${products.length} products, ${posts.length} articles, ${resources.length} resources, ${industries.length} industries, ${locations.length} locations.`,
);
