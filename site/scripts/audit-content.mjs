#!/usr/bin/env node
/**
 * Content and technical audit, run against the BUILT HTML rather than the
 * source data.
 *
 * That distinction matters. Auditing the source would check what we intended
 * to publish; auditing dist/client checks what actually shipped, including
 * anything a template introduced.
 *
 * The absence checks work by enumerating the denominator first — every
 * indexable page — and subtracting what was found, rather than iterating over
 * pages that already have the thing being checked. A loop over found instances
 * cannot detect a page where the thing is missing entirely.
 *
 * Usage:  node scripts/audit-content.mjs [--json]
 * Exit:   1 if any error-level finding is present, 0 otherwise.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..');
const DIST = path.join(ROOT, 'dist', 'client');
const SITE = 'https://thepolymailers.com';

/* ------------------------------------------------------------------ *
 * Rules
 * ------------------------------------------------------------------ */

const BANNED_WORDS = [
  'introducing', 'functional', 'embrace', 'versatility', 'look no further',
  'unparalleled', 'tailor-made', 'tailor made', 'robust', 'paramount',
  'crafted', 'discover', 'elevate', 'aesthetic', 'unleash', 'versatile',
  'enhance', 'exquisite', 'precious', 'distinctive', 'exceptional',
  'dive into a world', 'perfect for', 'expert', 'best',
];

const BANNED_HEADINGS = ['conclusion', 'final thoughts'];

const BANNED_CLAIMS = [
  { re: /\b\d+\s?%\s?(post[- ]consumer|recycled|pcr)\b/i, why: 'states a recycled-content percentage' },
  { re: /\b(home|industrially)\s+compostable\b/i, why: 'asserts a compostability class' },
  { re: /\bcertified\s+(compostable|biodegradable|recyclable)\b/i, why: 'asserts a certification' },
  { re: /\bbreaks?\s+down\s+in\s+\d/i, why: 'states a breakdown period' },
  { re: /\bdecomposes?\s+(in|within)\s+\d/i, why: 'states a decomposition period' },
  { re: /\b\d+\s?(microns?|mils?|micrometres?)\b/i, why: 'states an exact film gauge' },
  { re: /\bminimum\s+order\s+(quantity\s+)?(is\s+)?\d/i, why: 'states a numeric MOQ' },
  { re: /\bMOQ\s*(of|:)?\s*\d/i, why: 'states a numeric MOQ' },
  { re: /\b(ships?|delivered|dispatch(ed)?|turnaround|lead time)\s+in\s+\d+\s*(–|-|to)?\s*\d*\s*(working\s+|business\s+)?(day|week)/i, why: 'states a delivery or production time' },
  { re: /\b(usps|ups|fedex|dhl|royal mail|canada post|australia post)[- ]approved\b/i, why: 'claims carrier approval' },
  { re: /\bapproved\s+(by|for)\s+(usps|ups|fedex|dhl)\b/i, why: 'claims carrier approval' },
  { re: /(^|[^\w])\$\s?\d/, why: 'states a price' },
  { re: /\b\d+(\.\d+)?\s*(out of 5|\/5)\b/i, why: 'states a rating' },
  { re: /\b\d+\s+(reviews|ratings)\b/i, why: 'references a review count' },
];

/** Pages that are allowed to be noindex and absent from the sitemap. */
const NON_INDEXABLE = new Set(['/thank-you/', '/404/']);

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

const findings = [];
const add = (level, check, page, detail) =>
  findings.push({ level, check, page, detail });

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
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`, 'i'));
  return m ? m[1] : null;
};

const one = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};

const normalise = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();

/** Cheap shingle-based similarity, good enough to catch spun text. */
function similarity(a, b, ignore = new Set()) {
  const shingles = (s) => {
    const words = normalise(s).split(' ');
    const set = new Set();
    for (let i = 0; i + 4 < words.length; i++) {
      const sh = words.slice(i, i + 5).join(' ');
      if (!ignore.has(sh)) set.add(sh);
    }
    return set;
  };
  const A = shingles(a);
  const B = shingles(b);
  if (A.size === 0 || B.size === 0) return 0;
  let shared = 0;
  for (const s of A) if (B.has(s)) shared++;
  return shared / Math.min(A.size, B.size);
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */

const files = await walk(DIST);
if (files.length === 0) {
  console.error('No built HTML found. Run `npm run build` first.');
  process.exit(1);
}

const pages = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const rel = path.relative(DIST, file);
  const url =
    rel === 'index.html'
      ? '/'
      : rel === '404.html'
        ? '/404/'
        : `/${rel.replace(/index\.html$/, '').replace(/\\/g, '/')}`;

  const headTags = [...html.matchAll(/<(?:meta|link)\b[^>]*>/gi)].map((m) => m[0]);

  const title = one(html, /<title>([\s\S]*?)<\/title>/i)?.trim() ?? '';
  const description =
    headTags
      .filter((t) => /name="description"/i.test(t))
      .map((t) => attr(t, 'content'))
      .find(Boolean) ?? '';
  const canonical =
    headTags
      .filter((t) => /rel="canonical"/i.test(t))
      .map((t) => attr(t, 'href'))
      .find(Boolean) ?? '';
  const robots =
    headTags
      .filter((t) => /name="robots"/i.test(t))
      .map((t) => attr(t, 'content'))
      .find(Boolean) ?? '';

  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => strip(m[1]));
  const headings = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({
    level: Number(m[1]),
    text: strip(m[2]),
  }));

  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => ({
    tag: m[0],
    at: m.index ?? 0,
  }));
  const links = [...html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].map((m) => ({
    href: m[1],
    text: strip(m[2]),
  }));

  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map(
    (m) => m[1],
  );

  const text = strip(html.replace(/<header[\s\S]*?<\/header>/i, ' ').replace(/<footer[\s\S]*?<\/footer>/i, ' '));

  // The first substantive paragraph, used for the similar-intro check.
  const bodyStart = html.indexOf('<main');
  const intro = strip(
    (bodyStart > -1 ? html.slice(bodyStart) : html).match(/<p\b[^>]*>([\s\S]*?)<\/p>/i)?.[1] ?? '',
  );

  pages.push({
    url,
    file,
    html,
    title,
    description,
    canonical,
    robots,
    h1s,
    headings,
    images,
    links,
    jsonLd,
    text,
    intro,
    words: text.split(' ').filter(Boolean).length,
  });
}

const indexable = pages.filter((p) => !NON_INDEXABLE.has(p.url));

/* ---------------------------- metadata ----------------------------- */

for (const p of pages) {
  if (!p.title) add('error', 'metadata', p.url, 'No <title>.');
  if (!p.description) add('error', 'metadata', p.url, 'No meta description.');
  if (!p.canonical) add('error', 'canonical', p.url, 'No canonical link.');

  if (p.canonical && p.canonical !== `${SITE}${p.url}`) {
    add('error', 'canonical', p.url, `Canonical points at ${p.canonical}, expected ${SITE}${p.url}`);
  }

  if (!p.url.endsWith('/')) {
    add('error', 'trailing-slash', p.url, 'URL does not end in a slash.');
  }

  if (p.h1s.length === 0) add('error', 'headings', p.url, 'No h1.');
  if (p.h1s.length > 1) add('error', 'headings', p.url, `${p.h1s.length} h1 elements.`);

  if (p.title.length > 70) {
    add('warn', 'metadata', p.url, `Title is ${p.title.length} characters.`);
  }
  if (p.description.length > 175) {
    add('warn', 'metadata', p.url, `Description is ${p.description.length} characters.`);
  }
  if (p.description && p.description.length < 70) {
    add('warn', 'metadata', p.url, `Description is only ${p.description.length} characters.`);
  }

  if (NON_INDEXABLE.has(p.url) && !/noindex/i.test(p.robots)) {
    add('error', 'robots', p.url, 'Should be noindex but is not.');
  }
  if (!NON_INDEXABLE.has(p.url) && /noindex/i.test(p.robots)) {
    add('error', 'robots', p.url, 'Indexable page carries noindex.');
  }

  // Heading order: no level may skip more than one step down.
  let previous = 0;
  for (const h of p.headings) {
    if (previous && h.level > previous + 1) {
      add('warn', 'headings', p.url, `h${previous} followed by h${h.level} ("${h.text.slice(0, 50)}").`);
    }
    previous = h.level;
  }

  for (const h of p.headings) {
    if (BANNED_HEADINGS.includes(h.text.toLowerCase().trim())) {
      add('error', 'banned-heading', p.url, `Heading "${h.text}".`);
    }
  }
}

/* --------------------------- duplicates ---------------------------- */

const groupBy = (list, key) => {
  const map = new Map();
  for (const item of list) {
    const value = key(item);
    if (!value) continue;
    const arr = map.get(value) ?? [];
    arr.push(item.url);
    map.set(value, arr);
  }
  return map;
};

for (const [value, urls] of groupBy(indexable, (p) => p.title)) {
  if (urls.length > 1) add('error', 'duplicate-title', urls.join(', '), `"${value}"`);
}
for (const [value, urls] of groupBy(indexable, (p) => p.description)) {
  if (urls.length > 1) add('error', 'duplicate-description', urls.join(', '), `"${value.slice(0, 60)}…"`);
}
for (const [value, urls] of groupBy(indexable, (p) => p.h1s[0])) {
  if (urls.length > 1) add('error', 'duplicate-h1', urls.join(', '), `"${value}"`);
}
for (const [value, urls] of groupBy(indexable, (p) => p.intro)) {
  if (urls.length > 1 && value.length > 60) {
    add('error', 'duplicate-intro', urls.join(', '), `"${value.slice(0, 60)}…"`);
  }
}

/* ------------------- similarity across page families ---------------- */

const families = [
  { name: 'products', test: (p) => /^\/[a-z0-9-]+\/$/.test(p.url) && p.html.includes('#product') },
  { name: 'locations', test: (p) => p.url.startsWith('/locations/') && p.url !== '/locations/' },
  { name: 'industries', test: (p) => p.url.startsWith('/industries/') && p.url !== '/industries/' },
  { name: 'resources', test: (p) => p.url.startsWith('/resources/') && p.url !== '/resources/' },
  { name: 'blog', test: (p) => p.url.startsWith('/blog/') && p.url !== '/blog/' },
];

for (const family of families) {
  const members = indexable.filter(family.test);

  // Boilerplate suppression: any five-word sequence appearing on more than a
  // third of a family's pages is shell text (form labels, CTA wording, spec
  // notes) rather than content, and counting it would make every page in the
  // family look similar to every other.
  const frequency = new Map();
  for (const m of members) {
    const words = normalise(m.text).split(' ');
    const seen = new Set();
    for (let k = 0; k + 4 < words.length; k++) seen.add(words.slice(k, k + 5).join(' '));
    for (const sh of seen) frequency.set(sh, (frequency.get(sh) ?? 0) + 1);
  }
  const boilerplate = new Set(
    [...frequency.entries()]
      .filter(([, count]) => count > Math.max(2, members.length / 3))
      .map(([sh]) => sh),
  );

  for (let i = 0; i < members.length; i++) {
    for (let j = i + 1; j < members.length; j++) {
      const score = similarity(members[i].text, members[j].text, boilerplate);
      if (score > 0.4) {
        add(
          'error',
          'similar-content',
          `${members[i].url} ↔ ${members[j].url}`,
          `${family.name}: ${(score * 100).toFixed(0)}% shared five-word sequences.`,
        );
      } else if (score > 0.25) {
        add(
          'warn',
          'similar-content',
          `${members[i].url} ↔ ${members[j].url}`,
          `${family.name}: ${(score * 100).toFixed(0)}% shared five-word sequences.`,
        );
      }
    }
  }

  // Repeated heading structure across a family.
  const shapes = new Map();
  for (const m of members) {
    const shape = m.headings.filter((h) => h.level === 2).map((h) => h.text).join(' | ');
    if (!shape) continue;
    const arr = shapes.get(shape) ?? [];
    arr.push(m.url);
    shapes.set(shape, arr);
  }
  for (const [shape, urls] of shapes) {
    if (urls.length > 1) {
      add('error', 'repeated-heading-structure', urls.join(', '), `Identical h2 sequence: ${shape.slice(0, 80)}…`);
    }
  }
}

/* ---------------------------- thin pages ---------------------------- */

for (const p of indexable) {
  if (p.words < 300) add('error', 'thin-page', p.url, `${p.words} words of body text.`);
  else if (p.words < 450) add('warn', 'thin-page', p.url, `${p.words} words of body text.`);
}

/* ------------------------------ images ------------------------------ */

const altByFile = new Map();

for (const p of pages) {
  for (const { tag: img, at } of p.images) {
    // `alt=""` serialises as a bare `alt`, which is valid and means decorative.
    const hasBareAlt = /\salt(=|[\s>])/.test(img);
    const alt = attr(img, 'alt') ?? (hasBareAlt ? '' : null);
    const src = attr(img, 'src') ?? '';
    const width = attr(img, 'width');
    const height = attr(img, 'height');

    if (alt === null) add('error', 'image-alt', p.url, `<img> with no alt attribute: ${src.slice(0, 60)}`);
    if (!width || !height) {
      add('error', 'image-dimensions', p.url, `<img> without width/height: ${src.slice(0, 60)}`);
    }

    // Decorative images legitimately carry alt="", so only non-empty alts are
    // checked for duplication across pages. Card images are excluded: a product
    // card is one component pointing at one product, and varying its alt per
    // listing page would be worse for a screen reader, not better. What must be
    // unique is the alt on the image that REPRESENTS each page — the gallery
    // stage and the article hero.
    const context = p.html.slice(Math.max(0, at - 4000), at);
    const lastWrapper = Math.max(
      context.lastIndexOf('pcard-media'),
      context.lastIndexOf('card-media'),
      context.lastIndexOf('lead-media'),
    );
    const lastStage = Math.max(
      context.lastIndexOf('stage-slide'),
      context.lastIndexOf('post-hero'),
      context.lastIndexOf('gallery-stage'),
    );
    // Whichever wrapper opened most recently is the one this image sits in.
    const isCardImage = lastWrapper > lastStage;
    if (alt && !isCardImage) {
      const key = src.replace(/_[A-Za-z0-9]+\.(avif|webp|jpe?g|png)$/i, '');
      const seen = altByFile.get(key) ?? new Map();
      const pagesUsing = seen.get(alt) ?? new Set();
      pagesUsing.add(p.url);
      seen.set(alt, pagesUsing);
      altByFile.set(key, seen);
    }
  }
}

for (const [file, alts] of altByFile) {
  for (const [alt, urls] of alts) {
    if (urls.size > 1) {
      add(
        'warn',
        'duplicate-alt',
        [...urls].join(', '),
        `Same alt on ${urls.size} pages for ${path.basename(file)}: "${alt.slice(0, 60)}"`,
      );
    }
  }
}

/* ------------------------- internal linking ------------------------- */

const known = new Set(pages.map((p) => p.url));
const inbound = new Map(pages.map((p) => [p.url, new Set()]));
const anchorCounts = new Map();

const GENERIC_ANCHORS = [
  'click here', 'read more', 'here', 'view', 'more', 'learn more', 'this page', 'link',
];

for (const p of pages) {
  // Contextual links only: exclude header, footer and breadcrumb navigation.
  const body = p.html
    .replace(/<header[\s\S]*?<\/header>/i, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/i, ' ')
    .replace(/<nav class="crumbs"[\s\S]*?<\/nav>/i, ' ');

  // Consent and policy links inside forms are a legal requirement rather than
  // an anchor-text strategy, so they are not counted toward anchor overuse.
  const editorial = body.replace(/<form[\s\S]*?<\/form>/gi, ' ');

  const bodyLinks = [...body.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].map((m) => ({
    href: m[1],
    text: strip(m[2]),
  }));

  let contextual = 0;

  for (const link of bodyLinks) {
    const href = link.href;
    if (!href.startsWith('/')) continue;
    if (href.startsWith('/api/')) continue;

    const target = href.split('#')[0].split('?')[0];
    if (!target) continue;

    if (!target.endsWith('/') && !/\.[a-z0-9]{2,5}$/i.test(target)) {
      add('error', 'trailing-slash', p.url, `Internal link without trailing slash: ${target}`);
    }

    if (!known.has(target) && !/\.[a-z0-9]{2,5}$/i.test(target)) {
      add('error', 'broken-link', p.url, `Links to ${target}, which does not exist.`);
      continue;
    }

    if (target !== p.url) {
      inbound.get(target)?.add(p.url);
      contextual++;
    }

    const anchor = link.text.toLowerCase().trim();
    if (GENERIC_ANCHORS.includes(anchor)) {
      add('error', 'generic-anchor', p.url, `Anchor text "${link.text}" → ${target}`);
    }
    if (anchor && anchor.length > 2 && editorial.includes(`href="${href}"`)) {
      const key = `${anchor} → ${target}`;
      anchorCounts.set(key, (anchorCounts.get(key) ?? 0) + 1);
    }
  }

  if (contextual === 0 && !NON_INDEXABLE.has(p.url)) {
    add('error', 'no-contextual-links', p.url, 'Page has no contextual internal links.');
  }
}

// Orphans: enumerate every indexable page, then subtract those with inbound
// contextual links. Iterating over links found would never surface a page that
// nothing points at.
for (const p of indexable) {
  if (p.url === '/') continue;
  const count = inbound.get(p.url)?.size ?? 0;
  if (count === 0) add('error', 'orphan', p.url, 'No contextual inbound links from any page.');
  else if (count === 1) add('warn', 'few-inbound-links', p.url, 'Only one contextual inbound link.');
}

for (const [key, count] of anchorCounts) {
  if (count > 12) add('warn', 'overused-anchor', key, `Used ${count} times across the site.`);
}

/* ----------------------------- language ----------------------------- */

for (const p of pages) {
  const lower = ` ${p.text.toLowerCase()} `;
  for (const word of BANNED_WORDS) {
    const re = new RegExp(`(^|[^a-z])${word.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}([^a-z]|$)`, 'i');
    if (re.test(lower)) {
      add('error', 'banned-word', p.url, `Contains "${word}".`);
    }
  }

  // Claim checks run sentence by sentence, because a page that explains why a
  // claim will NOT be made necessarily contains the words of that claim. A flat
  // match over the whole page would flag the disclaimer as the offence.
  const NEGATORS = /\b(not|never|no |neither|nor|without|cannot|will not|do not|does not|would not|whether|rather than|unqualified|unsupported|forbid|decline|avoid|unless|question for)\b/i;
  const sentences = p.text.split(/(?<=[.?!])\s+/);

  for (const sentence of sentences) {
    for (const claim of BANNED_CLAIMS) {
      const match = sentence.match(claim.re);
      if (!match) continue;
      if (NEGATORS.test(sentence)) continue;
      if (sentence.trim().endsWith('?')) continue;
      add('error', 'unsupported-claim', p.url, `${claim.why}: "${sentence.trim().slice(0, 140)}"`);
    }
  }
}

/* ------------------------------ schema ------------------------------ */

const entityIds = new Map();

for (const p of pages) {
  if (NON_INDEXABLE.has(p.url)) continue;

  if (p.jsonLd.length === 0) {
    add('error', 'schema', p.url, 'No JSON-LD.');
    continue;
  }
  if (p.jsonLd.length > 1) {
    add('error', 'schema', p.url, `${p.jsonLd.length} JSON-LD blocks; expected one graph.`);
  }

  for (const block of p.jsonLd) {
    let parsed;
    try {
      parsed = JSON.parse(block);
    } catch (error) {
      add('error', 'schema', p.url, `Invalid JSON-LD: ${error.message}`);
      continue;
    }

    const nodes = parsed['@graph'] ?? [parsed];
    for (const node of nodes) {
      if (node['@id']) {
        const ids = entityIds.get(node['@id']) ?? new Set();
        ids.add(p.url);
        entityIds.set(node['@id'], ids);
      }

      if (node['@type'] === 'Product') {
        for (const forbidden of ['offers', 'sku', 'gtin', 'gtin13', 'mpn', 'aggregateRating', 'review']) {
          if (node[forbidden]) {
            add('error', 'schema', p.url, `Product carries "${forbidden}", which cannot be substantiated.`);
          }
        }
      }

      if (node['@type'] === 'FAQPage') {
        for (const entry of node.mainEntity ?? []) {
          const q = entry.name;
          const a = entry.acceptedAnswer?.text ?? '';
          const flat = normalise(p.text);
          if (!flat.includes(normalise(q).slice(0, 40))) {
            add('error', 'schema-mismatch', p.url, `FAQ question not visible on page: "${q.slice(0, 50)}"`);
          }
          if (a && !flat.includes(normalise(a).slice(0, 40))) {
            add('error', 'schema-mismatch', p.url, `FAQ answer not visible on page: "${a.slice(0, 50)}"`);
          }
        }
      }

      if (node['@type'] === 'LocalBusiness') {
        add('error', 'schema', p.url, 'LocalBusiness emitted without a real address.');
      }
    }
  }
}

// Organization and WebSite must be defined exactly once as full entities.
for (const id of [`${SITE}/#organization`, `${SITE}/#website`]) {
  const definedOn = [];
  for (const p of pages) {
    for (const block of p.jsonLd) {
      try {
        const parsed = JSON.parse(block);
        const nodes = parsed['@graph'] ?? [parsed];
        for (const node of nodes) {
          if (node['@id'] === id && Object.keys(node).length > 2) definedOn.push(p.url);
        }
      } catch {
        /* already reported */
      }
    }
  }
  if (definedOn.length === 0) add('error', 'schema', id, 'Entity is referenced but never defined.');
  if (definedOn.length > 2) {
    add('warn', 'schema', id, `Fully defined on ${definedOn.length} pages: ${definedOn.join(', ')}`);
  }
}

/* ----------------------------- sitemap ------------------------------ */

let sitemapUrls = new Set();
try {
  const index = await readFile(path.join(DIST, 'sitemap-index.xml'), 'utf8');
  const parts = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const part of parts) {
    const file = path.join(DIST, path.basename(new URL(part).pathname));
    const xml = await readFile(file, 'utf8');
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapUrls.add(m[1]);
  }
} catch (error) {
  add('error', 'sitemap', '/sitemap-index.xml', `Could not read sitemap: ${error.message}`);
}

if (sitemapUrls.size) {
  for (const p of indexable) {
    if (!sitemapUrls.has(`${SITE}${p.url}`)) {
      add('error', 'sitemap', p.url, 'Indexable page missing from the XML sitemap.');
    }
  }
  for (const url of sitemapUrls) {
    const rel = url.replace(SITE, '');
    if (NON_INDEXABLE.has(rel)) {
      add('error', 'sitemap', rel, 'Non-indexable page present in the XML sitemap.');
    }
  }
}

/* ------------------------------ report ------------------------------ */

const errors = findings.filter((f) => f.level === 'error');
const warnings = findings.filter((f) => f.level === 'warn');

const byCheck = new Map();
for (const f of findings) {
  const arr = byCheck.get(f.check) ?? [];
  arr.push(f);
  byCheck.set(f.check, arr);
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ pages: pages.length, findings }, null, 2));
} else {
  console.log(`\nAudited ${pages.length} built pages (${indexable.length} indexable).\n`);

  for (const [check, list] of [...byCheck.entries()].sort()) {
    const e = list.filter((f) => f.level === 'error').length;
    const w = list.length - e;
    console.log(`${check.padEnd(28)} ${String(e).padStart(4)} errors  ${String(w).padStart(4)} warnings`);
  }

  if (errors.length) {
    console.log('\n--- errors ---');
    for (const f of errors.slice(0, 200)) {
      console.log(`  [${f.check}] ${f.page}\n      ${f.detail}`);
    }
    if (errors.length > 200) console.log(`  … and ${errors.length - 200} more`);
  }

  if (warnings.length) {
    console.log('\n--- warnings ---');
    for (const f of warnings.slice(0, 80)) {
      console.log(`  [${f.check}] ${f.page}\n      ${f.detail}`);
    }
    if (warnings.length > 80) console.log(`  … and ${warnings.length - 80} more`);
  }

  console.log(`\n${errors.length} errors, ${warnings.length} warnings.\n`);
}

await writeFile(
  path.join(ROOT, 'docs', 'audit-report.json'),
  JSON.stringify({ generated: 'build-time', pages: pages.length, findings }, null, 2),
  'utf8',
);

process.exit(errors.length ? 1 : 0);
