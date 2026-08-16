/**
 * The sitemap, at /sitemap.xml.
 *
 * Written here rather than left to @astrojs/sitemap, which emits a
 * /sitemap-index.xml pointing at /sitemap-0.xml. An index is the right shape
 * above 50,000 URLs; this site has 148, so the index was an extra hop that
 * bought nothing and put the file at a URL nobody thinks to look for.
 *
 * The page list comes from the built routes rather than a hand-kept array, so a
 * new page cannot be added without appearing here.
 */

import type { APIRoute } from 'astro';
import { SITE_URL } from '~/lib/site';

/** Never indexable, so never in the sitemap. Mirrors the noindex on each page. */
const EXCLUDED = new Set(['/thank-you/', '/404/']);

/**
 * Priority tells a crawler which pages matter most when it has to choose. It is
 * a relative hint within one site, not a ranking factor, so the bands are broad
 * on purpose.
 */
function priorityFor(path: string): string {
  if (path === '/') return '1.0';
  if (/^\/(request-a-quote|design-your-poly-mailer)\/$/.test(path)) return '0.9';
  if (/^\/(blog|resources|locations|industries)\//.test(path)) return '0.5';
  if (
    /^\/(privacy-policy|terms-and-conditions|accessibility-statement|custom-order-policy|shipping-and-delivery|sitemap)\/$/.test(
      path,
    )
  ) {
    return '0.2';
  }
  return '0.7';
}

export const GET: APIRoute = async () => {
  // Every prerendered page in the project, discovered at build time.
  const routes = import.meta.glob('./**/*.{astro,md}');

  const paths = new Set<string>();

  for (const file of Object.keys(routes)) {
    let path = file
      .replace(/^\.\//, '/')
      .replace(/\.(astro|md)$/, '')
      .replace(/\/index$/, '/');

    // Dynamic segments are expanded from their own data below.
    if (path.includes('[')) continue;
    if (!path.endsWith('/')) path += '/';
    paths.add(path);
  }

  // The dynamic routes, from the same modules the pages are generated from.
  // Every source that feeds a getStaticPaths is listed here; a source added
  // there and forgotten here is caught by the audit, which compares the sitemap
  // against the built output rather than trusting this list.
  const [
    { products },
    { collections },
    { capabilityPages },
    { policyPages },
    { countryHubs },
    { industries },
    { resources },
    { locations },
    { getCollection },
  ] = await Promise.all([
    import('~/data/products'),
    import('~/data/collections'),
    import('~/data/capabilities'),
    import('~/data/policies'),
    import('~/data/locations'),
    import('~/data/industries'),
    import('~/data/resources'),
    import('~/data/locations'),
    import('astro:content'),
  ]);

  for (const p of products) paths.add(`/${p.slug}/`);
  for (const c of collections) paths.add(`/${c.slug}/`);
  for (const c of capabilityPages) paths.add(`/${c.slug}/`);
  for (const c of policyPages) paths.add(`/${c.slug}/`);
  for (const c of countryHubs) paths.add(`/${c.slug}/`);
  for (const i of industries) paths.add(`/industries/${i.slug}/`);
  for (const r of resources) paths.add(`/resources/${r.slug}/`);
  for (const l of locations) paths.add(`/locations/${l.slug}/`);

  const posts = await getCollection('blog', (e: { data: { draft?: boolean } }) => !e.data.draft);
  for (const post of posts) paths.add(`/blog/${post.id}/`);

  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = [...paths]
    .filter((p) => !EXCLUDED.has(p) && !p.startsWith('/api/'))
    .sort()
    .map(
      (p) =>
        `  <url>\n` +
        `    <loc>${SITE_URL}${p}</loc>\n` +
        `    <lastmod>${lastmod}</lastmod>\n` +
        `    <changefreq>weekly</changefreq>\n` +
        `    <priority>${priorityFor(p)}</priority>\n` +
        `  </url>`,
    );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
};
