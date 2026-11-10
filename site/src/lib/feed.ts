/**
 * Google Merchant Center product feed, shared by /merchant-feed.xml (the URL
 * Merchant Center fetches) and the older /google-merchant-feed.xml.
 *
 * Schema markup on a page and a feed here are two different things and Merchant
 * Center wants both: the markup lets Google verify what it crawls, the feed is
 * what actually populates the account. They are generated from the same data
 * and the same PRICING constant, so the price in the feed, the price in the
 * Offer and the "Starting from" price on the page cannot disagree. The price is
 * always the per-unit figure, never a pack total.
 *
 * `id` is the product slug rather than a generated identifier, so it stays
 * stable across rebuilds. Merchant Center treats a changed id as a new product
 * and loses the item's history.
 *
 * `g:shipping` per market: free (0 USD), 4–6 business days handling and 2–3
 * transit, the same figures as /shipping-and-delivery/ and the Offer markup.
 */

import { getImage } from 'astro:assets';
import { products } from '~/data/products';
import { BRAND, PRICING, SITE_URL, abs } from '~/lib/site';
import { MIN_QTY, SHIP_COUNTRIES, SHIPPING_COST, HANDLING_DAYS, TRANSIT_DAYS } from '~/lib/order';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/products/*.{png,jpg,jpeg}',
  { eager: true },
);

/** Office Supplies > Shipping Supplies (Google product taxonomy 2636). */
export const FEED_CATEGORY = 2636;

/**
 * Product slugs left out of the feed. Merchant Center restricts tobacco, vape,
 * CBD and personal-hardship items; this catalog has none, so the list is empty.
 * The build check (scripts/check-feed.mjs) reads the same rule.
 */
export const FEED_EXCLUDE: readonly string[] = [];

/** XML text escaping. Product copy contains ampersands and quotation marks. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function buildFeed(): Promise<Response> {
  const items: string[] = [];

  for (const p of products) {
    if (FEED_EXCLUDE.includes(p.slug)) continue;
    const ref = p.images[0];
    if (!ref) continue;

    const source = modules[`/src/assets/products/${ref.file}`]?.default;
    if (!source) continue;

    const image = await getImage({
      src: source,
      width: 1200,
      height: 1200,
      format: 'jpeg',
      quality: 80,
    });

    const description = `${p.summary} Starting from ${PRICING.display} per unit, minimum order (MOQ) ${MIN_QTY}. Made to order for the United States, United Kingdom, Canada and Australia.`;

    items.push(
      [
        '    <item>',
        `      <g:id>${esc(p.slug)}</g:id>`,
        `      <g:title>${esc(p.name)}</g:title>`,
        `      <g:description>${esc(description)}</g:description>`,
        `      <g:link>${esc(abs(`/${p.slug}/`))}</g:link>`,
        `      <g:image_link>${esc(abs(image.src))}</g:image_link>`,
        '      <g:condition>new</g:condition>',
        '      <g:availability>in_stock</g:availability>',
        `      <g:price>${PRICING.unit.toFixed(2)} ${PRICING.currency}</g:price>`,
        `      <g:brand>${esc(BRAND.name)}</g:brand>`,
        `      <g:mpn>${esc(p.slug)}</g:mpn>`,
        '      <g:identifier_exists>no</g:identifier_exists>',
        '      <g:product_type>Poly mailers</g:product_type>',
        `      <g:google_product_category>${FEED_CATEGORY}</g:google_product_category>`,
        ...SHIP_COUNTRIES.map(
          (c) =>
            `      <g:shipping><g:country>${c.code}</g:country><g:service>Free shipping</g:service><g:price>${SHIPPING_COST.toFixed(2)} ${PRICING.currency}</g:price><g:min_handling_time>${HANDLING_DAYS.min}</g:min_handling_time><g:max_handling_time>${HANDLING_DAYS.max}</g:max_handling_time><g:min_transit_time>${TRANSIT_DAYS.min}</g:min_transit_time><g:max_transit_time>${TRANSIT_DAYS.max}</g:max_transit_time></g:shipping>`,
        ),
        '    </item>',
      ].join('\n'),
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${esc(BRAND.name)}</title>
    <link>${SITE_URL}/</link>
    <description>${esc(`Custom poly mailers made to order for the US, UK, Canada and Australia. Starting from ${PRICING.display} per unit, minimum order (MOQ) ${MIN_QTY}.`)}</description>
${items.join('\n')}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}
