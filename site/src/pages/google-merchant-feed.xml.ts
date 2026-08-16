/**
 * Google Merchant Center product feed.
 *
 * Schema markup on a page and a feed here are two different things and Merchant
 * Center wants both: the markup lets Google verify what it crawls, the feed is
 * what actually populates the account. They are generated from the same data
 * and the same PRICING constant, so the price in the feed, the price in the
 * Offer and the price on the page cannot disagree — a mismatch between any two
 * of them is the usual reason an account gets items disapproved.
 *
 * `id` is the product slug rather than a generated identifier, so it stays
 * stable across rebuilds. Merchant Center treats a changed id as a new product
 * and loses the item's history.
 */

import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import { products } from '~/data/products';
import { BRAND, PRICING, SITE_URL, abs } from '~/lib/site';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/products/*.{png,jpg,jpeg}',
  { eager: true },
);

/** XML text escaping. Product copy contains ampersands and quotation marks. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const items: string[] = [];

  for (const p of products) {
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

    // Merchant Center caps the description at 5,000 characters. These are far
    // shorter, but the description is the product summary rather than the page
    // intro so it reads as a product description rather than as marketing.
    const description = `${p.summary} ${PRICING.display} ${PRICING.qualifierShort}. Made to order for the United States, United Kingdom, Canada and Australia.`;

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
        // Business &gt; Packaging &amp; Shipping Supplies &gt; Shipping Bags
        '      <g:google_product_category>5581</g:google_product_category>',
        '      <g:unit_pricing_measure>1ct</g:unit_pricing_measure>',
        ...['US', 'GB', 'CA', 'AU'].map(
          (c) => `      <g:shipping><g:country>${c}</g:country></g:shipping>`,
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
    <description>${esc(`Custom poly mailers made to order for the US, UK, Canada and Australia. ${PRICING.display} ${PRICING.qualifierShort}.`)}</description>
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
};
