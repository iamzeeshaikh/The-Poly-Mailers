import type { Block, Faq, PagePlan, RelatedLink } from './types';

/**
 * Collections are choosers, not product pages.
 *
 * Each one exists to help someone decide between products and then leave. None
 * of them repeats specification detail, fit guidance or FAQs from the product
 * pages they link to — if a collection could answer the question on its own,
 * the product page underneath it would have nothing left to do.
 *
 * URL note: `/colored-poly-mailers/` is the product page (it is on the approved
 * list of 29), so the colour collection lives at `/poly-mailer-colors/`.
 * See docs/01-audit-and-architecture.md section 3.
 */

export interface Collection {
  slug: string;
  name: string;
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  /** One line for grids and the sitemap — what this chooser is for. */
  summary: string;
  intro: readonly string[];
  plan: PagePlan;
  /** Product slugs, in the order the chooser presents them. */
  productSlugs: readonly string[];
  /** One line per product explaining why you would pick it — unique per collection. */
  picks: Readonly<Record<string, string>>;
  blocks: readonly Block[];
  faqs: readonly Faq[];
  related: readonly RelatedLink[];
  cta: { heading: string; body: string; buttonLabel: string };
  whatsapp: string;
}

export const collections: readonly Collection[] = [
  /* ===================================================================== */
  {
    slug: 'poly-mailer-sizes',
    name: 'Sizes',
    eyebrow: 'Size range',
    h1: 'Poly Mailer Sizes',
    title: 'Poly Mailer Sizes | Compare Every Size',
    summary: 'Every size in one table, with what each one holds and where it stops working.',
    description:
      'Every poly mailer size compared in one table, with the item types each one suits and the point at which you should move up or down.',
    intro: [
      'Nine sizes, one table. This page exists so you can see the whole range at once instead of opening seven tabs, and so you can find the point where your product stops fitting one size and starts fitting the next.',
      'Each size has its own page with fit detail, packing notes and print considerations. This one only compares and routes.',
    ],
    plan: {
      intent: 'Compare poly mailer sizes and pick one.',
      audience: 'Buyers who know they need mailers but have not settled on a dimension.',
      problem: 'Size lists give numbers without telling you what fits.',
      angle: 'A single comparison table across the whole range, with no fit detail duplicated from the product pages.',
      primaryKeyword: 'poly mailer sizes',
      supportingKeywords: ['poly mailer size chart', 'mailer bag sizes', 'poly mailer dimensions'],
      nearestPage: '/size-guide/',
      boundary:
        'This page compares the products we make. The size guide is a decision framework for measuring your own product.',
    },
    productSlugs: [
      '6x9-poly-mailers',
      '9x12-poly-mailers',
      '10x13-poly-mailers',
      '12x15-poly-mailers',
      '14-5x19-poly-mailers',
      '19x24-poly-mailers',
      '24x24-poly-mailers',
      'small-poly-mailers',
      'large-poly-mailers',
    ],
    picks: {
      '6x9-poly-mailers': 'One small item plus a card — jewelry, cosmetics, accessories.',
      '9x12-poly-mailers': 'A single folded garment, a paperback, a mounted print.',
      '10x13-poly-mailers': 'The apparel default. One or two garments with room for inserts.',
      '12x15-poly-mailers': 'Knitwear, denim and multi-item orders that outgrew the standard.',
      '14-5x19-poly-mailers': 'Heavyweight hoodies, light outerwear, three-garment orders.',
      '19x24-poly-mailers': 'Consolidation — bedding, wholesale drops, batched returns.',
      '24x24-poly-mailers': 'Square and lofty soft goods that will not fold rectangular.',
      'small-poly-mailers': 'Still deciding at the small end? Start here.',
      'large-poly-mailers': 'Still deciding at the large end? Start here.',
    },
    blocks: [
      {
        kind: 'compare',
        heading: 'The whole range at a glance',
        intro:
          'Read across from the item you ship most often. Where two sizes both work, the smaller one is cheaper per unit and travels better.',
        caption: 'Poly mailer sizes matched to the contents each one handles comfortably.',
        columns: ['Size', 'Handles comfortably', 'Struggles with'],
        rows: [
          ['6x9', 'Jewelry, cosmetics, phone accessories, flat print', 'Anything with loft'],
          ['9x12', 'One folded tee, a paperback, leggings', 'Two-item orders'],
          ['10x13', 'One or two garments plus inserts', 'Hoodies and padded jackets'],
          ['12x15', 'Knitwear, denim, two to three garments', 'Oversized outerwear'],
          ['14.5x19', 'Heavyweight hoodies, light outerwear', 'Bedding sets'],
          ['19x24', 'Bedding, wholesale drops, four to five garments', 'Anything rigid'],
          ['24x24', 'Cushions, folded quilts, square soft goods', 'Long thin items'],
        ],
        outro:
          'Most operations settle on two or three sizes. Running one size means waste on small orders; running five means decisions at the bench that get made wrong under pressure.',
      },
      {
        kind: 'bullets',
        heading: 'How to use this table',
        intro:
          'Three habits separate a size decision that holds from one you revisit in six months.',
        items: [
          {
            term: 'Size against your heaviest routine order',
            detail:
              'Not the average one. The average order fits almost anything; the heavy one is what fails.',
          },
          {
            term: 'Include the inserts',
            detail:
              'The card, the tissue and the returns slip together take up more room than most people allow for.',
          },
          {
            term: 'Test with your own packers',
            detail:
              'A careful desk fold and a bench fold at pace are different sizes. Use the one you will actually get.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How many poly mailer sizes should I stock?',
        a: 'Most operations land on two or three. One means waste on light orders and strain on heavy ones; four or more introduces decisions at the packing bench that get made inconsistently when volumes rise.',
      },
      {
        q: 'Are poly mailer sizes measured to the flap or to the usable area?',
        a: 'Conventions differ between suppliers, which is why two identical-looking numbers can describe different bags. We confirm on each quotation which measurement applies to the film being quoted.',
      },
      {
        q: 'Can I order more than one size on the same run?',
        a: 'Yes, and it is usually more economical than separate orders because setup is shared where the film and artwork match.',
      },
    ],
    related: [
      {
        href: '/size-guide/',
        label: 'Choosing a size for your product',
        reason: 'The framework to work through before you pick from this table.',
      },
      {
        href: '/resources/mailer-measurement-guide/',
        label: 'How to measure',
        reason: 'The practical method for measuring a packed product.',
      },
      {
        href: '/samples/',
        label: 'Order samples',
        reason: 'The only way to be certain a size fits before you buy volume.',
      },
    ],
    cta: {
      heading: 'Still between two sizes?',
      body: 'Tell us what you ship and we will recommend a size, say why, and quote it. Samples of two candidates are usually the fastest way to settle it.',
      buttonLabel: 'Get a size recommendation',
    },
    whatsapp: 'Hi, I need help choosing a poly mailer size for my product.',
  },

  /* ===================================================================== */
  {
    slug: 'poly-mailer-colors',
    name: 'Colours',
    eyebrow: 'Colour range',
    h1: 'Poly Mailer Colours',
    title: 'Poly Mailer Colours | Choosing a Base Film',
    summary: 'Colours compared by print latitude, opacity and how visibly they mark.',
    description:
      'Compare mailer colours by what they do — print latitude, opacity, how they hide handling marks — rather than by how they look in a swatch.',
    intro: [
      'Colour is the cheapest branding available on a mailer. A coloured film costs a fraction of a printed run and makes a parcel recognisable on a doorstep before anyone reads the label.',
      'It is also a technical decision. The base colour decides which inks will read, how much shows through the film, and how obvious a scuff will be after a week in a sorting network. This page compares the range on those grounds rather than on how the swatches look.',
    ],
    plan: {
      intent: 'Choose a poly mailer colour.',
      audience: 'Brand and packaging leads selecting a base film for a printed or plain run.',
      problem: 'Colour is chosen visually, then causes print and opacity problems later.',
      angle: 'Compares colours by technical behaviour — print contrast, opacity, mark visibility.',
      primaryKeyword: 'poly mailer colors',
      supportingKeywords: ['colored mailer options', 'mailer color chart', 'branded mailer colours'],
      nearestPage: '/colored-poly-mailers/',
      boundary:
        'This page is the chooser across colours. The colored mailers product page is where you order a mixed-colour or non-standard tone.',
    },
    productSlugs: [
      'white-poly-mailers',
      'black-poly-mailers',
      'pink-poly-mailers',
      'light-pink-poly-mailers',
      'colored-poly-mailers',
      'blank-poly-mailers',
    ],
    picks: {
      'white-poly-mailers': 'Every ink colour available. Shows marks the most.',
      'black-poly-mailers': 'Hides everything. White ink only, in practice.',
      'pink-poly-mailers': 'Saturated tones for retail and promotional visibility.',
      'light-pink-poly-mailers': 'Blush and pastel, for softer brand palettes.',
      'colored-poly-mailers': 'Blue, green, purple, red and matched tones.',
      'blank-poly-mailers': 'Any colour, unprinted — the lowest-commitment route.',
    },
    blocks: [
      {
        kind: 'compare',
        heading: 'What each base does',
        intro:
          'Four properties decide whether a colour will work for you. None of them is visible in a swatch.',
        caption: 'Base film colours compared on the properties that affect a real order.',
        columns: ['Base', 'Print latitude', 'Hides marks', 'Show-through risk'],
        rows: [
          ['White', 'Every ink, including photographic', 'Poorly', 'Moderate on dark contents'],
          ['Black', 'White and pale metallics only', 'Very well', 'None'],
          ['Grey or silver', 'Dark inks and white solids', 'Well', 'Low'],
          ['Saturated colour', 'White and black', 'Moderately', 'Low'],
          ['Pastel or blush', 'Dark inks only', 'Poorly', 'High on dark contents'],
        ],
        outro:
          'If your identity depends on a photographic image or a multi-colour palette, white is the only base that will carry it. Everything else is a trade you are choosing deliberately.',
      },
      {
        kind: 'steps',
        heading: 'Settling a colour without a reprint',
        intro:
          'Colour is the specification that causes the most disputes, and the sequence below removes most of them.',
        steps: [
          {
            title: 'Decide whether colour or print carries the identity',
            detail:
              'If the colour is doing the work, a plain coloured bag may be all you need.',
          },
          {
            title: 'Check your ink against the base',
            detail:
              'A dark wordmark cannot go on a dark base. Settle this before anyone designs anything.',
          },
          {
            title: 'Match opacity to your contents',
            detail:
              'Dark products under pale film need a higher opacity specification, or they shadow through.',
          },
          {
            title: 'Supply a physical reference',
            detail:
              'A screen colour is not a reference. Send a swatch, a previous sample or a defined value.',
          },
          {
            title: 'Approve a proof on the actual film and finish',
            detail:
              'Colour reads differently on matte than on gloss, and differently again on a coloured base.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which mailer colour hides dirt and handling marks most effectively?',
        a: 'Black, followed by grey and mid-tone colours. White shows the most. A matte finish helps on any base, and a design that covers more of the panel hides more of the surface.',
      },
      {
        q: 'Does a coloured mailer cost more than white?',
        a: 'A stock colour carries a small premium over white; a matched colour carries more, because it needs a reference and a proof round. Both are still far cheaper than printing.',
      },
      {
        q: 'Can the same colour run across plain and bubble-lined mailers?',
        a: 'Yes, though the two surfaces reflect light differently so the match should be checked at proof stage rather than assumed.',
      },
    ],
    related: [
      {
        href: '/custom-poly-mailers/',
        label: 'Printing on a chosen base',
        reason: 'What happens after the colour is settled and artwork enters the picture.',
      },
      {
        href: '/printing-options/',
        label: 'Print methods',
        reason: 'How coverage and method interact with the base you have chosen.',
      },
      {
        href: '/blog/choosing-colors-for-branded-shipping-mailers/',
        label: 'Colour strategy',
        reason: 'A longer read on choosing a colour that survives contact with a supply chain.',
      },
    ],
    cta: {
      heading: 'Match a colour',
      body: 'Send a swatch or a colour value and tell us what you ship. We will confirm what the film can reach and quote it.',
      buttonLabel: 'Ask about colour matching',
    },
    whatsapp: 'Hi, I would like to discuss poly mailer colours and colour matching.',
  },

  /* ===================================================================== */
  {
    slug: 'sustainable-poly-mailers',
    name: 'Sustainable range',
    eyebrow: 'Sustainability',
    h1: 'Sustainable Poly Mailers',
    title: 'Sustainable Poly Mailers | Comparing the Options',
    summary: 'Recycled, compostable and biodegradable compared on what each can be evidenced to do.',
    description:
      'Recycled, compostable and biodegradable mailers compared on what each one can actually be evidenced to do, and which suits which business.',
    intro: [
      'Three words get used interchangeably in packaging and they mean three different things. One is about what the film was made from. One is about a specific disposal process. One is a general property with no conditions attached.',
      'Choosing between them is not a preference. It decides what you will be able to say to customers, what documentation you will need to hold, and whether the environmental benefit actually happens or just gets printed on a bag.',
      'This page compares the three. Each has its own page with the detail, and we publish no percentages, certifications or timescales anywhere, because none were supplied to us.',
    ],
    plan: {
      intent: 'Choose between sustainable mailer options.',
      audience:
        'Sustainability and procurement leads who need a defensible choice rather than a green label.',
      problem: 'The three terms are used interchangeably and are not interchangeable.',
      angle: 'A decision framework based on what can be evidenced, not on environmental marketing.',
      primaryKeyword: 'eco friendly poly mailers',
      supportingKeywords: [
        'sustainable poly mailers',
        'green poly mailers',
        'environmentally friendly mailers',
      ],
      nearestPage: '/sustainability/',
      boundary:
        'This page chooses between products. The sustainability page states our own position on what we will and will not claim.',
    },
    productSlugs: [
      'recycled-poly-mailers',
      'compostable-poly-mailers',
      'biodegradable-poly-mailers',
    ],
    picks: {
      'recycled-poly-mailers':
        'Easiest to evidence. Does not depend on what your customer can access.',
      'compostable-poly-mailers':
        'Strongest story, hardest execution — needs a disposal route to exist.',
      'biodegradable-poly-mailers':
        'The least defined term, and the one carrying the most claim risk.',
    },
    blocks: [
      {
        kind: 'compare',
        heading: 'What each option is actually promising',
        intro:
          'Read the middle column first. It is the question the term answers, and it is where most confusion starts.',
        caption: 'The three sustainable routes compared on evidence and dependency.',
        columns: ['Route', 'Question it answers', 'Depends on', 'Ease of evidencing'],
        rows: [
          [
            'Recycled content',
            'What was the film made from',
            'Feedstock availability at production',
            'Straightforward — a declaration or certificate',
          ],
          [
            'Compostable',
            'Where can it go after use',
            'A composting process your customer can reach',
            'Possible, but the route must also exist',
          ],
          [
            'Biodegradable',
            'Will it break down, eventually',
            'Conditions that are rarely specified',
            'Difficult without named conditions and a timeframe',
          ],
        ],
        outro:
          'If you need something you can defend to a customer or a regulator this quarter, recycled content is the practical starting point. The other two are worth pursuing when the supporting documentation and the infrastructure both exist.',
      },
      {
        kind: 'bullets',
        heading: 'Changes that do not depend on a material claim',
        intro:
          'These reduce environmental impact measurably and need no certification to defend.',
        items: [
          {
            term: 'Right-size your mailers',
            detail:
              'Shipping less air means less film per parcel and fewer parcels crossing into higher weight bands.',
          },
          {
            term: 'Reduce components per parcel',
            detail:
              'Every insert, void filler and second bag is material. Removing one is a measurable reduction.',
          },
          {
            term: 'Specify a returns strip',
            detail:
              'A resealable bag removes an entire second piece of packaging from every return.',
          },
          {
            term: 'Print disposal wording that is true where your customers live',
            detail:
              'An accurate instruction gets followed. A generic symbol usually does not.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which sustainable mailer option should I choose?',
        a: 'Start from what you can evidence and what your customers can access. Recycled content is the easiest to substantiate and does not depend on infrastructure you do not control. Compostable is stronger as a story but only delivers an outcome where the disposal route genuinely exists.',
      },
      {
        q: 'Why do you not publish recycled percentages or certifications?',
        a: 'Because none were supplied to us, and a figure on a web page is not a figure we could stand behind for your specific order. We confirm what the film available for your order can support, in writing, with the documentation behind it.',
      },
      {
        q: 'Are poly mailers recyclable?',
        a: 'Flexible film is generally not accepted in household kerbside collections across the markets we serve, and is instead collected at store drop-off points where those exist. Availability varies by area, so check what applies where your customers live before printing any instruction.',
      },
    ],
    related: [
      {
        href: '/resources/sustainable-mailer-terminology-guide/',
        label: 'Terminology guide',
        reason: 'Plain definitions to settle before you brief a designer.',
      },
      {
        href: '/sustainability/',
        label: 'Our position on claims',
        reason: 'What we will and will not put our name to, and why.',
      },
      {
        href: '/blog/recycled-vs-compostable-vs-biodegradable-mailers/',
        label: 'Comparing the three routes',
        reason: 'A longer read with the regulatory context behind the terms.',
      },
    ],
    cta: {
      heading: 'Find out what can be evidenced',
      body: 'Tell us what you need to be able to claim and which markets you sell into. We will come back with what the available film supports.',
      buttonLabel: 'Ask about sustainable options',
    },
    whatsapp:
      'Hi, I would like to understand the sustainable poly mailer options and their documentation.',
  },

  /* ===================================================================== */
  {
    slug: 'protective-mailers',
    name: 'Protective range',
    eyebrow: 'Protection',
    h1: 'Protective Mailers',
    title: 'Protective Mailers | Matching Cushioning to Contents',
    summary: 'Sorted by the damage you are seeing rather than by the product you had in mind.',
    description:
      'Which protective mailer for which contents. Impact, abrasion, crushing and movement are different failures, and they need different answers.',
    intro: [
      'Products arrive damaged for four different reasons, and cushioning only fixes two of them. Buying a padded mailer when your problem is crushing or movement means paying more for the same failure rate.',
      'This page sorts the options by the failure they address. Start from how your damaged items actually failed and read across.',
    ],
    plan: {
      intent: 'Find the right protective mailer for fragile contents.',
      audience: 'Sellers with a damage problem to solve, not a product to browse.',
      problem: 'Cushioning is bought generically without diagnosing the failure mode.',
      angle: 'Organised by failure mode rather than by product, and says when to use a carton instead.',
      primaryKeyword: 'protective mailers',
      supportingKeywords: [
        'cushioned mailers',
        'protective shipping bags',
        'padded mailer comparison',
      ],
      nearestPage: '/padded-poly-mailers/',
      boundary:
        'The padded page compares cushioning constructions. This page starts one step earlier, from the damage itself.',
    },
    productSlugs: [
      'poly-bubble-mailers',
      'padded-poly-mailers',
      'personalized-bubble-mailers',
      'self-seal-poly-mailers',
    ],
    picks: {
      'poly-bubble-mailers': 'Impact protection with a moisture-resistant film outer.',
      'padded-poly-mailers': 'Compare bubble, foam and paper-faced constructions.',
      'personalized-bubble-mailers': 'The same protection, printed with your artwork.',
      'self-seal-poly-mailers': 'Closure options, including tamper evidence for high-value contents.',
    },
    blocks: [
      {
        kind: 'compare',
        heading: 'Start from how things are failing',
        intro:
          'Look at the damaged items rather than at the packaging. The way they broke tells you what to buy.',
        caption: 'Damage type matched to the packaging change that addresses it.',
        columns: ['What you are seeing', 'The cause', 'What fixes it'],
        rows: [
          ['Cracked, chipped, broken', 'Impact', 'Bubble lining'],
          ['Scratched, scuffed, marked surfaces', 'Abrasion', 'Foam lining'],
          ['Crushed, deformed, flattened', 'Load from above', 'A rigid carton — not more padding'],
          ['Damage at corners and edges only', 'Concentrated force', 'Box the item first, then cushion'],
          ['Contents rattling, damage inconsistent', 'Movement inside the bag', 'A smaller mailer, or fill the space'],
          ['Water marks, damp packaging', 'Weather exposure', 'A film outer rather than paper'],
        ],
      },
      {
        kind: 'prose',
        heading: 'The honest limits of a flexible bag',
        paragraphs: [
          'A mailer has no structure. Whatever load is placed on top of it goes straight through to the contents, and no lining changes that. If your products are being crushed rather than knocked, the answer is a carton and it is worth accepting that early rather than working through three cushioning specifications first.',
          'The second limit is fit. Cushioning protects where it sits between the contents and the outside. A small item in a large padded mailer has protection on its faces and open space beside it, and it will reach the end of that space at speed.',
          'Get both of those right and cushioning does the rest of the work well.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which protective mailer is strongest?',
        a: 'There is no single strongest, because impact, abrasion and crushing are different failures. Bubble absorbs impact, foam protects surfaces, and neither resists a load pressing down — that needs a rigid carton.',
      },
      {
        q: 'Do I need to box items inside a protective mailer?',
        a: 'For anything genuinely breakable, yes. Cushioning absorbs impact across a face but does not protect an exposed edge or corner. A boxed item inside a cushioned mailer is a far more reliable combination than either alone.',
      },
      {
        q: 'Are protective mailers cheaper than boxes with void fill?',
        a: 'Usually, per parcel, and they weigh and measure less as well. Where contents need structural protection, though, the comparison is not really available.',
      },
    ],
    related: [
      {
        href: '/resources/protective-mailer-comparison/',
        label: 'Protection reference table',
        reason: 'A deeper reference matching contents to construction.',
      },
      {
        href: '/blog/when-to-use-bubble-lined-poly-mailers/',
        label: 'When cushioning earns its cost',
        reason: 'A longer read on the arithmetic behind the decision.',
      },
      {
        href: '/materials/',
        label: 'Materials',
        reason: 'What changes between film weights before cushioning enters the picture.',
      },
    ],
    cta: {
      heading: 'Diagnose a damage problem',
      body: 'Tell us what is arriving damaged and how it failed. We will recommend a construction, explain the reasoning, and quote it.',
      buttonLabel: 'Get a protection recommendation',
    },
    whatsapp: 'Hi, my products are arriving damaged. Could you advise on protective mailers?',
  },

  /* ===================================================================== */
  {
    slug: 'custom-printed-poly-mailers',
    name: 'Printed range',
    eyebrow: 'Custom print',
    h1: 'Custom Printed Poly Mailers',
    title: 'Custom Printed Poly Mailers | Formats That Print Well',
    summary: 'Which printable surface suits your artwork, before you commission any of it.',
    description:
      'Which mailer formats take print well and which fight it. Compare flat film, cushioned surfaces and frosted bags before you commit artwork.',
    intro: [
      'Artwork is laid out for a surface. A design that reads beautifully on flat film loses its edges on a cushioned one and its contrast on a translucent one, and the file that worked for one format usually needs redrawing for another.',
      'So the format decision comes before the design decision. This page compares what each printable format does to artwork, so you brief a designer once rather than twice.',
    ],
    plan: {
      intent: 'Choose a mailer format for a custom printed run.',
      audience: 'Brand and design leads about to commission packaging artwork.',
      problem: 'Artwork is designed before the format is chosen, then has to be redrawn.',
      angle: 'Compares printable surfaces by what they do to artwork, not by protection or size.',
      primaryKeyword: 'custom printed poly mailers',
      supportingKeywords: [
        'printed mailer formats',
        'branded poly mailers',
        'custom shipping bags with logo',
      ],
      nearestPage: '/custom-poly-mailers/',
      boundary:
        'This page compares which format to print on. The custom mailers page is where you place the order and covers the process.',
    },
    productSlugs: [
      'custom-poly-mailers',
      'personalized-bubble-mailers',
      'custom-frosted-poly-bags',
      'bee-poly-mailers',
    ],
    picks: {
      'custom-poly-mailers': 'Flat film. Takes anything, including photographic artwork.',
      'personalized-bubble-mailers': 'Cushioned surface. Bold shapes only, no fine detail.',
      'custom-frosted-poly-bags': 'Translucent. Dark inks and restrained layouts.',
      'bee-poly-mailers': 'Repeat patterns, which survive packing better than a placed logo.',
    },
    blocks: [
      {
        kind: 'compare',
        heading: 'What each surface does to artwork',
        intro:
          'Take the most delicate element in your identity and read down the column you are considering.',
        caption: 'Printable mailer surfaces compared by what artwork survives on each.',
        columns: ['', 'Flat film', 'Cushioned', 'Frosted'],
        rows: [
          ['Fine lines', 'Hold', 'Break up across the texture', 'Hold, if dark'],
          ['Small type', 'Reads', 'Closes up', 'Reads, if dark'],
          ['Large solids', 'Even', 'Shows the dimple pattern', 'Reduces the transparency you paid for'],
          ['Photographic images', 'Reproduce', 'Go muddy', 'Not suited'],
          ['White ink', 'Depends on the base', 'Works on dark bases', 'Washes out over contents'],
          ['Repeat patterns', 'Excellent', 'Good, at large scale', 'Good, restrained'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Constraints that apply to every format',
        intro:
          'Four things catch first-time buyers regardless of which surface they choose.',
        items: [
          {
            term: 'The flap folds over',
            detail:
              'Anything placed near the top edge disappears once the bag is sealed. Keep the important elements clear of it.',
          },
          {
            term: 'The label has to go somewhere',
            detail:
              'Design a clear zone for it, or accept that it will land on your artwork on a large share of parcels.',
          },
          {
            term: 'Film needs bleed',
            detail:
              'Artwork intended to run to the edge needs an allowance, or part of the run gets a white sliver on one side.',
          },
          {
            term: 'The bag is seen packed, not flat',
            detail:
              'A composition drawn edge to edge on a flat template distorts once there is something inside.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which mailer format reproduces artwork most cleanly?',
        a: 'Flat film, by a clear margin. It reproduces fine detail, photographic images and multi-colour palettes. Cushioned and frosted surfaces both work but need artwork designed for them rather than adapted to them.',
      },
      {
        q: 'Can I use the same artwork across several formats?',
        a: 'Usually only with adjustments. A design that works on flat film generally needs heavier lines and larger type before it works on a cushioned surface, and darker inks before it works on frosted film.',
      },
      {
        q: 'Does printing on more than one format cost more?',
        a: 'Each format is a separate setup, so yes. Where you are running several, quoting them together is more economical than ordering them separately.',
      },
    ],
    related: [
      {
        href: '/artwork-guidelines/',
        label: 'Artwork guidelines',
        reason: 'The file specification to hand a designer before they start.',
      },
      {
        href: '/design-your-poly-mailer/',
        label: 'Design tool',
        reason: 'Try a layout and see approximate placement before you commission anything.',
      },
      {
        href: '/blog/how-to-prepare-artwork-for-custom-poly-mailer-printing/',
        label: 'Preparing print files',
        reason: 'A longer read on getting a file right the first time.',
      },
    ],
    cta: {
      heading: 'Check artwork against a format',
      body: 'Send what you have and tell us which format you are considering. We will tell you honestly what will survive and what needs changing.',
      buttonLabel: 'Have artwork reviewed',
    },
    whatsapp: 'Hi, I have artwork and want to know which printed mailer format suits it.',
  },

  /* ===================================================================== */
  {
    slug: 'seasonal-poly-mailers',
    name: 'Seasonal & patterned',
    eyebrow: 'Seasonal',
    h1: 'Seasonal Poly Mailers',
    title: 'Seasonal Poly Mailers | Planning a Year of Campaigns',
    summary: 'Campaign packaging planned across a year, with the quantity risk named.',
    description:
      'Seasonal and patterned mailers planned across a year. Quantity risk, ordering sequence, and designs that outlive their window.',
    intro: [
      'Seasonal packaging is the only category where the main risk is not quality or price. It is stock you cannot use, because the window closed while you still had four cartons left.',
      'That risk is managed at the planning stage, not at the design stage. This page covers how brands plan a year of seasonal runs, which designs extend past their window, and where a patterned mailer with no season attached does the job better.',
    ],
    plan: {
      intent: 'Plan or order seasonal and patterned mailers.',
      audience: 'Marketing and operations leads planning campaign packaging across a year.',
      problem: 'Seasonal packaging becomes dead stock when the window closes.',
      angle: 'Annual planning and quantity risk rather than a catalogue of designs.',
      primaryKeyword: 'seasonal poly mailers',
      supportingKeywords: ['cute poly mailers', 'holiday mailers', 'patterned shipping bags'],
      nearestPage: '/christmas-poly-mailers/',
      boundary:
        'The individual seasonal pages cover one window each. This page plans across all of them.',
    },
    productSlugs: [
      'christmas-poly-mailers',
      'halloween-poly-mailers',
      'bee-poly-mailers',
    ],
    picks: {
      'christmas-poly-mailers': 'The highest volume window, and the one with capacity risk.',
      'halloween-poly-mailers': 'A short window that closes hard — order tightly.',
      'bee-poly-mailers': 'Patterned with no season attached, so leftovers are never dead stock.',
    },
    blocks: [
      {
        kind: 'steps',
        heading: 'Planning seasonal packaging across a year',
        intro:
          'Doing this once, annually, costs less than making the same decision three times under time pressure.',
        steps: [
          {
            title: 'List the windows that genuinely matter to you',
            detail:
              'Most businesses have one or two, not six. A campaign that does not move revenue does not need packaging.',
          },
          {
            title: 'Decide the proportion of parcels involved',
            detail:
              'Themed packaging rarely needs to cover every parcel. Gift orders and new customers are usually enough.',
          },
          {
            title: 'Choose designs that survive the window',
            detail:
              'Undated artwork in a seasonal rather than event palette can run again next year.',
          },
          {
            title: 'Fix the date stock must be on the bench',
            detail:
              'Work backwards from there through approval and production, and confirm the schedule with us in writing.',
          },
          {
            title: 'Keep standard stock running underneath',
            detail:
              'A themed shortfall then slows nothing down, which lets you order the themed quantity tightly.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'Seasonal, or patterned with no season',
        intro:
          'The second option gets overlooked, and for many small brands it is the better trade.',
        caption: 'Seasonal campaign packaging compared with a year-round patterned design.',
        columns: ['', 'Seasonal design', 'Year-round pattern'],
        rows: [
          ['Usable window', 'Weeks', 'Indefinite'],
          ['Dead stock risk', 'Real', 'None'],
          ['Order quantity', 'Tight, forecast against a campaign', 'To your normal run rate'],
          ['Impact on the doorstep', 'High, and time-limited', 'Steady'],
          ['Setup frequency', 'Every campaign', 'Once'],
        ],
        outro:
          'Brands running a genuine gift season justify the seasonal run. Brands wanting a parcel that feels considered usually get more from a pattern with no date attached.',
      },
    ],
    faqs: [
      {
        q: 'How far ahead should seasonal mailers be ordered?',
        a: 'Work backwards from the date you need stock on the packing bench, allowing a buffer before your volume climbs. Artwork approval is where seasonal projects most often run late, so settle it well before production is scheduled.',
      },
      {
        q: 'How do I avoid being left with seasonal stock?',
        a: 'Order against expected campaign parcels rather than against the lowest unit price, keep standard stock running underneath so a shortfall costs nothing, and choose undated artwork that can run again next year.',
      },
      {
        q: 'Can seasonal mailers be stored until next year?',
        a: 'If they were kept cool, dry and out of direct sunlight, generally yes. Adhesive ages first, so test that a stored sample still seals properly before relying on old stock.',
      },
    ],
    related: [
      {
        href: '/custom-poly-mailers/',
        label: 'Custom printed mailers',
        reason: 'What a printed run involves once the design is agreed.',
      },
      {
        href: '/industries/gift-retail/',
        label: 'Gift retail',
        reason: 'The sector where seasonal packaging does the most work.',
      },
      {
        href: '/samples/',
        label: 'Samples',
        reason: 'See a printed seasonal design before committing to a campaign quantity.',
      },
    ],
    cta: {
      heading: 'Plan a seasonal run',
      body: 'Tell us your campaign dates and expected parcel volume, and we will quote a run and confirm a schedule you can plan against.',
      buttonLabel: 'Plan a campaign order',
    },
    whatsapp: 'Hi, I want to plan seasonal printed mailers for an upcoming campaign.',
  },
];

export const collectionBySlug = new Map(collections.map((c) => [c.slug, c]));
