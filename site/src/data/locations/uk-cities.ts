import type { LocationPage } from './types';

/**
 * UK cities.
 *
 * Written in US English like the rest of the site, but the subject matter is
 * UK-specific: postal format thresholds, remote-area delivery, and the way
 * multi-channel retail works here. Nothing states a carrier's current
 * dimensions or prices, because those change and we would be publishing a
 * figure we do not control.
 */

export const ukCities: readonly LocationPage[] = [
  /* ===================================================================== */
  {
    slug: 'london',
    name: 'London',
    market: 'uk',
    kind: 'city',
    region: 'England',
    h1: 'Poly Mailers for London Businesses',
    title: 'Poly Mailers London | Letterbox-Friendly Sizing',
    description:
      'Poly mailers for London businesses — sizing parcels to stay inside postal format thresholds, and what parcel thickness does to delivery cost.',
    summary: 'Sizing to stay inside postal format thresholds, where thickness decides the price.',
    intro: [
      'UK postal pricing is unusually sensitive to one measurement: how thick a parcel is. There is a format band for items that fit through a letterbox, and staying inside it or falling outside it changes both the price and whether a delivery succeeds first time.',
      'For London businesses shipping small items in volume, that single threshold is often the largest cost lever available, and it is decided almost entirely by packaging choice.',
    ],
    angle: 'Postal format thresholds — where parcel thickness rather than weight decides the price.',
    primaryKeyword: 'poly mailers london',
    supportingKeywords: ['polythene mailing bags london', 'letterbox friendly packaging', 'shipping bags london'],
    sectors: [
      { name: 'Small-item ecommerce', note: 'Jewellery, cosmetics, accessories and print — the categories that can realistically stay inside a letterbox format.' },
      { name: 'Fashion and boutique retail', note: 'A dense independent retail base with high presentation expectations.' },
      { name: 'Publishing and print', note: 'Flat goods where the thickness question is decided by the item rather than the packaging.' },
    ],
    recommended: [
      { slug: '6x9-poly-mailers', why: 'The format most likely to keep a small item inside a letterbox band.' },
      { slug: '9x12-poly-mailers', why: 'Flat goods that need footprint without gaining thickness.' },
      { slug: 'blank-poly-mailers', why: 'Low commitment while you work out which formats your range actually fits.' },
      { slug: 'small-poly-mailers', why: 'Choosing between the small formats when thickness is the constraint.' },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Thickness, not weight, is usually the deciding measurement',
        paragraphs: [
          'Most people optimising shipping cost start with weight. For small UK parcels the more consequential measurement is often depth, because a format threshold sits at a specific thickness and crossing it moves the item into a different pricing band entirely.',
          'That is why a slightly larger mailer can be cheaper to send. A folded item lying flat in a bag with a bigger footprint stays thin; the same item compressed into a smaller bag becomes a compact lump that no longer fits through a letterbox.',
          'Check the current thresholds with your carrier rather than relying on a figure published anywhere, including here — they are reviewed periodically. Then measure a real packed parcel against them rather than estimating.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Packing to stay flat',
        items: [
          { term: 'Choose footprint over compression', detail: 'A wider, flatter parcel frequently costs less to send than a smaller, thicker one.' },
          { term: 'Fold to a rectangle', detail: 'An irregular bundle has a thick point, and the thick point is what gets measured.' },
          { term: 'Rethink the insert', detail: 'A folded card, a sample and a returns slip can be the millimetres that cross a threshold.' },
          { term: 'Measure a packed parcel, not the product', detail: 'Flat product dimensions tell you nothing about what it becomes once bagged.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'When it will not fit through a letterbox',
        before:
          'Some products simply cannot stay inside a letterbox format, and forcing the attempt costs more than accepting it. Where an item is genuinely a parcel, the packaging decision shifts back to fit and protection rather than thickness, and the right approach is the ordinary one. The method for working that out from a packed sample is set out in the ',
        link: { href: '/size-guide/', anchor: 'size selection framework' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What size poly mailer fits through a UK letterbox?',
        a: 'It depends on the current format thresholds set by your carrier, which are reviewed periodically, so check them directly rather than relying on a published figure. Then measure a real packed parcel rather than the product on its own.',
      },
      {
        q: 'Is a smaller mailer always cheaper to send?',
        a: 'No, and this is the most common mistake in UK small-parcel shipping. A tighter bag makes a folded item thicker, and thickness is what most format thresholds are built around. A wider, flatter parcel often costs less.',
      },
      {
        q: 'Do you supply polythene mailing bags in the UK?',
        a: 'Yes. Orders are produced to your specification and shipped to your UK address; we hold no local stock, so we confirm the schedule in writing rather than implying next-day availability.',
      },
    ],
    related: [
      { href: '/uk/', label: 'Supplying the United Kingdom', reason: 'How ordering and delivery work for UK customers.' },
      { href: '/small-poly-mailers/', label: 'Small formats', reason: 'Choosing between the small sizes when thickness matters.' },
      { href: '/resources/mailer-measurement-guide/', label: 'Measurement guide', reason: 'How to measure a packed parcel properly.' },
    ],
    cta: {
      heading: 'Size for a postal threshold',
      body: 'Send us a packed parcel’s dimensions and we will suggest a format that keeps it in the cheapest band it can reach.',
      buttonLabel: 'Ask about letterbox sizing',
    },
    whatsapp: 'Hi, I ship small parcels in London and want packaging that stays letterbox friendly.',
  },

  /* ===================================================================== */
  {
    slug: 'birmingham',
    name: 'Birmingham',
    market: 'uk',
    kind: 'city',
    region: 'England',
    h1: 'Poly Mailers for Birmingham Businesses',
    title: 'Poly Mailers Birmingham | Trade & B2B Supply',
    description:
      'Poly mailers for Birmingham businesses — trade supply and B2B shipping, where parcels go to businesses rather than consumers.',
    summary: 'Trade and B2B shipping, where the parcel is opened by a business.',
    intro: [
      'Birmingham’s manufacturing and trade base produces a lot of business-to-business shipping, and B2B parcels are judged differently from consumer ones. Nobody is having an experience; somebody is checking a delivery.',
      'What matters is identification, count accuracy and goods arriving usable. What does not matter, at all, is how the bag looks.',
    ],
    angle: 'B2B and trade shipping, where the parcel is checked in rather than opened.',
    primaryKeyword: 'poly mailers birmingham',
    supportingKeywords: ['trade packaging birmingham', 'polythene mailing bags', 'B2B shipping bags'],
    sectors: [
      { name: 'Manufacturing and components', note: 'Parts and small assemblies shipped to trade customers rather than consumers.' },
      { name: 'Jewellery and small goods', note: 'A long-established trade in small, valuable items where discretion matters.' },
      { name: 'Trade and wholesale distribution', note: 'Mixed order sizes going to businesses across the region.' },
    ],
    recommended: [
      { slug: 'blank-poly-mailers', why: 'Trade parcels are opened and discarded; branding adds cost without adding value.' },
      { slug: 'economy-poly-mailers', why: 'Where presentation is genuinely irrelevant, the specification decision is purely practical.' },
      { slug: '6x9-poly-mailers', why: 'Small components and valuable items in discreet parcels.' },
      { slug: 'padded-poly-mailers', why: 'Components and small assemblies that need protecting rather than presenting.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'What a trade customer needs from a parcel',
        intro:
          'Four things. None of them is a logo.',
        items: [
          { term: 'To identify it without opening it', detail: 'Clear marking is what lets a delivery be booked in against an order rather than investigated.' },
          { term: 'An accurate count', detail: 'Numbered parcels and stated contents remove a reconciliation step at the receiving end.' },
          { term: 'Goods that arrive usable', detail: 'Components with hardware or finished surfaces need protecting from each other as much as from the outside.' },
          { term: 'Discretion where value is high', detail: 'A small valuable parcel should not advertise itself, particularly where it passes through several hands.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Where B2B failure costs more than B2C failure',
        paragraphs: [
          'A damaged consumer order costs a replacement and a little goodwill. A damaged component can stop a customer’s production, which is a different order of consequence entirely.',
          'That is why the film weight conversation in trade supply is a serious one rather than a cost exercise. Where a failure interrupts somebody else’s work, the saving on a lighter specification is trivial against what it risks.',
          'It is also why consistency matters here more than in consumer shipping. A trade customer who has booked in the same parcel format a hundred times notices immediately when it changes, and a change nobody warned them about creates a problem rather than an improvement.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Where a mailer is the wrong packaging',
        before:
          'Trade buyers sometimes ask for a heavier mailer when the honest answer is that a flexible bag is not right for what they are shipping. Anything rigid, crush-sensitive or with a sharp protrusion belongs in a carton, and no film weight changes that. Working out which failure you actually have first is set out in the ',
        link: { href: '/resources/protective-mailer-comparison/', anchor: 'protective construction reference' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Does trade packaging need branding?',
        a: 'Rarely. A trade parcel is opened by someone checking a delivery and discarded immediately. Clear marking, accurate counts and goods arriving usable are worth far more than a printed bag.',
      },
      {
        q: 'What film weight suits component shipping?',
        a: 'Heavier than consumer soft goods, generally. Hardware, edges and finished surfaces all concentrate force against the film, and a failure that interrupts a customer’s work costs far more than the saving on a lighter specification.',
      },
      {
        q: 'Can you keep the specification consistent across orders?',
        a: 'Where consistency matters, say so at quotation stage and it is quoted as a requirement. Trade customers who have booked in the same format repeatedly notice a change, and an unannounced one causes problems.',
      },
    ],
    related: [
      { href: '/uk/', label: 'How we supply the UK market', reason: 'How ordering and delivery work for UK customers.' },
      { href: '/economy-poly-mailers/', label: 'Economy specification', reason: 'Where a cost-led choice is safe and where it is not.' },
      { href: '/materials/', label: 'Materials', reason: 'What changes between film weights.' },
    ],
    cta: {
      heading: 'Specify for trade supply',
      body: 'Tell us what you ship and to whom. We will specify for a receiving bay rather than a doorstep, and quote it.',
      buttonLabel: 'Quote trade packaging',
    },
    whatsapp: 'Hi, I ship trade orders from Birmingham and need practical packaging quoted.',
  },

  /* ===================================================================== */
  {
    slug: 'manchester',
    name: 'Manchester',
    market: 'uk',
    kind: 'city',
    region: 'England',
    h1: 'Poly Mailers for Manchester Businesses',
    title: 'Poly Mailers Manchester | Flash Sale & Peak Volume',
    description:
      'Poly mailers for Manchester businesses — packaging for demand that arrives in bursts, where a single campaign can outship an ordinary month.',
    summary: 'Demand that arrives in bursts, where one campaign outships a normal month.',
    intro: [
      'Manchester’s online fashion sector runs on a demand pattern most packaging planning ignores: not steady growth, but bursts. A campaign, a drop, a flash sale, and a day’s volume that would ordinarily be a fortnight’s.',
      'Packaging planned against a monthly average will fail during those bursts, and packaging planned against the burst sits idle for the rest of the year. The answer is to plan for both explicitly.',
    ],
    angle: 'Burst demand — packaging planned for a campaign day rather than an average month.',
    primaryKeyword: 'poly mailers manchester',
    supportingKeywords: ['fashion packaging manchester', 'polythene mailing bags', 'peak volume packaging'],
    sectors: [
      { name: 'Online fashion', note: 'A substantial cluster of high-volume, campaign-driven retailers.' },
      { name: 'Fulfilment and logistics', note: 'Operations built around handling burst volume for others.' },
      { name: 'Creative and merchandise', note: 'Music and event-linked merchandise with similarly spiky demand.' },
    ],
    recommended: [
      { slug: '10x13-poly-mailers', why: 'One standard size is what makes a burst survivable at the bench.' },
      { slug: 'economy-poly-mailers', why: 'At burst volumes, unit cost compounds faster than at any other time.' },
      { slug: 'self-seal-poly-mailers', why: 'Seconds per parcel matter most on the day you are shipping the most.' },
      { slug: 'blank-poly-mailers', why: 'The fallback stock that means a burst never stops for want of a printed bag.' },
    ],
    blocks: [
      {
        kind: 'steps',
        heading: 'Planning for a burst',
        intro:
          'Five things to do before a campaign rather than during one.',
        steps: [
          { title: 'Forecast the burst, not the month', detail: 'The number that matters is parcels on the busiest day, because that is what has to be on the bench.' },
          { title: 'Simplify the size range before the campaign', detail: 'Temporary staff and time pressure both punish complexity. Fewer sizes, written rules.' },
          { title: 'Hold plain stock underneath', detail: 'So a shortfall in a branded line never stops orders going out.' },
          { title: 'Pre-stage packaging at the bench', detail: 'Cartons opened and positioned before the day, not during it.' },
          { title: 'Plan the returns wave', detail: 'A burst of orders becomes a burst of returns a fortnight later. Decide now how they will be repacked.' },
        ],
      },
      {
        kind: 'bullets',
        heading: 'What fails during a burst',
        intro:
          'Almost never the packaging. Four things that do.',
        items: [
          { term: 'Seals, because pressing gets skipped', detail: 'Under time pressure packers fold rather than press, and a partial bond opens in the network.' },
          { term: 'Size selection', detail: 'The wrong bag gets grabbed, which shows up as damage and as shipping cost the following month.' },
          { term: 'Label placement', detail: 'Rushed labels across folds lift and generate delivery exceptions.' },
          { term: 'Stock availability', detail: 'Running out mid-burst is the most expensive packaging failure there is.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'The returns wave',
        before:
          'A campaign that ships a fortnight of volume in a day generates a fortnight of returns in a day, roughly two weeks later, and that second wave is where the packaging decision pays off or does not. A double-strip closure means every one of those returns arrives in the original bag rather than in whatever the customer found. The arithmetic is set out on the ',
        link: { href: '/self-seal-poly-mailers/', anchor: 'closure options page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'How much packaging should I hold for a campaign?',
        a: 'Enough for the busiest day plus a working buffer, held before the campaign rather than ordered during it. Running out mid-burst is the most expensive packaging failure available.',
      },
      {
        q: 'Why do seal failures rise during busy periods?',
        a: 'Because pressing gets skipped. Under time pressure packers fold the flap and move on, which creates a partial bond that survives the bench and opens later in the network.',
      },
      {
        q: 'Should I simplify the size range before a peak?',
        a: 'Yes. Complexity that is manageable on a normal day becomes error under pressure, particularly with temporary staff. Fewer sizes with written rules costs less than a perfectly optimised range nobody applies.',
      },
    ],
    related: [
      { href: '/uk/', label: 'UK ordering and delivery', reason: 'How ordering and delivery work for UK customers.' },
      { href: '/industries/ecommerce/', label: 'Ecommerce operations', reason: 'The wider operational picture at volume.' },
      { href: '/self-seal-poly-mailers/', label: 'Closure options', reason: 'The specification that decides how returns arrive.' },
    ],
    cta: {
      heading: 'Prepare for a peak',
      body: 'Tell us your busiest-day volume rather than your monthly average. We will quote against the day that actually matters.',
      buttonLabel: 'Plan for a campaign',
    },
    whatsapp: 'Hi, I run campaign-driven fashion ecommerce in Manchester and need peak packaging.',
  },

  /* ===================================================================== */
  {
    slug: 'glasgow',
    name: 'Glasgow',
    market: 'uk',
    kind: 'city',
    region: 'Scotland',
    h1: 'Poly Mailers for Glasgow Businesses',
    title: 'Poly Mailers Glasgow | Remote & Island Delivery',
    description:
      'Poly mailers for Glasgow businesses — shipping to the Highlands and Islands, where transits are longer and handling is heavier.',
    summary: 'Shipping to remote and island addresses, where journeys are longer and rougher.',
    intro: [
      'A business shipping from Glasgow serves a delivery geography with more variety than almost anywhere else in the UK: dense urban addresses, long single-track routes, and islands reached by ferry.',
      'Those are not the same shipping problem. A parcel to a Glasgow flat and one to a Hebridean address travel very differently, and packaging chosen for the first is not automatically right for the second.',
    ],
    angle: 'Remote and island delivery — longer transits, more handling, harsher conditions.',
    primaryKeyword: 'poly mailers glasgow',
    supportingKeywords: ['shipping bags scotland', 'polythene mailing bags glasgow', 'highlands delivery packaging'],
    sectors: [
      { name: 'Speciality food and drink', note: 'Producers shipping across the country and abroad from a Scottish base.' },
      { name: 'Craft and textiles', note: 'A strong maker economy, much of it selling direct and shipping widely.' },
      { name: 'Outdoor and technical goods', note: 'Products suited to the conditions they are shipped through.' },
    ],
    recommended: [
      { slug: 'poly-bubble-mailers', why: 'A film outer that handles a long journey through weather and multiple handling points.' },
      { slug: 'padded-poly-mailers', why: 'More handling events mean more impact opportunities than a city delivery.' },
      { slug: '10x13-poly-mailers', why: 'A close fit stops contents shifting over a long multi-leg journey.' },
      { slug: 'self-seal-poly-mailers', why: 'Every additional handling point is another test of the seal.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'What a long, multi-leg journey adds',
        intro:
          'Four differences from a same-city delivery, all of which affect the specification.',
        items: [
          { term: 'More handling events', detail: 'Consolidation, transfer and sometimes a ferry. Each one is another opportunity for a partial seal to open.' },
          { term: 'Longer exposure', detail: 'A parcel spending days rather than hours in transit sees more weather and more vibration.' },
          { term: 'Less forgiving delivery', detail: 'A failed delivery to a remote address is not easily retried, so a parcel that arrives damaged is a longer problem.' },
          { term: 'Weather at the destination', detail: 'A parcel left outside on the west coast is exposed to a different amount of water than one in a city porch.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Specify for the hardest route, not the average one',
        paragraphs: [
          'Most operations here ship a mix, and the temptation is to specify for the majority of parcels, which are ordinary short-hop deliveries.',
          'The trouble is that the failures all happen on the minority. A specification that works for a Glasgow flat and fails for a remote island address produces a damage rate concentrated exactly where replacement is most expensive and most visible.',
          'Where a meaningful proportion of your volume goes long-distance, it is usually cheaper to specify for that route across the whole flow than to run two specifications, because the difference in unit cost is small and the admin of two lines is not.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Delivery to your own address',
        before:
          'The same geography applies to receiving your packaging order. Delivery arrangements to some Scottish addresses differ from those to the rest of the UK, and it is worth confirming at quotation stage rather than assuming a standard arrangement. What we confirm about delivery for each order is set out on the ',
        link: { href: '/shipping-and-delivery/', anchor: 'shipping and delivery page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Does packaging need to be stronger for remote deliveries?',
        a: 'Usually, because the journey involves more handling events and longer exposure rather than because of the distance itself. A close fit and a properly pressed seal matter as much as the film weight.',
      },
      {
        q: 'Should I run two specifications for city and remote deliveries?',
        a: 'Rarely worth it. The unit-cost difference between specifications is small, and running two lines adds bench decisions and reorder admin. Specifying for the harder route across the whole flow is usually cheaper overall.',
      },
      {
        q: 'Can you deliver a packaging order to a Scottish address?',
        a: 'Yes. Delivery arrangements to some addresses differ from those to the rest of the UK, so we confirm them in writing on your quotation rather than assuming a standard arrangement.',
      },
    ],
    related: [
      { href: '/uk/', label: 'Poly mailer supply across the UK', reason: 'How ordering and delivery work for UK customers.' },
      { href: '/poly-bubble-mailers/', label: 'Poly bubble mailers', reason: 'Protection for a long, multi-handling journey.' },
      { href: '/shipping-and-delivery/', label: 'Shipping and delivery', reason: 'What is confirmed for your own delivery.' },
    ],
    cta: {
      heading: 'Specify for a long route',
      body: 'Tell us where your parcels actually go, including the difficult ones. We will specify for the hardest route rather than the average.',
      buttonLabel: 'Get a route-based specification',
    },
    whatsapp: 'Hi, I ship from Glasgow to remote and island addresses and need hard-wearing packaging.',
  },

  /* ===================================================================== */
  {
    slug: 'leeds',
    name: 'Leeds',
    market: 'uk',
    kind: 'city',
    region: 'England',
    h1: 'Poly Mailers for Leeds Businesses',
    title: 'Poly Mailers Leeds | Multi-Channel Retail Packaging',
    description:
      'Poly mailers for Leeds businesses — packaging for retailers fulfilling from stores as well as warehouses, where one order can be packed anywhere.',
    summary: 'Retailers fulfilling from stores as well as warehouses, where anyone might pack an order.',
    intro: [
      'Multi-channel retail creates a packaging problem that pure online businesses never face: the same order might be packed in a warehouse by a trained packer, or in a stockroom by a shop assistant between customers.',
      'Both parcels reach the same customer and carry the same brand. Making them look and perform the same is a packaging and process decision rather than a training one.',
    ],
    angle: 'Store fulfilment — the same order packed in a warehouse or in a shop stockroom.',
    primaryKeyword: 'poly mailers leeds',
    supportingKeywords: ['retail packaging leeds', 'store fulfilment packaging', 'polythene mailing bags'],
    sectors: [
      { name: 'Multi-channel retail', note: 'Businesses fulfilling online orders from stores as well as from a central warehouse.' },
      { name: 'Fashion and homeware', note: 'Categories where store fulfilment is most common and presentation matters most.' },
      { name: 'Independent retail', note: 'Smaller businesses adding an online channel to a physical shop.' },
    ],
    recommended: [
      { slug: '10x13-poly-mailers', why: 'One size across every location removes the most common source of inconsistency.' },
      { slug: 'self-seal-poly-mailers', why: 'A closure that needs no tape is essential where there is no packing bench.' },
      { slug: 'custom-poly-mailers', why: 'A printed bag makes a store-packed parcel look identical to a warehouse-packed one.' },
      { slug: 'colored-poly-mailers', why: 'Recognition that survives being packed by anyone, anywhere.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'What makes store fulfilment inconsistent',
        intro:
          'Four causes, all fixable with packaging and process rather than training.',
        items: [
          { term: 'No dedicated bench', detail: 'A parcel packed on a shop counter between customers is packed differently from one on a warehouse line.' },
          { term: 'Whatever packaging is to hand', detail: 'If the right bag has run out in a store, something else gets used, and the customer sees the difference.' },
          { term: 'Different people every time', detail: 'Store staff pack occasionally rather than constantly, so technique varies more.' },
          { term: 'No standard for label placement', detail: 'Which is the most visible inconsistency of all, and the easiest to fix.' },
        ],
      },
      {
        kind: 'steps',
        heading: 'Making every location pack the same parcel',
        intro:
          'Five steps, in order of how much difference they make.',
        steps: [
          { title: 'Reduce to one size wherever possible', detail: 'A single size removes the decision that store staff are least equipped to make.' },
          { title: 'Use a closure that needs nothing else', detail: 'No tape, no scissors, no dispenser to be missing from a stockroom.' },
          { title: 'Put a card at every packing point', detail: 'Fold, bag, seal, label position. Four lines, laminated, wherever an order might be packed.' },
          { title: 'Distribute packaging centrally', detail: 'Stores should never buy their own, because that is where inconsistency enters.' },
          { title: 'Check a store-packed parcel yourself', detail: 'Order one. It is the only way to see what your customers are actually receiving.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'The case for printing',
        before:
          'A printed mailer is unusually valuable in a multi-channel operation, because it makes every parcel identifiably yours regardless of who packed it or where. It also removes the temptation for a store to substitute something else, since nothing else looks like it. What a printed run involves and what to settle first is set out on the ',
        link: { href: '/custom-poly-mailers/', anchor: 'custom printed mailer page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'How do I keep store-packed and warehouse-packed orders consistent?',
        a: 'Reduce to one size, use a closure that needs no tape, put a short instruction card at every packing point and distribute packaging centrally. Consistency here is a process problem rather than a training one.',
      },
      {
        q: 'Should stores order their own packaging?',
        a: 'No. It is the most common source of inconsistency in multi-channel retail, because a store that runs out will use whatever is available and the customer sees the difference.',
      },
      {
        q: 'Is printed packaging worth it for store fulfilment?',
        a: 'It is unusually valuable here, because it makes every parcel identifiably yours whoever packed it, and it removes the option of substituting something else when stock runs low.',
      },
    ],
    related: [
      { href: '/uk/', label: 'Working with UK senders', reason: 'How ordering and delivery work for UK customers.' },
      { href: '/custom-poly-mailers/', label: 'Custom printed mailers', reason: 'The consistency argument for printing.' },
      { href: '/industries/ecommerce/', label: 'Ecommerce operations', reason: 'The wider operational picture.' },
    ],
    cta: {
      heading: 'Standardise across locations',
      body: 'Tell us how many places an order might be packed. We will specify something that works in a stockroom as well as a warehouse.',
      buttonLabel: 'Quote multi-site packaging',
    },
    whatsapp: 'Hi, we fulfil from stores as well as a warehouse in Leeds and need consistent packaging.',
  },
];
