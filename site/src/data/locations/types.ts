import type { Block, Faq, RelatedLink } from '../types';
import type { MarketSlug } from '~/lib/site';

/**
 * Location page record.
 *
 * The point of this shape is that a location page cannot be produced by
 * substituting a name. Every field below is authored per location: the opening
 * angle, the sectors named, the products recommended and why, the body blocks
 * (including their order and their kind), the FAQs and the closing wording.
 *
 * There is deliberately no field for a population figure, a market-size
 * statistic, a local address or a local phone number. None was supplied, and
 * inventing local facts is exactly the failure mode this structure prevents.
 */
export interface LocationPage {
  slug: string;
  /** Place name as it appears in prose. */
  name: string;
  /** Market this place belongs to. */
  market: MarketSlug;
  /** "state" | "city" — controls breadcrumb and hub grouping. */
  kind: 'state' | 'city';
  /** Region grouping on the country hub, e.g. "West", "Midlands". */
  region: string;
  h1: string;
  title: string;
  description: string;
  /** One line for hub grids. */
  summary: string;
  /** Authored opening. Two paragraphs, different in structure per page. */
  intro: readonly string[];
  /** The angle this page takes that no other location page takes. */
  angle: string;
  primaryKeyword: string;
  supportingKeywords: readonly string[];
  /** Sectors that plausibly buy mailers here, each with a specific reason. */
  sectors: readonly { name: string; note: string }[];
  /** Product slugs with a location-specific reason. */
  recommended: readonly { slug: string; why: string }[];
  /** Authored body blocks. Order and kind vary between pages by design. */
  blocks: readonly Block[];
  faqs: readonly Faq[];
  related: readonly RelatedLink[];
  cta: { heading: string; body: string; buttonLabel: string };
  whatsapp: string;
}
