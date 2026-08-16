import type { ProductPage } from '../types';

/**
 * Colour family. Six pages that must not blur into each other.
 *
 * Pink and Light Pink are separated by tone, buyer and application, not by
 * adjective. Colored is the mixed-range page and never repeats a single-colour
 * page's copy. White is a colour decision. Blank is a print-status decision that
 * happens to span colours — its whole argument is about not printing yet.
 */

export const colorProducts: ProductPage[] = [
  /* ===================================================================== */
  {
    slug: 'pink-poly-mailers',
    name: 'Pink Poly Mailers',
    h1: 'Pink Poly Mailers',
    title: 'Pink Poly Mailers | Bright & Deep Pink Shipping Bags',
    description:
      'Saturated pink poly mailers for retail and promotional shipping. Tone range, print contrast on pink film, and where the colour works hardest.',
    summary:
      'Saturated, high-visibility pinks — the retail and promotional end of the colour range.',
    intro: [
      'Pink is the colour that made poly mailers a marketing surface rather than a shipping supply. A saturated pink parcel is identifiable across a room, photographs well without styling, and gets opened on camera by customers who would never have filmed a white bag.',
      'This page covers the strong end of the range: hot pink, fuchsia, deep rose and the mid pinks that read clearly under artificial light. If you are looking for blush and pastel tones, those behave differently in print and in photography, and they have their own page.',
    ],
    plan: {
      intent: 'Buy pink poly mailers in a saturated, high-visibility tone.',
      audience:
        'Retail, promotional and social-first brands using packaging as a marketing surface.',
      problem:
        'Getting a pink that reads as their pink across a run, and knowing what will print legibly on it.',
      angle:
        'Owns the saturated end of the pink range, including how print contrast behaves on a strong base colour.',
      primaryKeyword: 'pink poly mailers',
      supportingKeywords: [
        'pink poly mailer bags',
        'hot pink poly mailers',
        'pink shipping bags',
        'pink polymailer',
      ],
      nearestPage: '/light-pink-poly-mailers/',
      boundary:
        'Saturated tones, retail and promotional use. The light pink page covers blush and pastel tones for boutique and beauty palettes.',
    },
    images: [
      {
        file: 'deep-pink-poly-mailers-stacked-with-insert-card.jpg',
        alt: 'Deep pink poly mailers in a stack, one holding a printed insert card at the opening',
      },
      {
        file: 'pink-poly-mailers-rolled-stack-red-backdrop.jpg',
        alt: 'Bright pink poly mailers rolled into a working stack against a red background',
      },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Which pink, and why it matters',
        standfirst: 'Pink covers a wider range than any other mailer colour.',
        paragraphs: [
          'Between a hot magenta and a dusty rose there is more visual distance than between most brands’ entire palettes. Two suppliers can both sell you a "pink mailer" and deliver colours that would never sit on the same shelf together.',
          'That makes a reference essential. Send a physical swatch, a printed sample, or a defined colour value, and we quote a match against it rather than against a word. Where an exact match is not achievable on the film available for your market, we say so before you order rather than after.',
          'Colour also drifts between production batches more visibly on strong tones than on pale ones. If you are reordering to sit alongside existing stock, tell us at quotation stage so the batch can be checked against your previous run.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where a strong pink does real work',
        intro:
          'Colour is a cost, so it should be doing something. These are the situations where a saturated pink earns it.',
        items: [
          {
            term: 'Doorstep recognition',
            detail:
              'Repeat customers identify the parcel before they read the label, which matters for subscription and replenishment models.',
          },
          {
            term: 'Unboxing content',
            detail:
              'A strong colour gives a video or a photograph its subject without any styling. White parcels have to be styled to be worth filming.',
          },
          {
            term: 'Campaign and launch runs',
            detail:
              'A limited colour signals a limited drop without printing anything, which keeps setup cost low on short runs.',
          },
          {
            term: 'Warehouse sorting by eye',
            detail:
              'Colour-coding an order type by mailer colour is faster than reading a label on a busy bench.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'What prints legibly on a strong pink base',
        intro:
          'Ink on coloured film behaves differently from ink on white. This is the practical guide before you commit artwork.',
        caption: 'Print legibility on a saturated pink base film.',
        columns: ['Print colour', 'Legibility on strong pink', 'Notes'],
        rows: [
          ['White', 'Very high', 'The default choice, and the most forgiving at small sizes.'],
          ['Black', 'High', 'Strong contrast, though it reads heavier than it does on white film.'],
          ['Deep navy or charcoal', 'Good', 'Softer than black while keeping contrast.'],
          ['Metallic silver or gold', 'Moderate', 'Depends heavily on finish and lighting; proof before committing.'],
          ['Mid greys and pastels', 'Low', 'Loses definition at small sizes; avoid for body text.'],
          ['Red or orange', 'Low', 'Sits too close to the base tone and vibrates at the edges.'],
        ],
      },
      {
        kind: 'specs',
        heading: 'Options to select',
        intro: 'Confirmed in writing on your quotation, as with any specification.',
        rows: [
          {
            label: 'Tone',
            options: ['Stock pink', 'Matched to a reference you supply'],
            note: 'A matched tone needs a physical or defined reference and a proof round.',
          },
          {
            label: 'Finish',
            options: ['Gloss', 'Matte'],
            note: 'Gloss holds saturation strongly; matte reads more muted and hides handling marks.',
          },
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Heavier film also improves opacity, which stops dark contents shadowing through a pale area.',
          },
          {
            label: 'Print',
            options: ['Unprinted', 'One side', 'Both sides'],
            note: 'Coloured film alone is often enough; print is what adds the name and the message.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns'],
            note: 'Fashion and beauty ranges with high return rates usually justify the second strip.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Running pink alongside other colours',
        before:
          'Brands rarely stop at one colour. A second tone for a different product line, or a seasonal colour for a campaign, is a common second order. Where several colours run together, the setup can often be shared, which makes the incremental colour cheaper than a standalone run. The full range and how each base behaves is set out in the ',
        link: { href: '/poly-mailer-colors/', anchor: 'colour selection overview' },
        after: ', which compares tones side by side rather than one at a time.',
      },
      {
        kind: 'prose',
        heading: 'Checking colour before a production run',
        paragraphs: [
          'Colour is the specification most likely to cause a dispute, so we handle it in a fixed sequence. You supply a reference. We confirm what can be matched on the film available. A proof is produced and approved before the run is scheduled.',
          'Screen colour is not a reference. A pink that looks right on a calibrated monitor can arrive materially different on film, because the film is not paper and it is not backlit. Where colour accuracy matters commercially, ask for a physical check rather than a digital one.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you match an exact shade of pink?',
        a: 'We quote a match against a reference you supply — a physical swatch, a previous sample or a defined colour value. Where the film available for your market cannot reach the tone, we tell you before you order rather than delivering something close.',
      },
      {
        q: 'Which print colour reads most clearly on pink mailers?',
        a: 'White is the most reliable, and black is a strong second. Mid-tone greys, pastels and anything in the red-to-orange range lose definition against a saturated pink and are worth avoiding for small type.',
      },
      {
        q: 'Will pink mailers fade in transit or storage?',
        a: 'Colour on film is affected by prolonged sunlight rather than by handling. Store cartons out of direct light and the tone stays consistent; a window-facing pallet is what causes visible change.',
      },
      {
        q: 'Is there a difference between hot pink and fuchsia on film?',
        a: 'In practice they overlap, and the words mean different things to different suppliers. That is exactly why we quote against a reference rather than a name.',
      },
    ],
    related: [
      {
        href: '/light-pink-poly-mailers/',
        label: 'Light Pink Poly Mailers',
        reason: 'The blush and pastel end of the range, for softer brand palettes.',
      },
      {
        href: '/colored-poly-mailers/',
        label: 'Colored Poly Mailers',
        reason: 'The full selectable colour range when pink is one of several.',
      },
      {
        href: '/printing-options/',
        label: 'Printing options',
        reason: 'How print method and coverage change what a coloured base can carry.',
      },
    ],
    cta: {
      heading: 'Get pink mailers quoted',
      body: 'Send a colour reference and your quantity. We will confirm what can be matched on the film for your market and price it.',
      buttonLabel: 'Quote pink mailers',
    },
    whatsapp:
      'Hi, I would like a quotation for pink poly mailers. I can send a colour reference.',
    collections: ['poly-mailer-colors'],
    group: 'color',
    quotePreset: 'Pink Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'light-pink-poly-mailers',
    name: 'Light Pink Poly Mailers',
    h1: 'Light Pink Poly Mailers',
    title: 'Light Pink Poly Mailers | Blush & Pastel Tones',
    description:
      'Blush and pastel pink poly mailers for boutique, beauty and softer brand palettes. Opacity, print contrast and photography notes.',
    summary:
      'Blush, nude and pastel pinks — quieter tones for boutique, beauty and considered brand palettes.',
    intro: [
      'Blush behaves nothing like hot pink. It is a low-saturation colour, which means it takes light differently, hides less, and asks more of both the film and the print.',
      'The brands buying it are usually the ones treating packaging as part of a considered identity rather than as a signal flare: beauty, fine jewellery, boutique fashion, stationery. For them the tone has to be right, the film has to be opaque enough that a dark product does not shadow through, and the print has to hold up against a pale base.',
      'Those three things are what this page covers, and they are why blush is quoted differently from a saturated tone.',
    ],
    plan: {
      intent: 'Buy light pink, blush or pastel poly mailers.',
      audience: 'Beauty, boutique fashion, jewellery and stationery brands with soft palettes.',
      problem:
        'Pale film shows contents through it and offers less contrast for print than a saturated colour.',
      angle:
        'Opacity and low-contrast print behaviour — problems that only exist at the pale end of the range.',
      primaryKeyword: 'light pink poly mailers',
      supportingKeywords: [
        'blush poly mailers',
        'pastel pink mailers',
        'nude poly mailers',
        'pale pink shipping bags',
      ],
      nearestPage: '/pink-poly-mailers/',
      boundary:
        'Pale, low-saturation tones and the technical problems they create. The pink page owns saturated tones and high-visibility use.',
    },
    images: [
      {
        file: 'light-pink-poly-mailers-fanned-silver-seal.jpg',
        alt: 'Pale blush pink mailers fanned out, showing the silver adhesive strip against the soft tone',
      },
      {
        file: 'blush-pink-bubble-lined-mailers-stacked.jpg',
        alt: 'Stack of blush pink bubble-lined mailers with the cushioned surface visible',
        caption:
          'Blush is available on cushioned formats as well as plain film, so a range can hold one tone across both.',
      },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Opacity is the first thing to settle',
        paragraphs: [
          'Pale film is translucent film unless it is specified not to be. A black garment inside a standard blush mailer will read as a grey shadow through the front panel, and that shadow is what makes an otherwise considered parcel look cheap.',
          'The fix is a higher-opacity film or a heavier film weight, both of which we can quote. It is worth deciding this before colour, because the opacity choice affects how the tone itself reads: the same blush on a denser film sits slightly cooler and flatter.',
          'If most of what you ship is pale — cosmetics in white cartons, stationery, light garments — standard opacity is usually fine and there is no reason to pay for more.',
        ],
      },
      {
        kind: 'compare',
        heading: 'Print contrast against a pale base',
        intro:
          'A blush base gives you far less contrast to work with than a saturated one. This is what survives at small sizes.',
        caption: 'Print legibility on a blush or pastel pink base film.',
        columns: ['Print colour', 'Legibility on blush', 'Notes'],
        rows: [
          ['Black or charcoal', 'Very high', 'The dependable choice, and the one most blush ranges use.'],
          ['Deep brown or aubergine', 'High', 'Warmer than black and reads as more considered at large sizes.'],
          ['Deep rose or burgundy', 'Good', 'Tonal rather than contrasting; works for large marks, not small type.'],
          ['White', 'Low', 'Nearly disappears. Usable only as a large solid shape, never as type.'],
          ['Metallic gold or rose gold', 'Variable', 'Reads beautifully in some lights and vanishes in others; proof it.'],
          ['Pastels', 'Very low', 'Not enough separation from the base to hold an edge.'],
        ],
        outro:
          'If your identity is built on a white wordmark, blush is the wrong base and a saturated tone will serve you better.',
      },
      {
        kind: 'bullets',
        heading: 'Where blush is the right call',
        items: [
          {
            term: 'Beauty and skincare',
            detail:
              'Sits with the tones the category already uses on cartons and secondary packaging.',
          },
          {
            term: 'Fine jewellery and accessories',
            detail: 'A quiet outer parcel keeps attention on the box inside rather than competing with it.',
          },
          {
            term: 'Boutique fashion',
            detail: 'Reads as considered rather than promotional, which matters at higher price points.',
          },
          {
            term: 'Stationery and paper goods',
            detail: 'Complements uncoated papers and muted print without clashing.',
          },
          {
            term: 'Gifting ranges',
            detail: 'Looks like part of the gift, not like a shipping supply that has to be discarded first.',
          },
        ],
      },
      {
        kind: 'specs',
        heading: 'What to specify',
        intro:
          'Opacity and finish matter more here than on any other colour. All choices are confirmed on your quotation.',
        rows: [
          {
            label: 'Opacity',
            options: ['Standard', 'Higher opacity'],
            note: 'Specify higher opacity if you ship dark or high-contrast contents.',
          },
          {
            label: 'Tone',
            options: ['Stock blush', 'Matched to a reference you supply'],
            note: 'Pale tones drift more visibly between batches, so a reference is worth supplying.',
          },
          {
            label: 'Finish',
            options: ['Matte', 'Gloss'],
            note: 'Matte is the usual choice — gloss pushes a pale pink toward looking synthetic.',
          },
          {
            label: 'Format',
            options: ['Plain film', 'Bubble-lined'],
            note: 'The same tone can run across both so a range stays consistent.',
          },
          {
            label: 'Print',
            options: ['Unprinted', 'One side', 'Both sides'],
            note: 'Dark ink on blush is the reliable combination; see the contrast table above.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Photography and content considerations',
        before:
          'Pale packaging photographs differently from strong colour. Blush picks up whatever is around it, so a parcel shot on a warm wooden surface reads peach and the same parcel on a cool grey surface reads mauve. Teams shooting product content should settle their surface and lighting before ordering a matched tone, or the mailer will never look like the sample. Where a printed design is doing the identity work rather than the colour, the ',
        link: { href: '/custom-poly-mailers/', anchor: 'custom printed mailer options' },
        after: ' set out how coverage and method affect what is achievable.',
      },
    ],
    faqs: [
      {
        q: 'Will dark products show through a light pink mailer?',
        a: 'Through a standard-opacity blush film, usually yes — as a soft grey shadow. If you ship dark garments or dark cartons, specify higher opacity or a heavier film weight when you request a quote.',
      },
      {
        q: 'Is light pink the same as rose gold or nude?',
        a: 'They overlap and the terms are used loosely across the industry. That is why we quote against a reference rather than a name. Send a swatch or a sample and we will confirm what is achievable on the available film.',
      },
      {
        q: 'Can I print white on a blush mailer?',
        a: 'You can, but it barely reads. White on pale pink works only as a large solid shape and never as type or fine detail. Dark inks are the reliable route on this base.',
      },
      {
        q: 'Does blush come in bubble-lined mailers as well?',
        a: 'Yes. Running the same tone across plain and cushioned formats keeps a range consistent when some products need protection and others do not.',
      },
    ],
    related: [
      {
        href: '/pink-poly-mailers/',
        label: 'Pink Poly Mailers',
        reason: 'The saturated end of the range, where white print reads clearly.',
      },
      {
        href: '/industries/beauty-and-cosmetics/',
        label: 'Beauty and cosmetics packaging',
        reason: 'How this tone fits into a beauty fulfilment operation.',
      },
      {
        href: '/poly-mailer-colors/',
        label: 'Colour options',
        reason: 'Compare blush against the rest of the range in one place.',
      },
    ],
    cta: {
      heading: 'Quote blush pink mailers',
      body: 'Tell us what you ship and how dark it is, and send a tone reference if you have one. We will confirm opacity and colour before pricing.',
      buttonLabel: 'Request a blush quotation',
    },
    whatsapp:
      'Hi, I am interested in light pink poly mailers. Could you advise on opacity and quote?',
    collections: ['poly-mailer-colors'],
    group: 'color',
    quotePreset: 'Light Pink Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'colored-poly-mailers',
    name: 'Colored Poly Mailers',
    h1: 'Colored Poly Mailers',
    title: 'Colored Poly Mailers | Full Colour Range & Matching',
    description:
      'Colored poly mailers across blue, green, purple, red, yellow and more. How colour is matched, what it costs, and how to run several tones.',
    summary:
      'The mixed-colour page — selecting across the range, running several tones, and how matching works.',
    intro: [
      'This page is for buyers who are not committed to one colour. Either you want a range — a tone per product line, per season or per market — or you want a colour we have not given its own page to, such as blue, green, purple, red or yellow.',
      'The questions that come up are different from single-colour questions. How many tones can run on one order. Whether colours can be matched or only selected from stock. What running several colours does to cost, storage and reordering. Those are what this page answers.',
    ],
    plan: {
      intent: 'Find coloured poly mailers across a range of tones, or in a colour without its own page.',
      audience:
        'Brands running multiple colour lines, and buyers looking for a colour outside the four with dedicated pages.',
      problem:
        'Understanding what running several colours costs operationally rather than just per unit.',
      angle:
        'The multi-colour operational decision — setup sharing, stock-keeping and reorder complexity.',
      primaryKeyword: 'colored poly mailers',
      supportingKeywords: [
        'colored poly mailer bags',
        'purple poly mailers',
        'green poly mailers',
        'red poly mailers',
        'light blue poly mailers',
        'colored bubble mailers',
      ],
      nearestPage: '/poly-mailer-colors/',
      boundary:
        'This is the product page: ordering coloured film. The colour collection is a chooser that routes to each colour page and compares tones.',
    },
    images: [
      {
        file: 'colored-poly-mailers-blue-yellow-red-black-fan.png',
        alt: 'Poly mailers fanned in blue, yellow, red and black to show the stock colour range',
      },
      {
        file: 'blue-poly-mailers-pair-angled.png',
        alt: 'Two royal blue poly mailers angled to show the silver adhesive closure strip',
      },
      {
        file: 'violet-poly-mailer-filled-angled.png',
        alt: 'Violet poly mailer packed and angled, showing how a saturated colour looks when filled',
      },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'How colour is supplied',
        intro:
          'There are two routes, and they price and schedule differently.',
        items: [
          {
            term: 'Stock colours',
            detail:
              'Tones already produced on the film we quote against. Lower cost, shorter setup, and the tone is what it is — you select rather than specify.',
          },
          {
            term: 'Matched colours',
            detail:
              'Produced against a reference you supply. Higher setup, a proof round before production, and a tone that sits with the rest of your identity.',
          },
        ],
        outro:
          'Most brands start on a stock colour and move to a matched tone once volume justifies it. There is no need to start with matching.',
      },
      {
        kind: 'prose',
        heading: 'What running several colours actually costs',
        standfirst: 'The per-unit price is the smallest part of it.',
        paragraphs: [
          'Adding a second colour to an order is usually cheaper than most buyers expect, because where the size, film and artwork match, much of the setup is shared across the colours on that run.',
          'What is not shared is everything after production. Each colour is a separate line to store, a separate carton on the bench, a separate run-out date to track, and a separate decision for a packer to get right under pressure.',
          'That is the real cost of a colour range, and it is why a two-colour range managed properly usually outperforms a five-colour range managed loosely. Decide what each colour is for before you order it.',
        ],
      },
      {
        kind: 'compare',
        heading: 'Choosing a base tone for print',
        intro:
          'If you plan to print, the base colour narrows your ink options. This table is the short version.',
        caption: 'Reliable ink choices on common coloured base films.',
        columns: ['Base film', 'Reliable print colours', 'Avoid'],
        rows: [
          ['Royal or navy blue', 'White, pale grey, metallic silver', 'Black, dark greens'],
          ['Green', 'White, black', 'Yellow, mid greys'],
          ['Purple or violet', 'White, pale gold', 'Blue, black at small sizes'],
          ['Red', 'White, black', 'Orange, pink, dark brown'],
          ['Yellow', 'Black, deep navy, dark brown', 'White, pale pastels'],
          ['Grey or silver', 'Black, navy, white as a solid', 'Mid-tone anything'],
        ],
        outro:
          'Where a combination is marginal, we proof it on the actual film and finish rather than approving it on screen.',
      },
      {
        kind: 'specs',
        heading: 'Specification across the range',
        intro:
          'The same choices apply whichever tone you select. Everything is confirmed on the quotation.',
        rows: [
          {
            label: 'Colour route',
            options: ['Stock colour', 'Matched to a reference'],
            note: 'Matching needs a reference and a proof round; stock colours do not.',
          },
          {
            label: 'Finish',
            options: ['Gloss', 'Matte'],
            note: 'Finish changes the read of a colour as much as the pigment does.',
          },
          {
            label: 'Opacity',
            options: ['Standard', 'Higher opacity'],
            note: 'Pale tones need this decision; saturated tones rarely do.',
          },
          {
            label: 'Format',
            options: ['Plain film', 'Bubble-lined'],
            note: 'Colour can carry across both, though matching between formats needs checking.',
          },
          {
            label: 'Sizes per order',
            options: ['Single size', 'Several sizes on one order'],
            note: 'Running sizes together shares setup where the specification matches.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Building a colour range without overcomplicating it',
        steps: [
          {
            title: 'Decide what the colour signals',
            detail:
              'Product line, order type, season or market. If a colour has no job, it is stock you will write off.',
          },
          {
            title: 'Start with two',
            detail:
              'Two tones give visible variety and stay manageable at the bench. Five is a decision you can make later, from data.',
          },
          {
            title: 'Match sizes across tones',
            detail:
              'One size in three colours is far simpler to run than three sizes in three colours.',
          },
          {
            title: 'Order colours together',
            detail:
              'Shared setup on a single order is cheaper than staggered separate orders, and the batches will match each other.',
          },
          {
            title: 'Review after one full cycle',
            detail:
              'Look at which colour ran out first and which did not move, then reweight the next order.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Colour on cushioned formats',
        before:
          'Coloured film is not limited to plain mailers. Bubble-lined formats carry colour too, which lets a range stay visually consistent even when some products need protection and others do not. The construction differences, and what each one protects against, are set out on the ',
        link: { href: '/poly-bubble-mailers/', anchor: 'bubble-lined mailer page' },
        after: '. Matching a tone across two constructions needs a check at proof stage, because the surfaces take colour differently.',
      },
    ],
    faqs: [
      {
        q: 'What colours are available for poly mailers?',
        a: 'Stock tones typically span white, black, grey, blue, green, red, yellow, purple and the pink range, and matched colours are quoted against a reference you supply. Availability varies by film and by market, so we confirm what is achievable before you order.',
      },
      {
        q: 'How many colours can I order at once?',
        a: 'There is no fixed limit. The practical constraint is your own operation — every colour is another line to store, track and reorder. Most brands find two or three tones is where the benefit stops growing.',
      },
      {
        q: 'Is a coloured mailer more expensive than white?',
        a: 'Coloured film generally carries a small premium over plain white, and a matched colour carries more than a stock one. It is still substantially cheaper than printing, which is why colour is often the first branding step a business takes.',
      },
      {
        q: 'Will two orders of the same colour match each other?',
        a: 'Batches can drift slightly, and it shows more on saturated tones. If a reorder has to sit alongside existing stock, say so at quotation stage so the new batch can be checked against your previous one.',
      },
      {
        q: 'Can I get a colour that is not in the standard range?',
        a: 'Usually, as a matched colour against a reference. We confirm what the film can reach before you commit, and where a tone is not achievable we say so rather than delivering an approximation.',
      },
    ],
    related: [
      {
        href: '/black-poly-mailers/',
        label: 'Black Poly Mailers',
        reason: 'The single colour with the most specific handling and print considerations.',
      },
      {
        href: '/white-poly-mailers/',
        label: 'White Poly Mailers',
        reason: 'The baseline the whole range is priced against.',
      },
      {
        href: '/poly-mailer-colors/',
        label: 'Colour collection',
        reason: 'Compare every colour page from one place.',
      },
    ],
    cta: {
      heading: 'Quote a colour range',
      body: 'Tell us which tones you want and what each one is for. We will quote them together so the setup is shared and the batches match.',
      buttonLabel: 'Price a colour range',
    },
    whatsapp:
      'Hi, I would like a quotation for colored poly mailers. I am interested in more than one tone.',
    collections: ['poly-mailer-colors'],
    group: 'color',
    quotePreset: 'Colored Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'white-poly-mailers',
    name: 'White Poly Mailers',
    h1: 'White Poly Mailers',
    title: 'White Poly Mailers | Standard & Custom Printed',
    description:
      'White poly mailers are the print baseline. Why white gives the widest ink options, where it shows marks, and when a coloured base serves better.',
    summary:
      'The baseline colour — widest print latitude, lowest cost, and the one that shows handling marks most.',
    intro: [
      'White is the default for a reason that has nothing to do with looks. It is the base that accepts every ink colour, so a design that works on white will work; a design built for a coloured base has to be checked.',
      'That latitude is what makes white the sensible choice for a first printed run, for a brand whose palette uses several colours, or for any design that includes photography or gradients. It is the least opinionated surface available.',
      'It also shows every scuff a sorting network can inflict. This page covers both sides of that trade honestly, because for some ranges white is the wrong answer.',
    ],
    plan: {
      intent: 'Buy white poly mailers, plain or printed.',
      audience:
        'Brands printing multi-colour artwork, and buyers who want the lowest-cost standard option.',
      problem:
        'Deciding whether the print latitude of white outweighs how visibly it marks in transit.',
      angle:
        'Treats white as a print-substrate decision rather than a colour preference, and is candid about scuffing.',
      primaryKeyword: 'white poly mailers',
      supportingKeywords: ['poly mailers white', 'white shipping bags', 'white mailer bags'],
      nearestPage: '/blank-poly-mailers/',
      boundary:
        'This page is about the colour white as a print substrate. The blank page is about not printing at all, across every colour.',
    },
    images: [
      {
        file: 'white-poly-mailer-filled-and-flat-pair.png',
        alt: 'White poly mailer shown packed alongside an empty flat one on a plain background',
      },
      {
        file: 'white-poly-mailers-fanned-dark-seal-strip.jpg',
        alt: 'White poly mailers fanned to show the contrast between the white panel and the dark seal edge',
      },
      {
        file: 'white-poly-mailer-open-peel-strip-blue-backdrop.jpg',
        alt: 'White poly mailer with the peel strip liner lifted, showing the adhesive against the white film',
      },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'White against a coloured base',
        intro:
          'This is the decision the page exists to settle. Neither answer is right for everyone.',
        caption: 'Choosing between a white base and a coloured base film.',
        columns: ['', 'White base', 'Coloured base'],
        rows: [
          ['Ink colours available', 'All of them', 'Limited by contrast against the base'],
          ['Photography and gradients', 'Reproduce properly', 'Rarely work'],
          ['Doorstep recognition without print', 'None', 'Immediate'],
          ['Shows scuffs and handling marks', 'Clearly', 'Much less, especially on dark tones'],
          ['Cost of the film itself', 'Lowest', 'Small premium'],
          ['Suits a multi-colour identity', 'Yes', 'Only if the palette works on that base'],
        ],
        outro:
          'A useful rule: if your identity is a single mark in one colour, a coloured base gives you more for less. If it is photographic or multi-colour, white is the only base that will carry it.',
      },
      {
        kind: 'prose',
        heading: 'What white does to a printed design',
        paragraphs: [
          'On white film the ink you specify is close to the ink you get, because nothing is showing through from underneath. Gradients hold, photographic images reproduce, and pale tones in your palette stay pale rather than disappearing.',
          'The one thing to watch is coverage. A large solid area of ink on white shows any inconsistency in lay-down more than the same solid does on a tinted base, because the eye has a clean reference sitting next to it. Where a design is mostly solid colour, a coloured film often produces a more even result for less money.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where white is the right base',
        items: [
          {
            term: 'First printed runs',
            detail:
              'No contrast problems to solve, so artwork moves from file to proof without a redesign.',
          },
          {
            term: 'Multi-colour or photographic artwork',
            detail: 'The only base that reproduces a full palette or an image reliably.',
          },
          {
            term: 'Ranges with several sub-brands',
            detail:
              'One film, different artwork per line, rather than a colour to manage for each.',
          },
          {
            term: 'Cost-led volume orders',
            detail: 'The lowest-cost base film, which matters at high monthly volumes.',
          },
          {
            term: 'Operations that hand-write or apply large labels',
            detail: 'White gives labels and pen the contrast they need.',
          },
        ],
      },
      {
        kind: 'specs',
        heading: 'Options on a white base',
        intro: 'Selected by you, confirmed on the quotation.',
        rows: [
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Heavier film also raises opacity, which stops dark contents greying the panel.',
          },
          {
            label: 'Opacity',
            options: ['Standard', 'Higher opacity'],
            note: 'Worth specifying if you ship dark garments, since a shadow is more obvious on white.',
          },
          {
            label: 'Finish',
            options: ['Gloss', 'Matte'],
            note: 'Matte disguises handling marks noticeably better than gloss on a white base.',
          },
          {
            label: 'Print coverage',
            options: ['Unprinted', 'Logo only', 'Partial coverage', 'Full coverage'],
            note: 'Full coverage on white is where photographic and multi-colour designs belong.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns'],
            note: 'Unchanged by colour choice, but worth setting at the same time.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Handling marks, and how to live with them',
        before:
          'White shows what happens to a parcel on its way to a doorstep — conveyor marks, ink transfer from other labels, a grey line where it was gripped. None of it affects the contents, but customers photograph parcels now, and a scuffed white bag reads as carelessness. A matte finish helps materially. So does a design that carries visual interest across the panel rather than leaving large clean areas. If handling marks are a recurring complaint, the ',
        link: { href: '/black-poly-mailers/', anchor: 'case for a dark base film' },
        after: ' is worth reading before you reorder.',
      },
      {
        kind: 'prose',
        heading: 'Quality control on a white run',
        paragraphs: [
          'White film is the least forgiving substrate for a print check, which makes it the easiest to inspect properly. Registration drift, colour variation between the start and end of a run, and any speckling in a solid area all show clearly.',
          'We check proofs against approved artwork at intervals through the run rather than only at the beginning, and hold samples against your approved proof rather than against a screen.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why are most poly mailers white?',
        a: 'Because white film is the lowest-cost base and the only one that accepts every ink colour. That combination makes it the default for both plain stock and first printed runs.',
      },
      {
        q: 'Do white poly mailers show dirt in transit?',
        a: 'More than any other colour. Marks are cosmetic rather than structural, but they are visible. A matte finish reduces how much they show, and a design that covers more of the panel hides more of them.',
      },
      {
        q: 'Will dark clothing show through a white mailer?',
        a: 'On standard-opacity film it can appear as a faint grey shadow. If you ship dark garments regularly, specify higher opacity or a heavier film weight when requesting a quote.',
      },
      {
        q: 'Is white cheaper than coloured film?',
        a: 'Generally yes, by a small margin, and matched colours cost more again. At high monthly volumes that margin is worth quantifying rather than assuming.',
      },
    ],
    related: [
      {
        href: '/blank-poly-mailers/',
        label: 'Blank Poly Mailers',
        reason: 'If you want unprinted stock rather than a print substrate.',
      },
      {
        href: '/economy-poly-mailers/',
        label: 'Economy Poly Mailers',
        reason: 'Where cost per unit is the deciding factor rather than print latitude.',
      },
      {
        href: '/custom-poly-mailers/',
        label: 'Custom Poly Mailers',
        reason: 'What a printed run involves once the base colour is settled.',
      },
    ],
    cta: {
      heading: 'Price white mailers',
      body: 'Tell us the size, the quantity and whether you are printing. We will quote the film weight and opacity that suit what you ship.',
      buttonLabel: 'Quote white mailers',
    },
    whatsapp:
      'Hi, I need a quotation for white poly mailers, printed and unprinted options please.',
    collections: ['poly-mailer-colors'],
    group: 'color',
    quotePreset: 'White Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'black-poly-mailers',
    name: 'Black Poly Mailers',
    h1: 'Black Poly Mailers',
    title: 'Black Poly Mailers | Matte & Gloss Options',
    description:
      'Black poly mailers hide handling marks and give full opacity. Matte against gloss, what prints on black, and where the colour has drawbacks.',
    summary:
      'Full opacity, marks that do not show, and a surface that only a narrow set of inks will read on.',
    intro: [
      'Black solves two problems that no other colour solves as completely. Nothing shows through it, and nothing shows on it. A dark garment inside is invisible, and the scuffs a parcel picks up in a sorting network disappear against the base.',
      'The trade is print. Black gives you the narrowest ink options of any base film, and a design that relies on a dark wordmark simply will not work. This page covers both, along with the matte-against-gloss decision that matters more on black than on any other colour.',
    ],
    plan: {
      intent: 'Buy black poly mailers, usually matte, often printed.',
      audience:
        'Streetwear, premium and direct-to-consumer brands where the parcel is part of the product experience.',
      problem:
        'Getting a dark parcel that stays looking new, while accepting the narrow print palette that comes with it.',
      angle:
        'The matte-against-gloss decision and the specific print constraints of a dark base.',
      primaryKeyword: 'black poly mailers',
      supportingKeywords: [
        'black poly mailer bags',
        'matte black poly mailers',
        'black shipping bags',
        'black mailer bags',
      ],
      nearestPage: '/colored-poly-mailers/',
      boundary:
        'Single-colour depth on the properties unique to black. The colored page covers running several tones and general matching.',
    },
    images: [
      {
        file: 'matte-black-poly-mailers-front-and-back.png',
        alt: 'Matte black poly mailers shown front and back, one printed with a white line mark',
      },
      {
        file: 'black-poly-mailers-pair-on-split-grey-backdrop.png',
        alt: 'Two black poly mailers overlapping on a split grey and white background',
      },
      {
        file: 'black-poly-mailers-printed-logo-flat-lay.png',
        alt: 'Black poly mailers arranged flat with white printed lettering and pine cones alongside',
      },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'Matte or gloss, on black',
        intro:
          'On most colours this is a preference. On black it changes the whole character of the parcel.',
        caption: 'How finish changes a black mailer in practice.',
        columns: ['', 'Matte black', 'Gloss black'],
        rows: [
          ['Reads as', 'Deep, flat, considered', 'Reflective, high-contrast, energetic'],
          ['Shows fingerprints', 'Slightly, on some films', 'Noticeably'],
          ['Shows scuffs', 'Barely', 'More than matte'],
          ['Photographs', 'Evenly, without hotspots', 'With reflections that need lighting control'],
          ['White print reads', 'Crisply', 'Crisply, with more sheen contrast'],
          ['Common in', 'Premium and streetwear ranges', 'Promotional and high-energy ranges'],
        ],
        outro:
          'Matte is the more common choice for brands photographing their own parcels, because it needs no lighting setup to look right.',
      },
      {
        kind: 'bullets',
        heading: 'What black does well',
        items: [
          {
            term: 'Complete opacity',
            detail:
              'Contents are invisible from outside regardless of colour, which matters for discreet categories.',
          },
          {
            term: 'Hides transit marks',
            detail:
              'The scuffs and grey lines that make a white parcel look mistreated do not register on black.',
          },
          {
            term: 'Makes white print sing',
            detail:
              'A single white mark on black is the highest-contrast, lowest-cost branding available.',
          },
          {
            term: 'Reads as considered',
            detail:
              'A dark parcel carries a price signal that a white one does not, without any print at all.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Where black causes problems',
        standfirst: 'Three drawbacks, none of them fatal, all worth knowing first.',
        paragraphs: [
          'Print options narrow sharply. White is the only ink that reads reliably at every size; pale metallics work at large sizes; everything else needs to be checked before you commit. A brand whose identity is a black wordmark cannot use a black base.',
          'Handwriting and some label adhesives behave differently. Pen does not show, and a hand-written note on the bag is not an option. Labels are fine, but a small white label on a large black parcel is a very visible rectangle, so plan where it goes.',
          'Heat is the third. Dark parcels sitting in direct sun on a loading bay or in a delivery vehicle get warmer than pale ones. For most contents that is irrelevant; for anything heat-sensitive it is worth a thought.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Choices on a black base',
        intro: 'All confirmed in writing on the quotation.',
        rows: [
          {
            label: 'Finish',
            options: ['Matte', 'Gloss'],
            note: 'The most consequential choice on this colour — see the comparison above.',
          },
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Black is already fully opaque, so weight is about strength here rather than show-through.',
          },
          {
            label: 'Print colour',
            options: ['White', 'Metallic silver or gold', 'No print'],
            note: 'Other colours can be quoted but should be proofed on the actual film first.',
          },
          {
            label: 'Print coverage',
            options: ['Logo only', 'Partial coverage', 'Full coverage'],
            note: 'On black, a single well-placed mark usually outperforms heavy coverage.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns', 'Peel strip with tear tab'],
            note: 'A tear tab suits ranges where the opening is part of the experience.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Black across formats',
        before:
          'Where a range spans soft goods and fragile items, black carries across both plain and cushioned constructions, so the parcels still look like a set. Matching the depth of black between a plain film and a bubble-lined one needs a check at proof stage, because the two surfaces reflect differently. What each construction protects against is set out in the ',
        link: { href: '/personalized-bubble-mailers/', anchor: 'printed bubble mailer options' },
        after: ', which covers printing on a cushioned surface specifically.',
      },
      {
        kind: 'steps',
        heading: 'Getting a black run right first time',
        steps: [
          {
            title: 'Settle the finish before the artwork',
            detail:
              'Matte and gloss change how a mark reads, so approving artwork before the finish is decided means approving it twice.',
          },
          {
            title: 'Supply artwork as a single-colour file',
            detail:
              'A white mark on a transparent background gives us exactly what we need without interpretation.',
          },
          {
            title: 'Check the mark at real size',
            detail:
              'Fine lines that hold on screen can close up on film. Print your artwork at the actual size and look at it on paper.',
          },
          {
            title: 'Decide the label position',
            detail:
              'A white label is a strong visual element on black. Choose where it goes rather than letting it land anywhere.',
          },
          {
            title: 'Approve a proof, then run',
            detail:
              'Nothing is scheduled until the proof is signed off against the finish you chose.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is matte or gloss black better for poly mailers?',
        a: 'Matte is the more common choice because it photographs evenly and hides scuffs better. Gloss gives a higher-contrast, more reflective parcel, which suits promotional ranges more than premium ones.',
      },
      {
        q: 'What colour can be printed on black mailers?',
        a: 'White reads reliably at any size. Metallic silver and gold work at larger sizes and should be proofed. Anything mid-tone or dark will not hold against the base and is not worth the setup.',
      },
      {
        q: 'Do black poly mailers get hot in transit?',
        a: 'A dark parcel in direct sunlight will warm more than a pale one. For most contents this makes no difference; for anything heat-sensitive it is a reason to choose a lighter base.',
      },
      {
        q: 'Can you see through a black poly mailer?',
        a: 'No. Black film is fully opaque regardless of what is inside, which is one of the main reasons discreet categories choose it.',
      },
    ],
    related: [
      {
        href: '/white-poly-mailers/',
        label: 'White Poly Mailers',
        reason: 'The opposite trade-off — full print latitude, but marks show.',
      },
      {
        href: '/custom-poly-mailers/',
        label: 'Custom Poly Mailers',
        reason: 'What a printed run involves once the base and finish are decided.',
      },
      {
        href: '/industries/fashion-boutiques/',
        label: 'Fashion boutique packaging',
        reason: 'Where a dark parcel is doing brand work as well as shipping work.',
      },
    ],
    cta: {
      heading: 'Quote black mailers',
      body: 'Tell us matte or gloss, the size and the quantity. If you are printing, send the mark and we will check it at real size before quoting.',
      buttonLabel: 'Request black mailer pricing',
    },
    whatsapp:
      'Hi, I would like a quotation for black poly mailers, matte finish if available.',
    collections: ['poly-mailer-colors'],
    group: 'color',
    quotePreset: 'Black Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'blank-poly-mailers',
    name: 'Blank Poly Mailers',
    h1: 'Blank Poly Mailers',
    title: 'Blank Poly Mailers | Unprinted Stock Bags',
    description:
      'Unprinted poly mailers in stock colours and sizes. When blank stock is the right call, how to brand without printing, and when to switch.',
    summary:
      'Unprinted stock across the colour range, and the argument for staying unprinted longer than you think.',
    intro: [
      'Blank mailers are not a lesser product. For a lot of businesses they are the correct one, and staying on them longer is a better decision than printing early with artwork that is not settled.',
      'Printing commits you. It commits your artwork, your size, your colour and your volume, and it commits them all at once. Blank stock commits none of that, which is why it suits businesses whose range is still moving, whose volumes are unpredictable, or who ship on behalf of several brands.',
      'This page is about that decision — when blank is right, how to brand a blank parcel without a print run, and the signals that tell you it is time to switch.',
    ],
    plan: {
      intent: 'Buy unprinted poly mailers in bulk.',
      audience:
        'Early-stage sellers, third-party fulfilment operations, and businesses whose artwork is not settled.',
      problem:
        'Wanting branded-looking parcels without committing to a printed run.',
      angle:
        'Argues the commercial case for staying unprinted, and covers branding methods that need no print setup.',
      primaryKeyword: 'blank poly mailers',
      supportingKeywords: ['unprinted poly mailers', 'plain poly mailers', 'stock poly mailers'],
      nearestPage: '/white-poly-mailers/',
      boundary:
        'This page is about print status across all colours. The white page is about one colour as a print substrate.',
    },
    images: [
      {
        file: 'unprinted-white-poly-mailers-fanned-stack.png',
        alt: 'Fanned stack of unprinted white poly mailers with dark seal strips',
      },
      {
        file: 'white-poly-mailer-filled-and-flat-pair.png',
        alt: 'Unprinted mailer packed alongside a flat one, showing plain stock in use',
      },
      {
        file: 'unprinted-white-poly-mailers-rolled-bundle.png',
        alt: 'Rolled bundle of plain white poly mailers ready for a packing bench',
      },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'When blank stock is the right decision',
        items: [
          {
            term: 'Your artwork is not settled',
            detail:
              'Printing a design you are still arguing about produces cartons of packaging you will resent using.',
          },
          {
            term: 'Volumes are unpredictable',
            detail:
              'Printed runs work on scale. If your monthly volume swings widely, blank stock lets you buy to demand.',
          },
          {
            term: 'You ship for several brands',
            detail:
              'Third-party fulfilment and multi-brand sellers cannot put one logo on every parcel.',
          },
          {
            term: 'You are testing a size',
            detail:
              'Settle the size question on blank stock before committing artwork to a dimension you may change.',
          },
          {
            term: 'Discretion is the requirement',
            detail:
              'Some categories are better served by a parcel that says nothing at all about its contents.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Branding a blank parcel without a print run',
        intro:
          'A plain mailer does not have to arrive anonymous. These methods carry no print setup and can change tomorrow.',
        steps: [
          {
            title: 'Choose a coloured film',
            detail:
              'A coloured blank mailer is recognisable on a doorstep and costs a fraction of a printed run.',
          },
          {
            title: 'Use a printed sticker or seal',
            detail:
              'Stickers are cheap, fast to reorder and can be changed for a campaign without touching your packaging stock.',
          },
          {
            title: 'Put the design inside',
            detail:
              'A printed card, tissue or wrap is what the customer actually sees first when the bag opens.',
          },
          {
            title: 'Standardise your label placement',
            detail:
              'Consistent label position across every parcel reads as care, and costs nothing.',
          },
          {
            title: 'Add a printed returns insert',
            detail:
              'It does the job that printed returns wording on the bag would do, and it is far cheaper to update.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'Blank stock against a printed run',
        intro:
          'The comparison changes with volume. Below a certain monthly rate, blank wins on almost every measure.',
        caption: 'Blank stock compared with a custom printed run.',
        columns: ['', 'Blank stock', 'Printed run'],
        rows: [
          ['Setup work', 'None', 'Artwork, proof, approval'],
          ['Cost per unit', 'Lowest', 'Higher, falling with volume'],
          ['Commitment', 'Buy to demand', 'Committed to a quantity and a design'],
          ['Time to first order', 'Short', 'Longer — proofing comes first'],
          ['Brand recognition', 'From colour and inserts only', 'From the parcel itself'],
          ['Changing your mind', 'Free', 'Costs a run'],
        ],
      },
      {
        kind: 'prose',
        heading: 'The signals that it is time to print',
        paragraphs: [
          'Three things usually happen together when a business is ready. Volume becomes predictable enough to forecast a run. The artwork stops changing. And customers start photographing parcels, which means the outside of the bag has become part of the product.',
          'When all three are true, printing pays for itself quickly. When only one is, blank stock plus a good sticker is almost always the better use of the money.',
          'There is no need to jump straight to full coverage either. A single printed mark on a coloured film is a cheap first printed run, and it teaches you what your customers actually respond to before you commit to something more elaborate.',
        ],
      },
      {
        kind: 'specs',
        heading: 'What you still get to choose',
        intro:
          'Unprinted does not mean unspecified. Everything below is selectable on a blank order.',
        rows: [
          {
            label: 'Colour',
            options: ['White', 'Black', 'Grey', 'Stock colour range'],
            note: 'Colour is the cheapest way to make a blank parcel recognisable.',
          },
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Unchanged by print status; choose against what you ship.',
          },
          {
            label: 'Finish',
            options: ['Gloss', 'Matte'],
            note: 'Matte on a blank parcel reads as considered rather than plain.',
          },
          {
            label: 'Closure',
            options: ['Self-adhesive peel strip', 'Double strip for returns'],
            note: 'A resealable blank mailer is a common choice for fulfilment operations.',
          },
          {
            label: 'Sizes per order',
            options: ['Single size', 'Several sizes on one order'],
            note: 'Blank orders are the easiest place to run several sizes together.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Moving from blank to printed',
        before:
          'When the time comes, the transition is straightforward: the size, film and closure stay the same, and only the artwork is added. Businesses usually run down existing blank stock while the first printed run is proofed, so there is no gap. What that first run involves, from file to approved proof, is set out on the ',
        link: { href: '/custom-poly-mailers/', anchor: 'custom printed mailer page' },
        after: ', including what to have ready before you ask for a price.',
      },
    ],
    faqs: [
      {
        q: 'Are blank poly mailers cheaper than printed ones?',
        a: 'Per unit, yes, and there is no setup cost. The gap narrows as volume rises, which is why printing becomes worthwhile once your monthly rate is predictable.',
      },
      {
        q: 'What colours do blank mailers come in?',
        a: 'The stock range typically spans white, black, grey and a set of colours, with availability varying by film and market. Colour is the most cost-effective way to make an unprinted parcel recognisable.',
      },
      {
        q: 'Can I add my logo to blank mailers myself?',
        a: 'A printed sticker or seal is the usual route and works well. Direct printing on site is not practical on this film without the right equipment, so stickers, inserts and branded tape are the realistic options.',
      },
      {
        q: 'Should I use blank mailers if I am just starting out?',
        a: 'Usually yes. Settle your size, your volume and your artwork first. Printing before those are stable tends to produce packaging you stop wanting to use.',
      },
    ],
    related: [
      {
        href: '/economy-poly-mailers/',
        label: 'Economy Poly Mailers',
        reason: 'Where the deciding factor is cost per unit rather than print status.',
      },
      {
        href: '/custom-poly-mailers/',
        label: 'Custom Poly Mailers',
        reason: 'The next step when volume and artwork have both settled.',
      },
      {
        href: '/samples/',
        label: 'Samples',
        reason: 'Test a size on blank stock before committing artwork to it.',
      },
    ],
    cta: {
      heading: 'Order blank mailers',
      body: 'Tell us the sizes, colours and quantities you want. Blank orders are straightforward to quote and need no artwork from you.',
      buttonLabel: 'Get blank stock pricing',
    },
    whatsapp:
      'Hi, I would like pricing on blank unprinted poly mailers in a few sizes.',
    collections: ['poly-mailer-colors'],
    group: 'color',
    quotePreset: 'Blank Poly Mailers',
  },
];
