import type { SpecRow } from '~/lib/claims';

/* =========================================================================
   Page-body model
   -------------------------------------------------------------------------
   Pages are not templates. Each page supplies an ordered list of blocks and
   chooses its own block types, block order and heading wording. Two pages that
   happen to share a block type still differ in sequence, headings and prose.
   ========================================================================= */

export interface ProseBlock {
  kind: 'prose';
  heading: string;
  /** Optional short line under the heading. */
  standfirst?: string;
  paragraphs: readonly string[];
}

export interface BulletsBlock {
  kind: 'bullets';
  heading: string;
  intro?: string;
  items: readonly { term: string; detail: string }[];
  outro?: string;
}

export interface StepsBlock {
  kind: 'steps';
  heading: string;
  intro?: string;
  steps: readonly { title: string; detail: string }[];
}

export interface SpecsBlock {
  kind: 'specs';
  heading: string;
  intro?: string;
  rows: readonly SpecRow[];
}

export interface CompareBlock {
  kind: 'compare';
  heading: string;
  intro?: string;
  caption: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
  outro?: string;
}

export interface CalloutBlock {
  kind: 'callout';
  heading: string;
  body: string;
  tone?: 'neutral' | 'caution';
}

/** A block that renders a contextual internal link inside its own prose. */
export interface LinkedProseBlock {
  kind: 'linked-prose';
  heading: string;
  /** Prose split around a single contextual link — one link per section, max. */
  before: string;
  link: { href: string; anchor: string };
  after: string;
  extra?: readonly string[];
}

export type Block =
  | ProseBlock
  | BulletsBlock
  | StepsBlock
  | SpecsBlock
  | CompareBlock
  | CalloutBlock
  | LinkedProseBlock;

/* ========================================================================= */

export interface Faq {
  q: string;
  a: string;
}

export interface ImageRef {
  /** Path under src/assets/products, e.g. "pink-poly-mailers/…-01.jpg" */
  file: string;
  /** Page-specific. Never repeated between pages for the same file. */
  alt: string;
  /** Rendered under the image only where it adds information. */
  caption?: string;
}

export interface RelatedLink {
  href: string;
  label: string;
  /** Why this page is next — shown on the card, unique per pairing. */
  reason: string;
}

/** SEO planning record. Present on every indexable page; surfaced in docs. */
export interface PagePlan {
  /** The exact query the page is built to satisfy. */
  intent: string;
  /** Who is searching it. */
  audience: string;
  /** The problem they are trying to solve. */
  problem: string;
  /** What this page knows that its neighbours do not. */
  angle: string;
  primaryKeyword: string;
  supportingKeywords: readonly string[];
  /** Nearest internal competitor and the line between them. */
  nearestPage: string;
  boundary: string;
}

export interface ProductPage {
  slug: string;
  /** Nav / card label. */
  name: string;
  h1: string;
  title: string;
  description: string;
  /** Short line used on grids and in schema. */
  summary: string;
  /** Opening copy — two or three paragraphs, unique to this page. */
  intro: readonly string[];
  plan: PagePlan;
  images: readonly ImageRef[];
  /** Ordered page body. Order differs page to page by design. */
  blocks: readonly Block[];
  faqs: readonly Faq[];
  related: readonly RelatedLink[];
  /** Final call-to-action wording — unique per page. */
  cta: { heading: string; body: string; buttonLabel: string };
  /** Pre-filled WhatsApp text for this page. */
  whatsapp: string;
  /** Collections this product belongs to. */
  collections: readonly string[];
  /** Product category used for grouping and schema. */
  group: 'size' | 'color' | 'print' | 'sustainable' | 'protective' | 'specialty';
  /** Quote-form product preset. */
  quotePreset: string;
}

export interface ContentPage {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  summary: string;
  intro: readonly string[];
  plan: PagePlan;
  blocks: readonly Block[];
  faqs?: readonly Faq[];
  related?: readonly RelatedLink[];
  cta?: { heading: string; body: string; buttonLabel: string };
  whatsapp?: string;
}
