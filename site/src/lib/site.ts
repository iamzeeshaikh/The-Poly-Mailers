/**
 * Single source of truth for brand, contact and market facts.
 *
 * Nothing in this file may be invented. Every value here was supplied in the
 * brief. There is deliberately no address, no opening hours, no company
 * registration number and no local phone number for any market other than the
 * one supplied — adding any of those would produce a false NAP.
 */

export const SITE_URL = 'https://thepolymailers.com';

/**
 * Google Search Console verification token.
 *
 * Rendered into the head of every page rather than the homepage alone. Google
 * only checks the homepage, but a token that exists on one page is a token that
 * silently disappears if that page is ever restructured — and losing
 * verification loses the property's access, not just the badge.
 *
 * Google's own instruction is to leave it in place permanently, so it is not
 * removed after verification succeeds.
 */
export const GOOGLE_SITE_VERIFICATION = 'nZd7_jqxAMyZGqaqTdxyVFKepHtNEvmUFaabsbZVzrw';

/**
 * Stamped once at build time. `priceValidUntil` in Product schema is derived
 * from it, so the offer expiry moves forward with each deploy rather than
 * going stale on a date somebody typed in a year ago.
 */
export const BUILD_DATE = new Date().toISOString().slice(0, 10);

export const BRAND = {
  name: 'The Poly Mailers',
  legalName: 'The Poly Mailers',
  domain: 'thepolymailers.com',
  email: 'info@thepolymailers.com',
  /**
   * Primary contact number, shown wherever a single number is shown. It is the
   * same line as WhatsApp, which is why one value drives both.
   */
  phoneDisplay: '+1 503-461-4788',
  phoneHref: 'tel:+15034614788',
  /**
   * Second published line. Listed alongside the primary number, never instead
   * of it, and never labelled as local to any market — no premises, branch or
   * local presence is implied anywhere on the site.
   */
  phoneAltDisplay: '+44 7458 651107',
  phoneAltHref: 'tel:+447458651107',
  // Same number as the phone line above. It sat on the old company number for
  // a few hours on 2026-09-02, because +1 503-461-4788 had no WhatsApp
  // registered against it and the button told every customer so. It was
  // registered as a WhatsApp sender that afternoon, so the two agree again.
  whatsappDisplay: '+1 503-461-4788',
  whatsappNumber: '15034614788',
  tagline: 'Custom poly mailers made to order for growing brands',
} as const;

/**
 * Published unit price.
 *
 * Supplied by the client and therefore a stated fact rather than an invented
 * one. It is the indicative starting price per mailer, and it is published in
 * two places that must agree: the visible price on the page, and the `Offer` in
 * Product schema.
 *
 * They have to agree because Google treats marked-up content that is not
 * visible on the page as a structured-data violation, and a merchant listing is
 * exactly the kind of markup that gets checked. Anything that renders a price
 * or emits one into schema reads it from here, so the two cannot drift.
 */
export const PRICING = {
  unit: 0.3,
  currency: 'USD',
  /** Rendered form. Kept beside the number so they cannot disagree. */
  display: '$0.30',
  /** Always shown with the price. The figure is a starting point, not a quote. */
  qualifier: 'per unit, indicative — your quotation is priced against your own specification',
  /** Short form, for places where the long qualifier will not fit. */
  qualifierShort: 'per unit, indicative',
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
