import type { Block, Faq, PagePlan, RelatedLink } from '../types';
import type { MarketSlug } from '~/lib/site';

/**
 * Country hubs.
 *
 * Each states plainly that orders are produced to order and shipped, with no
 * local premises, stock or phone number. The phrasing for each market is taken
 * from MARKETS in src/lib/site.ts and is never varied into something that
 * implies a local presence.
 *
 * These four pages are NOT hreflang alternates of each other. They are
 * different pages about different markets, not localised versions of one page,
 * so no hreflang cluster is declared anywhere on the site.
 */

export interface CountryHub {
  slug: MarketSlug;
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: readonly string[];
  plan: PagePlan;
  /** What differs about supplying this market, authored per country. */
  blocks: readonly Block[];
  faqs: readonly Faq[];
  related: readonly RelatedLink[];
  cta: { heading: string; body: string; buttonLabel: string };
  whatsapp: string;
}

export const countryHubs: readonly CountryHub[] = [
  /* ===================================================================== */
  {
    slug: 'usa',
    name: 'United States',
    h1: 'Poly Mailers for United States Businesses',
    title: 'Poly Mailers USA | Custom Supply for US Businesses',
    description:
      'Custom poly mailers for US businesses. Made to order and shipped to your address, with the specification confirmed in writing before production.',
    intro: [
      'Serving customers in the United States means producing to your specification and shipping to the address you give us. We hold no US warehouse, no branch and no collection point, and this page is explicit about that because a supplier implying otherwise is setting an expectation it cannot meet.',
      'What that changes in practice is one thing: you order to a schedule rather than to a same-week top-up. Everything else — the specification process, the proofing, the quality checks — is the same wherever the order is going.',
    ],
    plan: {
      intent: 'Find a poly mailer supplier for a US business.',
      audience: 'US buyers assessing whether a supplier can serve them.',
      problem: 'Needing to know how supply works when the supplier is not local.',
      angle: 'States the supply model plainly rather than implying a local presence.',
      primaryKeyword: 'poly mailers usa',
      supportingKeywords: ['us poly mailer supplier', 'custom mailers united states', 'shipping bags usa'],
      nearestPage: '/locations/',
      boundary:
        'This page is about supplying the US market. The location pages beneath it are about specific commercial contexts within it.',
    },
    blocks: [
      {
        kind: 'bullets',
        heading: 'How supply works for a US order',
        items: [
          { term: 'Made to order', detail: 'There is no shelf stock to draw from. Every order is produced to the specification you approve.' },
          { term: 'Shipped to your address', detail: 'Business premises, residential address or fulfilment centre — tell us which, because the requirements differ.' },
          { term: 'Quoted in US dollars', detail: 'Quotations for US customers are issued in US dollars.' },
          { term: 'Schedule confirmed in writing', detail: 'Rather than a published lead time that would be wrong for most orders.' },
          { term: 'No local premises', detail: 'No branch, no depot, no collection point, and no US phone number presented as a local one.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'What we will not tell you',
        standfirst: 'Because it would not be true.',
        paragraphs: [
          'We will not describe ourselves as a local supplier, quote a next-day delivery, or imply that stock sits in a warehouse near you. None of those is the case, and a buyer who plans around them will be let down.',
          'We also do not claim compatibility or approval with any carrier. Poly mailers are widely used across every major network, and whether a particular service accepts a particular parcel is a question for that carrier rather than for a packaging supplier.',
          'What we do instead is confirm a schedule for your specific order in writing, so you are planning against a real date.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Ordering for the first time',
        before:
          'A first order into a new supplier relationship is worth structuring carefully: samples first to settle the size, then a modest first run rather than a year of stock, then volume once the specification has proved itself in your own operation. The decisions to settle before requesting a price are set out in the ',
        link: { href: '/resources/custom-mailer-ordering-checklist/', anchor: 'ordering checklist' },
        after: ', which is worth working through before contacting anyone.',
      },
    ],
    faqs: [
      {
        q: 'Do you have a warehouse in the United States?',
        a: 'No. Every order is manufactured to your specification and shipped to the address you provide. There is no local stock, no branch and no collection point, which is why we confirm a production and delivery schedule in writing rather than implying immediate availability.',
      },
      {
        q: 'What currency are US quotations issued in?',
        a: 'US dollars. Currency, shipping arrangements and any applicable charges are all stated on the quotation rather than assumed.',
      },
      {
        q: 'Can you deliver to a fulfilment centre?',
        a: 'Yes, and it is worth saying so at enquiry stage. Fulfilment centres frequently have specific labelling, palletisation and booking requirements that need to be built into the order rather than added afterwards.',
      },
      {
        q: 'Are your mailers approved by any carrier?',
        a: 'We make no carrier approval or compatibility claims. Poly mailers are widely used across every major network, and whether a specific service accepts a specific parcel is a question for that carrier.',
      },
    ],
    related: [
      { href: '/locations/', label: 'All locations', reason: 'Every market and region we write about.' },
      { href: '/request-a-quote/', label: 'Request a quotation', reason: 'The fastest route to a written price.' },
      { href: '/shipping-and-delivery/', label: 'Shipping and delivery', reason: 'What is confirmed on your quotation.' },
    ],
    cta: {
      heading: 'Quote a US order',
      body: 'Tell us what you ship, roughly how many and where it goes. We will confirm a specification, a schedule and a price in writing.',
      buttonLabel: 'Request a US quotation',
    },
    whatsapp: 'Hi, I am in the United States and would like a quotation for poly mailers.',
  },

  /* ===================================================================== */
  {
    slug: 'uk',
    name: 'United Kingdom',
    h1: 'Poly Mailers for United Kingdom Businesses',
    title: 'Poly Mailers UK | Polythene Mailing Bags to Order',
    description:
      'Custom polythene mailing bags and poly mailers for UK businesses, made to order and shipped to your address with a written specification.',
    intro: [
      'Shipping custom mailer orders to the United Kingdom means producing to your specification and delivering to your address. There is no UK warehouse, no trade counter and no local stock, and this page says so plainly.',
      'UK buyers often use different vocabulary — polythene mailing bags, mailing pouches, plastic postal envelopes — for the same product. They all describe what is on this site, and the specification conversation is the same whichever term you started from.',
    ],
    plan: {
      intent: 'Find a poly mailer or polythene mailing bag supplier for a UK business.',
      audience: 'UK buyers assessing supply, often searching with different terminology.',
      problem: 'Needing to know how supply works, and whether the terminology matches what they want.',
      angle: 'Addresses UK terminology explicitly alongside the supply model.',
      primaryKeyword: 'polythene mailing bags',
      supportingKeywords: [
        'poly mailers uk',
        'plastic mailing bags',
        'mailing pouches',
        'plastic postal envelopes',
      ],
      nearestPage: '/locations/',
      boundary:
        'This page is about supplying the UK market. The city pages beneath it cover specific commercial contexts within it.',
    },
    blocks: [
      {
        kind: 'bullets',
        heading: 'Terminology, resolved',
        intro:
          'UK buyers arrive using several different terms. These all describe the same range.',
        items: [
          { term: 'Polythene mailing bags', detail: 'The most common UK term for what this site calls poly mailers.' },
          { term: 'Mailing pouches', detail: 'Usually the same product, occasionally used for smaller formats specifically.' },
          { term: 'Plastic postal envelopes', detail: 'Generally the same thing again, sometimes implying a lighter format.' },
          { term: 'Poly mailers', detail: 'The term used across this site, adopted from the US market where it is standard.' },
        ],
        outro:
          'If you are unsure whether we make what you are describing, send a photograph of what you currently use. It settles the question faster than vocabulary does.',
      },
      {
        kind: 'bullets',
        heading: 'How supply works for a UK order',
        items: [
          { term: 'Made to order', detail: 'Produced to the specification you approve rather than picked from stock.' },
          { term: 'Shipped to your address', detail: 'Tell us about access constraints — no loading bay, upper floors, restricted streets — at quotation stage.' },
          { term: 'Quoted in pounds sterling', detail: 'Quotations for UK customers are issued in pounds sterling.' },
          { term: 'Schedule confirmed in writing', detail: 'For your specific order rather than as a published figure.' },
          { term: 'No UK premises', detail: 'No warehouse, no trade counter and no collection point.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'The measurement that matters most here',
        before:
          'UK small-parcel pricing is unusually sensitive to parcel thickness, because format thresholds are built around it. For businesses shipping small items in volume, sizing to stay inside a letterbox band is frequently a larger cost lever than anything else in the packaging specification. How to work that out from a real packed parcel is covered on the ',
        link: { href: '/locations/london/', anchor: 'London page' },
        after: ', which deals with format thresholds specifically.',
      },
    ],
    faqs: [
      {
        q: 'Do you supply polythene mailing bags in the UK?',
        a: 'Yes. Polythene mailing bags, mailing pouches and plastic postal envelopes all describe the range on this site. Orders are made to your specification and shipped to your UK address; we hold no UK stock.',
      },
      {
        q: 'What currency are UK quotations issued in?',
        a: 'Pounds sterling. Currency, shipping arrangements and any applicable charges are stated on the quotation rather than assumed.',
      },
      {
        q: 'Can you deliver where there is no loading bay?',
        a: 'Yes, but tell us at quotation stage. No bay, no lift, restricted street access or stairs all change how an order should be structured, and it is far easier to plan around than to run into on the day.',
      },
      {
        q: 'Do you make bags that fit through a letterbox?',
        a: 'We make formats that can, depending on what you put in them — thickness rather than the bag decides it. Check the current format thresholds with your carrier, then measure a real packed parcel against them.',
      },
    ],
    related: [
      { href: '/locations/', label: 'All locations', reason: 'Every market and region we write about.' },
      { href: '/locations/london/', label: 'London', reason: 'Postal format thresholds in detail.' },
      { href: '/request-a-quote/', label: 'Request a quotation', reason: 'The fastest route to a written price.' },
    ],
    cta: {
      heading: 'Quote a UK order',
      body: 'Tell us what you ship and roughly how many. Send a photograph of what you currently use if the terminology is unclear.',
      buttonLabel: 'Request a UK quotation',
    },
    whatsapp: 'Hi, I am in the UK and would like a quotation for polythene mailing bags.',
  },

  /* ===================================================================== */
  {
    slug: 'canada',
    name: 'Canada',
    h1: 'Poly Mailers for Canadian Businesses',
    title: 'Poly Mailers Canada | Custom Supply for CA Business',
    description:
      'Custom poly mailers for Canadian businesses, made to order and shipped to your address with documentation and charges stated on the quotation.',
    intro: [
      'Quote support for Canadian businesses means producing to your specification and shipping to your address, with the documentation and any charges stated in writing rather than left to arrive as a surprise.',
      'Two things come up more often here than in other markets: what applies under Canadian plastics regulation, and language requirements for packaging sold in Quebec. Both are addressed on this site, with the caveat that we are packaging manufacturers rather than legal advisers.',
    ],
    plan: {
      intent: 'Find a poly mailer supplier for a Canadian business.',
      audience: 'Canadian buyers assessing supply, often with regulatory questions.',
      problem: 'Needing supply information plus clarity on regulation and language requirements.',
      angle: 'Addresses the two questions Canadian buyers actually raise, and is explicit about the limits of our advice.',
      primaryKeyword: 'poly mailers canada',
      supportingKeywords: ['canadian mailer supplier', 'shipping bags canada', 'custom mailers canada'],
      nearestPage: '/locations/',
      boundary:
        'This page is about supplying the Canadian market. The city pages beneath it cover specific contexts within it.',
    },
    blocks: [
      {
        kind: 'bullets',
        heading: 'How supply works for a Canadian order',
        items: [
          { term: 'Made to order', detail: 'Produced to the specification you approve rather than drawn from local stock.' },
          { term: 'Shipped to your address', detail: 'With arrangements confirmed for the destination rather than assumed.' },
          { term: 'Quoted in Canadian dollars', detail: 'Quotations for Canadian customers are issued in Canadian dollars.' },
          { term: 'Documentation and charges stated', detail: 'On the quotation, before you commit, rather than arriving with the shipment.' },
          { term: 'No Canadian premises', detail: 'No warehouse, no branch and no collection point.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'The two questions Canadian buyers ask',
        paragraphs: [
          'The first is regulatory: whether shipping mailers fall within Canadian single-use plastics rules. Our understanding is that they have not generally been within the specified categories addressed, but that is not a legal opinion, the position changes, and provincial and municipal rules add layers. Confirm what applies to your business with your own adviser.',
          'The second is language: what is required for packaging sold in Quebec. Language legislation affects commercial communication including packaging, and businesses selling there plan artwork around it rather than translating afterwards. Again, what your specific business must do is a question for someone qualified to answer it.',
          'On both, our contribution is documentation and accurate material information rather than advice. That is more useful to whoever does advise you than a reassuring answer would be.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Cross-border shipping',
        before:
          'A large share of Canadian ecommerce ships into the United States, and a cross-border parcel is a different object from a domestic one: more custody changes, documentation that must stay attached, and the possibility of inspection. What that means for the packaging specification is set out on the ',
        link: { href: '/locations/toronto/', anchor: 'cross-border shipping page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Are poly mailers affected by Canadian single-use plastics regulation?',
        a: 'Our understanding is that shipping mailers have not generally fallen within the specified categories addressed, but that is not a legal opinion and the position changes. Confirm what applies to your business with your own adviser; we will supply the material documentation they need.',
      },
      {
        q: 'Can you print packaging in French and English?',
        a: 'Yes. The practical constraint is space rather than process — copy roughly doubles while the panel does not, so most bilingual layouts sit most comfortably split across the front and back.',
      },
      {
        q: 'What currency are Canadian quotations issued in?',
        a: 'Canadian dollars, with documentation, charges and shipping arrangements all stated on the quotation rather than assumed.',
      },
      {
        q: 'Do you hold stock in Canada?',
        a: 'No. Every order is produced to your specification and shipped to your address, with the schedule confirmed in writing rather than implied.',
      },
    ],
    related: [
      { href: '/locations/', label: 'All locations', reason: 'Every market and region we write about.' },
      { href: '/locations/montreal/', label: 'Montreal', reason: 'French-language packaging in practice.' },
      { href: '/locations/vancouver/', label: 'Vancouver', reason: 'What Canadian plastics regulation covers.' },
    ],
    cta: {
      heading: 'Quote a Canadian order',
      body: 'Tell us what you ship, where it goes and whether packaging needs to carry French wording. We will quote and confirm the documentation.',
      buttonLabel: 'Request a Canadian quotation',
    },
    whatsapp: 'Hi, I am in Canada and would like a quotation for custom poly mailers.',
  },

  /* ===================================================================== */
  {
    slug: 'australia',
    name: 'Australia',
    h1: 'Poly Mailers for Australian Businesses',
    title: 'Poly Mailers Australia | Custom Supply for AU Business',
    description:
      'Custom poly mailers for Australian customers, made to order and shipped with the schedule confirmed in writing — because lead time matters here.',
    intro: [
      'Custom poly mailers for Australian customers are produced to your specification and shipped to your address. There is no Australian warehouse and no local stock, which matters more in this market than in any other we serve.',
      'Distance makes lead time a genuine planning input rather than an afterthought. That is the defining practical difference for Australian buyers, and it shapes almost every recommendation on this page.',
    ],
    plan: {
      intent: 'Find a poly mailer supplier for an Australian business.',
      audience: 'Australian buyers assessing supply, with lead time as the primary concern.',
      problem: 'Needing to plan around distance from suppliers rather than assume a fast top-up.',
      angle: 'Treats lead time as the central planning fact rather than as a footnote.',
      primaryKeyword: 'poly mailers australia',
      supportingKeywords: ['australian mailer supplier', 'shipping bags australia', 'custom mailers australia'],
      nearestPage: '/locations/',
      boundary:
        'This page is about supplying the Australian market. The city pages beneath it cover specific contexts within it.',
    },
    blocks: [
      {
        kind: 'bullets',
        heading: 'How supply works for an Australian order',
        items: [
          { term: 'Made to order', detail: 'Produced to your approved specification rather than drawn from local stock.' },
          { term: 'Schedule confirmed in writing', detail: 'And with the critical path identified, which for printed work is usually proof approval rather than production.' },
          { term: 'Quoted in Australian dollars', detail: 'Quotations for Australian customers are issued in Australian dollars.' },
          { term: 'Documentation and charges stated', detail: 'On the quotation, before you commit.' },
          { term: 'No Australian premises', detail: 'No warehouse, no branch and no collection point.' },
        ],
      },
      {
        kind: 'steps',
        heading: 'Planning an Australian order',
        intro:
          'Five habits that keep lead time from becoming a supply problem.',
        steps: [
          { title: 'Work from a date, not a duration', detail: 'Fix when stock must be on the bench and work backwards through production and approval.' },
          { title: 'Hold a real buffer', detail: 'The cost of holding stock is lower than the cost of not being able to ship, and the gap is wider here than elsewhere.' },
          { title: 'Settle artwork early', detail: 'Proof approval is the step most within your control and the one that most often delays a delivery.' },
          { title: 'Keep plain stock as a fallback', detail: 'So a delayed printed run never stops orders leaving.' },
          { title: 'Reorder at a stock level', detail: 'Rather than on a calendar, so the trigger reflects actual usage.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'A calendar that runs the other way',
        before:
          'Seasonal packaging planning here does not follow the northern templates most design and most advice assume. Peak retail arrives with summer, which means ordering during the quietest part of the year and holding stock through the warmest weeks — the conditions in which closure adhesive ages fastest. What that means in practice is set out on the ',
        link: { href: '/locations/brisbane/', anchor: 'southern-calendar planning page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Do you ship to Australia?',
        a: 'Yes. Orders are produced to your specification and shipped to your Australian address, with arrangements, documentation and timing confirmed in writing on the quotation.',
      },
      {
        q: 'How much stock should an Australian business hold?',
        a: 'More than the usual advice suggests, because that advice assumes a fast top-up. A genuine buffer costs less than a stockout, provided it is stored cool, dry and out of direct sunlight.',
      },
      {
        q: 'What currency are Australian quotations issued in?',
        a: 'Australian dollars, with documentation, charges and shipping arrangements stated on the quotation rather than assumed.',
      },
      {
        q: 'What is the biggest cause of delay on an Australian order?',
        a: 'Artwork approval, for printed work — and it is the step most within your control. Settling the design and approving the proof early removes most of the schedule risk before production is even scheduled.',
      },
    ],
    related: [
      { href: '/locations/', label: 'All locations', reason: 'Every market and region we write about.' },
      { href: '/locations/sydney/', label: 'Sydney', reason: 'Lead-time planning in detail.' },
      { href: '/locations/brisbane/', label: 'Brisbane', reason: 'Seasonal planning on a southern calendar.' },
    ],
    cta: {
      heading: 'Quote an Australian order',
      body: 'Tell us when stock has to be on your bench and what you ship. We will work backwards and confirm a schedule you can plan against.',
      buttonLabel: 'Request an Australian quotation',
    },
    whatsapp: 'Hi, I am in Australia and would like a quotation for custom poly mailers.',
  },
];

export const countryBySlug = new Map(countryHubs.map((c) => [c.slug, c]));
