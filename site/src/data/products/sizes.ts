import type { ProductPage } from '../types';

/**
 * Size family. Nine pages, nine different jobs.
 *
 * The exact-size pages answer "will my product fit and what will it cost me to
 * run this size", so each one leads with the items that genuinely suit it and
 * compares itself to the size directly above and below. The two broad pages
 * (large, small) answer "which of these should I standardise on", so they lead
 * with a decision, not a description.
 *
 * No page states a capacity in grams or a film weight in microns. Fit is always
 * expressed as the item types customers actually send, with the standing note
 * that a sample is the way to be certain.
 */

export const sizeProducts: ProductPage[] = [
  /* ===================================================================== */
  {
    slug: '6x9-poly-mailers',
    name: '6x9 Poly Mailers',
    h1: '6x9 Poly Mailers',
    title: '6x9 Poly Mailers | Custom Printed & Stock',
    description:
      'The 6x9 mailer for small, flat orders — jewelry, cosmetics, accessories. What fits, what does not, and how to print a logo on a small panel.',
    summary:
      'The smallest size most brands keep in stock, sized around single small items rather than folded garments.',
    intro: [
      'A 6x9 mailer is the size you reach for when the order is one small thing and a thank-you card. It is the size that stops a pair of earrings, a lipstick or a phone case rattling around inside a bag built for a sweatshirt, and it is the size that keeps the parcel inside the flat-rate bands that most small parcels are priced against.',
      'It is also the size most often bought by mistake. Sellers who ship a mix of small items and folded apparel tend to order 6x9 first because it looks like a sensible starting point, then find that anything thicker than a folded t-shirt will not close cleanly. This page sets out what the size genuinely handles so you order the right proportion of it.',
    ],
    plan: {
      intent: 'Buy 6x9 poly mailers in bulk, printed or blank.',
      audience:
        'Jewelry, beauty and accessory sellers shipping small, low-profile items in volume.',
      problem:
        'Choosing the smallest size that still closes properly around their product, and knowing whether a logo will read on a panel that narrow.',
      angle:
        'Treats 6x9 as a specialist size with a real ceiling rather than a general-purpose default, and covers small-panel print legibility.',
      primaryKeyword: '6x9 poly mailers',
      supportingKeywords: [
        '6x9 mailer',
        '6 x 9 poly mailer bags',
        'small poly mailers for jewelry',
      ],
      nearestPage: '/small-poly-mailers/',
      boundary:
        'This page is the exact size. The small-mailers page is the decision between 6x9 and 9x12 for a buyer who has not chosen yet.',
    },
    images: [
      {
        file: 'pink-poly-mailers-rolled-stack-red-backdrop.jpg',
        alt: 'Rolled stack of bright pink poly mailers with self-adhesive seal strips',
      },
      {
        file: 'light-pink-poly-mailers-fanned-silver-seal.jpg',
        alt: 'Pale pink poly mailers fanned out to show the silver adhesive closure strip',
      },
      {
        file: 'deep-pink-poly-mailers-stacked-with-insert-card.jpg',
        alt: 'Deep pink poly mailers stacked with one holding a printed insert card',
      },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'What this size actually holds',
        intro:
          'Fit depends on how thick an item is once packed, not on its flat outline. These are the categories customers most often run through 6x9.',
        items: [
          {
            term: 'Jewelry and small accessories',
            detail:
              'Boxed earrings, chains, hair clips and pins, usually with a card and a small tissue wrap.',
          },
          {
            term: 'Beauty singles and samples',
            detail:
              'A lipstick, a serum bottle in a sleeve, a sheet-mask multipack, or a sample set going out as a marketing send.',
          },
          {
            term: 'Phone and tech accessories',
            detail: 'Cases, cables, screen protectors and small charging blocks.',
          },
          {
            term: 'Flat paper goods',
            detail:
              'Print orders, sticker packs, enamel-pin cards and greetings ranges that need to arrive uncreased.',
          },
          {
            term: 'One thin garment, folded tight',
            detail:
              'Socks, underwear, a rolled vest. A standard cotton t-shirt fits only if you fold it small and the bag is not also carrying an insert.',
          },
        ],
        outro:
          'Anything with real loft — knitwear, a hoodie, a pair of jeans — belongs a size or two up, because forcing it puts the strain on the seal rather than the film.',
      },
      {
        kind: 'compare',
        heading: 'How 6x9 compares with the size above it',
        intro:
          'Most buyers are choosing between these two, and the honest difference is thickness tolerance rather than footprint.',
        caption: 'Practical differences between 6x9 and 9x12 in day-to-day packing.',
        columns: ['', '6x9', '9x12'],
        rows: [
          ['Typical contents', 'One small item plus a card', 'One folded garment or a small bundle'],
          ['Tolerance for bulk', 'Low — the seal is the limit', 'Moderate — a fold of slack to work with'],
          ['Print panel', 'Logo mark, short line of text', 'Logo plus a message and social handles'],
          ['Hand-packing speed', 'Fast, one motion', 'Fast, but needs a fold first'],
          ['Cartons per pallet position', 'High count per carton', 'Fewer per carton, still compact'],
        ],
        outro:
          'Brands that ship both small items and apparel usually run 6x9 alongside a larger size rather than trying to cover everything with one.',
      },
      {
        kind: 'prose',
        heading: 'Designing artwork for a narrow panel',
        paragraphs: [
          'The printable area on a 6x9 is smaller than most brand teams expect once you allow for the closure strip at the top and a margin at the sides. A wordmark that reads comfortably on a 12x15 can become a grey smudge here.',
          'The approach that works is to treat the front as a single element. One mark, sized generously, with plenty of clear space around it. Move the website address, the social handles and any care wording to the reverse, where there is no closure strip competing for room.',
          'If your identity depends on fine detail — a thin script, a hairline rule, a monogram with tight counters — ask for that element to be checked before the run. Fine lines can close up on flexible film in a way they never do on paper.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Options confirmed on your quotation',
        intro:
          'Every line below is a choice, not a fixed figure. We quote against what you select and confirm the exact specification in writing.',
        rows: [
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Heavier film resists puncture from a hard-cornered item such as a boxed watch.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Peel strip plus tear-open tab'],
            note: 'A tear tab helps recipients open the bag without scissors, which matters for gift ranges.',
          },
          {
            label: 'Colour',
            options: ['Stock colour', 'Matched to your brand colour'],
            note: 'Colour matching is quoted against a reference you supply.',
          },
          {
            label: 'Print',
            options: ['Unprinted', 'One side', 'Both sides'],
            note: 'On this size, a single well-placed front mark usually reads better than two crowded panels.',
          },
          {
            label: 'Finish',
            options: ['Gloss', 'Matte'],
            note: 'Matte hides handling marks; gloss holds saturated colour more strongly.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Ordering, packing and storage',
        before:
          'A carton of 6x9 mailers takes up very little bench space, which is why fulfilment teams tend to keep more of this size on hand than any other. Store the cartons flat and away from direct sunlight; adhesive strips are the part of a mailer that ages first, and heat is what ages them. If you are standardising a pick-and-pack station around two or three sizes, this is usually the one that sits closest to the packer. Choosing that mix well is covered in the ',
        link: { href: '/size-guide/', anchor: 'framework for choosing a mailer size' },
        after:
          ', which works through the measurements to take before you commit to a run.',
        extra: [
          'For repeat orders we keep your approved artwork and specification on file, so a reorder is a confirmation rather than a fresh setup.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Quality checks before your order ships',
        paragraphs: [
          'Every custom run is checked against the proof you approved. We look at registration and colour consistency across the run, at seal integrity along the side and bottom welds, and at the adhesive strip lifting cleanly from its liner.',
          'Bags are counted by weight and by carton, and any short or damaged carton is flagged before dispatch rather than after. If something is wrong on arrival, tell us within a reasonable window and we will work it out with you — the terms are set out in the custom-order policy.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Will a folded t-shirt fit a 6x9 mailer?',
        a: 'A lightweight cotton tee folded small will usually go in, but it fills the bag. If you also include a card, a sticker or tissue, it stops closing comfortably. Brands shipping tees as a core line normally run 9x12 or 10x13 instead and keep 6x9 for accessories.',
      },
      {
        q: 'Are 6x9 measurements the usable interior or the outer bag?',
        a: 'Mailer sizes are conventionally quoted as the usable area, with the closure strip sitting above it. Because conventions vary between suppliers, we confirm on your quotation which measurement applies to the film we are quoting, and a sample is the reliable way to check against your own product.',
      },
      {
        q: 'Can a logo be printed across the full front of this size?',
        a: 'Yes. Full-coverage print is available, though on a panel this narrow it is worth reviewing the artwork with us first. Very fine lines and small type behave differently on flexible film than on a printed carton.',
      },
      {
        q: 'Is a bubble-lined version of this size available?',
        a: 'A cushioned equivalent can be quoted where the contents need protecting rather than just containing. It changes the outer dimensions for the same interior space, so it is worth requesting both on the same quotation to compare.',
      },
    ],
    related: [
      {
        href: '/9x12-poly-mailers/',
        label: '9x12 Poly Mailers',
        reason: 'The next size up, and the one most 6x9 buyers add when apparel enters the range.',
      },
      {
        href: '/small-poly-mailers/',
        label: 'Small Poly Mailers',
        reason: 'Compare the small sizes side by side before committing to a run.',
      },
      {
        href: '/poly-mailer-sizes/',
        label: 'All mailer sizes',
        reason: 'See where this size sits across the full range.',
      },
    ],
    cta: {
      heading: 'Get a price for 6x9 mailers',
      body: 'Tell us your quantity, whether you want print, and what you are sending. We will come back with a written specification and a price.',
      buttonLabel: 'Request a 6x9 quotation',
    },
    whatsapp:
      'Hi, I would like a quotation for 6x9 poly mailers. Please send details on quantities and printing.',
    collections: ['poly-mailer-sizes'],
    group: 'size',
    quotePreset: '6x9 Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: '9x12-poly-mailers',
    name: '9x12 Poly Mailers',
    h1: '9x12 Poly Mailers',
    title: '9x12 Poly Mailers | Bulk & Custom Printed',
    description:
      'A 9x12 mailer suits one folded garment or a small bundle. Fit guidance, print area, closure options and how it compares with 10x13.',
    summary:
      'The single-garment size — one folded item with enough slack to seal without strain.',
    intro: [
      'Nine by twelve is the size that turns a mailer from a small-parcel bag into an apparel bag. One folded t-shirt, one pair of leggings, a swim set, a book with its jacket protected: this is the size that holds a single item without leaving it swimming in film.',
      'It sits in an awkward spot commercially, because 10x13 gets more searches and more shelf space. That popularity is not always deserved. If your average order is genuinely one thin garment, 9x12 wastes less material per parcel and stacks more tightly in a shipping carton, and those two things compound across thousands of orders.',
    ],
    plan: {
      intent: 'Source 9x12 poly mailers for apparel or book shipping.',
      audience:
        'Small apparel labels, book and print sellers, and subscription boxes with a single-item core SKU.',
      problem:
        'Deciding whether the extra inch each way of a 10x13 is worth the material and the looser fit.',
      angle:
        'Argues the case for the smaller of the two workhorse sizes and quantifies what changes when you move up.',
      primaryKeyword: '9x12 poly mailers',
      supportingKeywords: ['9 x 12 poly mailer bags', 'poly mailers for books', 'mailers for one t-shirt'],
      nearestPage: '/10x13-poly-mailers/',
      boundary:
        'This page argues for the tighter fit; 10x13 is written for buyers standardising on one size across a mixed range.',
    },
    images: [
      {
        file: 'green-poly-mailer-single-angled-grey-backdrop.png',
        alt: 'Single bright green poly mailer angled to show its adhesive closure flap',
      },
      {
        file: 'pink-floral-poly-mailers-fanned-with-book.png',
        alt: 'Pink poly mailers printed with a white rose pattern, one holding a paperback book',
        caption:
          'Printed patterns are supplied to artwork. The design shown is an example, not a stock line.',
      },
      {
        file: 'black-poly-mailers-printed-with-customer-logo.png',
        alt: 'Two black poly mailers printed with a customer logo and social media icons',
      },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Where this size earns its place',
        standfirst: 'Single items, packed once, sealed once.',
        paragraphs: [
          'The argument for 9x12 is efficiency. A single folded garment needs enough room to sit flat and enough slack at the top for the adhesive strip to fold over onto film rather than onto the contents. Nine by twelve gives you that and very little more.',
          'For book and print sellers the case is different again. A paperback or a mounted print needs a bag that does not let it slide and bend in transit. A closer fit does more for arrival condition than a heavier film does.',
          'The place it stops working is bulk. Two garments, a knitted item, or a garment plus a substantial insert will all close, but they leave the seal doing work it was not designed for. That is the point to move up.',
        ],
      },
      {
        kind: 'steps',
        heading: 'Checking the fit before you commit to a run',
        intro:
          'Ten minutes with a sample saves a warehouse full of the wrong size. This is the sequence we suggest.',
        steps: [
          {
            title: 'Pack your heaviest realistic order',
            detail:
              'Not your lightest. Take the version of your order that includes the insert, the tissue and the returns label.',
          },
          {
            title: 'Fold the way your packers actually fold',
            detail:
              'Bench folding under time pressure is looser than the fold you do at a desk. Use the real one.',
          },
          {
            title: 'Seal it and check the strip',
            detail:
              'The adhesive should meet clean film across its whole length. If it lands on a ridge of contents anywhere, the size is too tight.',
          },
          {
            title: 'Drop it from bench height',
            detail:
              'Once, flat, onto a hard floor. A seal that opens on a single drop will open in a sorting hub.',
          },
          {
            title: 'Weigh the packed parcel',
            detail:
              'Check it against the shipping bands you buy on, because a size change can move you across a threshold in either direction.',
          },
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification choices',
        intro:
          'These are the variables we quote against. Nothing here is fixed until it is written on your quotation.',
        rows: [
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Heavier film is worth quoting if your contents include anything with a corner or a zip.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns'],
            note: 'A second strip lets a customer reseal the same bag to send an item back.',
          },
          {
            label: 'Opacity',
            options: ['Standard opaque', 'Higher opacity'],
            note: 'Higher opacity matters when the contents are dark and the mailer is pale.',
          },
          {
            label: 'Print',
            options: ['Unprinted', 'One side', 'Both sides'],
            note: 'The reverse of this size is large enough for care wording or a returns note.',
          },
          {
            label: 'Colour',
            options: ['Stock colour', 'Matched to your brand colour'],
            note: 'Matched colour is quoted against a physical or digital reference you provide.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Print coverage on a mid-size panel',
        before:
          'This is the smallest size where two-sided print earns its cost. The front carries the mark, the reverse carries the things customers actually read at the doorstep — how to return, how to recycle the bag in their area, where to find you. Coverage choice changes the price more than most buyers expect, and the trade-offs between spot colour, full coverage and single-side print are set out in the ',
        link: { href: '/printing-options/', anchor: 'breakdown of print methods and coverage' },
        after: ', which is worth reading before you finalise artwork.',
      },
      {
        kind: 'bullets',
        heading: 'Mistakes we see on this size',
        items: [
          {
            term: 'Ordering it for a mixed range',
            detail:
              'If half your orders are two items, half your parcels will be strained. Split the order across two sizes instead.',
          },
          {
            term: 'Printing to the very edge without a bleed allowance',
            detail:
              'Film moves on press. Artwork needs bleed, or you get a white sliver on one side of the run.',
          },
          {
            term: 'Placing the logo where the label goes',
            detail:
              'Work out where your shipping label lands before you position artwork, or you will cover the mark you paid for.',
          },
          {
            term: 'Assuming the size includes the flap',
            detail:
              'Conventions differ between suppliers. Confirm which measurement is being quoted rather than comparing two numbers that mean different things.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Checks we run before dispatch',
        paragraphs: [
          'Print is checked against your approved proof for colour and registration at the start, middle and end of the run. Seals are checked along both welds. The adhesive liner is checked for clean release, which is the failure that annoys packers most and shows up least on a photograph.',
          'Counts are verified by carton before the order leaves. If a run cannot meet the approved proof, we stop and talk to you rather than shipping something close enough.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How many t-shirts fit in a 9x12 mailer?',
        a: 'One, folded. Two lightweight tees will physically go in but the bag closes under tension and the seal is the part that gives. If two-item orders are common for you, quote 10x13 alongside this size and compare.',
      },
      {
        q: 'Is 9x12 suitable for shipping books?',
        a: 'For paperbacks and thin hardbacks it works well, and the closer fit stops the book shifting. Books with sharp corners are worth quoting on a heavier film, or on a cushioned mailer if the covers must arrive unmarked.',
      },
      {
        q: 'Can I have a returns strip added?',
        a: 'Yes. A second adhesive strip lets the recipient reseal the same bag. It adds a little cost per unit and is usually worth it for categories with high return rates such as fashion.',
      },
      {
        q: 'Does printing on both sides slow down production?',
        a: 'It adds a stage, so it affects scheduling rather than the per-unit price alone. We confirm the effect on your specific run when we quote, rather than applying a general rule.',
      },
    ],
    related: [
      {
        href: '/10x13-poly-mailers/',
        label: '10x13 Poly Mailers',
        reason: 'The size directly above, and the one to compare against for mixed order profiles.',
      },
      {
        href: '/6x9-poly-mailers/',
        label: '6x9 Poly Mailers',
        reason: 'Worth running alongside if part of your range is accessories rather than apparel.',
      },
      {
        href: '/apparel-shipping-bags/',
        label: 'Apparel Shipping Bags',
        reason: 'Written around garment fulfilment rather than a single dimension.',
      },
    ],
    cta: {
      heading: 'Price a 9x12 run',
      body: 'Send us the quantity, the print coverage you want and what goes inside. We will confirm the specification in writing before anything is scheduled.',
      buttonLabel: 'Ask for 9x12 pricing',
    },
    whatsapp:
      'Hi, I am looking at 9x12 poly mailers. Could you quote quantities and print options?',
    collections: ['poly-mailer-sizes'],
    group: 'size',
    quotePreset: '9x12 Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: '10x13-poly-mailers',
    name: '10x13 Poly Mailers',
    h1: '10x13 Poly Mailers',
    title: '10x13 Poly Mailers | The Standard Apparel Size',
    description:
      'The 10x13 mailer is the apparel default. What it holds, why brands standardise on it, print layout notes and how it compares up and down.',
    summary:
      'The most-ordered apparel size, and the one most brands standardise on when they want to carry a single SKU.',
    intro: [
      'Ten by thirteen is the size the apparel industry settled on. It takes a folded t-shirt with room to spare, a pair of leggings, a light knit, or a two-item order without straining the seal. That tolerance is the whole reason it dominates: it forgives a rushed fold on a busy afternoon.',
      'It is also the size where standardising pays off most. One SKU means one carton on the bench, one artwork file, one reorder, and packers who never have to decide. For a lot of businesses the small amount of extra film per parcel costs less than the time and error rate of running four sizes.',
      'This page is written for the buyer weighing that decision rather than for someone who already knows they want a 10x13.',
    ],
    plan: {
      intent: 'Buy 10x13 poly mailers, usually in bulk, often printed.',
      audience:
        'Apparel and ecommerce operations deciding whether to standardise on one mailer size.',
      problem:
        'Balancing material cost per parcel against the operational cost of running several sizes.',
      angle:
        'Frames 10x13 as an operations decision, not just a dimension, and is explicit about when standardising is the wrong call.',
      primaryKeyword: '10x13 poly mailers',
      supportingKeywords: [
        '10x13 mailers',
        '10 x 13 poly bags',
        '10x13 poly mailer bags bulk',
      ],
      nearestPage: '/9x12-poly-mailers/',
      boundary:
        '9x12 argues for tighter fit on single items. This page argues the operational case for one standard size.',
    },
    images: [
      {
        file: 'white-poly-mailer-pair-angled-teal-backdrop.jpg',
        alt: 'Two white poly mailers overlapping, the upper one showing its open adhesive flap',
      },
      {
        file: 'white-poly-mailer-front-and-back-lime-backdrop.jpg',
        alt: 'White poly mailer shown filled beside a flat empty mailer with a dark seal strip',
      },
      {
        file: 'white-poly-mailer-open-peel-strip-blue-backdrop.jpg',
        alt: 'White poly mailer with its peel strip liner partly lifted to show the adhesive',
      },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'Standardising on one size, or running three',
        intro:
          'The honest comparison is not between dimensions. It is between two ways of running a packing bench.',
        caption:
          'Trade-offs between a single standard mailer size and a three-size range.',
        columns: ['', 'One size (10x13)', 'Three sizes'],
        rows: [
          ['Material per parcel', 'Higher on small orders', 'Matched to each order'],
          ['Decisions at the bench', 'None', 'One per order, and packers get it wrong under pressure'],
          ['Artwork and setup', 'One file, one setup', 'Three of each, re-proofed on every change'],
          ['Reorder admin', 'Single line', 'Three lines, three run-out dates'],
          ['Shelf and bench space', 'One carton', 'Three cartons within reach'],
          ['Suits', 'Ranges where most orders are one or two garments', 'Ranges spanning accessories to outerwear'],
        ],
        outro:
          'If more than about a fifth of your orders would sit awkwardly in a 10x13 — either lost in it or straining it — the single-size case weakens quickly.',
      },
      {
        kind: 'bullets',
        heading: 'Order types this size handles comfortably',
        items: [
          {
            term: 'One folded tee, hoodie-weight excepted',
            detail:
              'A cotton tee sits flat with slack to spare, leaving room for a card and tissue.',
          },
          {
            term: 'Two-item apparel orders',
            detail:
              'A tee and a pair of socks, or two tees, still close cleanly without the seal working hard.',
          },
          {
            term: 'Light knitwear',
            detail:
              'A fine-gauge jumper fits; a chunky knit or a padded jacket does not, and pushing it there is a false economy.',
          },
          {
            term: 'Soft home goods',
            detail: 'Tea towels, cushion covers, a folded throw of modest weight.',
          },
          {
            term: 'Mixed orders with an insert',
            detail:
              'The extra room over a 9x12 is exactly what an A5 card, a sticker sheet and a returns slip take up.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Laying out artwork when the label is unavoidable',
        paragraphs: [
          'On this size the shipping label is a design constraint, not an afterthought. A standard four-by-six label covers a substantial share of the front panel, and it goes on wherever the packer finds space unless you make the right place obvious.',
          'Two approaches work. Either leave a deliberate clear zone in the upper portion of the front, sized for your label, and let the artwork sit below it. Or move the whole design to the reverse and keep the front plain, which makes the label placement irrelevant and often photographs better on an unboxing video.',
          'What does not work is a centred full-bleed design on the front and a hope that the label lands kindly. It will not.',
        ],
      },
      {
        kind: 'specs',
        heading: 'What you are choosing between',
        intro:
          'Everything below is selectable. The specification we build for you is confirmed on the quotation, not implied here.',
        rows: [
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Two-item orders and anything with a zip or a stud benefit from the heavier option.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns', 'Peel strip with tear tab'],
            note: 'Fashion ranges with high return rates usually justify the second strip.',
          },
          {
            label: 'Print coverage',
            options: ['Unprinted', 'Logo only', 'Partial coverage', 'Full coverage'],
            note: 'Coverage affects price more than the number of colours does.',
          },
          {
            label: 'Sides printed',
            options: ['One side', 'Both sides'],
            note: 'The reverse is where returns and disposal wording belongs.',
          },
          {
            label: 'Finish',
            options: ['Gloss', 'Matte'],
            note: 'Matte is the more common choice for apparel because it photographs without hotspots.',
          },
          {
            label: 'Colour',
            options: ['Stock colour', 'Matched to your brand colour'],
            note: 'Matched colour needs a reference and a proof round before the run.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Volume, storage and reordering',
        before:
          'Standardising on one size makes forecasting straightforward: parcels shipped equals mailers used. Order to a run rate you can store properly — flat, dry, out of sunlight — rather than to the largest quantity available, because adhesive is the component that ages. Businesses coordinating a first order across several markets will find the practical points in the ',
        link: { href: '/resources/international-ordering-guide/', anchor: 'guide to ordering across markets' },
        after: ' more useful than a general shipping page.',
      },
      {
        kind: 'steps',
        heading: 'From enquiry to delivered order',
        steps: [
          {
            title: 'Specification',
            detail:
              'We agree size, film weight, closure, colour and print coverage, and put all of it in writing.',
          },
          {
            title: 'Artwork and proof',
            detail:
              'You send artwork, we return a digital proof showing placement and colour, and nothing runs until you approve it.',
          },
          {
            title: 'Production',
            detail:
              'The run is scheduled against the approved proof. Print, seal and adhesive are checked during the run rather than only at the end.',
          },
          {
            title: 'Packing and count verification',
            detail: 'Cartons are counted and labelled, and discrepancies are resolved before dispatch.',
          },
          {
            title: 'Dispatch to your address',
            detail:
              'Shipping arrangements and timing are confirmed with you for your market at the point of order.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is 10x13 the most common poly mailer size?',
        a: 'Because it absorbs variation. A folded garment, a two-item order and a garment plus an insert all fit without a packer having to think about it. That tolerance is worth more to most operations than the film saved by a tighter size.',
      },
      {
        q: 'Will a hoodie fit in a 10x13?',
        a: 'A thin, unlined hoodie folded tightly will go in, but it fills the bag and the seal takes the strain. Fleece-lined or oversized hoodies need a larger size — 12x15 upward is the usual answer.',
      },
      {
        q: 'Should I print the front or the back?',
        a: 'If your shipping label goes on the front, put your design on the reverse or design a deliberate clear zone for the label. A centred front design without a label plan gets covered on a high proportion of parcels.',
      },
      {
        q: 'Can I order this size unprinted while artwork is finalised?',
        a: 'Yes, and it is a common sequence. Businesses often run blank stock while a design is being settled, then switch to printed on the next order once the artwork is approved.',
      },
      {
        q: 'Is a cushioned version of this size available?',
        a: 'Yes, as a bubble-lined equivalent. Note that the outer dimensions grow for the same usable interior, so quote both together if you need to compare parcel sizes.',
      },
    ],
    related: [
      {
        href: '/12x15-poly-mailers/',
        label: '12x15 Poly Mailers',
        reason: 'The size to add when knitwear and multi-item orders enter the range.',
      },
      {
        href: '/custom-poly-mailers/',
        label: 'Custom Poly Mailers',
        reason: 'What changes when you move from stock bags to a printed run.',
      },
      {
        href: '/poly-mailer-sizes/',
        label: 'Size collection',
        reason: 'Compare every size in one table before you standardise.',
      },
    ],
    cta: {
      heading: 'Quote a 10x13 order',
      body: 'Tell us your monthly volume and whether you want print. We will send a written specification and price, and a sample if you want to test the fit first.',
      buttonLabel: 'Get 10x13 pricing',
    },
    whatsapp:
      'Hi, I would like pricing on 10x13 poly mailers, including printed options.',
    collections: ['poly-mailer-sizes'],
    group: 'size',
    quotePreset: '10x13 Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: '12x15-poly-mailers',
    name: '12x15 Poly Mailers',
    h1: '12x15 Poly Mailers',
    title: '12x15 Poly Mailers | Multi-Item & Knitwear Size',
    description:
      'A 12x15 mailer handles knitwear, multi-garment orders and bulkier soft goods. Fit notes, print area, and when to move up or down a size.',
    summary:
      'The step up from apparel standard — knitwear, bundles and orders that stopped fitting a 10x13.',
    intro: [
      'Twelve by fifteen is the size businesses order when their average basket grew. It is rarely a first purchase. It appears when a brand adds knitwear, or when bundles and multi-buy promotions start pushing orders past what the apparel standard will take without complaint.',
      'The jump from 10x13 is larger in practice than the numbers suggest, because you gain depth as well as footprint. A folded jumper that had to be compressed into the smaller size sits flat in this one, and a flat parcel travels better than a taut one.',
    ],
    plan: {
      intent: 'Source 12x15 poly mailers for bulkier or multi-item apparel orders.',
      audience:
        'Brands whose order profile outgrew the 10x13 standard — knitwear, bundles, multi-buy promotions.',
      problem:
        'Knowing whether the next size up solves the problem or whether they need to go further to 14.5x19.',
      angle:
        'Written as an upgrade decision, with the loft and depth explanation that dimension lists leave out.',
      primaryKeyword: '12x15 poly mailers',
      supportingKeywords: ['12 x 15 poly mailers', '12x15.5 poly mailers', 'poly mailers for knitwear'],
      nearestPage: '/10x13-poly-mailers/',
      boundary:
        '10x13 is the standardisation decision. This page is the upgrade decision made after that standard started failing.',
    },
    images: [
      {
        file: 'white-poly-mailers-fanned-dark-seal-strip.jpg',
        alt: 'Three white poly mailers fanned out with dark seal strips along the closure edge',
      },
      {
        file: 'white-poly-mailer-filled-and-flat-pair.png',
        alt: 'Filled white poly mailer standing beside an empty one, showing how the bag takes shape when packed',
      },
      {
        file: 'silver-grey-poly-mailers-stacked-open-flap.png',
        alt: 'Stack of silver-grey poly mailers with the top bag folded open at the flap',
      },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Loft is the reason to move up, not footprint',
        paragraphs: [
          'Buyers usually think about mailer size in two dimensions, because that is how sizes are written. What actually forces an upgrade is the third one. A chunky knit has loft: it springs back after you fold it, and it keeps pushing outward inside the bag.',
          'A mailer that is only just wide enough has to stretch around that loft, and the stretch concentrates at the seal and the corners. The parcel arrives taut, shiny and slightly deformed, and a proportion of them arrive open.',
          'Twelve by fifteen gives the fold somewhere to go. The bag stays flat, the seal lies on film rather than on contents, and the parcel stacks in a sorting cage instead of rolling.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What tends to be packed in this size',
        items: [
          {
            term: 'Knitwear and sweatshirts',
            detail: 'Fine to mid-gauge knits and unlined sweatshirts sit flat rather than compressed.',
          },
          {
            term: 'Two to three garment bundles',
            detail: 'Multi-buy and gift-set orders that outgrew the apparel standard.',
          },
          {
            term: 'Denim',
            detail: 'A single pair of jeans folds into this size without straining the closure.',
          },
          {
            term: 'Soft home textiles',
            detail: 'Throws, cushion covers, a folded set of pillowcases.',
          },
          {
            term: 'Kits and sample packs',
            detail: 'Trade and wholesale sample sets where several items travel together.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'Three sizes, three order profiles',
        intro:
          'If you are between sizes, the deciding factor is the thickest order you send regularly, not the average one.',
        caption: 'Where 12x15 sits between the apparel standard and the large sizes.',
        columns: ['', '10x13', '12x15', '14.5x19'],
        rows: [
          ['One folded tee', 'Comfortable', 'Loose', 'Wasteful'],
          ['Mid-gauge knit', 'Tight', 'Comfortable', 'Loose'],
          ['Two to three garments', 'Strained', 'Comfortable', 'Comfortable'],
          ['Hoodie or padded jacket', 'No', 'Tight', 'Comfortable'],
          ['Print area for full coverage', 'Adequate', 'Generous', 'Generous'],
        ],
      },
      {
        kind: 'specs',
        heading: 'Selectable specification',
        intro: 'We quote against your selections; the final specification is written on the quotation.',
        rows: [
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Heavier film is the usual choice at this size because the contents are heavier too.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns'],
            note: 'Return rates on knitwear and denim make the second strip worth quoting.',
          },
          {
            label: 'Gusset',
            options: ['Flat', 'Side gusset'],
            note: 'A gusset adds depth for lofty contents without moving up a full size.',
          },
          {
            label: 'Print coverage',
            options: ['Unprinted', 'Logo only', 'Partial coverage', 'Full coverage'],
            note: 'This is the smallest size where a full-coverage design reads properly at arm’s length.',
          },
          {
            label: 'Finish',
            options: ['Gloss', 'Matte'],
            note: 'Matte on a larger panel hides the handling marks that show up on gloss.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Fulfilment and storage implications',
        before:
          'Moving up a size changes your bench as much as your parcels. Cartons hold fewer units, so reorder points come round sooner, and the packed parcels themselves take more room in outbound cages. Weigh a packed sample before you commit, because a size change can push a parcel across a pricing threshold that wipes out the material saving you were chasing. If cushioning is the real requirement rather than room, the ',
        link: { href: '/protective-mailers/', anchor: 'comparison of protective mailer formats' },
        after: ' sets out what each construction actually protects against.',
      },
      {
        kind: 'prose',
        heading: 'Print behaviour on a larger panel',
        paragraphs: [
          'Bigger panels are more forgiving for artwork and less forgiving for colour. A flat area of solid colour across a panel this size will show any inconsistency in ink lay-down that a small logo would have hidden.',
          'If your brand colour is a large solid, ask for it to be reviewed at proof stage on the actual film and finish you have chosen. Colour reads differently on matte film than on gloss, and differently again on a coloured base than on white.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is 12x15 big enough for a hoodie?',
        a: 'A standard unlined hoodie fits, folded properly. A heavyweight or fleece-lined hoodie fills it, and an oversized fit will not close comfortably. If hoodies are a core line rather than an occasional order, 14.5x19 is the safer standard.',
      },
      {
        q: 'What is the difference between 12x15 and 12x15.5?',
        a: 'They are the same size in practice; suppliers measure and round differently, and some quote to the closure and some to the usable area. Rather than compare two numbers that may not mean the same thing, we confirm on your quotation which measurement we are quoting.',
      },
      {
        q: 'Does a gusset change how the mailer prints?',
        a: 'It changes the layout. The side panels fold, so artwork that runs across the full width will wrap around the fold. We show that on the proof so you can see where the design lands once the bag is packed.',
      },
      {
        q: 'Can I mix this size with a smaller one on the same order?',
        a: 'Yes. Running two sizes on one order is common and usually more economical than two separate orders, because setup is shared where the artwork and specification match.',
      },
    ],
    related: [
      {
        href: '/14-5x19-poly-mailers/',
        label: '14.5x19 Poly Mailers',
        reason: 'The next step up when hoodies and outerwear become regular orders.',
      },
      {
        href: '/10x13-poly-mailers/',
        label: '10x13 Poly Mailers',
        reason: 'The size most 12x15 buyers are upgrading from.',
      },
      {
        href: '/materials/',
        label: 'Materials',
        reason: 'What changes between film weights when the contents get heavier.',
      },
    ],
    cta: {
      heading: 'Price 12x15 mailers for your order profile',
      body: 'Send us your typical and heaviest order and we will quote the size and film weight that fits both, in writing.',
      buttonLabel: 'Request 12x15 pricing',
    },
    whatsapp:
      'Hi, I need a quote for 12x15 poly mailers. My orders are usually knitwear or multi-item.',
    collections: ['poly-mailer-sizes'],
    group: 'size',
    quotePreset: '12x15 Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: '14-5x19-poly-mailers',
    name: '14.5x19 Poly Mailers',
    h1: '14.5x19 Poly Mailers',
    title: '14.5x19 Poly Mailers | Hoodie & Outerwear Size',
    description:
      'The 14.5x19 mailer takes hoodies, outerwear and multi-garment orders. Packing notes, closure choice and how it compares with 19x24.',
    summary:
      'The outerwear size — hoodies, jackets and three-garment orders that flatten out rather than bulge.',
    intro: [
      'Fourteen and a half by nineteen is where mailers stop being envelopes and start being bags. It is the size that takes a heavyweight hoodie without a fight, a folded jacket, or a three-piece order that would have burst a 12x15.',
      'It is a size worth ordering deliberately rather than as a catch-all. Larger mailers are more sensitive to how you pack them: a heavy item in a big bag with slack air around it swings, and swinging is what tears corners. The packing notes on this page matter more here than on any smaller size.',
    ],
    plan: {
      intent: 'Buy 14.5x19 poly mailers for hoodies, outerwear and bulk garment orders.',
      audience: 'Streetwear and outerwear brands, and sellers shipping multi-garment orders.',
      problem:
        'Getting heavy contents to arrive intact in a large flexible bag rather than a box.',
      angle:
        'Focuses on packing technique and load behaviour at large sizes, which smaller size pages do not need to cover.',
      primaryKeyword: '14.5 x 19 poly mailers',
      supportingKeywords: ['14x19 poly mailers', '14.5x19 mailers', 'poly mailers for hoodies'],
      nearestPage: '/19x24-poly-mailers/',
      boundary:
        'This size is the single heavy garment. 19x24 is written for bulk consolidation and bedding-scale contents.',
    },
    images: [
      {
        file: 'white-poly-mailer-holding-folded-jacket.png',
        alt: 'Large white poly mailer opened to show a folded black quilted jacket inside',
      },
      {
        file: 'white-poly-mailers-fanned-dark-seal-strip.jpg',
        alt: 'Fanned white poly mailers showing the width of the closure edge on a larger format bag',
      },
    ],
    blocks: [
      {
        kind: 'steps',
        heading: 'Packing a large mailer so it survives the network',
        intro:
          'Large flexible parcels fail differently from small ones. The failure is almost always movement, not film strength.',
        steps: [
          {
            title: 'Fold to the shape of the bag',
            detail:
              'Fold the garment into a rectangle that matches the mailer, not into whatever shape is quickest. A rectangle fills the corners and stops the load shifting.',
          },
          {
            title: 'Take out the slack air',
            detail:
              'Press the parcel flat as you seal. Air left inside turns the parcel into a cushion that other parcels compress and slide against.',
          },
          {
            title: 'Seal onto film, not onto contents',
            detail:
              'The adhesive strip needs a clean run of film to bond to. If contents reach the strip, the bond is partial and it will open.',
          },
          {
            title: 'Reinforce only if the contents are hard',
            detail:
              'Soft goods do not need tape. A boxed item inside a large mailer does, because a corner concentrates all the load in one place.',
          },
          {
            title: 'Place the label on a flat face',
            detail:
              'A label across a fold or a bulge lifts at the edges, and a lifted label is a scanning failure and a delivery exception.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'Contents this size is ordered for',
        items: [
          {
            term: 'Heavyweight hoodies and sweatshirts',
            detail: 'Including fleece-lined and oversized fits that will not close in a 12x15.',
          },
          {
            term: 'Light outerwear',
            detail: 'Packable jackets, gilets and shells folded down.',
          },
          {
            term: 'Three-garment orders',
            detail: 'Multi-buy bundles and small wholesale drops going to one address.',
          },
          {
            term: 'Bedding and towel sets',
            detail: 'Single-bed sets and folded towel bundles, where softness works in the bag’s favour.',
          },
          {
            term: 'Costume and uniform kits',
            detail: 'Team kits and event orders where several soft pieces ship together.',
          },
        ],
      },
      {
        kind: 'specs',
        heading: 'Choices that matter more at this size',
        intro:
          'The heavier the contents, the more the film weight and closure choices earn their cost. All of them are confirmed on your quotation.',
        rows: [
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'At this size the heavier option is the default recommendation rather than an upgrade.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns', 'Peel strip with tear tab'],
            note: 'Outerwear and hoodie ranges see high return rates, which makes the second strip pay for itself.',
          },
          {
            label: 'Gusset',
            options: ['Flat', 'Side gusset'],
            note: 'A gusset lets a lofty garment sit square instead of forcing the bag into a barrel shape.',
          },
          {
            label: 'Print coverage',
            options: ['Unprinted', 'Logo only', 'Partial coverage', 'Full coverage'],
            note: 'A large panel makes full coverage effective, and also makes colour consistency more visible.',
          },
          {
            label: 'Colour',
            options: ['Stock colour', 'Matched to your brand colour'],
            note: 'Larger solid areas make colour matching more demanding, so we proof before running.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'Choosing between the large sizes',
        intro:
          'All three large formats will hold a hoodie. They differ in what happens when you put more than one in.',
        caption: 'Practical separation between the three large mailer formats.',
        columns: ['', '14.5x19', '19x24', '24x24'],
        rows: [
          ['Single heavy garment', 'Ideal', 'Loose', 'Loose'],
          ['Three to four garments', 'Full', 'Comfortable', 'Comfortable'],
          ['Bedding set', 'Tight', 'Comfortable', 'Comfortable'],
          ['Square or bulky soft goods', 'Awkward', 'Workable', 'Ideal'],
          ['Risk of slack air', 'Low', 'Moderate', 'Higher — pack flat'],
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Storage and bench handling',
        before:
          'Large mailers arrive in fewer units per carton and take more bench space per pack. Most operations keep a smaller working stock of this size near the bench and hold the rest sealed, because film that sits open in a warm room picks up dust on the adhesive. If you are working out how much of each size to hold, the ',
        link: { href: '/resources/custom-mailer-ordering-checklist/', anchor: 'ordering checklist for custom mailers' },
        after: ' covers the questions to settle before the first run.',
      },
    ],
    faqs: [
      {
        q: 'Will a heavyweight hoodie fit a 14.5x19 mailer?',
        a: 'Yes, and it is the main reason this size exists. Fleece-lined and oversized hoodies that will not close in a 12x15 fold flat into this one with room for a card.',
      },
      {
        q: 'Do large mailers tear more easily than small ones?',
        a: 'The film is the same; the loading is different. Failures at this size come from contents moving inside a partly empty bag, or from a hard corner concentrating force. Packing flat and squeezing out slack air prevents most of them.',
      },
      {
        q: 'Is a gusset worth adding at this size?',
        a: 'If your contents are lofty rather than simply large, yes. A gusset lets the parcel sit square, which improves both how it stacks and how the label sits. For flat contents it adds cost without adding benefit.',
      },
      {
        q: 'Can I ship shoes in this size?',
        a: 'A boxed pair fits but needs care, because the box corners are the failure point in a flexible bag. Where the shoe box must arrive undamaged as part of the product, a cushioned mailer or a carton is the more reliable choice.',
      },
    ],
    related: [
      {
        href: '/19x24-poly-mailers/',
        label: '19x24 Poly Mailers',
        reason: 'Where to go when single garments become consolidated multi-item shipments.',
      },
      {
        href: '/large-poly-mailers/',
        label: 'Large Poly Mailers',
        reason: 'A side-by-side view of all the large formats before you commit.',
      },
      {
        href: '/padded-poly-mailers/',
        label: 'Padded Poly Mailers',
        reason: 'For contents that need cushioning rather than more room.',
      },
    ],
    cta: {
      heading: 'Quote 14.5x19 mailers',
      body: 'Tell us what you are shipping and roughly how many a month. We will quote the film weight and closure that suit the load, and confirm it in writing.',
      buttonLabel: 'Ask about 14.5x19',
    },
    whatsapp:
      'Hi, I would like a quotation for 14.5x19 poly mailers for hoodies and outerwear.',
    collections: ['poly-mailer-sizes'],
    group: 'size',
    quotePreset: '14.5x19 Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: '19x24-poly-mailers',
    name: '19x24 Poly Mailers',
    h1: '19x24 Poly Mailers',
    title: '19x24 Poly Mailers | Bulk & Consolidated Orders',
    description:
      'A 19x24 mailer consolidates multi-item orders, bedding and bulk garment shipments. Load behaviour, sealing, labelling and storage notes.',
    summary:
      'A consolidation size — several garments, bedding, or a wholesale drop travelling as one parcel.',
    intro: [
      'By nineteen by twenty-four, a mailer is doing a job a carton used to do. Businesses order this size to consolidate: four or five garments to one address, a bedding set, a wholesale drop to a stockist, a returns consolidation going back to a warehouse.',
      'The economics are why it exists. A soft-goods order that would need a carton and void fill can travel in a single flexible bag at a fraction of the weight and cube. The trade is that everything about how the parcel is packed matters more.',
    ],
    plan: {
      intent: 'Source 19x24 poly mailers for bulk or consolidated soft-goods shipments.',
      audience:
        'Wholesale, returns operations and brands consolidating multi-item orders into one parcel.',
      problem:
        'Replacing a carton with a flexible bag without increasing damage or delivery exceptions.',
      angle:
        'Treats the size as a carton-replacement decision, covering cube, weight and label behaviour rather than fit.',
      primaryKeyword: '19x24 poly mailers',
      supportingKeywords: ['19 x 24 poly mailers', 'poly mailer bags 19 x 24', 'bulk poly mailers'],
      nearestPage: '/14-5x19-poly-mailers/',
      boundary:
        '14.5x19 is the single heavy garment. This page is about replacing a carton for multi-item consolidation.',
    },
    images: [
      {
        file: 'white-poly-mailers-with-19-by-24-inch-callouts.png',
        alt: 'Two white poly mailers with printed 19 inch and 24 inch dimension callouts alongside them',
        caption:
          'Dimension callouts shown are part of the supplied product photograph.',
      },
      {
        file: 'white-poly-mailer-holding-folded-jacket.png',
        alt: 'Large white mailer holding a folded garment, showing how a bulky item sits inside a big bag',
      },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'Replacing a carton with a large mailer',
        intro:
          'This is the comparison most 19x24 buyers are really making, and it is not close on every measure.',
        caption: 'Large poly mailer against a corrugated carton for soft-goods consolidation.',
        columns: ['', 'Large poly mailer', 'Corrugated carton'],
        rows: [
          ['Tare weight', 'Very low', 'Substantial'],
          ['Cube when empty', 'Flat storage', 'Assembled or flat-packed, both bulky'],
          ['Void fill needed', 'None for soft goods', 'Usually'],
          ['Protection from crushing', 'None — contents carry the load', 'Structural'],
          ['Protection from moisture', 'Good', 'Poor without a liner'],
          ['Suits hard or fragile contents', 'No', 'Yes'],
          ['Packing time', 'Fast', 'Slower — assemble, fill, tape'],
        ],
        outro:
          'The clean rule: if the contents are soft and can carry their own shape, the mailer wins. If anything inside needs the packaging to hold a shape, it does not.',
      },
      {
        kind: 'prose',
        heading: 'How a large mailer behaves under load',
        paragraphs: [
          'A full 19x24 is a heavy, floppy parcel. In a sorting network it will be stacked under other parcels, slid along conveyors and gripped at whatever point is nearest.',
          'That makes weight distribution the thing to control. A load packed evenly across the whole footprint spreads pressure and stays flat. The same weight concentrated in one corner turns into a pendulum, and a pendulum finds the weakest point of the seal.',
          'It also makes the label placement decision more consequential than on a small bag. Labels need a flat, taut area with no fold running through it, and on a large soft parcel you have to create that area deliberately when you pack.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Typical uses at this size',
        items: [
          {
            term: 'Wholesale and stockist drops',
            detail: 'A small assortment going to one retail account without the cost of a carton.',
          },
          {
            term: 'Bedding and home textiles',
            detail: 'Duvet covers, sheet sets and folded throws that compress well and carry no hard corners.',
          },
          {
            term: 'Consolidated customer orders',
            detail: 'Four or five garments from one basket travelling as one parcel rather than several.',
          },
          {
            term: 'Returns consolidation',
            detail: 'Batched returns moving from a store or a hub back to a central warehouse.',
          },
          {
            term: 'Event and team orders',
            detail: 'Uniform and merchandise runs delivered in one shipment to an organiser.',
          },
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification decisions',
        intro:
          'Larger formats put more load on every part of the bag, so these choices matter more here than on smaller sizes.',
        rows: [
          {
            label: 'Film weight',
            options: ['Heavier duty', 'Heaviest available for this format'],
            note: 'We do not quote the lightest film at this size, because the loads do not suit it.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns'],
            note: 'Returns consolidation is a common use, and a resealable bag saves a second piece of packaging.',
          },
          {
            label: 'Gusset',
            options: ['Flat', 'Side gusset'],
            note: 'A gusset is the difference between a square parcel and a barrel at this volume.',
          },
          {
            label: 'Print coverage',
            options: ['Unprinted', 'Logo only', 'Partial coverage'],
            note: 'Wholesale and returns use rarely justifies full coverage; a clear mark and handling wording usually does.',
          },
          {
            label: 'Handling wording',
            options: ['None', 'Printed handling or returns instructions'],
            note: 'Printed instructions on a returns bag reduce the number of parcels that come back wrongly packed.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Weight thresholds and shipping',
        before:
          'Consolidating orders changes which pricing band a parcel falls into, and the saving is not automatic. Weigh and measure a realistically packed sample before you switch a whole flow across, because a consolidated parcel can cross a threshold that two smaller parcels stayed below. How orders are dispatched to each market we serve is described in our ',
        link: { href: '/shipping-and-delivery/', anchor: 'shipping and delivery information' },
        after: ', which sets out what we confirm at the point of order.',
      },
      {
        kind: 'prose',
        heading: 'Checks before a large-format order ships',
        paragraphs: [
          'Large-format runs are checked for seal integrity along the full length of both welds, because a weld flaw that would be tolerable on a small bag is a failure at this size and load.',
          'Print registration is checked across the width, where drift is easiest to see on a wide panel. Adhesive release is checked on samples taken through the run, and carton counts are verified before dispatch.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a 19x24 mailer replace a shipping carton?',
        a: 'For soft goods that hold their own shape, usually yes, and it removes both the carton weight and the void fill. For anything rigid, fragile or crush-sensitive it cannot, because a flexible bag provides no structure.',
      },
      {
        q: 'How many garments fit in this size?',
        a: 'It depends entirely on weight and loft rather than count. Four to five folded tees is comfortable; two heavyweight hoodies fills it. The reliable answer is to pack a real order into a sample before committing to a volume.',
      },
      {
        q: 'Do shipping labels stay on large poly mailers?',
        a: 'They do when the parcel is packed flat and the label sits on a taut area with no fold beneath it. Labels lift when they are applied across a crease or over slack film, so the fix is in the packing rather than the label.',
      },
      {
        q: 'Is this size available with a gusset?',
        a: 'Yes, and at this volume it is worth quoting both. A gusseted bag produces a squarer parcel that stacks better in a cage, which matters when parcels are handled by machine.',
      },
    ],
    related: [
      {
        href: '/24x24-poly-mailers/',
        label: '24x24 Poly Mailers',
        reason: 'The square format for bulky soft goods that do not fold into a rectangle.',
      },
      {
        href: '/large-poly-mailers/',
        label: 'Large Poly Mailers',
        reason: 'Compare the large formats before standardising on one.',
      },
      {
        href: '/industries/ecommerce/',
        label: 'Ecommerce packaging',
        reason: 'How consolidation decisions fit into a wider fulfilment setup.',
      },
    ],
    cta: {
      heading: 'Price a 19x24 run',
      body: 'Tell us what you are consolidating and how often. We will quote a film weight suited to the load and confirm the specification in writing.',
      buttonLabel: 'Request 19x24 pricing',
    },
    whatsapp:
      'Hi, I need 19x24 poly mailers for bulk shipments. Could you send a quotation?',
    collections: ['poly-mailer-sizes'],
    group: 'size',
    quotePreset: '19x24 Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: '24x24-poly-mailers',
    name: '24x24 Poly Mailers',
    h1: '24x24 Poly Mailers',
    title: '24x24 Poly Mailers | Square Format for Bulky Goods',
    description:
      'A square 24x24 mailer suits pillows, cushions, quilts and bulky soft goods that do not fold into a rectangle. Layout and packing notes.',
    summary:
      'Square format for soft goods that resist folding into a rectangle — cushions, quilts, bulk textiles.',
    intro: [
      'A square mailer is an unusual thing to order, and that is exactly why it exists. Almost every product in a fulfilment operation folds into a rectangle. The ones that do not — a cushion, a folded quilt, a pouffe cover, a round pet bed — end up jammed diagonally into a rectangular bag with air in two corners and strain on the seal.',
      'Twenty-four by twenty-four gives those products a shape that matches them. The parcel comes out flat and square, stacks properly, and the label sits on a face that is genuinely flat rather than on a bulge.',
    ],
    plan: {
      intent: 'Find a square 24x24 poly mailer for bulky or non-rectangular soft goods.',
      audience:
        'Home textiles, pet, craft and homeware sellers whose products do not fold rectangular.',
      problem:
        'Rectangular mailers waste corners and strain seals on square or lofty contents.',
      angle:
        'The only page on the site about square format geometry, including how square artwork layout differs.',
      primaryKeyword: '24x24 poly mailers',
      supportingKeywords: ['24 x 24 poly mailers', 'square poly mailers', 'poly mailers for cushions'],
      nearestPage: '/19x24-poly-mailers/',
      boundary:
        '19x24 is about consolidation economics. This page is about geometry — what a square footprint solves.',
    },
    images: [
      {
        file: 'white-poly-mailer-holding-folded-jacket.png',
        alt: 'Wide white mailer holding a bulky folded item, showing how a large format takes a lofty load',
      },
      {
        file: 'silver-grey-poly-mailers-stacked-open-flap.png',
        alt: 'Silver-grey mailers in a flat stack, the top one opened out to show the full panel width',
      },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Why square, and when it is the wrong answer',
        paragraphs: [
          'Square is not a bigger rectangle. It changes how the contents settle, how the parcel stacks and how the artwork reads.',
          'It works when the contents are square-ish and soft: a cushion insert, a folded quilt, a bundle of fabric, a soft pet bed. Those items fill a square footprint evenly, so there is no slack corner for the load to slide into.',
          'It is the wrong answer for long, thin items. A rolled poster or a folded curtain in a square bag leaves two large empty triangles, and empty space in a flexible parcel is what lets contents move. For those, a rectangular format at the right proportion protects better and costs less.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Products that suit a square footprint',
        items: [
          {
            term: 'Cushion covers and inserts',
            detail: 'Square by definition, and lofty enough that a rectangular bag wastes two corners.',
          },
          {
            term: 'Folded quilts and throws',
            detail: 'A quilt folded in quarters lands square; forcing it into a rectangle re-folds it awkwardly.',
          },
          {
            term: 'Fabric and craft bundles',
            detail: 'Cut lengths and fat-quarter bundles that stack into a square block.',
          },
          {
            term: 'Soft pet products',
            detail: 'Beds, mats and blankets that compress but spring back into a rounded square.',
          },
          {
            term: 'Bulk soft-goods consolidation',
            detail: 'Multi-unit wholesale of any soft product where a square block is the natural pack shape.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Getting a square parcel to travel well',
        intro:
          'Square parcels are stable when they are packed to the shape and unstable when they are not.',
        steps: [
          {
            title: 'Fill the footprint, not the middle',
            detail:
              'Build the load out to the corners. A square bag with a round load in the centre is the least stable parcel you can make.',
          },
          {
            title: 'Compress evenly before sealing',
            detail:
              'Press down across the whole face rather than at the centre, so the loft is uniform when the seal closes.',
          },
          {
            title: 'Seal with the strip on clean film',
            detail:
              'Lofty contents rise as you fold the flap. Hold the load down while sealing so the adhesive meets film.',
          },
          {
            title: 'Choose the label face deliberately',
            detail:
              'On a square parcel both faces look alike. Pick the flatter one, and keep that face free of artwork if the label must scan reliably.',
          },
        ],
      },
      {
        kind: 'specs',
        heading: 'What to select for a square run',
        intro: 'Confirmed in writing on your quotation, as with every size.',
        rows: [
          {
            label: 'Film weight',
            options: ['Heavier duty', 'Heaviest available for this format'],
            note: 'Lofty contents keep the film under constant tension, so the lighter weights are not quoted here.',
          },
          {
            label: 'Gusset',
            options: ['Flat', 'Side gusset'],
            note: 'For genuinely lofty contents a gusset is usually the difference between square and barrel-shaped.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns'],
            note: 'Home textiles carry high return rates, which makes the resealable option worth quoting.',
          },
          {
            label: 'Print coverage',
            options: ['Unprinted', 'Logo only', 'Partial coverage', 'Full coverage'],
            note: 'A square panel needs artwork laid out for square; a rectangular design centred on it looks unresolved.',
          },
          {
            label: 'Finish',
            options: ['Gloss', 'Matte'],
            note: 'Matte reduces the visible creasing that lofty contents cause across a large face.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Artwork on a square panel',
        before:
          'Most brand artwork is drawn for rectangles, so a square panel usually needs a proper layout rather than a rescale. Centred marks work well; horizontal lock-ups with long strap lines rarely do, because they leave large empty bands above and below. Bringing the artwork to us early avoids a round of rework, and the file requirements are set out in the ',
        link: { href: '/artwork-guidelines/', anchor: 'artwork specification for print files' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What is a square poly mailer used for?',
        a: 'Soft goods that are square or lofty rather than flat and rectangular — cushions, folded quilts, fabric bundles, soft pet products. The square footprint fills evenly, which keeps the parcel flat and the seal under even load.',
      },
      {
        q: 'Is a 24x24 mailer bigger than a 19x24?',
        a: 'It has a larger footprint but a different shape, so which one holds more depends on the contents. A square block of soft goods fits a square bag better; a folded garment fits a rectangle better.',
      },
      {
        q: 'Will my existing artwork work on a square mailer?',
        a: 'Sometimes, but a rectangular lock-up dropped onto a square panel usually leaves unbalanced space. Most brands re-lay the design for square. We show the result on the proof before anything is printed.',
      },
      {
        q: 'Can I get this size with a gusset?',
        a: 'Yes. For lofty contents it is generally the right choice, because it lets the parcel sit square rather than bulging into a barrel shape that will not stack.',
      },
    ],
    related: [
      {
        href: '/19x24-poly-mailers/',
        label: '19x24 Poly Mailers',
        reason: 'The rectangular large format to compare against for the same volume.',
      },
      {
        href: '/large-poly-mailers/',
        label: 'Large Poly Mailers',
        reason: 'The decision page for anyone still choosing between large formats.',
      },
      {
        href: '/resources/mailer-measurement-guide/',
        label: 'Measurement guide',
        reason: 'How to measure a lofty product before choosing a footprint.',
      },
    ],
    cta: {
      heading: 'Quote square 24x24 mailers',
      body: 'Send the dimensions of your packed product and we will confirm whether a square format is the right call before quoting.',
      buttonLabel: 'Ask about 24x24',
    },
    whatsapp:
      'Hi, I am interested in 24x24 square poly mailers. Could you quote for my product?',
    collections: ['poly-mailer-sizes'],
    group: 'size',
    quotePreset: '24x24 Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'large-poly-mailers',
    name: 'Large Poly Mailers',
    h1: 'Large Poly Mailers',
    title: 'Large Poly Mailers | Choosing the Right Big Size',
    description:
      'Large poly mailers compared — 14.5x19, 19x24 and 24x24. Which format suits hoodies, bedding, bulk orders and awkward soft goods.',
    summary:
      'A decision page for buyers who know they need something big but have not chosen which big.',
    intro: [
      'Searches for large poly mailers almost never come from someone who has already chosen a size. They come from someone whose current mailer keeps splitting, or who has just added a heavier product and needs to know what to order next.',
      'So this page is a decision rather than a description. It sets out what changes as mailers get bigger, which of the three large formats suits which kind of load, and the two mistakes that cost the most when you size up.',
    ],
    plan: {
      intent: 'Work out which large poly mailer size to order.',
      audience:
        'Buyers whose current size is failing and who need to size up without over-ordering.',
      problem: 'Choosing between three large formats with no way to compare them side by side.',
      angle:
        'Pure decision support. Contains no size-specific fit detail — that lives on each exact-size page.',
      primaryKeyword: 'large poly mailers',
      supportingKeywords: [
        'large poly mailer bags',
        'extra large poly mailers',
        'big poly mailers',
        'huge poly mailers',
        'large shipping bags',
      ],
      nearestPage: '/14-5x19-poly-mailers/',
      boundary:
        'Exact-size pages describe one size in depth. This page only compares and routes; it deliberately does not repeat their fit detail.',
    },
    images: [
      {
        file: 'white-poly-mailer-holding-folded-jacket.png',
        alt: 'Oversized white mailer opened around a thick folded garment to show the usable depth',
      },
      {
        file: 'silver-grey-poly-mailers-stacked-open-flap.png',
        alt: 'Large silver-grey mailers stacked flat, illustrating how big formats store before use',
      },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'What changes as a mailer gets bigger',
        standfirst: 'Three things shift, and only one of them is obvious.',
        paragraphs: [
          'The obvious one is capacity. The two that catch people out are load behaviour and cost structure.',
          'Load behaviour: a small mailer is held rigid by its contents. A large one is not. Slack air, an uneven load or a hard corner all turn into movement, and movement is what opens seals and tears corners. Sizing up means changing how you pack, not just what you buy.',
          'Cost structure: a bigger bag costs more per unit, holds fewer per carton, and produces a parcel that may fall into a different shipping band. Sometimes consolidating four parcels into one large mailer saves money; sometimes it crosses a threshold and costs more. It is worth weighing a packed sample before you switch a whole flow.',
        ],
      },
      {
        kind: 'compare',
        heading: 'Which large format for which load',
        intro:
          'Start from your heaviest routine order rather than your average one — that is the order that decides the size.',
        caption: 'Selecting between the three large mailer formats by load type.',
        columns: ['If you ship…', 'Start with', 'Why'],
        rows: [
          ['One heavyweight hoodie or jacket', '14.5x19', 'Fills the bag, so there is no slack air to let the load swing.'],
          ['Three to five folded garments', '19x24', 'Enough footprint to lay the load flat rather than stacking it into a lump.'],
          ['A bedding or towel set', '19x24', 'Compresses evenly and carries no hard corners.'],
          ['Cushions, quilts or square soft goods', '24x24', 'A square load fills a square footprint without wasting corners.'],
          ['A boxed item inside a mailer', 'Reconsider', 'Hard corners in a flexible bag concentrate load; a carton or cushioned mailer is safer.'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Two expensive mistakes when sizing up',
        items: [
          {
            term: 'Buying one size larger than you need',
            detail:
              'Slack air makes a parcel less stable, not more forgiving. An over-large mailer damages more often than a correctly sized one, and costs more per unit as well.',
          },
          {
            term: 'Keeping the light film when the contents got heavy',
            detail:
              'Sizing up usually means the contents got heavier too. Carrying the same film weight into a bigger format is where most seal failures come from.',
          },
        ],
        outro:
          'Both are avoided the same way: pack a real order into a sample, weigh it, and drop it once from bench height before you commit to a run.',
      },
      {
        kind: 'linked-prose',
        heading: 'When large is not the answer at all',
        before:
          'Sometimes the problem is not room. If the contents are arriving damaged rather than arriving in a burst bag, more space will not fix it — cushioning will. A bubble-lined format protects contents from impact in a way plain film cannot, at the cost of a larger outer dimension for the same interior. The differences between the protective constructions are set out in the ',
        link: { href: '/protective-mailers/', anchor: 'protective mailer comparison' },
        after: ', which is the better place to start if damage rather than fit is your problem.',
      },
      {
        kind: 'steps',
        heading: 'How to move to a larger size without over-ordering',
        steps: [
          {
            title: 'Request samples of two candidate sizes',
            detail: 'Not one. The comparison is what tells you which is right.',
          },
          {
            title: 'Pack your heaviest routine order into each',
            detail: 'Use your real fold and your real inserts, packed by the people who pack for you.',
          },
          {
            title: 'Weigh and measure both packed parcels',
            detail: 'Check them against the shipping bands you actually buy on.',
          },
          {
            title: 'Order the smaller one that closes without strain',
            detail: 'If both work, the smaller size is cheaper per unit and travels better.',
          },
          {
            title: 'Split the first order if you are unsure',
            detail:
              'Running two sizes on one order shares the setup and lets you settle the question with real volume.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What counts as a large poly mailer?',
        a: 'In practice, anything from around 14 inches across upward. Below that the contents keep the parcel rigid; above it the packing method starts to matter as much as the bag.',
      },
      {
        q: 'Which large size should I order first?',
        a: 'The smallest one that takes your heaviest routine order without the seal straining. Sizing up beyond that adds cost per unit and leaves slack air, which makes parcels less stable rather than more.',
      },
      {
        q: 'Do large mailers need a heavier film?',
        a: 'Usually, because the contents that need a large bag are heavier. Carrying a light film into a large format is the most common cause of seal failures we see.',
      },
      {
        q: 'Can I order several large sizes on one run?',
        a: 'Yes, and it is often the economical way to settle the question. Where the artwork and specification match, setup is shared across the sizes on the same order.',
      },
    ],
    related: [
      {
        href: '/14-5x19-poly-mailers/',
        label: '14.5x19 Poly Mailers',
        reason: 'The starting point for single heavy garments.',
      },
      {
        href: '/19x24-poly-mailers/',
        label: '19x24 Poly Mailers',
        reason: 'The consolidation size for multi-item and bedding orders.',
      },
      {
        href: '/24x24-poly-mailers/',
        label: '24x24 Poly Mailers',
        reason: 'The square format for cushions and lofty soft goods.',
      },
      {
        href: '/samples/',
        label: 'Request samples',
        reason: 'The reliable way to settle a size question before ordering volume.',
      },
    ],
    cta: {
      heading: 'Not sure which large size to order?',
      body: 'Tell us what you ship and how heavy a typical order is. We will recommend a size, say why, and quote it.',
      buttonLabel: 'Get a size recommendation',
    },
    whatsapp:
      'Hi, I need large poly mailers but am not sure which size. Could you help me choose?',
    collections: ['poly-mailer-sizes'],
    group: 'size',
    quotePreset: 'Large Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'small-poly-mailers',
    name: 'Small Poly Mailers',
    h1: 'Small Poly Mailers',
    title: 'Small Poly Mailers | Which Small Size to Order',
    description:
      'Small poly mailers compared. When 6x9 is right, when 9x12 is safer, and how small-parcel pricing changes the answer.',
    summary:
      'A decision page for the small end of the range, where shipping bands matter as much as fit.',
    intro: [
      'At the small end of the range, the mailer is rarely the constraint. What decides the size is the pricing band your parcel lands in, and the fact that a small bag has almost no tolerance for a fold that went wrong.',
      'This page compares the two small formats and covers the thing that separates them commercially: whether the parcel stays inside the thickness limits that small-parcel rates are built around.',
    ],
    plan: {
      intent: 'Choose between the small poly mailer sizes.',
      audience:
        'Sellers of small, light items where shipping rate bands drive packaging decisions.',
      problem:
        'Staying inside small-parcel pricing thresholds while still fitting the product.',
      angle:
        'The only size page that frames the decision around parcel thickness and pricing bands rather than fit alone.',
      primaryKeyword: 'small poly mailers',
      supportingKeywords: ['small poly mailer bags', 'small shipping bags', 'mini poly mailers'],
      nearestPage: '/6x9-poly-mailers/',
      boundary:
        '6x9 and 9x12 describe their own sizes. This page only compares them and covers thickness economics.',
    },
    images: [
      {
        file: 'purple-poly-mailers-rolled-stack.jpg',
        alt: 'Rolled stack of purple poly mailers showing the adhesive strip along the open edge',
      },
      {
        file: 'light-pink-poly-mailers-fanned-silver-seal.jpg',
        alt: 'Small pale pink mailers spread out to show how little bench space a small format takes',
      },
      {
        file: 'pink-poly-mailers-rolled-stack-red-backdrop.jpg',
        alt: 'Bright pink small-format mailers rolled together in a working stack',
      },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Thickness usually decides the size, not width',
        paragraphs: [
          'Most small-parcel rates are built around a depth limit as much as a footprint. A parcel that stays under that depth travels on one rate; the same contents in a bag that lets them bunch up travels on a higher one.',
          'That is why a slightly larger mailer sometimes costs less to ship. A 9x12 lets a folded item lie flat and thin. The same item forced into a 6x9 becomes a compact lump — smaller in footprint, thicker in section, and on the wrong side of the threshold.',
          'The practical test is not whether it fits. It is whether the packed parcel is flat.',
        ],
      },
      {
        kind: 'compare',
        heading: 'The two small formats side by side',
        intro:
          'Both are cheap per unit and both store easily. What separates them is how much fold tolerance you get.',
        caption: 'Choosing between the two small mailer formats.',
        columns: ['', '6x9', '9x12'],
        rows: [
          ['Suits', 'One small item plus a card', 'One folded garment or a small bundle'],
          ['Fold tolerance', 'None to speak of', 'A fold of slack'],
          ['Keeps the parcel flat', 'Only for genuinely flat contents', 'For most single soft items'],
          ['Print panel', 'Logo mark', 'Logo plus a short message'],
          ['Units per carton', 'Highest', 'High'],
          ['Common buyers', 'Jewelry, beauty, accessories', 'Apparel, books, prints'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where small mailers go wrong',
        items: [
          {
            term: 'Ordering the smallest size to save on film',
            detail:
              'The film saving is pennies. If the tighter size makes the parcel thicker, the shipping cost outweighs it many times over.',
          },
          {
            term: 'Forgetting the insert',
            detail:
              'The thank-you card, the sticker sheet and the returns slip take up real space. Size against the full order, not the product alone.',
          },
          {
            term: 'Using a small mailer for anything with a hard edge',
            detail:
              'A boxed item in a tight bag puts a corner directly against the film. Either size up or use a cushioned format.',
          },
          {
            term: 'Assuming a small panel can carry a full brand lock-up',
            detail:
              'A wordmark, a strap line and social handles will not read at this size. One mark, sized properly, does more.',
          },
        ],
      },
      {
        kind: 'specs',
        heading: 'Options across the small formats',
        intro: 'These apply to both sizes; the specification is confirmed on your quotation.',
        rows: [
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Small parcels rarely need heavy film unless the contents have hard corners.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Peel strip with tear tab'],
            note: 'A tear tab is worth adding for gift and subscription ranges, where the opening is part of the experience.',
          },
          {
            label: 'Colour',
            options: ['Stock colour', 'Matched to your brand colour'],
            note: 'Small formats are where coloured film gives the most impact for the least cost.',
          },
          {
            label: 'Print',
            options: ['Unprinted', 'One side', 'Both sides'],
            note: 'On a small panel, one side printed well usually beats two sides printed tightly.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Where colour does the most work',
        before:
          'Small parcels arrive in a stack of other small parcels, and colour is what separates yours from the rest before anything is opened. It is also the cheapest form of branding available, because a coloured film costs far less than a printed run. The full range and how colour behaves against print is set out on the ',
        link: { href: '/poly-mailer-colors/', anchor: 'colour options across the mailer range' },
        after: ', which covers contrast and print legibility on each base colour.',
      },
    ],
    faqs: [
      {
        q: 'Which small poly mailer size should I order?',
        a: 'Pack a real order, including the card and the returns slip, and pick the size that lets it lie flat. Flatness matters more than footprint, because parcel thickness is what most small-parcel rates are built around.',
      },
      {
        q: 'Are small poly mailers strong enough on their own?',
        a: 'For soft or boxed-but-light contents, yes. What small mailers do not do is absorb impact. If the contents are fragile, a cushioned format is the right choice rather than a heavier plain film.',
      },
      {
        q: 'Can small mailers be printed in full colour?',
        a: 'Yes. The limit is legibility rather than the process. Fine type and hairline details close up on flexible film, so it is worth checking small artwork with us before the run.',
      },
      {
        q: 'Do you supply small mailers unprinted?',
        a: 'Yes. Plain stock in a range of colours is available, and a lot of businesses start there while artwork is being finalised.',
      },
    ],
    related: [
      {
        href: '/6x9-poly-mailers/',
        label: '6x9 Poly Mailers',
        reason: 'The tighter of the two small formats, with its own fit notes.',
      },
      {
        href: '/9x12-poly-mailers/',
        label: '9x12 Poly Mailers',
        reason: 'The size with enough slack for a single folded garment.',
      },
      {
        href: '/economy-poly-mailers/',
        label: 'Economy Poly Mailers',
        reason: 'Where cost per unit is the deciding factor at volume.',
      },
    ],
    cta: {
      heading: 'Settle the small-size question',
      body: 'Tell us what goes in the parcel, including the inserts. We will recommend a size and quote it, and send samples if that helps you decide.',
      buttonLabel: 'Ask about small mailers',
    },
    whatsapp:
      'Hi, I am choosing between small poly mailer sizes. Could you advise and quote?',
    collections: ['poly-mailer-sizes'],
    group: 'size',
    quotePreset: 'Small Poly Mailers',
  },
];
