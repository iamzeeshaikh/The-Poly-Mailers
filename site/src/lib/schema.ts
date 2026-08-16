/**
 * JSON-LD construction.
 *
 * Rules encoded here rather than left to authors:
 *  - Organization and WebSite are emitted once, on the homepage only, and
 *    referenced by @id everywhere else. No duplicate entities.
 *  - Product carries the published unit price as a single flat Offer, never an
 *    AggregateOffer range. The same figure is rendered on the page, because
 *    marked-up content that is not visible is a structured-data violation.
 *  - Product still carries no rating and no review. There is no review
 *    programme, and fabricated ratings are the fastest way to lose a merchant
 *    listing.
 *  - FAQPage is only ever built from the same array that renders the visible
 *    FAQ block, so schema and page content cannot drift apart.
 *  - No LocalBusiness anywhere: there is no supplied address.
 */

import {
  BRAND,
  BUILD_DATE,
  ORG_ID,
  PRICING,
  SITE_URL,
  WEBSITE_ID,
  abs,
  SOCIAL_PROFILES,
} from './site';
import type { Faq } from '~/data/types';

export type Json = Record<string, unknown>;

export function organization(): Json {
  const org: Json = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: BRAND.name,
    url: `${SITE_URL}/`,
    email: BRAND.email,
    telephone: [BRAND.phoneDisplay, BRAND.phoneAltDisplay],
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
        telephone: [BRAND.phoneDisplay, BRAND.phoneAltDisplay],
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
 * The markets an offer is valid in. Every one of these is a market the site
 * states it supplies, so the list is not aspirational.
 */
const OFFER_REGIONS = ['US', 'GB', 'CA', 'AU'] as const;

/**
 * Return policy attached to every offer.
 *
 * `MerchantReturnNotPermitted`, because /custom-order-policy/ states plainly
 * that a printed run produced to your artwork cannot be restocked, resold or
 * returned. A finite return window would read better in a listing and would
 * contradict the page it links to, which is the kind of mismatch that loses a
 * merchant listing rather than wins one.
 *
 * This is separate from us being wrong. Where an order does not match the
 * approved proof or the written specification we put it right, and the policy
 * page says so — that is a remedy, not a return.
 */
function returnPolicy(): Json {
  return {
    '@type': 'MerchantReturnPolicy',
    '@id': `${SITE_URL}/#returnpolicy`,
    applicableCountry: [...OFFER_REGIONS],
    returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    merchantReturnLink: abs('/custom-order-policy/'),
  };
}

/**
 * Delivery terms attached to every offer.
 *
 * Destinations only. A `deliveryTime` would need handling and transit figures,
 * and the site publishes no lead times anywhere because none was supplied —
 * putting them in the markup would be inventing in JSON what we decline to
 * invent in prose, and Google checks markup against the page.
 */
function shippingDetails(): Json {
  return {
    '@type': 'OfferShippingDetails',
    '@id': `${SITE_URL}/#shipping`,
    shippingDestination: OFFER_REGIONS.map((code) => ({
      '@type': 'DefinedRegion',
      addressCountry: code,
    })),
  };
}

/**
 * The offer carried by every product.
 *
 * A single flat `Offer` at the published unit price rather than an
 * `AggregateOffer` price range: a range implies a top price we have not
 * published, and ranges are the usual cause of merchant listings being rejected
 * for a price that does not match the page.
 *
 * `priceValidUntil` is required by Google for a merchant listing. It is derived
 * from the build date so it never goes stale silently.
 */
function offer(url: string): Json {
  const validUntil = new Date(BUILD_DATE);
  validUntil.setUTCFullYear(validUntil.getUTCFullYear() + 1);

  return {
    '@type': 'Offer',
    '@id': `${url}#offer`,
    url,
    price: PRICING.unit.toFixed(2),
    priceCurrency: PRICING.currency,
    priceValidUntil: validUntil.toISOString().slice(0, 10),
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@id': ORG_ID },
    eligibleRegion: OFFER_REGIONS.map((code) => ({
      '@type': 'Country',
      name: code,
    })),
    hasMerchantReturnPolicy: returnPolicy(),
    shippingDetails: shippingDetails(),
  };
}

export function product(opts: {
  path: string;
  name: string;
  description: string;
  image: string;
  category: string;
  /** Stable identifier for merchant feeds. Derived from the slug, not invented. */
  sku?: string;
}): Json {
  const url = abs(opts.path);
  const sku = opts.sku ?? (opts.path.replace(/\//g, '') || 'poly-mailer');
  return {
    '@type': 'Product',
    '@id': `${url}#product`,
    name: opts.name,
    description: opts.description,
    image: opts.image.startsWith('http') ? opts.image : abs(opts.image),
    category: opts.category,
    sku,
    mpn: sku,
    brand: { '@type': 'Brand', name: BRAND.name },
    manufacturer: { '@id': ORG_ID },
    url,
    offers: offer(url),
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Supply model',
        value: 'Made to order against a written quotation',
      },
      {
        '@type': 'PropertyValue',
        name: 'Pricing basis',
        value: `${PRICING.display} ${PRICING.qualifierShort}`,
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
