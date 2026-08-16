import type { ContentPage } from './types';

/**
 * Reference guides.
 *
 * Boundary against the capability pages: a capability page answers "what will
 * you supply me", a resource answers "how do I work this out for myself,
 * including when I am comparing you against someone else". That is why several
 * of these are written to be usable against a competitor's quotation.
 *
 * Boundary against the blog: resources are reference material you return to,
 * organised as tables and checklists. Blog articles are arguments, read once.
 */

export const resources: readonly ContentPage[] = [
  /* ===================================================================== */
  {
    slug: 'poly-mailer-size-guide',
    name: 'the size reference',
    h1: 'Poly Mailer Size Reference',
    title: 'Poly Mailer Size Reference | What Fits Each Size',
    description:
      'A reference table of common poly mailer sizes and the item types each one holds, with the adjacent sizes to consider when something sits between two.',
    summary: 'A lookup table: find your item, read across, get a size.',
    intro: [
      'This is a lookup table rather than a method. If you already know what you ship and just want to know which size it goes in, start here and read across.',
      'If you are working the decision out from first principles — measuring, testing, weighing against shipping bands — the size selection framework is the page you want instead.',
    ],
    plan: {
      intent: 'Look up which mailer size fits a specific item.',
      audience: 'Anyone who wants an answer rather than a process.',
      problem: 'Size charts list dimensions without saying what goes in them.',
      angle: 'A pure lookup table, organised by item rather than by dimension.',
      primaryKeyword: 'poly mailer size chart',
      supportingKeywords: ['mailer size reference', 'what fits in a poly mailer'],
      nearestPage: '/size-guide/',
      boundary:
        'This is the reference table. The size guide is the decision framework for working it out yourself.',
    },
    blocks: [
      {
        kind: 'compare',
        heading: 'Find your item, read across',
        intro:
          'Sizes assume a single item packed with a card and a returns slip. Add inserts or a second item and move up a row.',
        caption: 'Common shipped items matched to a starting mailer size.',
        columns: ['What you ship', 'Start with', 'Move up if'],
        rows: [
          ['Earrings, small jewelry, boxed', '6x9', 'The box is deeper than a matchbox'],
          ['Lipstick, serum, single cosmetic', '6x9', 'It ships in a carton with a sleeve'],
          ['Phone case, cable, small tech', '6x9', 'You send several together'],
          ['Sticker packs, cards, small prints', '6x9', 'A board stiffener is needed'],
          ['Socks, underwear, single thin item', '6x9', 'More than two pairs'],
          ['One folded t-shirt', '9x12', 'You add tissue and a card'],
          ['Paperback book', '9x12', 'It is a hardback or oversized'],
          ['Leggings, swimwear, light top', '9x12 to 10x13', 'The order is routinely two items'],
          ['Two-item apparel order', '10x13', 'Either item is knitwear'],
          ['Fine-gauge knit, light sweatshirt', '10x13 to 12x15', 'It is heavyweight or oversized'],
          ['Jeans, denim, chunky knit', '12x15', 'Two garments travel together'],
          ['Heavyweight or fleece hoodie', '14.5x19', 'It is an oversized fit'],
          ['Light jacket, three-garment order', '14.5x19', 'You consolidate four or more'],
          ['Bedding or towel set', '19x24', 'It is a full double or larger set'],
          ['Wholesale drop, batched returns', '19x24', 'The load exceeds a comfortable carry'],
          ['Cushion, folded quilt, square soft goods', '24x24', 'Never — this is the square format'],
        ],
        outro:
          'Where an item sits between two rows, the smaller size is usually right, provided it seals onto clean film without the contents reaching the strip.',
      },
      {
        kind: 'bullets',
        heading: 'How to read this table honestly',
        intro:
          'Four caveats, all of which matter more than the table itself.',
        items: [
          {
            term: 'It assumes a complete order',
            detail:
              'Product plus card plus returns slip. If you also send tissue, a sticker sheet and a sample, move up.',
          },
          {
            term: 'It assumes a competent fold',
            detail:
              'A garment folded at speed occupies more room than one folded carefully. Size against the fold you actually get.',
          },
          {
            term: 'It says nothing about protection',
            detail:
              'Fitting and surviving are different questions. If contents are fragile, the format matters as much as the size.',
          },
          {
            term: 'Suppliers measure differently',
            detail:
              'Some quote to the flap, some to the usable area. Compare bags rather than numbers.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'When the table is not enough',
        before:
          'If your product does not appear here, or your order profile spans several rows, the answer is to measure a packed parcel rather than to pick the nearest match. Measuring a lofty or irregular item is less obvious than it sounds, and the method that works is set out in the ',
        link: { href: '/resources/mailer-measurement-guide/', anchor: 'mailer measurement guide' },
        after: ', which covers packed depth as well as footprint.',
      },
    ],
    faqs: [
      {
        q: 'What is the most common poly mailer size?',
        a: 'Ten by thirteen, because it takes a folded garment, a two-item order or a garment plus inserts without a packer having to decide. That tolerance is why so many apparel operations standardise on it.',
      },
      {
        q: 'What size mailer fits a hoodie?',
        a: 'A standard unlined hoodie fits a 12x15 folded properly. Heavyweight, fleece-lined or oversized hoodies need 14.5x19, and forcing them into a smaller size puts the strain on the seal rather than the film.',
      },
      {
        q: 'Should I round up or down when between two sizes?',
        a: 'Down, provided the packed parcel seals onto clean film with the contents below the adhesive strip. An oversized mailer costs more and leaves slack air, which makes parcels less stable rather than safer.',
      },
    ],
    related: [
      {
        href: '/size-guide/',
        label: 'Working out a size yourself',
        reason: 'The method behind this table, including the shipping-band arithmetic.',
      },
      {
        href: '/poly-mailer-sizes/',
        label: 'The sizes we make',
        reason: 'Each size with its own fit detail and packing notes.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'poly-mailer-material-guide',
    name: 'the material guide',
    h1: 'Comparing Poly Mailer Materials',
    title: 'Poly Mailer Material Guide | Comparing Film Options',
    description:
      'How to compare mailer films between suppliers, why published gauge figures rarely compare like for like, and the questions that reveal a real difference.',
    summary: 'How to compare films between suppliers when the published numbers do not match.',
    intro: [
      'This guide exists because comparing two packaging quotations is harder than it should be. One supplier quotes a micron figure, another quotes mils, a third quotes neither, and the three bags in front of you feel different from all of it.',
      'What follows is how to compare them properly: what the published numbers do and do not tell you, what to ask instead, and how to test two films against each other without laboratory equipment.',
    ],
    plan: {
      intent: 'Compare poly mailer materials across suppliers.',
      audience: 'Buyers evaluating competing quotations.',
      problem: 'Published film specifications are not comparable between suppliers.',
      angle: 'Written to be used against someone else’s quotation, not only ours.',
      primaryKeyword: 'poly mailer material guide',
      supportingKeywords: ['comparing mailer films', 'poly mailer thickness comparison'],
      nearestPage: '/materials/',
      boundary:
        'The materials page states what we supply. This guide teaches comparison across any supplier.',
    },
    blocks: [
      {
        kind: 'prose',
        heading: 'Why gauge figures rarely compare',
        standfirst: 'Three reasons, and none of them is dishonesty.',
        paragraphs: [
          'The first is units. Microns and mils both describe thickness, and quotations mix them freely. Converting is easy; noticing that one supplier quoted a target and another quoted a minimum is not.',
          'The second is what was measured. A figure taken on flat film and a figure taken on a finished bag describe different things, and the difference is not constant.',
          'The third is that thickness alone does not determine performance. How the film was produced, what it is blended from, and how the seals were made all affect whether a bag survives a drop. Two films of identical stated thickness can behave noticeably differently.',
          'None of that makes the number useless. It makes it insufficient on its own, which is why the questions below matter more.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What to ask instead of asking for a gauge',
        intro:
          'Five questions that reveal a genuine difference between two suppliers.',
        items: [
          {
            term: 'What is this film recommended for?',
            detail:
              'A supplier who answers with the contents rather than with a number is thinking about your problem.',
          },
          {
            term: 'What is the next weight up, and what does it change?',
            detail:
              'Knowing what an upgrade buys you tells you where the current specification sits.',
          },
          {
            term: 'Is the figure a target or a minimum?',
            detail:
              'A minimum is a commitment. A target is an aspiration, and the difference matters at the bottom of a run.',
          },
          {
            term: 'Was it measured on film or on the finished bag?',
            detail:
              'Ask both suppliers the same question and you will often find you were not comparing the same thing.',
          },
          {
            term: 'What is the recycled content, and what evidences it?',
            detail:
              'Feedstock type, proportion, and a document. All three, or the claim is decorative.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Testing two films against each other',
        intro:
          'No equipment needed. Do all five with the same contents, on the same day.',
        steps: [
          {
            title: 'Pack both with your real heaviest order',
            detail:
              'Not a proxy. The thing that actually fails is the thing to test with.',
          },
          {
            title: 'Drop each once, flat, from bench height',
            detail:
              'Onto a hard floor. Then again on a corner, which is where concentrated force shows up.',
          },
          {
            title: 'Press a hard corner against the film from inside',
            detail:
              'A box corner or a buckle, with steady pressure. This is the failure mode that separates weights.',
          },
          {
            title: 'Test the seal properly',
            detail:
              'Peel, fold, press the whole length, then pull the flap firmly. A partial bond shows up immediately.',
          },
          {
            title: 'Wet the outside and leave it',
            detail:
              'Twenty minutes with water on the panel and around the closure. Check whether anything reached the contents.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'What each material variable actually changes',
        intro:
          'Useful when a quotation offers options and you are deciding which are worth paying for.',
        caption: 'Material variables and the failure each one addresses.',
        columns: ['Variable', 'Addresses', 'Does not address'],
        rows: [
          ['Film weight', 'Puncture and tear from concentrated force', 'Crushing, surface scratching'],
          ['Opacity', 'Contents showing through', 'Anything structural'],
          ['Finish', 'How marks and print colour read', 'Strength'],
          ['Bubble lining', 'Impact', 'Crushing, abrasion'],
          ['Foam lining', 'Surface abrasion', 'Impact from a drop'],
          ['Gusset', 'Lofty contents deforming the parcel', 'Protection'],
          ['Recycled content', 'An environmental requirement', 'Performance, either way'],
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Where the film is not the variable that matters',
        before:
          'Buyers often arrive at a material comparison having already decided that the film is the problem, when the actual cause is fit or format. Contents moving inside an oversized bag, or a rigid item in a flexible one, will fail on any film weight you choose. Before comparing materials, it is worth confirming which failure you have, which is set out in the ',
        link: { href: '/resources/protective-mailer-comparison/', anchor: 'protective format comparison' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'How thick should a poly mailer be?',
        a: 'The question does not have a general answer, because thickness only matters relative to what is inside. Soft goods with no hard edges need very little; a boxed item with corners needs substantially more. Specify against contents, not against a number.',
      },
      {
        q: 'How do I compare two suppliers’ film specifications?',
        a: 'Ask both the same three questions: is the figure a target or a minimum, was it measured on film or on the finished bag, and what contents is it recommended for. You will often find the numbers were never comparable.',
      },
      {
        q: 'Does recycled content make a film weaker?',
        a: 'It can behave differently, which is why the specification should be checked against your actual contents rather than substituted like for like. Ask the supplier what changes, and test a sample before switching a live flow.',
      },
    ],
    related: [
      {
        href: '/materials/',
        label: 'Materials we supply',
        reason: 'What is selectable on an order, once you know what to ask for.',
      },
      {
        href: '/blog/poly-mailer-thickness-and-durability-explained/',
        label: 'Thickness and durability',
        reason: 'A longer read on why thickness is a poor proxy for strength.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'printing-and-artwork-guide',
    name: 'the printing and artwork guide',
    h1: 'Preparing Artwork for Mailer Printing',
    title: 'Printing and Artwork Guide | From Design to Press',
    description:
      'A walkthrough from first design decision to approved proof — what to settle first, how to build the file, and the checks that catch problems early.',
    summary: 'A start-to-finish walkthrough for someone preparing packaging artwork for the first time.',
    intro: [
      'This is the walkthrough. It assumes you have not produced packaging artwork before and takes the whole thing in order, from the decisions that come before anyone opens a design application to the moment a proof is approved.',
      'If you already know the process and just need the file specification — formats, bleed, resolution, colour mode — that is a separate page and it is shorter.',
    ],
    plan: {
      intent: 'Learn how to prepare artwork for packaging printing.',
      audience: 'Business owners and junior designers doing this for the first time.',
      problem: 'Not knowing the sequence, so decisions get made in an order that causes rework.',
      angle: 'A teaching walkthrough rather than a specification sheet.',
      primaryKeyword: 'how to prepare artwork for packaging printing',
      supportingKeywords: ['mailer artwork preparation', 'packaging print file guide'],
      nearestPage: '/artwork-guidelines/',
      boundary:
        'This guide teaches the process. The artwork guidelines page is the specification to hand a production designer.',
    },
    blocks: [
      {
        kind: 'steps',
        heading: 'Before anyone opens a design application',
        intro:
          'Four decisions that constrain the design. Making them afterwards means redrawing.',
        steps: [
          {
            title: 'Settle the size on a physical sample',
            detail:
              'Artwork is laid out for a specific panel. A size change after approval is a redraw, not an adjustment.',
          },
          {
            title: 'Choose the base colour',
            detail:
              'The base decides which inks will read. A dark mark cannot go on a dark film, and finding that out at proof stage wastes a week.',
          },
          {
            title: 'Choose the finish',
            detail:
              'Matte and gloss change how the same ink reads. Approving artwork before the finish is set means approving it twice.',
          },
          {
            title: 'Decide the coverage',
            detail:
              'Logo, partial or full. This is the budget conversation, and it belongs before the design rather than after it.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Building the file',
        intro:
          'Six things to get right while designing, rather than fixing afterwards.',
        steps: [
          {
            title: 'Work at final size',
            detail:
              'Design at the dimensions the bag will actually be, so type and line weights are judged at real scale.',
          },
          {
            title: 'Mark the dead zones',
            detail:
              'Draw the flap area and the side welds onto your template and keep anything important out of both.',
          },
          {
            title: 'Draw the label zone in',
            detail:
              'Decide where the shipping label goes and leave that area clear. This is the most commonly skipped step.',
          },
          {
            title: 'Add bleed on any edge the artwork reaches',
            detail:
              'At least 3 mm. Without it, part of the run comes out with an uneven white edge.',
          },
          {
            title: 'Set colour deliberately',
            detail:
              'CMYK or a named spot colour, not RGB. An RGB file will be converted, and the conversion is where surprises come from.',
          },
          {
            title: 'Outline the fonts',
            detail:
              'Live fonts substitute silently. Outlining removes an entire class of problem.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'Design decisions that survive a supply chain',
        intro:
          'A mailer is packed, folded, sealed, labelled, stacked and carried before anyone sees your design. These choices survive that.',
        items: [
          {
            term: 'Fewer elements, larger',
            detail:
              'One idea at generous scale reads across a warehouse. A dense composition reads at arm’s length and nowhere else.',
          },
          {
            term: 'Strong contrast over subtle palettes',
            detail:
              'Tonal designs that look sophisticated on screen turn to mush on film under fluorescent light.',
          },
          {
            term: 'Heavier line weights than feel necessary',
            detail:
              'Fine lines close up on flexible film. If it looks slightly heavy flat, it is probably right printed.',
          },
          {
            term: 'A centred composition with breathing room',
            detail:
              'Edge-to-edge designs distort once there is something in the bag. Centred ones survive packing.',
          },
          {
            term: 'The brand mark somewhere it will not be covered',
            detail:
              'Work out where the label lands before you decide where the logo goes, not after.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'The proof stage, and how to use it properly',
        paragraphs: [
          'A proof is not a formality to click through. It is the last point at which anything can change without cost, and the document the finished run will be checked against.',
          'Check the things only you can check: spelling, your web address, your social handles, whether the mark is the current version rather than the one from two years ago. We cannot know any of those are wrong.',
          'Then check placement against a packed bag rather than a flat one in your head. Ask where the label will go. Ask what happens to the design when the flap folds over. Ask for as many rounds as you need — a proof round costs a fraction of a reprint.',
          'What a proof will not tell you reliably is colour. A screen is backlit and film is not. Where a colour is commercially important, ask for a physical check rather than approving on a monitor.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Different surfaces, different rules',
        before:
          'Everything above assumes flat film. A cushioned surface breaks up fine lines and closes small type, and translucent frosted film reduces contrast because whatever is inside shows through. A file that works on one will usually need heavier weights and simpler shapes on another rather than a straight rescale. The differences between the printable surfaces are set out on the ',
        link: { href: '/custom-printed-poly-mailers/', anchor: 'printed format comparison' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What should I decide before designing packaging artwork?',
        a: 'Size, base colour, finish and coverage — in that order. Each one constrains the design, and settling them afterwards means redrawing the file rather than adjusting it.',
      },
      {
        q: 'How do I know if my logo will print well on a mailer?',
        a: 'Print it at the exact size it will appear on the bag, on paper, and look at it from arm’s length. If any element becomes hard to read, it will be worse on film, and worse again on a cushioned surface.',
      },
      {
        q: 'How many proof rounds should I expect?',
        a: 'As many as you need. A proof round is inexpensive; a reprint is not. Suppliers who discourage additional rounds are optimising their own process rather than your outcome.',
      },
      {
        q: 'Can I approve colour from a digital proof?',
        a: 'For placement and scale, yes. For colour, only approximately — a screen is backlit and film is not. If a colour is commercially important, ask for a physical check instead.',
      },
    ],
    related: [
      {
        href: '/artwork-guidelines/',
        label: 'File specification',
        reason: 'The technical requirements to hand to whoever produces the file.',
      },
      {
        href: '/design-your-poly-mailer/',
        label: 'Design tool',
        reason: 'Try placement and coverage before briefing a designer.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'color-selection-guide',
    name: 'the colour guide',
    h1: 'Selecting a Mailer Colour',
    title: 'Colour Selection Guide | Choosing a Base Film',
    description:
      'How to choose a mailer colour that survives contact with a supply chain — contrast, opacity, batch variation and the questions to settle before ordering.',
    summary: 'Choosing a colour that still looks right after a supply chain has handled it.',
    intro: [
      'Colour gets chosen from a swatch in good light and then spends its life in a warehouse, a van and a doorway. A colour that photographs beautifully on a desk can look grubby after a week in a sorting network, and a tone that reads as considered in daylight can read as cheap under fluorescent strip lighting.',
      'This guide is about choosing a colour that survives that. It covers contrast, opacity, batch variation and the three questions that decide whether a colour will work before you commit to a run.',
    ],
    plan: {
      intent: 'Choose a mailer colour that works in practice.',
      audience: 'Brand and packaging leads specifying a base film colour.',
      problem: 'Colour is chosen visually and then behaves differently in a real supply chain.',
      angle: 'How colour behaves after handling — a lens neither the colour collection nor the product pages take.',
      primaryKeyword: 'mailer colour selection',
      supportingKeywords: ['choosing packaging colour', 'poly mailer colour guide'],
      nearestPage: '/poly-mailer-colors/',
      boundary:
        'The colour collection routes you to a product. This guide is about the decision itself and how colour ages.',
    },
    blocks: [
      {
        kind: 'steps',
        heading: 'Three questions that decide the colour',
        intro:
          'Answer these before looking at a single swatch and the shortlist usually narrows to two.',
        steps: [
          {
            title: 'Is the colour or the print carrying the identity?',
            detail:
              'If the colour is doing the work, choose for recognition. If print is, choose for contrast against the ink instead.',
          },
          {
            title: 'How dark are your contents?',
            detail:
              'Dark contents under pale film shadow through. This decides opacity, and opacity changes how the tone itself reads.',
          },
          {
            title: 'Will customers photograph the parcel?',
            detail:
              'If yes, finish matters as much as colour. Matte photographs evenly; gloss produces hotspots that need lighting to control.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'How each family behaves in the real world',
        intro:
          'Assessed after handling rather than as a swatch.',
        caption: 'Colour families and how they hold up through a supply chain.',
        columns: ['Family', 'Shows handling marks', 'Print contrast', 'Photographs'],
        rows: [
          ['White and bone', 'Badly — every scuff shows', 'Every ink available', 'Blows out under bright light'],
          ['Black and charcoal', 'Barely', 'White and pale metallics only', 'Evenly, especially matte'],
          ['Grey and silver', 'Well', 'Dark inks, white as a solid', 'Neutrally'],
          ['Saturated brights', 'Moderately', 'White and black', 'Strongly — the colour is the subject'],
          ['Blush and pastels', 'Poorly', 'Dark inks only', 'Beautifully, but picks up surrounding colour'],
          ['Deep jewel tones', 'Well', 'White, pale metallics', 'Richly, and reads premium'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Things that catch people out',
        intro:
          'Five colour problems that only appear after an order arrives.',
        items: [
          {
            term: 'Batch variation on saturated tones',
            detail:
              'Strong colours drift more visibly between production batches than pale ones. If a reorder must sit beside existing stock, say so when quoting.',
          },
          {
            term: 'Pale film over dark contents',
            detail:
              'A grey shadow through a blush mailer is the single most common colour complaint. Specify opacity, not just tone.',
          },
          {
            term: 'Screen colour as a reference',
            detail:
              'A monitor is backlit and film is not. Send a physical swatch or a defined value, never a screenshot.',
          },
          {
            term: 'Finish changing the read',
            detail:
              'The same pigment on matte and gloss looks like two different colours. Decide finish and tone together.',
          },
          {
            term: 'Sunlight in storage',
            detail:
              'Colour on film is affected by prolonged light exposure. A pallet by a window will not match the one at the back.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Colour as more than branding',
        before:
          'Colour does operational work as well as brand work. Coding order types, product lines or markets by mailer colour reduces picking errors at a busy bench without any printing at all, and it is one of the few packaging decisions that improves accuracy and recognition at the same time. Where several tones run together, ordering them on a single run keeps the batches matched, which is covered on the ',
        link: { href: '/colored-poly-mailers/', anchor: 'colored mailer page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What colour mailer hides dirt most effectively?',
        a: 'Black, then grey and mid-tone colours. White shows the most by a wide margin. A matte finish helps on any base, and artwork that covers more of the panel hides more of the surface.',
      },
      {
        q: 'How do I make sure a reorder matches my existing stock?',
        a: 'Say so at quotation stage and supply a sample from the previous run. Batch drift is more visible on saturated tones than on pale ones, and it can be checked against your reference before production.',
      },
      {
        q: 'Can I match my exact brand colour?',
        a: 'We quote a match against a physical swatch or a defined colour value. Some tones cannot be reached on some films, and where that is the case we say so before you order rather than delivering an approximation.',
      },
    ],
    related: [
      {
        href: '/poly-mailer-colors/',
        label: 'Colour range',
        reason: 'The colour products, once the decision is made.',
      },
      {
        href: '/blog/choosing-colors-for-branded-shipping-mailers/',
        label: 'Colour strategy',
        reason: 'A longer read on colour as a brand asset.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'closure-and-self-seal-guide',
    name: 'the closure guide',
    h1: 'Closure and Self-Seal Reference',
    title: 'Closure and Self-Seal Guide | Adhesive Reference',
    description:
      'A technical reference on mailer closures — how adhesive strips bond, why seals fail, how storage affects them, and which construction suits which flow.',
    summary: 'How closures work, why they fail, and which construction suits which operation.',
    intro: [
      'The closure is the only join on a mailer made outside a factory, which makes it the part most likely to fail and the part most affected by how your team works.',
      'This is the technical reference: how the bond actually forms, the four things that stop it forming, how storage affects it, and how to choose between the constructions available.',
    ],
    plan: {
      intent: 'Understand mailer closures technically.',
      audience: 'Operations managers troubleshooting seal failures.',
      problem: 'Seals fail and the cause is attributed to the bag rather than to the sealing.',
      angle: 'Diagnostic reference for seal failures — the mechanism, not the product.',
      primaryKeyword: 'poly mailer closure guide',
      supportingKeywords: ['self seal adhesive', 'mailer seal failure', 'peel and seal strip'],
      nearestPage: '/self-seal-poly-mailers/',
      boundary:
        'The product page sells the closure. This reference diagnoses why one failed.',
    },
    blocks: [
      {
        kind: 'prose',
        heading: 'How the bond forms',
        standfirst: 'Pressure, not folding.',
        paragraphs: [
          'A self-seal strip carries a pressure-sensitive adhesive under a release liner. The adhesive is already active; the liner is simply keeping it from touching anything.',
          'The bond forms when the adhesive is pressed into contact with the film, and it forms in proportion to the pressure applied. Folding the flap places the adhesive near the film. Pressing it is what makes it stick.',
          'That distinction accounts for most seal failures we are asked about. A packer who folds and moves on has created a bond that holds on the bench, survives the first handling, and fails somewhere in a sorting hub.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'The four things that stop a seal forming',
        intro:
          'Work through these before concluding the adhesive was faulty. In our experience it usually was not.',
        items: [
          {
            term: 'Contents reaching the strip',
            detail:
              'Part of the adhesive bonds to a garment instead of to the film. That section never holds, and it is where the seal opens.',
          },
          {
            term: 'Partial pressure',
            detail:
              'Pressing the middle and not the ends. Seals open from the corners, so the ends are the part that most needs it.',
          },
          {
            term: 'Liner fragments',
            detail:
              'A liner torn off in stages leaves paper stuck to the adhesive. Those patches are dead.',
          },
          {
            term: 'Contamination',
            detail:
              'Dust, moisture or hand cream on the adhesive. Bench cleanliness affects seal performance more than people expect.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'Choosing a construction',
        intro:
          'Four options, each solving a different operational problem.',
        caption: 'Closure constructions matched to the flow each one suits.',
        columns: ['Construction', 'Solves', 'Cost position'],
        rows: [
          ['Single adhesive strip', 'Sealing quickly, once', 'Baseline'],
          ['Double adhesive strip', 'Returns without a second bag', 'Small premium, often self-funding'],
          ['Peel strip with tear tab', 'Opening without scissors', 'Small premium'],
          ['Printed tear line', 'Opening in the right place, preserving a returns strip', 'Print cost only'],
          ['Tamper-evident', 'Proving whether a parcel was opened', 'Higher'],
        ],
      },
      {
        kind: 'prose',
        heading: 'Storage and ageing',
        paragraphs: [
          'Polyethylene film is stable for a long time. The adhesive is not, and it is the component that decides how long a carton of mailers stays usable.',
          'Heat accelerates ageing, humidity affects tack, and prolonged light exposure does both. A carton stored in a cool dark room performs consistently; the same carton in a garage through a summer will seal noticeably worse.',
          'The practical response is to order to a rate you will use, keep cartons sealed until needed, store them flat and off the floor, and rotate so the oldest goes first. If you are using stock that has been sitting for a long time, test a bag before relying on it — peel, seal, and pull firmly.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Closures and returns',
        before:
          'In categories where a meaningful share of orders come back, the closure stops being a packaging detail and becomes part of the returns process. A double strip with a printed tear line lets a customer open, repack and reseal the original bag with no extra packaging and no instructions from you. Whether that is worth the premium depends on your return rate, and the arithmetic is set out on the ',
        link: { href: '/self-seal-poly-mailers/', anchor: 'self-seal mailer page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Why do poly mailer seals come open in transit?',
        a: 'Almost always because the adhesive did not meet clean film across its full length, or because the strip was folded rather than pressed. Contents reaching the strip line and partial pressing account for the large majority of failures.',
      },
      {
        q: 'How long do adhesive strips last in storage?',
        a: 'It depends entirely on conditions. Stored cool, dry and dark, they stay reliable for a long time; stored warm or in daylight they degrade noticeably. Rotate stock and test a sample from any carton that has been sitting.',
      },
      {
        q: 'Can a sealed poly mailer be opened and resealed?',
        a: 'Only if it was specified with a second adhesive strip. A single-strip mailer seals once — reopening it destroys the bond and it cannot be restored with the original adhesive.',
      },
    ],
    related: [
      {
        href: '/self-seal-poly-mailers/',
        label: 'Self-seal mailers',
        reason: 'The closure options as a product decision.',
      },
      {
        href: '/custom-order-policy/',
        label: 'Reporting a problem',
        reason: 'What to do if a batch genuinely does not seal.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'protective-mailer-comparison',
    name: 'the protection reference',
    h1: 'Protective Mailer Comparison',
    title: 'Protective Mailer Comparison | Matching Contents',
    description:
      'A reference table matching contents to protective construction, with the failure each type prevents and the ones no mailer can prevent at all.',
    summary: 'A lookup table from contents to construction, and an honest list of what mailers cannot do.',
    intro: [
      'This is a reference rather than an argument. Find your contents, read across, and you get a construction and the reasoning behind it.',
      'It also lists what no flexible mailer can do, because a substantial share of damage problems are solved by moving to a carton rather than by choosing a different lining.',
    ],
    plan: {
      intent: 'Match contents to a protective mailer construction.',
      audience: 'Anyone diagnosing a damage problem or specifying protection for a new product.',
      problem: 'Cushioning is chosen generically, without matching it to the failure mode.',
      angle: 'A reference table, plus an explicit list of what flexible packaging cannot protect against.',
      primaryKeyword: 'protective mailer comparison',
      supportingKeywords: ['cushioned mailer types', 'which padded mailer'],
      nearestPage: '/protective-mailers/',
      boundary:
        'The collection routes you to products. This reference is the lookup table behind the decision.',
    },
    blocks: [
      {
        kind: 'compare',
        heading: 'Contents to construction',
        intro:
          'Assumes a mailer sized so contents cannot move. If they can move, fix that first — it will change the answer.',
        caption: 'Common contents matched to a protective construction.',
        columns: ['Contents', 'Construction', 'Why'],
        rows: [
          ['Soft goods, clothing, textiles', 'Plain film', 'Nothing to protect against beyond weather'],
          ['Boxed cosmetics, glass in a carton', 'Bubble lining, film outer', 'Impact absorption plus moisture resistance'],
          ['Jewelry, plated or polished items', 'Foam lining', 'The risk is surface abrasion, not impact'],
          ['Books and printed matter', 'Bubble lining, or plain film plus a board', 'Corner damage and creasing'],
          ['Small electronics, cables', 'Plain film, sized close', 'Hard-wearing items; moisture is the real risk'],
          ['Boxed electronics accessories', 'Bubble lining', 'The carton is what needs protecting'],
          ['Ceramics and glassware', 'Boxed first, then bubble lining', 'Cushioning alone will not protect an exposed edge'],
          ['Screens, lenses, optical items', 'Foam lining, boxed', 'Surface protection plus impact'],
          ['Anything crush-sensitive', 'A rigid carton', 'No flexible bag resists a load pressed on top of it'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'What no mailer can do',
        intro:
          'Four limits that are worth accepting early rather than discovering across three specification changes.',
        items: [
          {
            term: 'Resist crushing',
            detail:
              'A flexible bag has no structure. Load applied on top goes straight to the contents whatever the lining.',
          },
          {
            term: 'Protect an unsupported edge or corner',
            detail:
              'Cushioning works across a face. A protruding corner concentrates force where the lining is thinnest.',
          },
          {
            term: 'Stop contents moving in an oversized bag',
            detail:
              'Protection depends on fit. A small item in a large cushioned mailer still accelerates before it hits the end.',
          },
          {
            term: 'Survive immersion',
            detail:
              'A film outer resists rain and splashing. It is not sealed, and water enters at the closure.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Diagnosing from the damage',
        intro:
          'Look at the failed items rather than at the packaging. The way they broke names the cause.',
        steps: [
          {
            title: 'Cracked or broken',
            detail: 'Impact. Bubble lining, and box the item first if it is genuinely fragile.',
          },
          {
            title: 'Scratched or scuffed',
            detail: 'Abrasion. Foam lining, or a tighter fit so nothing rubs.',
          },
          {
            title: 'Crushed or deformed',
            detail: 'Load. A carton. No amount of lining changes this one.',
          },
          {
            title: 'Damage only at corners',
            detail: 'Concentrated force. Box first, then cushion.',
          },
          {
            title: 'Inconsistent damage, contents rattling',
            detail: 'Movement. Size down, or fill the space.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Cushioning is not free',
        before:
          'A cushioned mailer costs more per unit, weighs more, and produces a larger outer parcel for the same interior space — which can move a shipment into a different pricing band. Before adding protection across a whole flow, check whether the damage is concentrated in one product type, because it usually is, and protecting only that line costs a fraction of protecting everything. The economics of that decision are worked through on the ',
        link: { href: '/blog/when-to-use-bubble-lined-poly-mailers/', anchor: 'article on when cushioning pays for itself' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Which protective mailer suits fragile items?',
        a: 'There is no single answer, because impact, abrasion and crushing are different failures. Bubble handles impact, foam handles surface damage, and neither resists a load pressing down — that needs a rigid carton.',
      },
      {
        q: 'Do I still need to box items inside a padded mailer?',
        a: 'For anything genuinely breakable, yes. Cushioning protects across a face but not an exposed corner, and a boxed item inside a cushioned mailer is far more reliable than either on its own.',
      },
      {
        q: 'Can I use a padded mailer instead of a box?',
        a: 'For soft goods and boxed items that are not crush-sensitive, usually yes, and it removes both carton weight and void fill. For anything that needs structural protection, a mailer cannot substitute for a carton.',
      },
    ],
    related: [
      {
        href: '/protective-mailers/',
        label: 'Protective range',
        reason: 'The products behind each construction in the table.',
      },
      {
        href: '/padded-poly-mailers/',
        label: 'Padded mailers',
        reason: 'Choosing between cushioning constructions in more depth.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'sustainable-mailer-terminology-guide',
    name: 'the terminology guide',
    h1: 'Sustainable Packaging Terminology',
    title: 'Sustainable Mailer Terminology | Reading the Claims',
    description:
      'Plain definitions of recycled, recyclable, compostable, biodegradable and degradable, and the questions that separate a real claim from a marketing one.',
    summary: 'What each term commits you to, and how to test a supplier claim against it.',
    intro: [
      'These words are used interchangeably in packaging and they are not interchangeable. Each commits you to a different statement, requires different evidence, and exposes you to different risk if you print it on a bag.',
      'This guide defines them plainly and gives you the questions to ask about each. It is written to be used against any supplier, including us.',
    ],
    plan: {
      intent: 'Understand sustainable packaging terminology.',
      audience: 'Marketing, sustainability and procurement leads writing or approving packaging copy.',
      problem: 'The terms are used loosely and printing the wrong one creates real exposure.',
      angle: 'Definitions plus the interrogation questions — usable against any supplier.',
      primaryKeyword: 'sustainable packaging terminology',
      supportingKeywords: [
        'compostable vs biodegradable',
        'recyclable vs recycled',
        'packaging claim definitions',
      ],
      nearestPage: '/sustainable-poly-mailers/',
      boundary:
        'The collection helps you pick a product. This guide defines the language before you make any claim about it.',
    },
    blocks: [
      {
        kind: 'bullets',
        heading: 'The terms, defined',
        intro:
          'Five words, five different statements. Read them as commitments rather than as adjectives.',
        items: [
          {
            term: 'Recycled content',
            detail:
              'A statement about where the material came from. It says nothing about what happens after use. Needs a feedstock type — post-consumer, post-industrial or blended — and a proportion, both evidenced.',
          },
          {
            term: 'Recyclable',
            detail:
              'A statement that the material can be collected and reprocessed. It depends on infrastructure available to your customer, not on the material alone. Flexible film is generally not accepted kerbside in the markets we serve.',
          },
          {
            term: 'Compostable',
            detail:
              'A statement that the material breaks down in a specific managed process. Industrial and home composting are assessed differently, and a material may meet one and not the other. Requires an assessment and a route the customer can actually reach.',
          },
          {
            term: 'Biodegradable',
            detail:
              'A statement that microorganisms will break the material down. Meaningless without named conditions, a completeness measure and a timeframe, because almost everything biodegrades eventually under some conditions.',
          },
          {
            term: 'Degradable or oxo-degradable',
            detail:
              'A statement that the material fragments. Fragmentation is not biodegradation, and additive-based fragmentation has attracted specific regulatory concern in several markets.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'What each claim requires you to hold',
        intro:
          'Before printing any of these, check you could produce the middle column if asked.',
        caption: 'Environmental claims and the evidence each requires.',
        columns: ['Claim', 'Evidence needed', 'Who it depends on'],
        rows: [
          [
            'Contains recycled content',
            'Feedstock type, proportion, supplier declaration or certificate',
            'The film supplier',
          ],
          [
            'Recyclable',
            'Evidence the collection route exists where your customers are',
            'Local waste infrastructure',
          ],
          [
            'Compostable',
            'Assessment against a defined process, plus an available facility',
            'Both the supplier and local infrastructure',
          ],
          [
            'Biodegradable',
            'Named conditions, completeness, timeframe and an assessment method',
            'The film supplier, comprehensively',
          ],
          [
            'Reduced material',
            'Before and after weights from your own operation',
            'Nobody — you can evidence this yourself',
          ],
        ],
        outro:
          'The last row is the only one you can substantiate without anyone else’s cooperation, which is a good argument for making it your first sustainability claim rather than your last.',
      },
      {
        kind: 'steps',
        heading: 'Interrogating a supplier claim',
        intro:
          'Five questions. A supplier who can answer all five has done the work; one who cannot has written marketing copy.',
        steps: [
          {
            title: 'Which specific film does this apply to?',
            detail:
              'Not the range, not the website — the film that will be produced for my order.',
          },
          {
            title: 'What is the number, and is it a minimum or a target?',
            detail:
              'A proportion tied to my order, in writing on the quotation.',
          },
          {
            title: 'Which document supports it?',
            detail:
              'A declaration, a mill certificate or a third-party assessment. Ask to see it rather than be told it exists.',
          },
          {
            title: 'Under what conditions, and over what period?',
            detail:
              'For any degradation or composting claim. Without conditions, a timeframe means nothing.',
          },
          {
            title: 'Does it hold on reorder?',
            detail:
              'Content and material availability move between batches. Find out whether this is guaranteed or quoted per run.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Why the wording you print is your risk',
        paragraphs: [
          'A supplier can tell you what a film is. Only you can decide what to print on it, and once printed it becomes a statement you are making to your own customers in your own market.',
          'Advertising and consumer-protection regimes across the markets we serve — the United States, United Kingdom, Canada and Australia — all publish guidance on environmental claims, and unqualified degradation language is among the most frequently challenged. Guidance differs between them, which matters if the same printed bag ships to more than one.',
          'The practical protection is to print only what you could evidence if asked, to qualify claims rather than leaving them open, and to give customers an instruction that works where they actually live rather than a symbol that implies a collection which may not exist for them.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Where to start if you want a real reduction',
        before:
          'If the objective is a smaller environmental footprint rather than a word on a bag, material substitution is rarely the highest-leverage change available. Right-sizing so parcels stop shipping air, cutting the number of components per pack, and specifying a resealable closure so returns need no second bag all produce measurable results you can evidence from your own data. Our position on which claims we will and will not make is set out on the ',
        link: { href: '/sustainability/', anchor: 'sustainability policy page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between biodegradable and compostable?',
        a: 'Compostable refers to breakdown in a specific managed process with conditions attached and an assessment behind it. Biodegradable, used unqualified, refers to breakdown by microorganisms under unstated conditions over an unstated period. The first can be verified; the second cannot.',
      },
      {
        q: 'Does recycled content mean a mailer is recyclable?',
        a: 'No, and conflating the two is the most common error in this area. Recycled content is about where the material came from; recyclability is about whether your customer can get it collected. A mailer can have high recycled content and still have nowhere to go afterwards.',
      },
      {
        q: 'Can I print a recycling symbol on my packaging?',
        a: 'Only where it is accurate for the material and permitted in the market you sell into, and where a collection route genuinely exists for your customers. A symbol implying a collection that is not available causes more harm than no symbol.',
      },
      {
        q: 'Which claim is safest to make?',
        a: 'One about your own operation — reduced material per parcel, fewer components, a resealable bag that removes a returns consumable. You can evidence those from your own data without relying on anyone else’s documentation.',
      },
    ],
    related: [
      {
        href: '/sustainable-poly-mailers/',
        label: 'Sustainable options',
        reason: 'Choosing between the three product routes once the terms are clear.',
      },
      {
        href: '/blog/recycled-vs-compostable-vs-biodegradable-mailers/',
        label: 'Comparing the three routes',
        reason: 'A longer read on how these terms are used and misused in practice.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'international-ordering-guide',
    name: 'the international ordering guide',
    h1: 'Ordering Mailers Internationally',
    title: 'International Ordering Guide | US, UK, Canada, Australia',
    description:
      'What changes when a packaging order ships to the US, UK, Canada or Australia — currency, documentation, availability and the questions to settle first.',
    summary: 'What actually differs between the four markets, and what to settle before ordering.',
    intro: [
      'The product does not change between markets. Almost everything around it does: the currency you are quoted in, the documentation a shipment needs, which films and colours are available, and how a delivery reaches a business address in one country versus another.',
      'This guide sets out what varies and what to confirm before placing an order into a market you have not ordered into before.',
    ],
    plan: {
      intent: 'Understand what changes when ordering packaging internationally.',
      audience: 'Businesses ordering into more than one market, or into a new one.',
      problem: 'Assuming an order into a second market works the same as the first.',
      angle: 'What varies between the four served markets specifically, rather than generic export advice.',
      primaryKeyword: 'ordering packaging internationally',
      supportingKeywords: ['international packaging supply', 'multi market packaging order'],
      nearestPage: '/shipping-and-delivery/',
      boundary:
        'The shipping page describes our process. This guide is written from the buyer’s side of the transaction.',
    },
    blocks: [
      {
        kind: 'bullets',
        heading: 'What changes between markets',
        intro:
          'Five variables. The first two are obvious, the last three catch people out.',
        items: [
          {
            term: 'Currency',
            detail:
              'Quotations are issued in the currency of the destination market, so comparing two markets means comparing two currencies rather than one converted figure.',
          },
          {
            term: 'Import documentation and charges',
            detail:
              'Requirements differ by destination and by shipping arrangement. This is confirmed per order rather than generalised.',
          },
          {
            term: 'Film and colour availability',
            detail:
              'Not every film, finish, colour or material is available for every market. This is checked before you order, not after.',
          },
          {
            term: 'Delivery arrangements',
            detail:
              'Reaching a fulfilment centre in one market and a small business address in another are different logistics problems with different requirements.',
          },
          {
            term: 'What you can print',
            detail:
              'Environmental and performance claims are governed differently in each market. The same printed bag may not be compliant everywhere it ships.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'Ordering into a new market',
        intro:
          'Six steps, in order. The first two prevent most of the problems in the rest.',
        steps: [
          {
            title: 'Confirm the exact delivery address and its type',
            detail:
              'Business premises, residential address or fulfilment centre. Fulfilment centres often have booking, labelling and palletisation requirements that must be built into the order.',
          },
          {
            title: 'Check material availability for that market',
            detail:
              'Ask before you design anything, because a colour or film that is unavailable changes the specification.',
          },
          {
            title: 'Settle documentation and who handles it',
            detail:
              'Including who is responsible for any charges on arrival. Get this in writing rather than assuming.',
          },
          {
            title: 'Review printed wording against local rules',
            detail:
              'Particularly any environmental claim. What is acceptable in one market may not be in another.',
          },
          {
            title: 'Agree the schedule in writing',
            detail:
              'Work backwards from the date stock must be on the bench, not forwards from the order date.',
          },
          {
            title: 'Order one market first if you can',
            detail:
              'A first shipment into a new market teaches you things a quotation cannot. Learn them on a smaller order.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'Running one specification across several markets',
        intro:
          'Most multi-market businesses want one bag everywhere. Sometimes that works and sometimes it costs more than it saves.',
        caption: 'A single shared specification compared with per-market specifications.',
        columns: ['', 'One specification', 'Per-market specifications'],
        rows: [
          ['Artwork setups', 'One', 'One per market'],
          ['Printed claims', 'Must satisfy the strictest market', 'Tailored to each'],
          ['Material availability', 'Limited to what all markets can supply', 'Widest choice in each'],
          ['Stock management', 'Simple', 'More lines to track'],
          ['Unit cost', 'Better through shared setup', 'Higher, unless volumes are large'],
        ],
        outro:
          'A single specification usually wins for a business shipping similar volumes everywhere. Where one market dominates, it is often cheaper to optimise for that one and treat the others separately.',
      },
      {
        kind: 'linked-prose',
        heading: 'A note on language and spelling',
        before:
          'If one printed design ships to several markets, spelling is a small thing that customers notice. Colour and color, personalised and personalized, and the way sizes are expressed all differ between the markets we serve. Decide deliberately which convention the printed bag uses rather than letting a designer choose by default. Sizes are the more consequential version of the same problem, and how they are quoted is covered on the ',
        link: { href: '/resources/mailer-measurement-guide/', anchor: 'measurement guide' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Which countries do you supply?',
        a: 'The United States, United Kingdom, Canada and Australia. Orders are produced to order and shipped to the address you give us; we do not hold stock locally in any of them.',
      },
      {
        q: 'Can I order the same specification for several markets?',
        a: 'Usually, and it is often the economical choice because setup is shared. Two things to check first: that the material is available for every destination, and that any printed claim satisfies the strictest of the markets it will ship to.',
      },
      {
        q: 'Who handles import charges?',
        a: 'This is set out on your quotation rather than assumed, because it depends on the destination and the shipping arrangement agreed. Ask before ordering if it affects your budgeting.',
      },
      {
        q: 'Will the same colour match across markets?',
        a: 'Not automatically, because the available film can differ. If a colour has to match across markets, say so at quotation stage so it can be checked rather than discovered on delivery.',
      },
    ],
    related: [
      {
        href: '/shipping-and-delivery/',
        label: 'Shipping and delivery',
        reason: 'What we confirm on your quotation for each market.',
      },
      {
        href: '/locations/',
        label: 'Markets we serve',
        reason: 'Commercial context for each country and region.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'custom-mailer-ordering-checklist',
    name: 'the ordering checklist',
    h1: 'Custom Mailer Ordering Checklist',
    title: 'Custom Mailer Ordering Checklist | Before You Ask',
    description:
      'Eleven decisions to settle before requesting a quotation for custom mailers, so the first price you receive is the one you can actually act on.',
    summary: 'Eleven decisions to settle before you ask anyone for a price.',
    intro: [
      'A vague enquiry produces a vague quotation, and a vague quotation produces three more emails before anyone can act on anything. Working through this list first means the first price you receive is a real one.',
      'It is also useful as a comparison tool: send the same eleven answers to several suppliers and you get quotations you can actually put side by side.',
    ],
    plan: {
      intent: 'Prepare properly before requesting a packaging quotation.',
      audience: 'Buyers about to approach suppliers for the first time.',
      problem: 'Incomplete briefs produce quotations that cannot be compared or acted on.',
      angle: 'A prepare-before-you-ask checklist, usable across suppliers.',
      primaryKeyword: 'custom mailer ordering checklist',
      supportingKeywords: ['packaging quote checklist', 'what to ask a packaging supplier'],
      nearestPage: '/how-it-works/',
      boundary:
        'The how-it-works page describes our process. This checklist is what you do before contacting anyone.',
    },
    blocks: [
      {
        kind: 'steps',
        heading: 'The eleven decisions',
        intro:
          'Answer these and any competent supplier can quote you accurately first time.',
        steps: [
          {
            title: 'What goes in the parcel',
            detail:
              'The product and everything with it — card, tissue, returns slip, sample. Size against the complete order.',
          },
          {
            title: 'How heavy a full parcel is',
            detail:
              'Weigh a real one. It affects film weight and it affects which shipping band you land in.',
          },
          {
            title: 'How many you need, and over what period',
            detail:
              'A monthly rate is more useful than a total, because it tells a supplier how to structure the order.',
          },
          {
            title: 'How many sizes',
            detail:
              'One, two or three. Deciding this before you ask stops a quotation covering the wrong range.',
          },
          {
            title: 'Printed or plain',
            detail:
              'And if printed, whether logo, partial or full coverage, and one side or two.',
          },
          {
            title: 'Base colour',
            detail:
              'Stock colour or a match to a reference. If matched, have the reference ready.',
          },
          {
            title: 'Finish',
            detail: 'Matte or gloss. It changes how printed colour reads, so decide it with the colour.',
          },
          {
            title: 'Closure',
            detail:
              'Single strip, double strip for returns, or a tear feature. Driven by your return rate.',
          },
          {
            title: 'Whether anything needs protecting',
            detail:
              'And specifically what is failing now, if something is. Impact, abrasion and crushing need different answers.',
          },
          {
            title: 'Which market it ships to',
            detail:
              'And the delivery address type, because a fulfilment centre has requirements a business address does not.',
          },
          {
            title: 'When it must be on the bench',
            detail:
              'A date, not a duration. Everything else works backwards from it.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'What to have ready before you send the enquiry',
        intro:
          'Four attachments that remove a round of correspondence.',
        items: [
          {
            term: 'A photograph of a packed parcel',
            detail:
              'It tells a supplier more about your requirement in one image than a paragraph of description.',
          },
          {
            term: 'Your artwork, if you have it',
            detail:
              'Even a rough version. It lets a supplier flag problems before you commission the final file.',
          },
          {
            term: 'A colour reference',
            detail:
              'A physical swatch, a previous sample or a defined value. Not a screenshot.',
          },
          {
            term: 'Your delivery address and its type',
            detail:
              'Business, residential or fulfilment centre. The last one changes the shipping requirement.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Comparing the quotations you get back',
        paragraphs: [
          'Once quotations arrive, check they are describing the same thing before comparing the prices. The most common differences are film weight, whether shipping is included, whether the quantity is the same, and whether the size is measured the same way.',
          'Then look at what each quotation states rather than implies. A quotation that names the film, the closure, the tolerance on quantity and the proof process is a supplier who has thought about your order. One that lists a price against a product name has not.',
          'Finally, ask each supplier the same question about something they cannot easily answer — recycled content documentation is a good one. How they handle a question they cannot answer well tells you more than how they handle the ones they can.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Do this part first',
        before:
          'If only one item on the list gets proper attention, make it the first. Almost every expensive packaging mistake traces back to a size chosen from a chart rather than from a packed sample, and it is the one decision that constrains everything downstream — artwork is drawn to a panel, film weight is chosen against a load, and shipping bands are decided by a packed parcel. The method is set out in the ',
        link: { href: '/size-guide/', anchor: 'size selection framework' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What information does a packaging supplier need to quote?',
        a: 'At minimum: what goes in the parcel, roughly how many you need over what period, whether it is printed, and which market it ships to. The eleven items above cover everything needed for a quotation you can act on without follow-up.',
      },
      {
        q: 'How do I compare packaging quotations fairly?',
        a: 'Check they describe the same specification first — film weight, quantity, whether shipping is included, and how the size is measured. Two prices are only comparable once you know they are for the same thing.',
      },
      {
        q: 'Should I get several quotations?',
        a: 'For a first order, yes, and send all of them the same brief. Identical inputs are what make the outputs comparable, and the differences in how suppliers respond tell you as much as the prices do.',
      },
    ],
    related: [
      {
        href: '/how-it-works/',
        label: 'Our ordering process',
        reason: 'What happens after you send the enquiry.',
      },
      {
        href: '/request-a-quote/',
        label: 'Request a quotation',
        reason: 'The form, once you have the answers above.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'mailer-measurement-guide',
    name: 'the measurement guide',
    h1: 'How to Measure for a Mailer',
    title: 'Mailer Measurement Guide | Measuring Your Product',
    description:
      'How to measure a packed product for a mailer — the three dimensions that matter, how to handle lofty items, and why suppliers measure bags differently.',
    summary: 'The three measurements that matter, and how to take them on an awkward product.',
    intro: [
      'Measuring for a mailer is not measuring a product. It is measuring what the product becomes once it has been folded, wrapped and packed with everything that travels alongside it.',
      'This guide covers the three dimensions to take, how to take them on items that resist being measured, and why two suppliers quoting the same size can be describing different bags.',
    ],
    plan: {
      intent: 'Measure a product correctly for packaging.',
      audience: 'Anyone specifying a size, especially for an awkward or lofty product.',
      problem: 'Products are measured flat, which does not predict what will fit.',
      angle: 'Practical measurement technique, including loft and compression.',
      primaryKeyword: 'how to measure for a poly mailer',
      supportingKeywords: ['measuring packaging size', 'packed product dimensions'],
      nearestPage: '/resources/poly-mailer-size-guide/',
      boundary:
        'The size reference is a lookup table. This guide is how to get the numbers to look up.',
    },
    blocks: [
      {
        kind: 'steps',
        heading: 'Taking the three measurements',
        intro:
          'Do this on a packed parcel, not on a product. Have the person who packs for you do the packing.',
        steps: [
          {
            title: 'Pack a complete order',
            detail:
              'Product, card, tissue, returns slip, everything. Then fold it the way your team folds at working pace.',
          },
          {
            title: 'Measure the width at the widest point',
            detail:
              'Across the packed bundle, not across the flat item. Folds add width that flat measurements miss.',
          },
          {
            title: 'Measure the length at the longest point',
            detail:
              'Including anything that will not compress, such as a rigid box or a card that runs the full length.',
          },
          {
            title: 'Measure the depth under light pressure',
            detail:
              'Press down as a packer would while sealing, and measure there. Measuring an uncompressed lofty item overstates what you need.',
          },
          {
            title: 'Add an allowance for the closure',
            detail:
              'The contents must sit below the adhesive strip. Leave room for the flap to fold onto clean film.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'Awkward products, and how to handle them',
        intro:
          'Five product types that resist straightforward measurement.',
        items: [
          {
            term: 'Lofty knitwear',
            detail:
              'Measure compressed rather than relaxed, but not squashed flat. Compressed under a hand is the realistic figure.',
          },
          {
            term: 'Irregular soft goods',
            detail:
              'Measure the smallest rectangle the packed item fits inside. That rectangle is what the bag has to accommodate.',
          },
          {
            term: 'Multiple items of different shapes',
            detail:
              'Pack them as they will actually be packed and measure the bundle. Measuring items individually and adding is always wrong.',
          },
          {
            term: 'Rigid boxes',
            detail:
              'Straightforward to measure and unforgiving in use. Size close, because a box that can move will damage its own corners.',
          },
          {
            term: 'Anything with a protruding part',
            detail:
              'A handle, a strap, a spout. Measure to the extremity, and consider whether it should be tucked or taped before packing.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Why suppliers quote sizes differently',
        standfirst: 'Two identical numbers can describe different bags.',
        paragraphs: [
          'Some suppliers quote the usable area of the bag, with the closure flap sitting above it. Others quote the overall dimensions including the flap. The difference can be significant, and neither convention is wrong — they are just different.',
          'There is a second variation: some quote nominal sizes rounded to a convenient figure, so a bag described as 12x15 and one described as 12x15.5 may be the same product from different suppliers.',
          'The practical consequence is that comparing two numbers is not comparing two bags. Ask which measurement is being quoted, or better, compare physical samples — which takes ten minutes and removes the ambiguity entirely.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'What to do with the numbers',
        before:
          'Once you have three measurements for a packed parcel, you have what you need to choose a size and to check what a change would do to your shipping costs. Weigh the same parcel while you have it packed, because weight and depth together decide which pricing band it falls into, and a size change can move it in either direction. The sizes those measurements map onto are set out in the ',
        link: { href: '/resources/poly-mailer-size-guide/', anchor: 'size reference table' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Should I measure my product or my packed parcel?',
        a: 'The packed parcel, always. A flat garment measurement tells you almost nothing about what it becomes once folded with a card and a returns slip, and that folded bundle is what has to fit.',
      },
      {
        q: 'How do I measure something lofty like a knitted jumper?',
        a: 'Compress it under a hand the way a packer would while sealing, and measure there. Measuring it relaxed overstates the size you need; measuring it squashed flat understates it.',
      },
      {
        q: 'Do mailer sizes include the flap?',
        a: 'It depends on the supplier. Some quote the usable area with the flap above it, others quote overall dimensions. Ask which convention applies, or compare physical samples rather than numbers.',
      },
    ],
    related: [
      {
        href: '/resources/poly-mailer-size-guide/',
        label: 'Size reference',
        reason: 'Match your measurements to a size.',
      },
      {
        href: '/samples/',
        label: 'Samples',
        reason: 'The reliable way to confirm a measurement translates into a fit.',
      },
    ],
  },
];

export const resourceBySlug = new Map(resources.map((r) => [r.slug, r]));
