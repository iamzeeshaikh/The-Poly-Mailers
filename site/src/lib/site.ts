/**
 * Single source of truth for brand, contact and market facts.
 *
 * Nothing in this file may be invented. Every value here was supplied in the
 * brief. There is deliberately no address, no opening hours, no company
 * registration number and no local phone number for any market other than the
 * one supplied — adding any of those would produce a false NAP.
 */

export const SITE_URL = 'https://thepolymailers.com';

export const BRAND = {
  name: 'The Poly Mailers',
  legalName: 'The Poly Mailers',
  domain: 'thepolymailers.com',
  email: 'info@thepolymailers.com',
  /** Displayed everywhere as the primary contact number. Never labelled by country. */
  phoneDisplay: '+44 7458 651107',
  phoneHref: 'tel:+447458651107',
  whatsappDisplay: '+1 503-358-0443',
  whatsappNumber: '15033580443',
  tagline: 'Custom poly mailers made to order for growing brands',
} as const;

/**
 * Markets served. `serviceStatement` is the only phrasing permitted for each
 * market — it never implies premises, stock held locally, or a delivery time.
 */
export const MARKETS = [
  {
    code: 'US',
    slug: 'usa',
    name: 'United States',
    demonym: 'US',
    serviceStatement: 'Serving customers in the United States',
    currencyNote: 'Quotations for US customers are issued in US dollars.',
  },
  {
    code: 'GB',
    slug: 'uk',
    name: 'United Kingdom',
    demonym: 'UK',
    serviceStatement: 'Shipping custom mailer orders to the United Kingdom',
    currencyNote: 'Quotations for UK customers are issued in pounds sterling.',
  },
  {
    code: 'CA',
    slug: 'canada',
    name: 'Canada',
    demonym: 'Canadian',
    serviceStatement: 'Quote support for Canadian businesses',
    currencyNote: 'Quotations for Canadian customers are issued in Canadian dollars.',
  },
  {
    code: 'AU',
    slug: 'australia',
    name: 'Australia',
    demonym: 'Australian',
    serviceStatement: 'Custom poly mailers for Australian customers',
    currencyNote: 'Quotations for Australian customers are issued in Australian dollars.',
  },
] as const;

export type MarketSlug = (typeof MARKETS)[number]['slug'];

export const MARKET_BY_SLUG = Object.fromEntries(
  MARKETS.map((m) => [m.slug, m]),
) as Record<MarketSlug, (typeof MARKETS)[number]>;

/** Social profiles are omitted until real URLs are supplied — see docs/15. */
export const SOCIAL_PROFILES: string[] = [];

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Build an absolute, trailing-slashed URL from a site-root path. */
export function abs(path: string): string {
  if (path.startsWith('http')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

/**
 * Every internal href must end in a slash. Assets and anchors are left alone.
 */
export function href(path: string): string {
  if (!path.startsWith('/')) return path;
  if (path.includes('#') || path.includes('?')) return path;
  if (/\.[a-z0-9]{2,5}$/i.test(path)) return path;
  return path.endsWith('/') ? path : `${path}/`;
}

/** Pre-filled WhatsApp deep link. Text is page specific at every call site. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
