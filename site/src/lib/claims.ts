/**
 * Claim discipline, enforced by the type system.
 *
 * The brief forbids inventing certifications, material percentages, recycled
 * content, compostability standards, biodegradation timelines, exact gauges,
 * MOQs, delivery times, production times, prices, carrier compatibility, lab
 * results and reviews.
 *
 * Rather than relying on an author remembering that, the content types below
 * simply have nowhere to put those values. A specification is either a list of
 * selectable options confirmed at quotation, or it does not appear.
 */

/** Standing sentence appended wherever a specification is shown. */
export const SPEC_NOTE =
  'Options shown are the choices we can quote against. The exact specification for your order — including film weight, closure and print method — is confirmed in writing on your quotation.';

export const SUSTAINABILITY_NOTE =
  'We do not publish certification marks, recycled-content percentages or breakdown timescales for these materials. Material composition and any supporting documentation are confirmed with your quotation, against the specific film available for your order and market.';

export const IMAGE_ARTWORK_NOTE =
  'Printed messaging shown is artwork chosen by the business that ordered those samples. It is not a claim by The Poly Mailers about the material.';

export const PREVIEW_NOTE =
  'The preview is an approximate visual guide, not a production proof. Position, scale and colour are confirmed on a digital proof that you approve before printing.';

/**
 * A specification row. `options` are the values a customer can pick between.
 * There is no `value` field, so a single fabricated figure cannot be published.
 */
export interface SpecRow {
  /** e.g. "Film weight" */
  label: string;
  /** Selectable choices, e.g. ["Standard", "Heavier duty"] */
  options: readonly string[];
  /** One sentence explaining what changes when you move between the options. */
  note: string;
}

/** Words that must never appear in visible copy. */
export const BANNED_WORDS: readonly string[] = [
  'introducing',
  'functional',
  'embrace',
  'versatility',
  'look no further',
  'unparalleled',
  'tailor-made',
  'tailor made',
  'robust',
  'paramount',
  'crafted',
  'discover',
  'elevate',
  'aesthetic',
  'unleash',
  'versatile',
  'enhance',
  'exquisite',
  'precious',
  'distinctive',
  'exceptional',
  'dive into a world',
  'perfect for',
  'expert',
  'best',
];

/** Heading text that must never be used. */
export const BANNED_HEADINGS: readonly string[] = [
  'conclusion',
  'final thoughts',
];

/**
 * Phrases that assert something we cannot support. The content audit greps the
 * built HTML for these so a stray sentence cannot ship.
 */
export const BANNED_CLAIM_PATTERNS: readonly RegExp[] = [
  /\b\d+\s?%\s?(post[- ]consumer|recycled|pcr)\b/i,
  /\b(home|industrially)\s+compostable\b/i,
  /\bcertified\s+(compostable|biodegradable|recyclable)\b/i,
  /\bbreaks?\s+down\s+in\s+\d+/i,
  /\bdecomposes?\s+(in|within)\s+\d+/i,
  /\b\d+\s?(microns?|mils?|micrometres?)\b/i,
  /\bminimum\s+order\s+(quantity\s+)?(is\s+)?\d/i,
  /\bMOQ\s*(of|:)?\s*\d/i,
  /\b(ships?|delivered|dispatch(ed)?|turnaround|lead time)\s+in\s+\d+\s*(–|-|to)?\s*\d*\s*(working\s+|business\s+)?(day|week)/i,
  /\b(usps|ups|fedex|dhl|royal mail|canada post|australia post)[- ]approved\b/i,
  /\bapproved\s+(by|for)\s+(usps|ups|fedex|dhl)\b/i,
  /\$\s?\d/,
  /\bper\s+(unit|mailer)\s+from\b/i,
  /\b\d+(\.\d+)?\s*(out of 5|\/5)\b/i,
  /\b\d+\s+(reviews|ratings)\b/i,
];
