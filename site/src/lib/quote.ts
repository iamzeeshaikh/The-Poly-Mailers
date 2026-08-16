/**
 * Shared quote-form contract.
 *
 * Both the browser and the server endpoint import from here, so the two can
 * never validate different rules. The server treats every field as untrusted
 * regardless of what the client did.
 */

import { hasHeaderInjection } from './headers';

export const MAX_UPLOAD_BYTES = 12 * 1024 * 1024; // 12 MB per file
export const MAX_TOTAL_UPLOAD_BYTES = 24 * 1024 * 1024;
export const MAX_FILES = 3;

/**
 * Allowed artwork uploads. Extension and reported MIME type must BOTH be in the
 * allow list, and the file's leading bytes must match the format it claims to
 * be. A file that passes only one of the three checks is rejected.
 */
export const ALLOWED_UPLOADS = [
  { ext: 'pdf', mimes: ['application/pdf'], magic: ['25504446'] },
  { ext: 'ai', mimes: ['application/postscript', 'application/pdf', 'application/illustrator'], magic: ['25504446', '25215053'] },
  { ext: 'eps', mimes: ['application/postscript', 'application/eps', 'image/eps'], magic: ['25215053', 'c5d0d3c6'] },
  { ext: 'psd', mimes: ['image/vnd.adobe.photoshop', 'application/octet-stream'], magic: ['38425053'] },
  { ext: 'svg', mimes: ['image/svg+xml'], magic: [] },
  { ext: 'png', mimes: ['image/png'], magic: ['89504e47'] },
  { ext: 'jpg', mimes: ['image/jpeg'], magic: ['ffd8ff'] },
  { ext: 'jpeg', mimes: ['image/jpeg'], magic: ['ffd8ff'] },
] as const;

export const ACCEPT_ATTRIBUTE = '.pdf,.ai,.eps,.psd,.svg,.png,.jpg,.jpeg';

export const COUNTRIES = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Other',
] as const;

export const PRODUCT_OPTIONS = [
  '6x9 Poly Mailers',
  '9x12 Poly Mailers',
  '10x13 Poly Mailers',
  '12x15 Poly Mailers',
  '14.5x19 Poly Mailers',
  '19x24 Poly Mailers',
  '24x24 Poly Mailers',
  'Large Poly Mailers',
  'Small Poly Mailers',
  'Pink Poly Mailers',
  'Light Pink Poly Mailers',
  'Colored Poly Mailers',
  'White Poly Mailers',
  'Black Poly Mailers',
  'Blank Poly Mailers',
  'Economy Poly Mailers',
  'Custom Poly Mailers',
  'Custom Frosted Poly Bags',
  'Recycled Poly Mailers',
  'Compostable Poly Mailers',
  'Biodegradable Poly Mailers',
  'Padded Poly Mailers',
  'Poly Bubble Mailers',
  'Personalized Bubble Mailers',
  'Self-Seal Poly Mailers',
  'Apparel Shipping Bags',
  'Bee Poly Mailers',
  'Halloween Poly Mailers',
  'Christmas Poly Mailers',
  'Not sure — please advise',
] as const;

export const QUANTITY_BANDS = [
  'Under 1,000',
  '1,000 – 5,000',
  '5,000 – 10,000',
  '10,000 – 25,000',
  '25,000 – 50,000',
  'Over 50,000',
  'Not sure yet',
] as const;

export interface QuoteFields {
  name: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  size: string;
  quantity: string;
  message: string;
  consent: boolean;
  /** Serialized configuration from the design tool, when present. */
  design?: string;
  /** Which page the enquiry came from — set by a hidden field. */
  source?: string;
}

export type FieldName = keyof QuoteFields;

export type Errors = Partial<Record<FieldName | 'artwork' | 'form', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const FREE_EMAIL_HOSTS = new Set([
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'icloud.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
]);

/** Reject anything that could be used to inject a second header line. */
const HEADER_INJECTION = { test: hasHeaderInjection };

export function validateQuote(fields: Partial<QuoteFields>): Errors {
  const errors: Errors = {};

  const name = (fields.name ?? '').trim();
  if (name.length < 2) errors.name = 'Enter your name so we know who to reply to.';
  else if (name.length > 120) errors.name = 'That name is longer than we can accept.';
  else if (HEADER_INJECTION.test(name)) errors.name = 'Remove line breaks from your name.';

  const email = (fields.email ?? '').trim();
  if (!email) errors.email = 'Enter a business email address so we can send your quotation.';
  else if (email.length > 200) errors.email = 'That email address is longer than we can accept.';
  else if (HEADER_INJECTION.test(email)) errors.email = 'That email address is not valid.';
  else if (!EMAIL_RE.test(email)) errors.email = 'Check the email address — it does not look complete.';

  const phone = (fields.phone ?? '').trim();
  if (phone.length < 6) errors.phone = 'Enter a phone or WhatsApp number we can reach you on.';
  else if (phone.length > 40) errors.phone = 'That number is longer than we can accept.';
  else if (!/^[+()\d\s.-]+$/.test(phone)) errors.phone = 'Use digits, spaces and + only.';

  const country = (fields.country ?? '').trim();
  if (!country) errors.country = 'Select the country the order ships to.';
  else if (!(COUNTRIES as readonly string[]).includes(country)) {
    errors.country = 'Select a country from the list.';
  }

  const product = (fields.product ?? '').trim();
  if (!product) errors.product = 'Choose the product you want quoted.';
  else if (!(PRODUCT_OPTIONS as readonly string[]).includes(product)) {
    errors.product = 'Choose a product from the list.';
  }

  const size = (fields.size ?? '').trim();
  if (size.length > 120) errors.size = 'Keep the size note under 120 characters.';

  const quantity = (fields.quantity ?? '').trim();
  if (!quantity) errors.quantity = 'Give us an approximate quantity so we can price it.';
  else if (!(QUANTITY_BANDS as readonly string[]).includes(quantity)) {
    errors.quantity = 'Choose a quantity band from the list.';
  }

  const message = (fields.message ?? '').trim();
  if (message.length > 4000) errors.message = 'Keep your message under 4,000 characters.';

  if (!fields.consent) {
    errors.consent = 'Please confirm you are happy for us to reply to your enquiry.';
  }

  return errors;
}

/** True when the address looks like a personal mailbox — used only for a hint. */
export function isFreeEmailHost(email: string): boolean {
  const host = email.split('@')[1]?.toLowerCase();
  return host ? FREE_EMAIL_HOSTS.has(host) : false;
}

export function extensionOf(filename: string): string {
  const dot = filename.lastIndexOf('.');
  return dot === -1 ? '' : filename.slice(dot + 1).toLowerCase();
}

/** Escape untrusted text before it is placed into the HTML notification email. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
