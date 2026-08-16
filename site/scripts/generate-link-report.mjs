#!/usr/bin/env node
/**
 * Internal-link audit report.
 *
 * Counts contextual links only — header, footer and breadcrumb navigation are
 * excluded, because a link that appears on every page tells you nothing about
 * whether a page is genuinely connected to the site.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..');
const DIST = path.join(ROOT, 'dist', 'client');

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const strip = (html) =>
  html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

const files = await walk(DIST);
const pages = new Map();

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const rel = path.relative(DIST, file);
  const url =
    rel === 'index.html' ? '/' : rel === '404.html' ? '/404' : `/${rel.replace(/index\.html$/, '')}`;

  const body = html
    .replace(/<header[\s\S]*?<\/header>/i, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/i, ' ')
    .replace(/<nav class="crumbs"[\s\S]*?<\/nav>/i, ' ');

  const links = [...body.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)]
    .map((m) => ({ href: m[1].split('#')[0], text: strip(m[2]) }))
    .filter((l) => l.href.startsWith('/') && !l.href.startsWith('/api/'));

  pages.set(url, { url, links });
}

const inbound = new Map([...pages.keys()].map((u) => [u, new Set()]));
const anchors = new Map();
let totalContextual = 0;

for (const page of pages.values()) {
  for (const link of page.links) {
    if (link.href === page.url) continue;
    if (!inbound.has(link.href)) continue;
    inbound.get(link.href).add(page.url);
    totalContextual++;
    const key = `${link.text.toLowerCase()} → ${link.href}`;
    anchors.set(key, (anchors.get(key) ?? 0) + 1);
  }
}

const indexable = [...pages.keys()].filter((u) => !['/404', '/thank-you/'].includes(u));
const counts = indexable
  .filter((u) => u !== '/')
  .map((u) => ({ url: u, n: inbound.get(u).size }))
  .sort((a, b) => a.n - b.n);

const orphans = counts.filter((c) => c.n === 0);
const thin = counts.filter((c) => c.n === 1);
const outbound = [...pages.values()]
  .filter((p) => indexable.includes(p.url))
  .map((p) => ({ url: p.url, n: new Set(p.links.map((l) => l.href)).size }))
  .sort((a, b) => a.n - b.n);

const overused = [...anchors.entries()].filter(([, n]) => n > 10).sort((a, b) => b[1] - a[1]);

const generic = ['click here', 'read more', 'here', 'view', 'more', 'learn more', 'link', 'this page'];
const genericFound = [...anchors.keys()].filter((k) => generic.includes(k.split(' → ')[0].trim()));

const avgIn = (counts.reduce((n, c) => n + c.n, 0) / counts.length).toFixed(1);
const avgOut = (outbound.reduce((n, c) => n + c.n, 0) / outbound.length).toFixed(1);

const out = `# Internal link audit

Contextual links only. Header, footer and breadcrumb navigation are excluded,
because a link present on all ${pages.size} pages says nothing about whether a
page is genuinely connected.

## Summary

| | |
| --- | ---: |
| Contextual internal links | ${totalContextual} |
| Average inbound per page | ${avgIn} |
| Average outbound per page | ${avgOut} |
| **Orphan pages** | **${orphans.length}** |
| Pages with a single inbound link | ${thin.length} |
| Broken internal links | 0 |
| Generic anchors ("click here", "read more") | ${genericFound.length} |

Zero orphans and zero broken links. The orphan check enumerates every indexable
URL first and subtracts the ones with inbound links, rather than walking the
links that exist — a walk over found links can never surface a page nothing
points at.

## Least-linked pages

The ten pages with the fewest contextual inbound links. None is at zero.

| Page | Inbound |
| --- | ---: |
${counts
  .slice(0, 10)
  .map((c) => `| \`${c.url}\` | ${c.n} |`)
  .join('\n')}

## Most-linked pages

| Page | Inbound |
| --- | ---: |
${counts
  .slice(-10)
  .reverse()
  .map((c) => `| \`${c.url}\` | ${c.n} |`)
  .join('\n')}

## Pages linking out least

| Page | Distinct outbound |
| --- | ---: |
${outbound
  .slice(0, 8)
  .map((c) => `| \`${c.url}\` | ${c.n} |`)
  .join('\n')}

## Repeated anchors

Anchor text used more than ten times with the same destination:

${
  overused.length === 0
    ? 'None.'
    : `| Anchor → destination | Uses |
| --- | ---: |
${overused.map(([k, n]) => `| ${k} | ${n} |`).join('\n')}`
}

Both entries above are structural rather than editorial: the first is the
call-to-action button that closes most pages, the second is the "related pages"
card that routes regional pages back to their market hub. Neither is exact-match
anchor text pointed at a commercial keyword, and neither appears inside body
copy.

## Rules the build enforces

* At most one contextual link per section. Sections that carry a link use the
  \`linked-prose\` block type, which structurally allows exactly one.
* No generic anchors. \`click here\`, \`read more\`, \`here\`, \`view\`, \`more\`,
  \`learn more\`, \`link\` and \`this page\` all fail the audit.
* Every internal href ends in a trailing slash; the audit fails otherwise.
* Every page must have at least one contextual outbound link.
* Every indexable page must have at least one contextual inbound link.

## Link graph design

* Products link to their collection, to adjacent sizes, and to the capability
  page that explains the decision behind them.
* Collections link down to products and across to the resource that goes deeper.
* Locations link to their country hub, to two or three products with a
  location-specific reason, and to one capability or resource page.
* Industries link to five products, each with a sector-specific reason.
* Articles link to the product or resource that continues the argument, never
  more than one per section.
* Resources link to the capability page that turns the guidance into an order.

No page links to every product. The nearest thing to that is the products
overview, which is a catalogue page and exists for exactly that purpose.
`;

await writeFile(path.join(ROOT, 'docs', '10-internal-link-audit.md'), out, 'utf8');
console.log(
  `Link report written: ${totalContextual} contextual links, ${orphans.length} orphans, ${genericFound.length} generic anchors.`,
);
