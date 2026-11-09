/**
 * Build check: the Merchant feed must carry exactly one item per built product
 * page that has an Offer (minus FEED_EXCLUDE in src/lib/feed.ts), at the same
 * per-unit price as that page's Offer, linking back to that page.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT = [path.join(ROOT, '.vercel', 'output', 'static'), path.join(ROOT, 'dist', 'client')].find(
  (d) => fs.existsSync(path.join(d, 'merchant-feed.xml')),
);
if (!OUT) {
  console.error('check-feed: merchant-feed.xml not found in build output');
  process.exit(1);
}

const feedSrc = fs.readFileSync(path.join(ROOT, 'src', 'lib', 'feed.ts'), 'utf8');
const exclude = new Set(
  [...(feedSrc.match(/FEED_EXCLUDE[^=]*=\s*\[([^\]]*)\]/)?.[1] ?? '').matchAll(/'([^']+)'/g)].map((m) => m[1]),
);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const pages = new Map(); // slug -> offer price
for (const file of walk(OUT)) {
  const html = fs.readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let data;
    try { data = JSON.parse(m[1]); } catch { continue; }
    const nodes = data['@graph'] ?? [data];
    for (const n of nodes) {
      if (n['@type'] === 'Product' && n.offers?.price) {
        const slug = path.relative(OUT, path.dirname(file)).split(path.sep).join('/');
        pages.set(slug, n.offers.price);
      }
    }
  }
}

const feed = fs.readFileSync(path.join(OUT, 'merchant-feed.xml'), 'utf8');
const items = [...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => ({
  id: m[1].match(/<g:id>([^<]+)/)?.[1],
  link: m[1].match(/<g:link>([^<]+)/)?.[1],
  price: m[1].match(/<g:price>([\d.]+) /)?.[1],
  cat: m[1].match(/<g:google_product_category>(\d+)/)?.[1],
}));

const errors = [];
const expected = [...pages.keys()].filter((s) => !exclude.has(s));
if (items.length !== expected.length) {
  errors.push(`feed has ${items.length} items, expected ${expected.length} (product pages ${pages.size} minus ${exclude.size} excluded)`);
}
for (const it of items) {
  const slug = it.link?.replace(/^https:\/\/[^/]+\//, '').replace(/\/$/, '');
  if (!pages.has(slug)) errors.push(`feed item ${it.id} links to ${it.link}, which has no Product Offer`);
  else if (Number(pages.get(slug)) !== Number(it.price)) errors.push(`feed item ${it.id} price ${it.price} != page Offer ${pages.get(slug)}`);
  if (it.cat === '2794' || !it.cat) errors.push(`feed item ${it.id} has a bad google_product_category ${it.cat}`);
}
for (const s of expected) if (!items.some((it) => it.link?.endsWith(`/${s}/`))) errors.push(`product page /${s}/ missing from feed`);

if (errors.length) {
  console.error('check-feed FAILED:\n  ' + errors.join('\n  '));
  process.exit(1);
}
console.log(`check-feed: ${items.length} feed items == ${pages.size} product pages with an Offer - ${exclude.size} excluded`);
