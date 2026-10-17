import data from '../data/page-faqs.json';

/**
 * Extra FAQs keyed by route (trailing slash) so every indexable page carries
 * at least ten. Both faqPage() (schema) and FaqList (visible) pass their list
 * through withExtras(route, …), so the two always gain the same questions.
 * Answers may carry one authored <a href="/path/">anchor</a>.
 */
type Faq = { q: string; a: string };
type Entry = { h2: string; faqs: Faq[] };
const DATA = data as Record<string, Entry>;
const norm = (p: string) => (p.endsWith('/') ? p : p + '/');

export const extraHeading = (route: string) => DATA[norm(route)]?.h2 ?? 'Frequently asked questions';
export function withExtras<T extends Faq>(route: string, faqs: readonly T[] = []): Faq[] {
  const seen = new Set(faqs.map((f) => f.q.trim().toLowerCase()));
  return [...faqs, ...(DATA[norm(route)]?.faqs ?? []).filter((f) => !seen.has(f.q.trim().toLowerCase()))];
}
