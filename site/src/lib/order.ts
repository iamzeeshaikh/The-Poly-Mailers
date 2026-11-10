/**
 * One price, one shipping story and one set of payment methods for every surface
 * that sells: the product-page order box, the Product Offer JSON-LD (PRICING.unit,
 * the same figure), the Merchant feed, /checkout/ and /api/order/, which re-prices
 * every line from here and never trusts the browser.
 *
 * Facts as the site states them: from $0.30 per unit (PRICING, the live Offer
 * price), minimum order 100, up to 5,000 per design online, shipped to the
 * United States, United Kingdom, Canada and Australia. Shipping is free to all
 * four; production takes 4–6 business days after proof approval and delivery
 * 2–3 business days (/shipping-and-delivery/), and nothing is printed or paid before the
 * proof is approved. Payment is a PayPal invoice or a bank transfer invoice
 * sent after approval, or cash on delivery for US and Canadian addresses.
 */
import { PRICING } from './site';

export const UNIT_PRICE: number = PRICING.unit; // 0.30
export const PACK_QTY = 100;
export const MIN_QTY = PACK_QTY;
export const MAX_QTY = 5000;
export const CURRENCY = PRICING.currency;
export const ORDER_PREFIX = 'TPM';

export const money = (n: number) =>
  `$${Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
export const UNIT_PRICE_TEXT = money(UNIT_PRICE);

/** Every quantity the order box and checkout offer: 100, 200 … 5,000. */
export const QUANTITIES = Array.from({ length: MAX_QTY / PACK_QTY }, (_, i) => (i + 1) * PACK_QTY);

/** Snaps any number to a legal run: a multiple of 100 between 100 and 5,000, or 0 if unusable. */
export const normalizeQty = (raw: unknown) => {
  const n = Math.round(Number(raw));
  if (!Number.isFinite(n) || n <= 0) return 0;
  const snapped = Math.round(n / PACK_QTY) * PACK_QTY;
  return Math.min(MAX_QTY, Math.max(MIN_QTY, snapped));
};

export const lineTotal = (qty: number) => Math.round(qty * UNIT_PRICE * 100) / 100;

export type ShipCountry = { code: 'US' | 'GB' | 'CA' | 'AU'; name: string };
export const SHIP_COUNTRIES: ShipCountry[] = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
];
export const SHIP_LINE = 'Shipped to the United States, United Kingdom, Canada and Australia';
/** /shipping-and-delivery/: free shipping to the four markets; handling and transit in business days. */
export const SHIPPING_COST = 0;
export const HANDLING_DAYS = { min: 4, max: 6 } as const;
export const TRANSIT_DAYS = { min: 2, max: 3 } as const;
export const FREE_SHIPPING_LINE = 'Free shipping to the United States, United Kingdom, Canada and Australia.';
export const DELIVERY_LINE =
  'Free shipping to the US, UK, Canada and Australia. Production takes 4–6 business days after you approve your free digital proof, and delivery takes 2–3 business days.';

export type PaymentMethod = { id: 'paypal' | 'bank' | 'cod'; name: string; detail: string };
export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'paypal',
    name: 'PayPal invoice',
    detail:
      'We email a PayPal invoice once you approve your free digital proof. Pay with your PayPal balance or by card through PayPal. Production starts when it is paid.',
  },
  {
    id: 'bank',
    name: 'Bank transfer',
    detail:
      'We email an invoice with our bank details once you approve your free digital proof. Production starts when the transfer arrives.',
  },
  {
    id: 'cod',
    name: 'Cash on delivery',
    detail:
      'Nothing is paid up front. You pay the order total when the mailers are delivered. Available for addresses in the United States and Canada.',
  },
];
export const COD_COUNTRIES = ['US', 'CA'];
export const PAYMENT_LINE =
  'Pay by PayPal invoice or bank transfer after you approve your free digital proof, or cash on delivery in the US and Canada.';
