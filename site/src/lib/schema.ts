/**
 * JSON-LD construction.
 *
 * Rules encoded here rather than left to authors:
 *  - Organization and WebSite are emitted once, on the homepage only, and
 *    referenced by @id everywhere else. No duplicate entities.
 *  - Product never carries a price, availability, SKU, MPN, GTIN, brand
 *    identifier, rating or review, because none of those exist for a
 *    custom-quote manufacturer and none was supplied.
 *  - FAQPage is only ever built from the same array that renders the visible
 *    FAQ block, so schema and page content cannot drift apart.
 *  - No LocalBusiness anywhere: there is no supplied address.
 */

import { BRAND, ORG_ID, SITE_URL, WEBSITE_ID, abs, SOCIAL_PROFILES } from './site';
import type { Faq } from '~/data/types';

export type Json = Record<string, unknown>;

export function organization(): Json {
  const org: Json = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: BRAND.name,
    url: `${SITE_URL}/`,
    email: BRAND.email,
    telephone: BRAND.phoneDisplay,
    description:
      'Custom poly mailer manufacturing and supply for businesses in the United States, United Kingdom, Canada and Australia. Printed, stock, coloured, padded and size-specific mailers, quoted to order.',
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Australia' },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: BRAND.email,
        telephone: BRAND.phoneDisplay,
        availableLanguage: ['English'],
        areaServed: ['US', 'GB', 'CA', 'AU'],
      },
    ],
  };
  // Only emit sameAs when real profile URLs exist.
  if (SOCIAL_PROFILES.length) org.sameAs = SOCIAL_PROFILES;
  return org;
}

export function website(): Json {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: BRAND.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

export interface Crumb {
  name: string;
  href: string;
}

export function breadcrumbs(crumbs: readonly Crumb[]): Json {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(crumbs[crumbs.length - 1]!.href)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function webPage(opts: {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage';
  primaryImage?: string;
  hasBreadcrumb?: boolean;
}): Json {
  const url = abs(opts.path);
  const page: Json = {
    '@type': opts.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en',
  };
  if (opts.hasBreadcrumb) page.breadcrumb = { '@id': `${url}#breadcrumb` };
  if (opts.primaryImage) page.primaryImageOfPage = { '@id': `${url}#primaryimage` };
  return page;
}

export function imageObject(opts: {
  path: string;
  url: string;
  width: number;
  height: number;
  caption: string;
}): Json {
  return {
    '@type': 'ImageObject',
    '@id': `${abs(opts.path)}#primaryimage`,
    url: opts.url.startsWith('http') ? opts.url : abs(opts.url),
    contentUrl: opts.url.startsWith('http') ? opts.url : abs(opts.url),
    width: opts.width,
    height: opts.height,
    caption: opts.caption,
  };
}

/**
 * Product schema for a made-to-order item.
 *
 * There is no `offers`, no `sku`, no `gtin`, no `mpn`, no `aggregateRating` and
 * no `review`. Every one of those would be fabricated. `brand` is the supplying
 * organization, which is true, rather than an invented manufacturer identifier.
 */
export function product(opts: {
  path: string;
  name: string;
  description: string;
  image: string;
  category: string;
}): Json {
  const url = abs(opts.path);
  return {
    '@type': 'Product',
    '@id': `${url}#product`,
    name: opts.name,
    description: opts.description,
    image: opts.image.startsWith('http') ? opts.image : abs(opts.image),
    category: opts.category,
    brand: { '@type': 'Brand', name: BRAND.name },
    manufacturer: { '@id': ORG_ID },
    url,
    isVariantOf: undefined,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Supply model',
        value: 'Made to order against a written quotation',
      },
    ],
  };
}

export function faqPage(path: string, faqs: readonly Faq[]): Json | null {
  if (!faqs.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function itemList(opts: {
  path: string;
  name: string;
  items: readonly { href: string; label: string }[];
}): Json {
  return {
    '@type': 'ItemList',
    '@id': `${abs(opts.path)}#itemlist`,
    name: opts.name,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: abs(it.href),
      name: it.label,
    })),
  };
}

export function blogPosting(opts: {
  path: string;
  headline: string;
  description: string;
  image: string;
  published: string;
  modified: string;
  author: string;
  reviewedBy?: string;
  wordCount?: number;
}): Json {
  const url = abs(opts.path);
  const node: Json = {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    image: opts.image.startsWith('http') ? opts.image : abs(opts.image),
    datePublished: opts.published,
    dateModified: opts.modified,
    author: { '@type': 'Person', name: opts.author },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    inLanguage: 'en',
    isAccessibleForFree: true,
  };
  if (opts.reviewedBy) {
    node.reviewedBy = { '@type': 'Person', name: opts.reviewedBy };
  }
  if (opts.wordCount) node.wordCount = opts.wordCount;
  return node;
}

/** Wrap a set of nodes into a single @graph so nothing is emitted twice. */
export function graph(nodes: readonly (Json | null | undefined)[]): string {
  const clean = nodes.filter(Boolean) as Json[];
  return JSON.stringify(
    { '@context': 'https://schema.org', '@graph': clean },
    (_key, value) => (value === undefined ? undefined : value),
  );
}
