import type { ProductPage } from '../types';

/**
 * Print and specification family.
 *
 * Custom is the transactional page for a printed run. Economy is a cost-led
 * specification decision that happens to be mostly unprinted. Frosted is a
 * genuinely different product — a zip-closure garment bag, not a mailer — and
 * the page says so plainly rather than pretending it belongs with the others.
 */

export const printProducts: ProductPage[] = [
  /* ===================================================================== */
  {
    slug: 'custom-poly-mailers',
    name: 'Custom Poly Mailers',
    h1: 'Custom Poly Mailers',
    title: 'Custom Poly Mailers | Printed With Your Artwork',
    description:
      'Custom printed poly mailers made to your artwork, size and colour. What a printed run involves, what to prepare, and how proofing works.',
    summary:
      'A printed run to your artwork — the page for buyers who have decided to print and want to know what happens next.',
    intro: [
      'A custom poly mailer is a manufacturing order, not a purchase. You are commissioning a run of film to your size, your colour and your artwork, and everything that follows depends on decisions made before anything is printed.',
      'Most of the friction in a first order comes from those decisions being made in the wrong sequence — artwork approved before the size is settled, colour chosen from a screen, coverage picked without knowing what it does to price. This page puts them in the order that works.',
      'It is written for the buyer who has decided to print. If you are still weighing whether printing is worth it at your volume, the case for staying on plain stock is worth reading first.',
    ],
    plan: {
      intent: 'Order custom printed poly mailers with own artwork.',
      audience:
        'Brands committing to their first printed run, and businesses reordering with new artwork.',
      problem:
        'Not knowing what to prepare, in what order, or what will change the price.',
      angle:
        'The ordering process itself — sequence, proofing, and the decisions that actually move cost.',
      primaryKeyword: 'custom poly mailers',
      supportingKeywords: [
        'custom poly mailer bags',
        'personalized poly mailers',
        'printed poly mailers',
        'custom poly mailers with logo',
        'branded poly mailers',
        'custom shipping bags',
      ],
      nearestPage: '/custom-printed-poly-mailers/',
      boundary:
        'This is the transactional product page for ordering a printed run. The collection compares which printable formats suit which requirement.',
    },
    images: [
      {
        file: 'black-poly-mailer-printed-with-message-copy.jpg',
        alt: 'Black poly mailer printed with a large white message across the front panel',
        caption:
          'Message wording shown is the artwork of the business that ordered the sample.',
      },
      {
        file: 'orange-poly-mailer-printed-edge-pattern.jpg',
        alt: 'Orange poly mailer with a printed cross pattern running along the sealed edge',
      },
      {
        file: 'black-poly-mailer-printed-inside-and-out-with-garment.jpg',
        alt: 'Black mailer printed inside and out, opened to show a rolled garment against a printed orange interior',
        caption:
          'Interior printing is quoted separately from exterior print and changes both cost and lead time.',
      },
    ],
    blocks: [
      {
        kind: 'steps',
        heading: 'The order sequence that avoids rework',
        intro:
          'Each step depends on the one before it. Doing them out of order is what causes a second proof round.',
        steps: [
          {
            title: 'Settle the size on a sample',
            detail:
              'Pack a real order into a physical sample before artwork exists. A size change after artwork is approved means redrawing the file.',
          },
          {
            title: 'Choose the base colour and finish',
            detail:
              'The base narrows your ink options and the finish changes how the colour reads. Both come before design, not after.',
          },
          {
            title: 'Decide coverage and sides',
            detail:
              'Logo only, partial or full coverage; one side or two. This is the decision that moves the price most.',
          },
          {
            title: 'Prepare artwork to specification',
            detail:
              'Vector where possible, correct colour mode, bleed allowance, fonts outlined. The file requirements are set out in full on the artwork page.',
          },
          {
            title: 'Approve a proof',
            detail:
              'We return a proof showing placement, scale and colour on your chosen base. Nothing runs until you approve it in writing.',
          },
          {
            title: 'Production and checks',
            detail:
              'The run is produced against the approved proof and checked through the run, not only at the end.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'What actually changes the price',
        intro:
          'Buyers usually assume colour count drives cost. It matters, but three other things matter more.',
        items: [
          {
            term: 'Quantity',
            detail:
              'Setup is a fixed cost spread across the run, so the per-unit price falls sharply as volume rises. This is the single biggest lever.',
          },
          {
            term: 'Coverage',
            detail:
              'A logo uses a fraction of the ink of a full-bleed design. Coverage moves cost more than the number of colours in the artwork.',
          },
          {
            term: 'Sides printed',
            detail:
              'A second side adds a production stage. It is worth it when the reverse carries returns or disposal information; less so for decoration alone.',
          },
          {
            term: 'Colour matching',
            detail:
              'A stock base with stock inks is cheaper than a matched brand colour, which needs a reference and a proof round of its own.',
          },
          {
            term: 'Interior printing',
            detail:
              'Printing inside the bag is a separate operation. It creates a strong unboxing moment and is priced accordingly.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Designing for a bag that will be handled',
        standfirst: 'A mailer is not a flat sheet, and it is not seen flat.',
        paragraphs: [
          'By the time a customer sees your artwork, the bag has been packed, folded at the flap, sealed, labelled, stacked and carried. Designs that ignore that arrive looking wrong even when they printed perfectly.',
          'Keep important elements away from the flap, which folds over and disappears. Keep them away from the side welds, which pinch. Leave a deliberate clear zone for the shipping label rather than hoping it lands somewhere kind.',
          'And design for the packed shape, not the flat one. Artwork that runs edge to edge on a flat bag distorts across a full parcel, so a centred mark with breathing room around it survives packing better than a tight full-bleed composition.',
        ],
      },
      {
        kind: 'specs',
        heading: 'The specification we quote against',
        intro:
          'These are your decisions. The final specification, including everything not listed here, is confirmed in writing on your quotation.',
        rows: [
          {
            label: 'Size',
            options: ['Standard sizes', 'Custom dimensions'],
            note: 'Custom dimensions are quoted against your packed product measurements.',
          },
          {
            label: 'Base colour',
            options: ['Stock colour', 'Matched to a reference'],
            note: 'The base determines which ink colours will read; check the colour pages for contrast guidance.',
          },
          {
            label: 'Print coverage',
            options: ['Logo only', 'Partial coverage', 'Full coverage'],
            note: 'The largest single influence on cost after quantity.',
          },
          {
            label: 'Sides',
            options: ['One side', 'Both sides', 'Exterior and interior'],
            note: 'Interior print is a separate operation and is quoted separately.',
          },
          {
            label: 'Finish',
            options: ['Gloss', 'Matte'],
            note: 'Finish changes how printed colour reads as much as the ink does.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns', 'Peel strip with tear tab'],
            note: 'Decide this before artwork, because the closure affects the usable print area.',
          },
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Chosen against what you ship rather than against the print.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Seeing it before you commit',
        before:
          'A digital proof shows placement and scale reliably; it shows colour approximately, because a screen is backlit and film is not. Where colour accuracy is commercially important, ask for a physical check rather than approving on a monitor. You can also assemble the whole specification visually first, choosing size, colour, finish and print coverage and positioning your own artwork, using the ',
        link: { href: '/design-your-poly-mailer/', anchor: 'mailer configuration tool' },
        after: ' and submitting the result with your quote request.',
      },
      {
        kind: 'prose',
        heading: 'Quality control on a printed run',
        paragraphs: [
          'Printed runs are checked against your approved proof rather than against the original file, because the proof is what you signed off. We check colour and registration at the start, through and at the end of the run.',
          'Seals are checked along both welds, adhesive release is checked on samples pulled from the run, and counts are verified by carton before dispatch. Where a run cannot meet the approved proof, we stop and speak to you rather than shipping something approximate.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What file format should I send for custom printing?',
        a: 'Vector artwork is the reliable choice — AI, EPS, PDF or SVG with fonts outlined. High-resolution PNG or JPG can work for photographic elements. The full file requirements, including bleed and colour mode, are set out on the artwork guidelines page.',
      },
      {
        q: 'Can I print on both sides of a poly mailer?',
        a: 'Yes. The reverse is where returns instructions, disposal wording and care information usually belong. It adds a production stage, so it affects both price and scheduling, and we confirm the effect on your specific run when quoting.',
      },
      {
        q: 'How close can artwork go to the edge?',
        a: 'Artwork intended to run to the edge needs a bleed allowance, because film moves fractionally on press. Without it you get an uneven white sliver on one side across part of the run. We flag this at proof stage if the file does not allow for it.',
      },
      {
        q: 'Will my brand colour print exactly?',
        a: 'We quote a match against a reference you supply and proof it before running. Film is not paper, and some colours cannot be reached on some films. Where that is the case we tell you before you order rather than delivering an approximation.',
      },
      {
        q: 'Can I order a small first run to test the design?',
        a: 'Smaller runs are quoted, though the per-unit price is higher because setup is spread across fewer units. Many brands run blank stock while proofing a first design, then commit to volume once the artwork is settled.',
      },
    ],
    related: [
      {
        href: '/artwork-guidelines/',
        label: 'Artwork guidelines',
        reason: 'The file specification to work to before you send anything.',
      },
      {
        href: '/printing-options/',
        label: 'Printing options',
        reason: 'How print methods differ and what each does to cost and coverage.',
      },
      {
        href: '/blank-poly-mailers/',
        label: 'Blank Poly Mailers',
        reason: 'The alternative if your artwork or volumes are not settled yet.',
      },
    ],
    cta: {
      heading: 'Start a custom printed order',
      body: 'Send your artwork, size and quantity. We will come back with a written specification, a price and a proof before anything is scheduled.',
      buttonLabel: 'Request a custom quotation',
    },
    whatsapp:
      'Hi, I would like to order custom printed poly mailers. I have artwork ready to send.',
    collections: ['custom-printed-poly-mailers'],
    group: 'print',
    quotePreset: 'Custom Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'economy-poly-mailers',
    name: 'Economy Poly Mailers',
    h1: 'Economy Poly Mailers',
    title: 'Economy Poly Mailers | Bulk Cost-Led Specification',
    description:
      'Economy poly mailers for high-volume shipping. What you give up at the lower specification, where it is safe to save, and where it is not.',
    summary:
      'A cost-led specification for high volume — and an honest account of what the saving costs you.',
    intro: [
      'Every specification decision on a mailer is a trade. An economy specification makes those trades in the direction of cost, and it is the right call for a lot of operations — high volume, light contents, low return rates, no brand requirement on the outer bag.',
      'It is the wrong call when the saving is smaller than the cost of a single failed parcel. A mailer that splits generates a replacement order, a refund, a support conversation and a customer who tells other people. At most price points that arithmetic breaks quickly.',
      'This page sets out where the saving is genuinely free and where it is not, so the decision is made on the numbers rather than on the unit price alone.',
    ],
    plan: {
      intent: 'Buy cheap poly mailers in bulk without buying the wrong thing.',
      audience:
        'High-volume shippers of light goods, and price-sensitive buyers comparing suppliers.',
      problem:
        'Distinguishing a sensible economy specification from one that will cost more in failures than it saves.',
      angle:
        'Names exactly what is given up at each saving, rather than selling cheapness as a feature.',
      primaryKeyword: 'economy poly mailers',
      supportingKeywords: [
        'cheap poly mailers',
        'cheap poly mailer bags',
        'bulk poly mailers',
        'bulk poly mailer bags',
        'poly mailers wholesale',
      ],
      nearestPage: '/blank-poly-mailers/',
      boundary:
        'This page is a specification decision driven by cost. The blank page is a print-status decision driven by commitment.',
    },
    images: [
      {
        file: 'plain-white-poly-mailer-standing-filled.jpg',
        alt: 'Plain white poly mailer standing upright and packed, with no printing on the panel',
      },
      {
        file: 'white-poly-mailer-with-green-flap-detail.jpg',
        alt: 'White poly mailer with a green flap section, lying flat and sealed',
      },
      {
        file: 'white-poly-mailers-stacked-with-rolled-film.jpg',
        alt: 'Stack of plain white poly mailers beside a roll of the same film',
      },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'Where the saving comes from',
        intro:
          'An economy specification is not one decision. It is four, and they are not equally safe.',
        caption: 'Each economy trade-off and what it costs you.',
        columns: ['Saving', 'What you give up', 'Safe when'],
        rows: [
          [
            'Lighter film weight',
            'Puncture and tear resistance',
            'Contents are soft, light and have no corners',
          ],
          [
            'No print',
            'Brand presence on the outer parcel',
            'Branding lives on inserts, stickers or the product itself',
          ],
          [
            'Stock colour instead of matched',
            'Exact tone control',
            'The parcel is not part of the customer experience',
          ],
          [
            'Single adhesive strip',
            'Easy resealing for returns',
            'Return rates are low, or returns use a separate bag',
          ],
          [
            'Larger order quantity',
            'Flexibility and cash held in stock',
            'Volume is predictable and storage is dry and dark',
          ],
        ],
        outro:
          'The first row is the one to think hardest about. The other three cost you presentation; that one costs you parcels.',
      },
      {
        kind: 'prose',
        heading: 'The arithmetic that decides it',
        paragraphs: [
          'Work out what one failed parcel costs you end to end: the replacement goods, the second shipment, the staff time on the support ticket, and whatever proportion of those customers do not order again.',
          'Then work out the saving per mailer between the economy specification and the one above it. Divide the first number by the second, and you get the failure rate at which the saving disappears.',
          'For most businesses that number is startlingly low — a fraction of a percent. If the lighter film raises failures by more than that, the economy specification is costing money, not saving it. If your contents are soft and light and the failure rate does not move, the saving is genuinely free.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where an economy specification works well',
        items: [
          {
            term: 'Light, soft, high-volume goods',
            detail:
              'Single garments, textiles and soft accessories put almost no stress on the film.',
          },
          {
            term: 'Operations that brand elsewhere',
            detail:
              'If the inserts and the product packaging carry the identity, the outer bag does not need to.',
          },
          {
            term: 'Marketplace fulfilment',
            detail:
              'Where the platform controls presentation, a plain bag is often the requirement rather than a compromise.',
          },
          {
            term: 'Internal and inter-site transfers',
            detail: 'Stock movements between your own locations need containment, not presentation.',
          },
          {
            term: 'Sample and literature sends',
            detail: 'Low-value contents where the parcel is not part of the offer.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where it is a false economy',
        items: [
          {
            term: 'Anything with a corner',
            detail:
              'Boxed goods, hardback books and electronics concentrate force at one point, which is exactly what light film fails at.',
          },
          {
            term: 'High-value contents',
            detail:
              'The saving per parcel is trivial next to the value at risk in a single failure.',
          },
          {
            term: 'High-return categories',
            detail:
              'Without a second adhesive strip every return needs another bag, which erases the saving.',
          },
          {
            term: 'Brands selling on presentation',
            detail:
              'If customers photograph your parcels, the outer bag is part of what they bought.',
          },
        ],
      },
      {
        kind: 'specs',
        heading: 'Economy specification choices',
        intro:
          'You can take some savings and not others. Everything is confirmed on your quotation.',
        rows: [
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'The one saving worth reconsidering if there is anything rigid in your parcels.',
          },
          {
            label: 'Colour',
            options: ['White', 'Grey', 'Stock colour range'],
            note: 'Stock colours carry little premium; a matched colour is where cost climbs.',
          },
          {
            label: 'Print',
            options: ['Unprinted', 'Single-colour logo'],
            note: 'A one-colour mark is the cheapest print available and still reads as intentional.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns'],
            note: 'Keep the single strip only if returns are genuinely rare for you.',
          },
          {
            label: 'Order quantity',
            options: ['Standard volume', 'High volume'],
            note: 'Higher volume lowers the unit price but ties up cash and storage.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Storing a bulk order properly',
        before:
          'A large economy order only stays economical if it is still usable when you get to the bottom of the pallet. Adhesive is the component that ages, and heat, damp and sunlight are what age it. Keep cartons sealed, flat, off the floor and out of direct light, and rotate stock so the oldest is used first. If you are ordering into several markets at once, the sequencing and documentation points are covered in the ',
        link: { href: '/resources/international-ordering-guide/', anchor: 'guide to ordering internationally' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Are cheap poly mailers strong enough?',
        a: 'For light, soft contents with no hard corners, yes. Lighter film fails at points of concentrated force, so the answer depends entirely on what is inside rather than on the mailer alone.',
      },
      {
        q: 'How much do I save by ordering in bulk?',
        a: 'The per-unit price falls as volume rises because setup and handling are spread further. How far it falls depends on the size, specification and quantity, so we quote against your actual figures rather than publishing a table.',
      },
      {
        q: 'Can economy mailers still be printed?',
        a: 'Yes. A single-colour logo is the cheapest print available and keeps most of the cost saving while still making the parcel look deliberate.',
      },
      {
        q: 'What is the difference between economy and standard mailers?',
        a: 'Mainly film weight, and after that the closure and colour options. The construction and the sizes are the same; what changes is how much stress the bag will take before it fails.',
      },
    ],
    related: [
      {
        href: '/blank-poly-mailers/',
        label: 'Blank Poly Mailers',
        reason: 'Unprinted stock without necessarily dropping the film specification.',
      },
      {
        href: '/materials/',
        label: 'Materials',
        reason: 'What actually changes between film weights.',
      },
      {
        href: '/white-poly-mailers/',
        label: 'White Poly Mailers',
        reason: 'The lowest-cost base colour, in more detail.',
      },
    ],
    cta: {
      heading: 'Price a bulk economy order',
      body: 'Give us your monthly volume and what you ship. We will quote an economy specification and the one above it so you can compare the two properly.',
      buttonLabel: 'Compare economy pricing',
    },
    whatsapp:
      'Hi, I need bulk economy poly mailers. Could you quote high-volume pricing?',
    collections: [],
    group: 'print',
    quotePreset: 'Economy Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'custom-frosted-poly-bags',
    name: 'Custom Frosted Poly Bags',
    h1: 'Custom Frosted Poly Bags',
    title: 'Custom Frosted Poly Bags | Zip Garment Packaging',
    description:
      'Frosted poly bags with zip closure for garment presentation and retail packing. How they differ from mailers and where each belongs.',
    summary:
      'A translucent zip-closure garment bag — presentation and reuse rather than shipping.',
    intro: [
      'This is not a mailer, and treating it as one leads to the wrong purchase. A frosted poly bag is a zip-closure garment bag: translucent rather than opaque, resealable rather than single-use, and designed to be kept rather than torn open and discarded.',
      'It does a job the mailer range does not. It presents a folded garment so the product is visible without being handled, keeps it clean in a warehouse or on a shelf, and stays with the customer as storage after purchase.',
      'Plenty of brands use both: the frosted bag holds and presents the garment, the mailer carries it through the post. This page covers when that pairing is worth it and when one of the two is enough.',
    ],
    plan: {
      intent: 'Source frosted zip-closure poly bags for garment packing.',
      audience:
        'Apparel brands, wholesalers and retailers needing presentation packaging rather than shipping packaging.',
      problem:
        'Working out whether they need a garment bag, a mailer, or both.',
      angle:
        'The only page on the site about a non-mailer product, and it draws the line clearly rather than blurring it.',
      primaryKeyword: 'custom frosted poly bags',
      supportingKeywords: [
        'frosted zip poly bags',
        'frosted garment bags',
        'custom frosted bags for clothing',
      ],
      nearestPage: '/apparel-shipping-bags/',
      boundary:
        'Frosted bags present and store a garment. Apparel shipping bags carry it through a delivery network. Different jobs, often used together.',
    },
    images: [
      {
        file: 'frosted-zip-poly-bags-pair-with-care-symbols.png',
        alt: 'Two frosted zip poly bags, one printed with a row of garment care symbols',
      },
      {
        file: 'frosted-zip-poly-bag-holding-folded-garment.png',
        alt: 'Frosted zip poly bag holding a folded garment visible through the translucent film',
      },
      {
        file: 'frosted-zip-poly-bags-holding-knitwear.png',
        alt: 'Two frosted zip bags holding folded knitwear in green and yellow, seen through the frosted film',
      },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'Frosted zip bag or poly mailer',
        intro:
          'They look similar in a catalogue and behave completely differently in an operation.',
        caption: 'What separates a frosted garment bag from a poly mailer.',
        columns: ['', 'Frosted zip bag', 'Poly mailer'],
        rows: [
          ['Closure', 'Zip or slider, reopens repeatedly', 'Adhesive strip, single use'],
          ['Opacity', 'Translucent — contents visible', 'Opaque — contents hidden'],
          ['Designed to be', 'Kept and reused', 'Opened and discarded or recycled'],
          ['Carries a shipping label', 'Not intended to', 'Yes'],
          ['Protects in transit', 'Little', 'Containment and moisture resistance'],
          ['Usual role', 'Presentation, retail, storage', 'Delivery'],
        ],
        outro:
          'If the bag needs an address label on it, you want a mailer. If the customer should be able to see the garment and reopen the bag, you want this.',
      },
      {
        kind: 'bullets',
        heading: 'What these bags are used for',
        items: [
          {
            term: 'Garment presentation',
            detail:
              'A folded piece stays visible and clean, so it can be handled in store without being touched.',
          },
          {
            term: 'Wholesale and stockist supply',
            detail:
              'Individually bagged garments arrive at a retailer ready to shelve without repacking.',
          },
          {
            term: 'Inside a shipping mailer',
            detail:
              'The frosted bag holds the garment and keeps its presentation; the mailer takes the label and the handling.',
          },
          {
            term: 'Customer storage after purchase',
            detail:
              'A resealable bag gets kept for travel or seasonal storage, which extends how long a brand mark stays in a home.',
          },
          {
            term: 'Sample and showroom sets',
            detail: 'Pieces that are handled repeatedly stay clean between viewings.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Printing on a translucent surface',
        paragraphs: [
          'Frosted film is not white film with a haze over it. It is translucent, so ink sits on a surface that light passes through, and the contents behind the print affect how it reads.',
          'Dark inks work reliably because they hold their edge whatever is behind them. White ink can look either crisp or washed out depending on the garment inside, which makes it a risk on a bag whose contents vary. Large solid areas of any colour reduce the transparency that is the reason for choosing the bag in the first place.',
          'The layouts that work most reliably are restrained: a mark, a care-symbol row, a size marker. If you want a heavily printed bag, an opaque film will serve you better and cost less.',
        ],
      },
      {
        kind: 'specs',
        heading: 'What can be specified',
        intro: 'Confirmed in writing on your quotation.',
        rows: [
          {
            label: 'Closure',
            options: ['Slider zip', 'Press-seal zip'],
            note: 'A slider is easier to operate one-handed; a press seal is lower profile in a stack.',
          },
          {
            label: 'Film finish',
            options: ['Frosted', 'Clear'],
            note: 'Clear shows the garment fully; frosted softens it and hides handling marks better.',
          },
          {
            label: 'Print',
            options: ['Unprinted', 'Logo', 'Logo with care symbols', 'Size and product markings'],
            note: 'Restrained print keeps the translucency that justifies the format.',
          },
          {
            label: 'Vent hole',
            options: ['None', 'Vented'],
            note: 'A vent lets air out so bagged garments stack flat rather than trapping air.',
          },
          {
            label: 'Size',
            options: ['Standard garment sizes', 'Custom dimensions'],
            note: 'Custom sizes are quoted against your folded garment measurements.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Using both together',
        before:
          'The common setup in apparel is a frosted bag inside a mailer. The garment stays presented and clean, the mailer takes the label and the handling, and the customer opens something that looks considered rather than something that looks like transit packaging. Where you only want one, and it has to travel through a delivery network, the ',
        link: { href: '/apparel-shipping-bags/', anchor: 'apparel shipping bag options' },
        after: ' cover what garment-specific mailers are designed to do.',
      },
      {
        kind: 'prose',
        heading: 'Handling and quality checks',
        paragraphs: [
          'Zip closures are checked for smooth operation along their full length, because a zip that binds halfway is a bag a retailer will not use. Print is checked against your approved proof for placement and density on the translucent surface, where inconsistency shows more than it does on opaque film.',
          'Bags are counted by carton and checked for clean seams. Store them flat and out of direct sunlight; the zip is the component most affected by heat.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can frosted poly bags be used for shipping?',
        a: 'They are not designed for it. They are translucent, they reopen, and they are not built to carry a shipping label through a sorting network. Use one inside a mailer if you want both presentation and delivery protection.',
      },
      {
        q: 'What is the difference between frosted and clear poly bags?',
        a: 'Frosted film diffuses light so the garment is visible but softened, and it hides fingerprints and handling marks better. Clear film shows the product completely, which suits retail display more than repeated handling.',
      },
      {
        q: 'Do frosted bags need vent holes?',
        a: 'If garments are stacked or boxed after bagging, a vent lets trapped air escape so the stack stays flat. For single bags handled loose it makes little difference.',
      },
      {
        q: 'Can care instructions be printed on the bag?',
        a: 'Yes, and care-symbol rows are one of the most common print requests on this format. Keep them dark on the frosted surface so they read regardless of what is inside.',
      },
    ],
    related: [
      {
        href: '/apparel-shipping-bags/',
        label: 'Apparel Shipping Bags',
        reason: 'The shipping half of the pairing, built for delivery rather than presentation.',
      },
      {
        href: '/industries/clothing-and-apparel/',
        label: 'Clothing and apparel',
        reason: 'How presentation and shipping packaging fit together in a garment operation.',
      },
      {
        href: '/printing-options/',
        label: 'Printing options',
        reason: 'What can be printed on a translucent surface and how.',
      },
    ],
    cta: {
      heading: 'Quote frosted garment bags',
      body: 'Send your folded garment dimensions and whether you want print. We will confirm the size and closure that suit your product before pricing.',
      buttonLabel: 'Request frosted bag pricing',
    },
    whatsapp:
      'Hi, I am interested in custom frosted poly bags with zip closure for garments.',
    collections: ['custom-printed-poly-mailers'],
    group: 'print',
    quotePreset: 'Custom Frosted Poly Bags',
  },
];
