import type { Block, Faq, PagePlan, RelatedLink } from './types';

/**
 * Industry pages.
 *
 * Each one is built around the operational problem that sector actually has,
 * not around "packaging for X". The recommended products, the section order,
 * the FAQs and the CTA wording all differ, because a subscription box and an
 * electronics accessory seller have almost nothing in common beyond both
 * putting things in bags.
 */

export interface IndustryPage {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  /** One line for the hub grid. */
  summary: string;
  intro: readonly string[];
  plan: PagePlan;
  /** Product slugs with a sector-specific reason for each. */
  recommended: readonly { slug: string; why: string }[];
  blocks: readonly Block[];
  faqs: readonly Faq[];
  related: readonly RelatedLink[];
  cta: { heading: string; body: string; buttonLabel: string };
  whatsapp: string;
}

export const industries: readonly IndustryPage[] = [
  /* ===================================================================== */
  {
    slug: 'clothing-and-apparel',
    name: 'Clothing and apparel',
    h1: 'Poly Mailers for Clothing and Apparel',
    title: 'Poly Mailers for Clothing Brands | Apparel Packaging',
    description:
      'Packaging for garment fulfilment — sizing across a range that varies in bulk, returns handling, and keeping presentation consistent at volume.',
    summary: 'Sizing across a varied range, and building returns into the packaging decision.',
    intro: [
      'Apparel is the largest single use of poly mailers, and it has a problem no other category has to the same degree: the same brand ships a pair of socks and a padded coat, and both have to arrive looking like they came from the same place.',
      'The second problem is returns. A category with fashion-level return rates is not really running one packaging flow, it is running two — outbound and inbound — and packaging chosen only for the first makes the second more expensive than it needs to be.',
    ],
    plan: {
      intent: 'Find packaging suited to a clothing brand’s operation.',
      audience: 'Apparel brand operations and fulfilment leads.',
      problem: 'One range spans hugely different garment bulks, with high return rates on top.',
      angle: 'Treats packaging as a two-way flow rather than an outbound-only decision.',
      primaryKeyword: 'poly mailers for clothing',
      supportingKeywords: [
        'apparel packaging',
        'clothing shipping bags',
        'garment mailers',
      ],
      nearestPage: '/apparel-shipping-bags/',
      boundary:
        'The product page specifies the bag. This page covers the operation the bag sits inside.',
    },
    recommended: [
      { slug: 'apparel-shipping-bags', why: 'Built around garment fulfilment rather than a dimension.' },
      { slug: '10x13-poly-mailers', why: 'The size most apparel operations build their standard around.' },
      { slug: '14-5x19-poly-mailers', why: 'Where hoodies and outerwear go without straining a seal.' },
      { slug: 'self-seal-poly-mailers', why: 'The double-strip closure that turns a return into one bag instead of two.' },
      { slug: 'custom-frosted-poly-bags', why: 'Presentation layer for garments that go into retail or arrive as a gift.' },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Two flows, not one',
        standfirst: 'Outbound is half of what your packaging has to do.',
        paragraphs: [
          'Every packaging decision in apparel should be tested twice: once on the way out and once on the way back. A single-strip mailer works perfectly outbound and forces a customer to find their own packaging for a return, which produces a worse return experience and a second consumable somewhere in the chain.',
          'A double adhesive strip changes that. The customer repacks in the same bag, reseals it and sends it back. It costs a little more per unit and removes a whole step from a process that, in fashion, happens on a meaningful share of orders.',
          'The arithmetic is simple: multiply the extra cost per mailer by your total volume, and compare it against your return rate multiplied by the cost of a returns bag plus the support contacts about how to send something back.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where apparel packaging goes wrong',
        intro:
          'Five failures we see repeatedly, all of them avoidable at specification stage.',
        items: [
          {
            term: 'One size across a range that varies in bulk',
            detail:
              'Socks in a hoodie bag looks careless; a hoodie in a tee bag bursts. Two or three sizes is almost always the right answer.',
          },
          {
            term: 'Pale film over dark garments',
            detail:
              'A black hoodie shadowing through a white mailer reads as cheap. Specify higher opacity or use a darker base.',
          },
          {
            term: 'Sizing on a desk fold',
            detail:
              'The fold your operations manager achieves is not the fold your team achieves at four in the afternoon.',
          },
          {
            term: 'Artwork with no label plan',
            detail:
              'A centred front design gets covered on a large share of parcels unless a clear zone is designed in.',
          },
          {
            term: 'Treating wholesale and direct the same',
            detail:
              'One garment to a customer and forty to a stockist are different problems that need different bags.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'A size mix that covers a typical range',
        intro:
          'Start here, then test with your own five most-shipped products before committing.',
        caption: 'A three-size mix mapped against a typical apparel range.',
        columns: ['Size', 'Covers', 'Share of orders it typically handles'],
        rows: [
          ['9x12 or 10x13', 'Tees, tops, leggings, swim, accessories', 'The large majority'],
          ['12x15', 'Knitwear, denim, two to three item orders', 'A meaningful minority'],
          ['14.5x19 or larger', 'Hoodies, outerwear, bundles, wholesale', 'A small share, but the one that fails without it'],
        ],
        outro:
          'The third row is the one businesses skip, and it is the one that generates damage claims when they do.',
      },
      {
        kind: 'linked-prose',
        heading: 'Presentation inside the parcel',
        before:
          'Some brands bag the garment before it goes in the mailer, so the piece arrives folded, clean and presented rather than loose. It also gives the customer something to unwrap and leaves them a resealable bag they will keep. Whether that second layer earns its cost is a brand decision rather than a logistics one, and the format is covered on the ',
        link: { href: '/custom-frosted-poly-bags/', anchor: 'frosted garment bag page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What size mailer do apparel brands use most?',
        a: 'Ten by thirteen, because it absorbs variation — a folded tee, a two-item order or a garment plus an insert all fit without a packer having to think. Most brands add a larger size for knitwear and outerwear rather than trying to cover everything with one.',
      },
      {
        q: 'Should apparel mailers have a returns strip?',
        a: 'For most clothing brands, yes. Fashion return rates are the highest in retail, and a second adhesive strip means the customer sends the item back in the same bag rather than finding their own packaging.',
      },
      {
        q: 'How do I stop dark clothing showing through the bag?',
        a: 'Specify higher opacity or a heavier film weight, or move to a darker base colour. Black film is fully opaque whatever is inside, which is one reason so many apparel brands use it.',
      },
      {
        q: 'Do I need different packaging for wholesale orders?',
        a: 'Usually. A stockist order of forty pieces needs a large plain bag; a customer order of one needs a branded bag sized to a garment. Most brands run both rather than compromising on a single size.',
      },
    ],
    related: [
      {
        href: '/apparel-shipping-bags/',
        label: 'Apparel Shipping Bags',
        reason: 'The product page, with sizing detail by garment type.',
      },
      {
        href: '/blog/poly-mailers-for-clothing-and-apparel-shipping/',
        label: 'Shipping clothing well',
        reason: 'A longer read on folding, arrival condition and packing at volume.',
      },
      {
        href: '/industries/fashion-boutiques/',
        label: 'Fashion boutiques',
        reason: 'The same category at lower volume, where presentation matters more.',
      },
    ],
    cta: {
      heading: 'Specify packaging for a clothing range',
      body: 'Send us your five most-shipped products and your return rate. We will propose a size mix and a closure, and quote the lot.',
      buttonLabel: 'Get an apparel specification',
    },
    whatsapp: 'Hi, I run a clothing brand and need help specifying mailers for my range.',
  },

  /* ===================================================================== */
  {
    slug: 'ecommerce',
    name: 'Ecommerce',
    h1: 'Poly Mailers for Ecommerce Operations',
    title: 'Poly Mailers for Ecommerce | Packaging at Volume',
    description:
      'Packaging decisions that scale — standardisation, forecasting, bench design and the shipping-band arithmetic that decides real cost per parcel.',
    summary: 'Standardisation, forecasting and the cost per parcel that only shows up at volume.',
    intro: [
      'At low volume, packaging is a purchase. At scale it is an operating system: every decision multiplies by thousands of parcels a month, and the costs that matter stop being the unit price and start being the ones nobody itemises.',
      'Packer decision time. Reorder admin. The proportion of parcels that cross a shipping threshold. Damage rates. Support contacts about returns. All of them are affected by a specification chosen months earlier, and none of them appears on a quotation.',
    ],
    plan: {
      intent: 'Optimise packaging for a high-volume ecommerce operation.',
      audience: 'Operations and supply chain leads running fulfilment at scale.',
      problem: 'Unit price is the visible cost; the expensive ones are invisible until volume rises.',
      angle: 'Total cost per parcel, including the operational costs a quotation never shows.',
      primaryKeyword: 'poly mailers for ecommerce',
      supportingKeywords: [
        'ecommerce packaging',
        'bulk shipping bags',
        'fulfilment packaging',
      ],
      nearestPage: '/economy-poly-mailers/',
      boundary:
        'The economy page is a specification decision. This page is about the operation those specifications run inside.',
    },
    recommended: [
      { slug: '10x13-poly-mailers', why: 'The size to standardise on if your order profile allows it.' },
      { slug: 'economy-poly-mailers', why: 'Where volume justifies a cost-led specification, with the trade-offs named.' },
      { slug: 'blank-poly-mailers', why: 'For multi-brand fulfilment where one logo will not do.' },
      { slug: '19x24-poly-mailers', why: 'Consolidating multi-item orders into one parcel instead of several.' },
      { slug: 'self-seal-poly-mailers', why: 'Seconds saved per parcel at the bench, multiplied by your volume.' },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'The costs a quotation does not show',
        intro:
          'Run these numbers against your own volume before optimising the unit price any further.',
        caption: 'Hidden costs in a packaging specification, and what drives each one.',
        columns: ['Cost', 'Driven by', 'How to reduce it'],
        rows: [
          [
            'Packer decision time',
            'Number of sizes on the bench',
            'Fewer sizes with clear, written rules',
          ],
          [
            'Shipping band crossings',
            'Parcel thickness and weight',
            'Right-size and weigh a real packed sample',
          ],
          [
            'Damage and replacement',
            'Fit and film weight against contents',
            'Test with a drop before switching a flow',
          ],
          [
            'Returns handling',
            'Whether the original bag can be reused',
            'Specify a second adhesive strip',
          ],
          [
            'Reorder admin and stockouts',
            'Number of separate lines to track',
            'Consolidate sizes and order them together',
          ],
        ],
      },
      {
        kind: 'steps',
        heading: 'Reviewing a packaging setup at scale',
        intro:
          'An annual review against real data beats a rolling series of small changes.',
        steps: [
          {
            title: 'Pull your actual order profile',
            detail:
              'Item count and weight distribution across a full month, not an impression of what you send.',
          },
          {
            title: 'Map it to sizes',
            detail:
              'You will usually find two or three sizes cover almost everything, and a fourth covers almost nothing.',
          },
          {
            title: 'Weigh packed samples against your rate card',
            detail:
              'This is where the real money is. A size change that moves parcels across a threshold dwarfs any unit-price saving.',
          },
          {
            title: 'Check your damage data by product type',
            detail:
              'If failures cluster in one category, that is a fit or film-weight problem rather than a general one.',
          },
          {
            title: 'Write the bench rules down',
            detail:
              'Which bag for which order, where the label goes, how to seal. Temporary and new staff cannot infer any of it.',
          },
          {
            title: 'Order the sizes on one run',
            detail:
              'Shared setup, matched batches, one delivery, one reorder point to track.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Standardising, and when not to',
        paragraphs: [
          'One size on the bench removes an entire class of error, and for a range with consistent bulk it is the right answer even though it wastes a little film on the lightest orders.',
          'It stops being the right answer when a meaningful share of orders sits badly in it. If more than roughly a fifth of your parcels are either lost inside the standard size or straining it, the waste and the damage together cost more than the second size would.',
          'The way to know is your own order data rather than a rule of thumb. Pull a month of orders, group them by packed size, and look at the distribution before deciding.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Consolidation as a lever',
        before:
          'Multi-item orders shipped as separate parcels are one of the largest avoidable costs in high-volume fulfilment. Consolidating into a single large mailer removes a whole shipment, but it is not automatically cheaper — a consolidated parcel can cross a weight band that two smaller ones stayed below. Weigh a realistically packed sample before switching a flow, and check it against your own rate card. The formats that make consolidation practical are covered on the ',
        link: { href: '/19x24-poly-mailers/', anchor: 'large consolidation format page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'How many mailer sizes should a high-volume operation run?',
        a: 'Two or three, chosen from real order data rather than from an impression of what you ship. One size wastes film on light orders and strains on heavy ones; four or more introduces bench decisions that get made inconsistently under pressure.',
      },
      {
        q: 'Is buying in bulk always cheaper?',
        a: 'The unit price falls, but you tie up cash and warehouse space, and adhesive ages in storage. Order to a run rate you can actually store properly and rotate, rather than to the largest quantity available.',
      },
      {
        q: 'What is the biggest packaging saving available at scale?',
        a: 'Almost always right-sizing, because it affects the shipping cost on every parcel rather than the packaging cost. Weigh and measure packed samples against your rate card before optimising anything else.',
      },
      {
        q: 'Can you supply unbranded mailers for multi-brand fulfilment?',
        a: 'Yes. Plain stock in several sizes and colours is a common requirement for third-party fulfilment, where one logo on every parcel is not an option.',
      },
    ],
    related: [
      {
        href: '/economy-poly-mailers/',
        label: 'Economy specification',
        reason: 'Where the saving is genuinely free, and where it is not.',
      },
      {
        href: '/size-guide/',
        label: 'Right-sizing method',
        reason: 'The process behind the largest saving available.',
      },
      {
        href: '/blog/packaging-ideas-for-small-ecommerce-businesses/',
        label: 'Packaging at smaller scale',
        reason: 'For operations not yet at the volume this page assumes.',
      },
    ],
    cta: {
      heading: 'Review a packaging setup',
      body: 'Send your order profile and current specification and we will tell you where the cost actually is. Often it is not the unit price.',
      buttonLabel: 'Request a packaging review',
    },
    whatsapp: 'Hi, I run ecommerce fulfilment at volume and want to review our mailer setup.',
  },

  /* ===================================================================== */
  {
    slug: 'fashion-boutiques',
    name: 'Fashion boutiques',
    h1: 'Poly Mailers for Fashion Boutiques',
    title: 'Poly Mailers for Boutiques | Small-Batch Packaging',
    description:
      'Packaging for independent fashion at boutique volumes — getting presentation right without the order quantities a large brand can commit to.',
    summary: 'Presentation at a scale where you cannot order fifty thousand of anything.',
    intro: [
      'A boutique has the same presentation standard as a large fashion house and a fraction of its volume. That is the whole problem: printed packaging gets cheaper with quantity, and quantity is exactly what a small independent does not have.',
      'The way through is not to accept worse packaging. It is to put the money where it shows and to avoid the commitments that only make sense at scale. This page is about getting a considered parcel out of a small order.',
    ],
    plan: {
      intent: 'Find packaging for a small independent fashion business.',
      audience: 'Boutique owners and small fashion labels with limited order volumes.',
      problem: 'Presentation standards of a large brand, without the volume to justify large runs.',
      angle: 'Where to spend and where not to at low volume — the opposite of the ecommerce page.',
      primaryKeyword: 'boutique poly mailers',
      supportingKeywords: [
        'small batch mailers',
        'boutique packaging',
        'independent fashion packaging',
      ],
      nearestPage: '/industries/small-businesses/',
      boundary:
        'This page is specifically about fashion presentation at low volume. The small business page covers any category at that scale.',
    },
    recommended: [
      { slug: 'light-pink-poly-mailers', why: 'Blush tones that read considered rather than promotional.' },
      { slug: 'black-poly-mailers', why: 'A premium signal with no print cost at all.' },
      { slug: 'blank-poly-mailers', why: 'Coloured stock plus a printed sticker — the low-volume answer.' },
      { slug: '10x13-poly-mailers', why: 'The single size that covers most boutique order profiles.' },
      { slug: 'custom-frosted-poly-bags', why: 'A presentation layer that costs less than printing the outer bag.' },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'Where to spend at low volume',
        intro:
          'Ranked by how much presentation you get per pound or dollar spent, at boutique quantities.',
        caption: 'Presentation spending options ranked for a low-volume operation.',
        columns: ['Option', 'Cost at low volume', 'Presentation gained'],
        rows: [
          ['Coloured film instead of white', 'Very small premium', 'Large — recognisable before it is opened'],
          ['Printed sticker or seal', 'Low, and reorderable in small runs', 'Large — carries the mark without a print run'],
          ['Printed tissue or card inside', 'Low', 'Large — it is the first thing seen when the bag opens'],
          ['Matte instead of gloss finish', 'Small premium', 'Moderate — reads as considered, hides marks'],
          ['Full-coverage printed mailer', 'High at small quantities', 'High, but not proportionate to the cost yet'],
        ],
        outro:
          'The first three together cost a fraction of the last one and get you most of the way there. Print the bag when volume makes it sensible, not before.',
      },
      {
        kind: 'bullets',
        heading: 'What a boutique parcel needs to do',
        intro:
          'Different from a volume operation, because the customer relationship is different.',
        items: [
          {
            term: 'Feel deliberate',
            detail:
              'A boutique customer is paying partly for care. A parcel that looks like a warehouse sent it undermines that in the first three seconds.',
          },
          {
            term: 'Photograph well',
            detail:
              'Independent fashion lives on customer content. Matte finishes and coloured film photograph without hotspots; gloss white does not.',
          },
          {
            term: 'Protect a garment that may be the only one',
            detail:
              'A boutique often cannot replace a damaged piece from stock, so arrival condition matters more than at scale.',
          },
          {
            term: 'Handle returns without a second bag',
            detail:
              'Sizing returns are unavoidable in fashion. A double strip costs pennies and saves the whole exchange feeling awkward.',
          },
          {
            term: 'Not commit you to a year of stock',
            detail:
              'Order to a quantity you will actually use in a season, even at a higher unit price.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'A first packaging order for a boutique',
        intro:
          'A sequence that gets you a considered parcel without a large commitment.',
        steps: [
          {
            title: 'Choose one size',
            detail:
              'Your most common order. Cover the outliers with a plain larger bag rather than a second branded one.',
          },
          {
            title: 'Choose a colour, not a print',
            detail:
              'A coloured film is the cheapest recognition available and needs no artwork approval.',
          },
          {
            title: 'Put the money inside',
            detail:
              'A printed card and a seal sticker cost little, reorder in small runs and can change every season.',
          },
          {
            title: 'Specify a returns strip',
            detail: 'Fashion returns are certain. Build for them at the start.',
          },
          {
            title: 'Order a season, not a year',
            detail:
              'The unit price is higher and the flexibility is worth more than the difference at this scale.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'When to move to printed packaging',
        before:
          'Three things usually become true together: your monthly volume stops swinging, your artwork stops changing, and customers start photographing the parcel rather than just the garment. At that point a printed run pays back quickly, and the sensible first version is a single mark on a coloured base rather than full coverage. What that first run involves is set out on the ',
        link: { href: '/custom-poly-mailers/', anchor: 'custom printed mailer page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Can a small boutique order custom printed mailers?',
        a: 'Yes, though the per-unit price is higher because setup spreads across fewer units. Many boutiques get most of the effect for far less by using coloured stock with a printed sticker until volume justifies a printed run.',
      },
      {
        q: 'What is the cheapest way to make a parcel look considered?',
        a: 'A coloured film rather than white, a printed seal sticker, and something printed inside the bag. Together they cost a fraction of a printed run and account for most of what a customer notices.',
      },
      {
        q: 'Which colour suits a boutique brand?',
        a: 'Blush and black are the two most requested, for opposite reasons — one reads soft and considered, the other reads premium and hides handling marks completely. Both work without any printing at all.',
      },
      {
        q: 'How much should I order at boutique volume?',
        a: 'A season rather than a year. The unit price is higher, but flexibility is worth more than the difference when your range and your volumes are both still moving.',
      },
    ],
    related: [
      {
        href: '/light-pink-poly-mailers/',
        label: 'Blush poly mailers',
        reason: 'The tone most requested by boutique and beauty brands.',
      },
      {
        href: '/blank-poly-mailers/',
        label: 'Blank stock',
        reason: 'The low-commitment route while artwork is still settling.',
      },
      {
        href: '/industries/small-businesses/',
        label: 'Small business packaging',
        reason: 'The same volume problem across other categories.',
      },
    ],
    cta: {
      heading: 'Package a boutique range',
      body: 'Tell us your typical order and roughly how many you ship a month. We will suggest where to spend and quote a season rather than a year.',
      buttonLabel: 'Ask for boutique options',
    },
    whatsapp: 'Hi, I run a fashion boutique and want packaging that looks considered at low volume.',
  },

  /* ===================================================================== */
  {
    slug: 'beauty-and-cosmetics',
    name: 'Beauty and cosmetics',
    h1: 'Poly Mailers for Beauty and Cosmetics',
    title: 'Poly Mailers for Beauty Brands | Cosmetics Shipping',
    description:
      'Packaging for beauty fulfilment — protecting glass and pumps, keeping secondary cartons unmarked, and shipping liquids without leak damage spreading.',
    summary: 'Protecting glass, pumps and printed cartons — where the packaging inside matters most.',
    intro: [
      'Beauty ships two fragile things at once. There is the product — glass, pumps, powders — and there is the carton it sits in, which is often the most expensive part of the presentation and the part a customer photographs.',
      'A mailer that protects the contents but lets the carton arrive with scuffed corners has failed at something the customer will notice immediately. That double requirement is what separates beauty packaging from general small-goods shipping.',
    ],
    plan: {
      intent: 'Find packaging for shipping cosmetics and skincare.',
      audience: 'Beauty and skincare brands shipping direct to customers.',
      problem: 'Both the product and its printed carton have to arrive unmarked.',
      angle: 'Protecting secondary packaging, not just contents — a requirement unique to this category.',
      primaryKeyword: 'poly mailers for cosmetics',
      supportingKeywords: [
        'beauty packaging mailers',
        'skincare shipping bags',
        'cosmetics mailers',
      ],
      nearestPage: '/poly-bubble-mailers/',
      boundary:
        'The bubble mailer page explains the construction. This page is about the category’s specific two-layer protection problem.',
    },
    recommended: [
      { slug: 'poly-bubble-mailers', why: 'Impact protection with a film outer that keeps weather off a printed carton.' },
      { slug: 'padded-poly-mailers', why: 'Compare foam against bubble where the risk is scuffing rather than breakage.' },
      { slug: 'light-pink-poly-mailers', why: 'The tone that sits with the palettes the category already uses.' },
      { slug: '6x9-poly-mailers', why: 'Single-item sends — a serum, a lipstick, a sample set.' },
      { slug: 'personalized-bubble-mailers', why: 'Cushioning and branding on the same parcel.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'What actually fails in beauty shipping',
        intro:
          'Four failure modes, and only two of them are about the product breaking.',
        items: [
          {
            term: 'Glass breaking on impact',
            detail:
              'The obvious one. Bubble lining addresses it, and boxing the item first addresses it better.',
          },
          {
            term: 'Carton corners crushing',
            detail:
              'The customer sees this before they see the product. Fit matters more than lining here — a carton that cannot move cannot get crushed at the corner.',
          },
          {
            term: 'Pumps and caps loosening',
            detail:
              'Vibration over a long journey loosens closures. Tape or a seal on the product itself, not a change to the mailer.',
          },
          {
            term: 'Leaks spreading through the parcel',
            detail:
              'One leaking bottle ruins everything it touches. Bagging liquids individually contains the damage to one item instead of the whole order.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'Choosing protection by what you ship',
        intro:
          'Beauty covers a wider range of fragility than most categories, so a single answer does not fit.',
        caption: 'Protection matched to common beauty product types.',
        columns: ['Product', 'Main risk', 'Start with'],
        rows: [
          ['Glass serum or dropper bottle', 'Impact breakage', 'Bubble-lined mailer, boxed first'],
          ['Pump bottle or airless container', 'Closure loosening, impact', 'Bubble lining plus a seal on the pump'],
          ['Compact or palette', 'Cracking under load', 'A rigid carton — cushioning alone will not prevent crushing'],
          ['Sachets, samples, sheet masks', 'Almost none', 'Plain film, small size'],
          ['Printed carton set', 'Corner and surface scuffing', 'Snug fit, foam or bubble, film outer'],
        ],
      },
      {
        kind: 'prose',
        heading: 'The parcel is part of a beauty purchase',
        paragraphs: [
          'Beauty customers photograph and film what arrives more than almost any other category, which means the outside of the parcel is doing work for you or against you the moment it is picked up.',
          'That does not mean it has to be elaborate. A matte film in a tone that matches your secondary packaging, a seal sticker and a printed card inside will read as considered without a full-coverage printed run.',
          'What does read badly is a parcel that arrives scuffed, or a pale bag with the dark shape of the product showing through it. Both are specification problems rather than design problems, and both are cheap to fix.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Sample and gift-with-purchase sends',
        before:
          'Marketing sends are a different problem from order fulfilment. They are small, they go out in bursts, they carry a low-value product and their whole job is to make an impression. A small coloured mailer with something printed inside will outperform a larger protective one, and it costs less. The size that suits these is covered on the ',
        link: { href: '/6x9-poly-mailers/', anchor: 'small-format mailer page' },
        after: ', which deals with what actually fits in a compact parcel.',
      },
    ],
    faqs: [
      {
        q: 'Can I ship glass bottles in a poly mailer?',
        a: 'In a cushioned one, and boxed first. The lining absorbs impact across a face but does not protect an exposed corner, so a boxed bottle inside a bubble-lined mailer is far more reliable than either on its own.',
      },
      {
        q: 'How do I stop cartons arriving scuffed?',
        a: 'Fit does most of the work. A carton that cannot move inside the bag cannot rub or catch at the corners. After that, a lining protects the faces and a film outer keeps weather off the print.',
      },
      {
        q: 'What should I do about liquids leaking?',
        a: 'Bag liquids individually inside the mailer. It will not stop a leak, but it contains it to one item instead of ruining the whole order, which turns a total replacement into a single one.',
      },
      {
        q: 'Which mailer colour suits a beauty brand?',
        a: 'Blush and pale tones dominate the category, and they need an opacity check if your cartons are dark. Black is the alternative where you want the parcel to read premium and hide handling marks completely.',
      },
    ],
    related: [
      {
        href: '/poly-bubble-mailers/',
        label: 'Poly Bubble Mailers',
        reason: 'The construction most beauty brands settle on.',
      },
      {
        href: '/light-pink-poly-mailers/',
        label: 'Blush poly mailers',
        reason: 'Tone and opacity guidance for pale packaging.',
      },
      {
        href: '/protective-mailers/',
        label: 'Protection comparison',
        reason: 'Diagnose which failure you actually have before buying cushioning.',
      },
    ],
    cta: {
      heading: 'Protect a beauty range',
      body: 'Tell us what you ship and what is arriving damaged. We will recommend a construction and a size, and explain the reasoning before quoting.',
      buttonLabel: 'Get a beauty specification',
    },
    whatsapp: 'Hi, I ship cosmetics and need mailers that protect glass and cartons.',
  },

  /* ===================================================================== */
  {
    slug: 'books-and-stationery',
    name: 'Books and stationery',
    h1: 'Poly Mailers for Books and Stationery',
    title: 'Poly Mailers for Books | Print and Stationery Shipping',
    description:
      'Packaging for books, prints and paper goods — preventing corner damage and creasing, and keeping moisture away from printed stock.',
    summary: 'Corners, creasing and moisture — the three things that damage paper in transit.',
    intro: [
      'Paper products fail in ways nothing else does. A book arrives with a bumped corner, a print arrives with a crease across it, a notebook arrives with wavy pages after an hour in the rain. None of those is breakage, and none is prevented by a heavier film.',
      'What prevents them is a snug fit, a stiffener where the item is thin, and a film outer rather than a paper one. This page is about those three things.',
    ],
    plan: {
      intent: 'Find packaging for books, prints and paper goods.',
      audience: 'Independent publishers, print sellers and stationery brands.',
      problem: 'Paper damage is corners, creasing and moisture — not impact.',
      angle: 'The only page on the site about protecting flat, rigid-but-bendable contents.',
      primaryKeyword: 'poly mailers for books',
      supportingKeywords: [
        'book mailers',
        'print shipping bags',
        'stationery packaging',
      ],
      nearestPage: '/9x12-poly-mailers/',
      boundary:
        'The size page covers fit for one folded item. This page covers the specific failure modes of paper products.',
    },
    recommended: [
      { slug: '9x12-poly-mailers', why: 'A close fit for paperbacks and mounted prints, which stops them sliding.' },
      { slug: 'padded-poly-mailers', why: 'Where corner protection matters more than containment.' },
      { slug: '6x9-poly-mailers', why: 'Cards, sticker packs and small print orders.' },
      { slug: '12x15-poly-mailers', why: 'Larger prints, art books and multi-item stationery orders.' },
      { slug: 'poly-bubble-mailers', why: 'A film outer that keeps rain away from printed stock.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'The three ways paper arrives damaged',
        intro:
          'Diagnose which one you have before changing anything, because the fixes are different.',
        items: [
          {
            term: 'Corner damage',
            detail:
              'A book or board-backed print takes the whole force of a drop on one corner. Cushioning helps; a snug fit that stops the item gathering speed helps more.',
          },
          {
            term: 'Creasing and bending',
            detail:
              'Flat items bend when a parcel is flexed. A stiffener — a board, a rigid backing, or the item itself if it is thick enough — is the only real answer.',
          },
          {
            term: 'Moisture',
            detail:
              'Paper does not recover from getting wet. A film outer resists rain; a paper-faced mailer absorbs it and passes it through.',
          },
        ],
        outro:
          'A heavier film addresses none of these. It is the wrong lever for this category, and it costs more.',
      },
      {
        kind: 'compare',
        heading: 'Matching packaging to the item',
        intro:
          'Paper covers a wide range of rigidity, and rigidity is what decides the answer.',
        caption: 'Paper and print products matched to a packaging approach.',
        columns: ['Item', 'Main risk', 'Approach'],
        rows: [
          ['Paperback', 'Corner and spine damage', 'Close fit, cushioned if the cover must be unmarked'],
          ['Hardback', 'Corner damage', 'Cushioned mailer, sized so it cannot move'],
          ['Unmounted print or poster', 'Creasing', 'Board stiffener, or roll it in a tube instead'],
          ['Mounted or board-backed print', 'Corner damage', 'Close fit plus cushioning at the corners'],
          ['Notebooks and journals', 'Moisture and cover scuffing', 'Film outer, close fit'],
          ['Cards and sticker sheets', 'Bending', 'Small size with a board, or a rigid envelope'],
        ],
      },
      {
        kind: 'steps',
        heading: 'Packing flat paper goods so they arrive flat',
        steps: [
          {
            title: 'Add a stiffener to anything that bends',
            detail:
              'A board cut to the mailer size turns a flexible parcel into a rigid one, which is what prevents creasing.',
          },
          {
            title: 'Size so nothing can slide',
            detail:
              'Movement is what causes corner damage. A snug bag does more than a thicker one.',
          },
          {
            title: 'Face the print inward',
            detail:
              'If the item has a printed face, put it against the stiffener rather than against the film.',
          },
          {
            title: 'Seal onto clean film',
            detail:
              'Board reaching the adhesive strip is a common cause of partial seals on this category.',
          },
          {
            title: 'Label on the flattest face',
            detail: 'A board-backed parcel has one genuinely flat side. Use it.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'When paper-faced packaging is the better choice',
        before:
          'There is a real argument for a paper-faced padded mailer in this category, because it feels right for a book and it takes fine print more crisply than film does. The trade is moisture: a paper outer absorbs water rather than shedding it, and paper contents inside a wet paper bag are the worst combination available. If your parcels sit on doorsteps in weather, the film outer wins on the only measure that matters here. Both constructions are compared on the ',
        link: { href: '/padded-poly-mailers/', anchor: 'padded mailer comparison' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What is the most reliable way to ship a book so it does not get damaged?',
        a: 'A snug fit so it cannot move, cushioning if the cover must arrive unmarked, and a film outer if there is any chance of rain. A heavier plain film addresses none of the failures books actually suffer.',
      },
      {
        q: 'How do I stop prints arriving creased?',
        a: 'Add a board stiffener cut to the mailer size, so the parcel cannot flex. Without one, a flat print in a flexible bag will bend wherever the parcel bends. For large or valuable prints, a tube is more reliable than any mailer.',
      },
      {
        q: 'Are paper mailers better than poly for books?',
        a: 'They feel more appropriate and take fine print better, but they absorb water. For a category that is ruined by moisture, a film outer is the safer choice unless you know your parcels stay dry.',
      },
      {
        q: 'Do I need a padded mailer for paperbacks?',
        a: 'Not always. A close fit prevents most damage on its own. Cushioning is worth adding where the cover condition is part of what the customer is buying, such as new stock or collectible editions.',
      },
    ],
    related: [
      {
        href: '/9x12-poly-mailers/',
        label: '9x12 Poly Mailers',
        reason: 'The size most book and print sellers standardise on.',
      },
      {
        href: '/padded-poly-mailers/',
        label: 'Padded Poly Mailers',
        reason: 'Choosing between cushioning constructions.',
      },
      {
        href: '/industries/accessories/',
        label: 'Accessories',
        reason: 'A neighbouring category with small, mixed-shape contents.',
      },
    ],
    cta: {
      heading: 'Ship paper goods intact',
      body: 'Tell us what you send and how it is arriving damaged. We will recommend a fit and a construction, and quote it against your volume.',
      buttonLabel: 'Ask about book packaging',
    },
    whatsapp: 'Hi, I ship books and prints and need packaging that stops corner and crease damage.',
  },

  /* ===================================================================== */
  {
    slug: 'subscription-businesses',
    name: 'Subscription businesses',
    h1: 'Poly Mailers for Subscription Businesses',
    title: 'Poly Mailers for Subscription Boxes | Recurring Sends',
    description:
      'Packaging for recurring deliveries — consistency between cycles, forecasting against a known subscriber count, and the repeat-arrival experience.',
    summary: 'Recurring, forecastable and repetitive — packaging where the same customer sees it monthly.',
    intro: [
      'Subscription is the only model where the same customer receives your packaging over and over. That changes what the parcel has to do. The first one has to make an impression; the twelfth has to still feel deliberate rather than routine.',
      'It also changes the buying problem. You know your subscriber count, so you can forecast packaging almost exactly — which makes standardising easier and over-ordering harder to justify.',
    ],
    plan: {
      intent: 'Find packaging for a subscription or recurring delivery service.',
      audience: 'Subscription box operators and recurring-delivery brands.',
      problem: 'The same customer sees the packaging repeatedly, and the count is known in advance.',
      angle: 'Repeat-arrival experience and forecastable ordering — problems no other category has.',
      primaryKeyword: 'subscription box mailers',
      supportingKeywords: [
        'subscription packaging',
        'recurring delivery mailers',
        'monthly box packaging',
      ],
      nearestPage: '/industries/gift-retail/',
      boundary:
        'Gift retail is about a one-off presentation moment. This page is about the same moment repeating twelve times a year.',
    },
    recommended: [
      { slug: '10x13-poly-mailers', why: 'A single standard size, which suits a fixed monthly contents profile.' },
      { slug: 'custom-poly-mailers', why: 'Forecastable volume is exactly what makes a printed run economical.' },
      { slug: 'self-seal-poly-mailers', why: 'A tear tab, so opening is part of the experience rather than a chore.' },
      { slug: 'seasonal-poly-mailers', why: 'Varying the parcel across the year without changing the specification.' },
      { slug: 'poly-bubble-mailers', why: 'Where the monthly contents include anything fragile.' },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'The twelfth parcel problem',
        standfirst: 'Novelty wears off; care does not.',
        paragraphs: [
          'A subscriber who has received the same parcel eleven times is not going to be surprised by the twelfth. What keeps the experience feeling deliberate is consistency of care rather than novelty: the same colour, the same fold, the same label position, the same clean seal, every month.',
          'That argues for investing in a specification that holds rather than in variety. A printed mailer that arrives identical every month reads as a brand with standards. Three different bags depending on what was in the warehouse reads as improvisation.',
          'Where variety helps is in the layer inside — a card, a tissue, a seasonal insert. Those change cheaply, monthly, without touching the packaging specification.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What a subscription operation gets that others do not',
        intro:
          'Three advantages worth using, because most categories would pay for them.',
        items: [
          {
            term: 'A known count',
            detail:
              'You know how many parcels ship next month. Packaging can be ordered to it almost exactly, without a large safety buffer.',
          },
          {
            term: 'A fixed contents profile',
            detail:
              'The box is designed before it is packed, so one size genuinely fits — the argument for standardising is stronger here than anywhere.',
          },
          {
            term: 'Forecastable volume for printing',
            detail:
              'Printed runs get cheaper with quantity and need predictable volume to justify. Subscription is the model that supplies both.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Building a repeatable packing standard',
        intro:
          'Consistency across cycles is a process problem more than a materials one.',
        steps: [
          {
            title: 'Fix the contents envelope first',
            detail:
              'Decide the maximum bulk a monthly box can contain, then size the mailer to that rather than to an average month.',
          },
          {
            title: 'Write the pack down',
            detail:
              'Fold, order of items, insert position, label placement. A written standard is what makes month twelve look like month one.',
          },
          {
            title: 'Order against the subscriber count',
            detail:
              'Plus a small allowance for growth and reships, not plus a quarter of a year.',
          },
          {
            title: 'Keep the outer constant, vary the inner',
            detail:
              'Seasonal variation belongs on the card and the tissue, where it costs almost nothing to change.',
          },
          {
            title: 'Review after a full cycle',
            detail:
              'Damage rate, support contacts about opening or returns, and how much stock is actually left.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'The opening moment, every month',
        before:
          'For a subscription, opening the parcel is the product experience — it happens on camera more often than in almost any other category. A tear tab that means no scissors, an interior print that appears as the bag opens, or a seal sticker that has to be broken all turn a routine delivery into a small event. The closure options that make that possible are set out on the ',
        link: { href: '/self-seal-poly-mailers/', anchor: 'closure options page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Should a subscription box use printed mailers?',
        a: 'It is one of the strongest cases for it. Printed runs need predictable volume to be economical, and a known subscriber count is exactly that. A single mark on a coloured base is a sensible first printed run.',
      },
      {
        q: 'How much packaging should I order per cycle?',
        a: 'Your subscriber count plus a modest allowance for growth and reships. Because your volume is known rather than estimated, you do not need the large safety buffer other categories carry.',
      },
      {
        q: 'Should the packaging change each month?',
        a: 'Usually not the mailer itself. Consistency of the outer parcel is what reads as a brand with standards. Vary the card, the tissue and the inserts instead, where change costs almost nothing.',
      },
      {
        q: 'What size should a subscription mailer be?',
        a: 'Sized to the maximum bulk a monthly box can reach rather than to an average month, since the one month that does not fit is the one that generates the complaints.',
      },
    ],
    related: [
      {
        href: '/custom-poly-mailers/',
        label: 'Custom printed mailers',
        reason: 'The ordering process for a printed run.',
      },
      {
        href: '/seasonal-poly-mailers/',
        label: 'Seasonal variation',
        reason: 'Adding variety across a year without changing the specification.',
      },
      {
        href: '/industries/gift-retail/',
        label: 'Gift retail',
        reason: 'Where the presentation moment happens once rather than monthly.',
      },
    ],
    cta: {
      heading: 'Package a subscription service',
      body: 'Tell us your subscriber count and what goes in a typical box. We will specify a size and quote per cycle rather than per year.',
      buttonLabel: 'Quote a subscription cycle',
    },
    whatsapp: 'Hi, I run a subscription box and need mailers specified for monthly cycles.',
  },

  /* ===================================================================== */
  {
    slug: 'accessories',
    name: 'Accessories',
    h1: 'Poly Mailers for Accessories',
    title: 'Poly Mailers for Accessories | Small Item Shipping',
    description:
      'Packaging for jewelry, bags, belts and small accessories — a category where the items vary wildly in shape and the parcel is often the gift wrap.',
    summary: 'Wildly varied shapes, small parcels, and packaging that often doubles as gift wrap.',
    intro: [
      'Accessories are the hardest category to standardise. A pair of earrings, a leather belt, a scarf and a canvas tote have nothing in common in shape, weight or fragility, and a business selling all four cannot cover them with one bag.',
      'The second complication is that accessories are bought as gifts more often than most categories, which means the parcel is sometimes the wrapping and needs to look like it.',
    ],
    plan: {
      intent: 'Find packaging for a varied accessories range.',
      audience: 'Jewelry, leather goods and accessory sellers with mixed-shape ranges.',
      problem: 'Items in one range vary too much in shape and fragility for a single specification.',
      angle: 'How to cover a genuinely varied range with a small number of sizes.',
      primaryKeyword: 'poly mailers for accessories',
      supportingKeywords: [
        'jewelry mailers',
        'small accessory packaging',
        'accessory shipping bags',
      ],
      nearestPage: '/small-poly-mailers/',
      boundary:
        'The small mailers page compares two sizes. This page is about covering a range that will not fit one.',
    },
    recommended: [
      { slug: '6x9-poly-mailers', why: 'Jewelry, small leather goods and anything boxed and light.' },
      { slug: 'poly-bubble-mailers', why: 'Where a boxed item needs protecting from a single knock.' },
      { slug: '9x12-poly-mailers', why: 'Scarves, belts and folded soft accessories.' },
      { slug: 'colored-poly-mailers', why: 'Colour-coding product lines so a busy bench picks correctly.' },
      { slug: 'padded-poly-mailers', why: 'Foam lining for anything with a polished or plated surface.' },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'Covering a varied range with three sizes',
        intro:
          'Group by packed shape rather than by product category, and the range usually collapses into three.',
        caption: 'Accessory types grouped by packed shape rather than by product line.',
        columns: ['Group', 'Typical items', 'Approach'],
        rows: [
          [
            'Small and boxed',
            'Jewelry, watches, cufflinks, small leather',
            'Smallest size, cushioned if the box must arrive unmarked',
          ],
          [
            'Soft and foldable',
            'Scarves, belts, gloves, hair accessories',
            'Mid size, plain film, no cushioning needed',
          ],
          [
            'Bulky or awkward',
            'Bags, totes, hats, larger leather goods',
            'Larger size, sized so the item cannot move',
          ],
        ],
        outro:
          'Anything that will not fit those three is an outlier, and outliers are better handled with a plain oversized bag than with a fourth branded line.',
      },
      {
        kind: 'bullets',
        heading: 'Category-specific problems',
        intro:
          'Accessories have a set of failure modes that clothing and books do not share.',
        items: [
          {
            term: 'Polished and plated surfaces',
            detail:
              'Scratching, not breakage, is the risk. Foam lining protects surfaces; bubble does not do it as well.',
          },
          {
            term: 'Chains and straps tangling',
            detail:
              'A packaging problem only in the sense that a tight fit prevents movement. The real fix is how the item is presented inside.',
          },
          {
            term: 'Hardware puncturing from inside',
            detail:
              'Buckles, clasps and studs behave like a corner against the film. Heavier weight or a lining.',
          },
          {
            term: 'Gift orders',
            detail:
              'A meaningful share of accessory purchases are gifts, and the parcel is sometimes the wrapping. Colour and a tear tab matter more here than in most categories.',
          },
          {
            term: 'Very small items in very large bags',
            detail:
              'A common error when a business standardises on one size. A small item in a large mailer moves, and movement is what causes damage.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'When the parcel is the gift wrap',
        paragraphs: [
          'For accessories bought as gifts, the mailer sometimes goes under a tree or onto a desk without being repackaged. That changes what it needs to be: a colour that looks intentional, a clean seal, a tear tab so it opens without scissors, and no shipping wording printed across the front.',
          'It is worth deciding whether that is a flow you want to support. If it is, a coloured bag with a seal sticker costs very little and covers it. If not, keep the mailer purely practical and put the gift presentation inside, where it can be added selectively for the orders that need it.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Colour as an operational tool',
        before:
          'Accessory operations pick from a wider spread of product types than most, and colour-coding the mailer by product line is a cheap way to reduce picking errors at the bench. It costs a small premium over plain white film and needs no printing at all, which makes it one of the few packaging decisions that improves both branding and accuracy at once. The full range and how each base behaves is set out on the ',
        link: { href: '/poly-mailer-colors/', anchor: 'colour selection page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What size mailer should I use for jewelry?',
        a: 'The smallest that takes the boxed item plus a card without the contents reaching the adhesive strip — usually a 6x9. Anything larger lets the box move, and movement is what damages corners.',
      },
      {
        q: 'How do I stop plated items arriving scratched?',
        a: 'Foam lining rather than bubble. Bubble absorbs impact but does not protect a surface from rubbing; foam is designed for exactly that. A snug fit that stops the item moving helps as much as the lining.',
      },
      {
        q: 'Can one mailer size cover a mixed accessories range?',
        a: 'Rarely well. Grouping by packed shape usually produces three natural sizes, and covering true outliers with a plain oversized bag is cheaper than adding a fourth branded line.',
      },
      {
        q: 'Should accessory mailers be gift-ready?',
        a: 'It depends whether you want to support parcels going straight under a tree. If you do, a coloured bag with a tear tab and a seal sticker covers it for very little. If not, keep the mailer plain and add gift presentation inside for the orders that need it.',
      },
    ],
    related: [
      {
        href: '/6x9-poly-mailers/',
        label: '6x9 Poly Mailers',
        reason: 'The size most small accessory sends use.',
      },
      {
        href: '/padded-poly-mailers/',
        label: 'Padded Poly Mailers',
        reason: 'Choosing between foam and bubble for surface protection.',
      },
      {
        href: '/industries/gift-retail/',
        label: 'Gift retail',
        reason: 'Where the parcel becoming the gift wrap is the primary requirement.',
      },
    ],
    cta: {
      heading: 'Cover a varied range',
      body: 'Send us your product types and we will group them into the smallest number of sizes that genuinely works, then quote it.',
      buttonLabel: 'Get a range specification',
    },
    whatsapp: 'Hi, I sell accessories in varied shapes and need help specifying mailer sizes.',
  },

  /* ===================================================================== */
  {
    slug: 'small-businesses',
    name: 'Small businesses',
    h1: 'Poly Mailers for Small Businesses',
    title: 'Poly Mailers for Small Business | First Orders',
    description:
      'Packaging for a business shipping from home or a small unit — what to buy first, what to avoid committing to, and how to look considered on a small order.',
    summary: 'A first packaging order — what to buy, what to skip, and what not to commit to yet.',
    intro: [
      'The first packaging decision a small business makes is usually the wrong one, and it is almost always the same mistake: printing too early. Artwork gets committed before the range settles, sizes get chosen before the order profile is known, and a year of stock arrives that the business has outgrown by month four.',
      'This page is the sequence that avoids that. It is written for a business shipping tens or hundreds of parcels a month rather than thousands, where flexibility is worth more than unit price.',
    ],
    plan: {
      intent: 'Buy packaging for a small or home-based business.',
      audience: 'Makers, side businesses and early-stage sellers making a first packaging purchase.',
      problem: 'Committing to artwork, sizes and quantities before any of them is settled.',
      angle: 'A first-order sequence built around not committing, which no other page covers.',
      primaryKeyword: 'poly mailers for small business',
      supportingKeywords: [
        'small business packaging',
        'first packaging order',
        'home business mailers',
      ],
      nearestPage: '/blank-poly-mailers/',
      boundary:
        'The blank page argues the case for unprinted stock. This page is the wider first-order sequence.',
    },
    recommended: [
      { slug: 'blank-poly-mailers', why: 'Nothing committed. The right first order for almost every small business.' },
      { slug: 'colored-poly-mailers', why: 'Recognition without artwork, at a fraction of the cost of printing.' },
      { slug: '10x13-poly-mailers', why: 'The one size most small ranges can start with.' },
      { slug: 'small-poly-mailers', why: 'If your products are genuinely small, start here instead.' },
      { slug: 'bee-poly-mailers', why: 'A patterned option that looks designed without a bespoke run.' },
    ],
    blocks: [
      {
        kind: 'steps',
        heading: 'A first packaging order, in order',
        intro:
          'Six steps. The point of the sequence is that nothing early commits you to anything later.',
        steps: [
          {
            title: 'Ask for samples before you buy anything',
            detail:
              'Two candidate sizes. Pack a real order into each. This single step prevents most first-order mistakes.',
          },
          {
            title: 'Buy one size, plain, in a colour',
            detail:
              'A coloured film is the cheapest recognition available and needs no artwork, no proof and no commitment.',
          },
          {
            title: 'Put the branding on a sticker',
            detail:
              'Stickers reorder in small runs, cost very little, and can change the week after you change your mind.',
          },
          {
            title: 'Buy a quantity you will use in a season',
            detail:
              'The unit price is higher. The flexibility is worth more while your range is still moving.',
          },
          {
            title: 'Ship a hundred parcels, then look at what happened',
            detail:
              'Which size ran out, what got damaged, what customers mentioned. That is real data and it beats any guess.',
          },
          {
            title: 'Print when three things are true',
            detail:
              'Volume is predictable, artwork has stopped changing, and customers are photographing the parcel. Not before.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'What not to commit to yet',
        intro:
          'Each of these is a decision that is cheap to defer and expensive to reverse.',
        items: [
          {
            term: 'A printed run',
            detail:
              'Printing commits your artwork, size, colour and quantity at once, at the point when all four are least settled.',
          },
          {
            term: 'A year of stock',
            detail:
              'The discount is real and so is the risk. Adhesive ages, ranges change, and cash tied up in packaging is cash not in stock.',
          },
          {
            term: 'Four sizes',
            detail:
              'Start with one and add a second when a real pattern of orders shows you need it.',
          },
          {
            term: 'A custom colour match',
            detail:
              'A stock colour close to your brand costs far less and looks the same to a customer who has never seen your swatch.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Looking considered without spending much',
        paragraphs: [
          'What customers actually register in the first few seconds is colour, cleanliness and care. A coloured bag, sealed neatly, with a label placed the same way every time, reads better than a printed bag sealed carelessly.',
          'After that, the inside is where small budgets go furthest. A printed card, tissue in a matching tone, or a hand-written line all cost very little and are what gets photographed. The outer bag is what gets the parcel to the door; the inside is what gets remembered.',
          'This is not a compromise position. Plenty of established brands run coloured stock with a sticker permanently, because it lets them change seasonally without touching their packaging supply.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Storing packaging in a small space',
        before:
          'Most small businesses store packaging somewhere that was not designed for it — a spare room, a garage, under a bench. Two things matter: keep cartons flat and sealed so the adhesive stays clean, and keep them out of direct sunlight and away from heat, because those are what age the closure. A garage in summer is the single worst place to keep a year of mailers, which is another argument for ordering a season at a time. The material considerations behind that are set out on the ',
        link: { href: '/materials/', anchor: 'materials page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What should a small business order first?',
        a: 'Samples, then one size of plain coloured stock in a season-sized quantity, with the branding on a sticker. Nothing in that list commits you to anything you might change in three months.',
      },
      {
        q: 'When is it worth printing my own mailers?',
        a: 'When your monthly volume has stopped swinging, your artwork has stopped changing, and customers have started photographing the parcel. Until all three are true, coloured stock with a sticker gets you most of the benefit for a fraction of the cost.',
      },
      {
        q: 'Is there a minimum order?',
        a: 'Quantities are quoted against what you actually need rather than against a published threshold. Smaller runs carry a higher unit price because setup spreads across fewer units, and we will show you the difference so you can decide.',
      },
      {
        q: 'How much packaging should I keep in stock?',
        a: 'A season, not a year — especially if you are storing it somewhere warm or bright. Adhesive is the part that ages, and a garage in summer is the worst place to keep a large order.',
      },
    ],
    related: [
      {
        href: '/blank-poly-mailers/',
        label: 'Blank Poly Mailers',
        reason: 'The case for staying unprinted longer than you think.',
      },
      {
        href: '/samples/',
        label: 'Request samples',
        reason: 'The first step in the sequence above.',
      },
      {
        href: '/blog/packaging-ideas-for-small-ecommerce-businesses/',
        label: 'Packaging ideas at small scale',
        reason: 'Practical ways to look considered without a printed run.',
      },
    ],
    cta: {
      heading: 'Start a first packaging order',
      body: 'Tell us what you sell and roughly how many parcels a month. We will suggest a first order that keeps your options open, and quote it.',
      buttonLabel: 'Ask about a first order',
    },
    whatsapp: 'Hi, I run a small business and need help with my first packaging order.',
  },

  /* ===================================================================== */
  {
    slug: 'gift-retail',
    name: 'Gift retail',
    h1: 'Poly Mailers for Gift Retail',
    title: 'Poly Mailers for Gift Retail | Presentation Packaging',
    description:
      'Packaging for gifting — where the parcel often arrives at someone other than the buyer, and the presentation is part of what was purchased.',
    summary: 'Where the parcel arrives at a recipient rather than a buyer, and presentation is the product.',
    intro: [
      'Gift retail breaks an assumption every other category makes: that the person who ordered is the person who opens the parcel. When a gift is sent directly to a recipient, the packaging is the entire first impression of a brand the recipient may never have heard of.',
      'That means two things. The parcel has to look intentional rather than transactional, and it must not carry anything the buyer would not want seen — pricing, promotional wording, or anything that gives away what is inside.',
    ],
    plan: {
      intent: 'Find packaging for gift and direct-to-recipient sending.',
      audience: 'Gift retailers and any brand offering send-direct gifting.',
      problem: 'The recipient is not the buyer, and the parcel is the whole first impression.',
      angle: 'The direct-to-recipient problem, which no other industry page addresses.',
      primaryKeyword: 'gift packaging mailers',
      supportingKeywords: [
        'gift shipping bags',
        'presentation mailers',
        'direct to recipient packaging',
      ],
      nearestPage: '/industries/subscription-businesses/',
      boundary:
        'Subscription is the same moment repeating for one customer. This page is a single moment for a stranger.',
    },
    recommended: [
      { slug: 'christmas-poly-mailers', why: 'The window where gift sending concentrates most heavily.' },
      { slug: 'personalized-bubble-mailers', why: 'Cushioning plus a printed message on the same parcel.' },
      { slug: 'self-seal-poly-mailers', why: 'A tear tab so the parcel opens without scissors.' },
      { slug: 'light-pink-poly-mailers', why: 'A tone that reads as a gift before anything is opened.' },
      { slug: 'colored-poly-mailers', why: 'Colour-coding gift orders so they are packed differently at the bench.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'What a gift parcel must not do',
        intro:
          'Four things that turn a gift into an awkward moment, all of them packaging decisions.',
        items: [
          {
            term: 'Show the price',
            detail:
              'No pricing on the outer bag, and no packing note visible through a pale film. Check the opacity if your documents are inside.',
          },
          {
            term: 'Give away the contents',
            detail:
              'A product name printed across the front removes the surprise before the parcel is opened.',
          },
          {
            term: 'Look like a return',
            detail:
              'A plain grey bag with a large courier label reads as a returns shipment rather than a present.',
          },
          {
            term: 'Need scissors',
            detail:
              'A gift that has to be cut out of its packaging loses the moment. A tear tab costs very little.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Setting up a gift flow',
        intro:
          'Most brands run gifting as a variant of their normal flow rather than as a separate operation.',
        steps: [
          {
            title: 'Flag gift orders at checkout',
            detail:
              'The bench cannot pack a gift differently if it does not know which orders are gifts.',
          },
          {
            title: 'Use a different mailer colour for them',
            detail:
              'Colour-coding is the cheapest way to make a different pack instruction visible at a busy bench.',
          },
          {
            title: 'Keep documents out or opaque',
            detail:
              'Either omit the packing note or make sure the film is opaque enough that it cannot be read through.',
          },
          {
            title: 'Add the message inside',
            detail:
              'A card is where personalisation belongs. It costs little and it is what the recipient keeps.',
          },
          {
            title: 'Choose a closure that opens cleanly',
            detail:
              'A tear tab or a printed tear line turns opening into part of the gift rather than an obstacle.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Seasonal concentration',
        paragraphs: [
          'Gift retail is not evenly distributed across a year. A large share of volume arrives in a few weeks, and that concentration is what makes packaging planning harder here than in categories with steady demand.',
          'The practical consequence is that seasonal packaging has to be ordered against a forecast made months earlier, and that forecast is usually wrong in one direction or the other. Running themed packaging alongside standard stock rather than instead of it keeps the risk small: if the themed run falls short, orders still go out.',
          'It is also worth choosing artwork that is seasonal rather than dated. A winter palette runs from late autumn into January; a design with a year printed on it runs for six weeks and then becomes waste.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Planning around a peak',
        before:
          'The weeks when gift volume concentrates are also the weeks when your team is at capacity and temporary staff are packing. Packaging decisions that are elegant in June become expensive in December if they need judgement at the bench, so simplify: fewer sizes, clearer rules, written instructions. The operational detail of getting through that period is set out on the ',
        link: { href: '/christmas-poly-mailers/', anchor: 'peak season packaging page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'How do I stop a gift parcel showing the price?',
        a: 'Leave the packing note out of gift orders entirely, and check the film opacity if any document is inside. A pale mailer with standard opacity can let printed text be read through it.',
      },
      {
        q: 'Should gift orders use different packaging?',
        a: 'A different colour is usually enough, and it doubles as a signal at the bench that this order is packed differently. The personalised element belongs on a card inside rather than on the bag.',
      },
      {
        q: 'What closure suits gift parcels?',
        a: 'One with a tear tab or a printed tear line, so the recipient opens the parcel without scissors. On a gift, the opening is part of what was bought.',
      },
      {
        q: 'How far ahead should seasonal gift packaging be ordered?',
        a: 'Work backwards from the date it must be on the packing bench, allowing a buffer before your volume climbs rather than before the campaign starts. Artwork approval is where seasonal projects most often run late.',
      },
    ],
    related: [
      {
        href: '/christmas-poly-mailers/',
        label: 'Christmas Poly Mailers',
        reason: 'The window where most gift volume lands.',
      },
      {
        href: '/self-seal-poly-mailers/',
        label: 'Closure options',
        reason: 'Making the parcel open cleanly without scissors.',
      },
      {
        href: '/industries/accessories/',
        label: 'Accessories',
        reason: 'A category where a large share of orders are gifts.',
      },
    ],
    cta: {
      heading: 'Package a gift range',
      body: 'Tell us whether parcels go direct to recipients and when your peak lands. We will specify a gift flow and quote it alongside your standard stock.',
      buttonLabel: 'Ask about gift packaging',
    },
    whatsapp: 'Hi, I sell gifts that ship direct to recipients and need suitable packaging.',
  },

  /* ===================================================================== */
  {
    slug: 'electronics-accessories',
    name: 'Electronics accessories',
    h1: 'Poly Mailers for Electronics Accessories',
    title: 'Poly Mailers for Electronics | Accessory Shipping',
    description:
      'Packaging for cables, cases, chargers and small electronics — static, moisture, hard corners and the retail carton that has to arrive sellable.',
    summary: 'Hard corners, moisture and a retail carton that has to arrive sellable.',
    intro: [
      'Electronics accessories are small, light and disproportionately awkward. The products themselves are usually hard-wearing, but their retail cartons are not, and the carton is what the customer judges — particularly when the item is being resold or given as a gift.',
      'Two more constraints appear here that no other category shares: moisture matters more than usual, and some items carry static-handling requirements that change what packaging is acceptable.',
    ],
    plan: {
      intent: 'Find packaging for shipping small electronics and accessories.',
      audience: 'Sellers of cables, cases, chargers and small consumer electronics.',
      problem: 'Hard-cornered retail cartons in a flexible bag, plus moisture and static considerations.',
      angle: 'The static and moisture constraints, which appear in no other industry page.',
      primaryKeyword: 'poly mailers for electronics',
      supportingKeywords: [
        'electronics accessory packaging',
        'cable shipping bags',
        'small electronics mailers',
      ],
      nearestPage: '/poly-bubble-mailers/',
      boundary:
        'The bubble page covers the construction. This page covers the category-specific constraints around it.',
    },
    recommended: [
      { slug: 'poly-bubble-mailers', why: 'Impact protection with a film outer that keeps moisture away.' },
      { slug: '6x9-poly-mailers', why: 'Cables, adapters and small boxed accessories.' },
      { slug: 'padded-poly-mailers', why: 'Foam lining where the risk is surface marking rather than breakage.' },
      { slug: '9x12-poly-mailers', why: 'Larger cases, keyboards and multi-item accessory orders.' },
      { slug: 'black-poly-mailers', why: 'Full opacity, which matters for higher-value contents on a doorstep.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'Constraints specific to this category',
        intro:
          'Four things to settle before choosing a bag, two of which most suppliers will not raise.',
        items: [
          {
            term: 'Hard carton corners',
            detail:
              'A retail box concentrates the whole force of a drop onto one point. It is the most common cause of both damaged product and burst bags in this category.',
          },
          {
            term: 'Moisture',
            detail:
              'Electronics and water are a total loss rather than a cosmetic problem. A film outer is not optional here in the way it is for soft goods.',
          },
          {
            term: 'Static-sensitive components',
            detail:
              'Some products require anti-static handling. Standard polyethylene is not an anti-static material, so if this applies to you, say so at enquiry stage — it changes the specification.',
          },
          {
            term: 'Discretion on the doorstep',
            detail:
              'Higher-value contents in a bag that announces what is inside is a theft risk. Opaque film, and nothing on the outside naming the product.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'What to use for what',
        intro:
          'Sorted by the risk that actually applies, rather than by product type.',
        caption: 'Electronics accessories matched to a packaging approach.',
        columns: ['Item', 'Main risk', 'Approach'],
        rows: [
          ['Cables and adapters', 'Almost none', 'Small plain mailer, sized close'],
          ['Boxed accessories', 'Carton corner damage', 'Cushioned mailer, sized so the box cannot move'],
          ['Cases and covers', 'Surface marking', 'Foam lining or a close fit in plain film'],
          ['Chargers and power banks', 'Impact and weight', 'Cushioned, heavier film'],
          ['Anything static-sensitive', 'Component damage', 'Specify anti-static handling — standard film is not suitable'],
          ['Higher-value items', 'Theft and moisture', 'Opaque film outer, nothing identifying on the outside'],
        ],
      },
      {
        kind: 'prose',
        heading: 'The retail carton is the product',
        paragraphs: [
          'For a large share of electronics accessories, the box is part of what was bought. A customer who receives a crushed carton around an undamaged cable has still had a bad experience, and a reseller cannot put a scuffed box back on a shelf.',
          'The instinct is to add cushioning, and cushioning does help. But the bigger lever is fit: a carton that cannot move inside the bag cannot catch, rub or take a corner impact at speed. Sizing to the carton rather than to the product is the single most effective change most sellers in this category can make.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'When a mailer is not enough',
        before:
          'Flexible packaging has no structure, so anything that must not be compressed cannot be protected by it whatever the lining. If your damage reports describe crushed cartons rather than broken products, more cushioning will not change the outcome and a rigid carton will. Working out which failure you actually have, before buying anything, is set out in the ',
        link: { href: '/protective-mailers/', anchor: 'protective mailer comparison' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Are poly mailers safe for electronics?',
        a: 'For most accessories, yes — the film keeps moisture out and a cushioned version handles impact. Standard polyethylene is not an anti-static material, so anything with static-sensitive components needs a specification that addresses that, and you should raise it at enquiry stage.',
      },
      {
        q: 'How do I stop retail boxes arriving crushed at the corners?',
        a: 'Size the mailer to the carton so it cannot move, then add cushioning. Fit prevents more corner damage than lining does, because a box that cannot gather speed cannot hit anything hard.',
      },
      {
        q: 'Should electronics ship in opaque mailers?',
        a: 'For anything of value, yes. An opaque film with nothing identifying printed on the outside reduces the chance of a parcel disappearing from a doorstep, and it costs no more than a pale one.',
      },
      {
        q: 'Do I need a padded mailer for cables?',
        a: 'Usually not. Cables are among the most hard-wearing things anyone ships. A small plain mailer sized close to the item is enough, and cushioning is money spent on a risk that is not there.',
      },
    ],
    related: [
      {
        href: '/poly-bubble-mailers/',
        label: 'Poly Bubble Mailers',
        reason: 'The construction most of this category uses.',
      },
      {
        href: '/black-poly-mailers/',
        label: 'Black Poly Mailers',
        reason: 'Full opacity for higher-value contents.',
      },
      {
        href: '/industries/accessories/',
        label: 'Accessories',
        reason: 'A neighbouring category with the same mixed-shape problem.',
      },
    ],
    cta: {
      heading: 'Specify electronics packaging',
      body: 'Tell us what you ship, including anything static-sensitive, and we will specify a bag that suits both the product and its carton.',
      buttonLabel: 'Ask about electronics packaging',
    },
    whatsapp:
      'Hi, I ship electronics accessories and need packaging that protects the retail cartons.',
  },
];

export const industryBySlug = new Map(industries.map((i) => [i.slug, i]));
