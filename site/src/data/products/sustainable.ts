import type { ProductPage } from '../types';

/**
 * Sustainability family — three pages, three genuinely different subjects.
 *
 *   Recycled     → feedstock. Where the material came from.
 *   Compostable  → end-of-life route. What has to exist for the word to mean anything.
 *   Biodegradable→ terminology and claim risk. Why the word is the least defined of the three.
 *
 * None of these pages states a percentage, a certification, a standard number or
 * a breakdown period, because none was supplied. Each says so in its own words
 * rather than repeating a shared disclaimer, and each explains what to ask for.
 */

export const sustainableProducts: ProductPage[] = [
  /* ===================================================================== */
  {
    slug: 'recycled-poly-mailers',
    name: 'Recycled Poly Mailers',
    h1: 'Recycled Poly Mailers',
    title: 'Recycled Poly Mailers | Recycled Content Film',
    description:
      'Poly mailers made with recycled content. What recycled feedstock means, why we do not publish a percentage, and what to ask a supplier for.',
    summary:
      'Recycled feedstock — where the film came from, and how to verify what you are told about it.',
    intro: [
      'Recycled content is a question about the beginning of a material’s life, not the end of it. It asks what the film was made from: virgin polymer, post-industrial offcuts recovered from manufacturing, post-consumer material recovered after use, or a blend.',
      'That distinction matters commercially, because the three feedstocks carry very different environmental arguments and very different prices, and because the word "recycled" on its own does not tell a buyer which one they are getting.',
      'We can quote mailers produced with recycled content. What we will not do is publish a percentage on a web page. The available content varies by film, by production batch and by market, and a number stated here would be a number we could not stand behind for your specific order. Below is what we will confirm instead.',
    ],
    plan: {
      intent: 'Source poly mailers made with recycled material.',
      audience:
        'Procurement and sustainability leads who have to substantiate a supplier claim internally or to a customer.',
      problem:
        'Suppliers publish recycled percentages that cannot be traced back to the film actually delivered.',
      angle:
        'Feedstock literacy and verification — the questions that separate a substantiated claim from a marketing one.',
      primaryKeyword: 'recycled poly mailers',
      supportingKeywords: [
        'poly mailers recyclable',
        'recycled content mailers',
        'post-consumer recycled mailers',
      ],
      nearestPage: '/compostable-poly-mailers/',
      boundary:
        'Recycled is about what the film is made from. Compostable is about where it can go afterwards. Different questions, different evidence.',
    },
    images: [
      {
        file: 'grey-mailer-printed-with-recycled-content-artwork.jpg',
        alt: 'Grey mailer packed and sealed, printed along one edge with a recycled-content message',
      },
      {
        file: 'white-mailer-printed-with-recycled-materials-artwork.jpg',
        alt: 'White mailer with a printed vertical line of text down the right-hand edge',
      },
      {
        file: 'white-mailer-holding-folded-tie-dye-garment.jpg',
        alt: 'White mailer opened at the top with a folded tie-dye garment part way out',
      },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'The three feedstocks, and why the difference matters',
        intro:
          'When a supplier says "recycled", one of these is what they mean. Ask which.',
        items: [
          {
            term: 'Post-consumer recycled',
            detail:
              'Material recovered after it has been used and discarded by a household or business. This is the feedstock that diverts waste from disposal, and it is the one most buyers assume they are getting.',
          },
          {
            term: 'Post-industrial recycled',
            detail:
              'Offcuts, trim and rejected material recovered inside a manufacturing process before it ever reached a customer. Legitimate to recycle, but it was never going to landfill, so the environmental argument is weaker.',
          },
          {
            term: 'Blended content',
            detail:
              'A proportion of recycled material combined with virgin polymer, which is the usual arrangement because recycled feedstock alone affects how the film runs and how it performs.',
          },
        ],
        outro:
          'A claim that names the feedstock type and the proportion, and can be traced to a document, is worth something. A claim that says only "recycled" is not.',
      },
      {
        kind: 'prose',
        heading: 'Why we do not publish a percentage',
        standfirst: 'A number on a web page is not the number in your carton.',
        paragraphs: [
          'Recycled content in poly film varies with the feedstock available at the time of production. The proportion achievable in one batch is not necessarily achievable in the next, and it differs between films and between the markets we supply.',
          'Publishing a single figure would mean stating something we could not guarantee for your specific order, in a category where regulators in every market we serve treat unsupported environmental claims seriously.',
          'So we do it the other way round. You tell us what you need to be able to say. We confirm what the film available for your order can actually support, in writing, with whatever documentation the supplier of that film provides. If we cannot support the claim you need, we say so before you order.',
        ],
      },
      {
        kind: 'steps',
        heading: 'What to ask any supplier for',
        intro:
          'This is the sequence a procurement team should run, with us or with anyone else. It separates a substantiated claim from a slogan.',
        steps: [
          {
            title: 'Ask which feedstock, not whether it is recycled',
            detail:
              'Post-consumer, post-industrial or blended. If a supplier is vague at this question, the rest of the answers will be vague too.',
          },
          {
            title: 'Ask for the proportion in writing, for your order',
            detail:
              'Not a range on a website. A figure tied to the film being quoted, on the quotation itself.',
          },
          {
            title: 'Ask what document supports it',
            detail:
              'A supplier declaration, a mill certificate or a third-party certification. Ask to see it rather than being told it exists.',
          },
          {
            title: 'Ask whether it holds on reorder',
            detail:
              'Content can move between batches. Find out whether the figure is guaranteed on repeat orders or quoted per run.',
          },
          {
            title: 'Check what you plan to print against it',
            detail:
              'The wording you print on the bag is a claim you are making to your own customers, and you carry that responsibility.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Recycled content and recyclability are not the same thing',
        paragraphs: [
          'These two get conflated constantly, including by suppliers. Recycled content is about where the material came from. Recyclability is about whether a customer can get it collected and reprocessed where they live.',
          'A mailer can have high recycled content and still be difficult for a household to recycle, because flexible plastic film is not accepted in most household kerbside collections. In several of the markets we serve it is instead collected at supermarket or retail drop-off points, and availability varies by area.',
          'If recyclability is what your customers actually care about, the honest thing to print is where the film can be taken, not a general symbol that implies a collection which may not exist for them.',
        ],
      },
      {
        kind: 'specs',
        heading: 'What we confirm on your quotation',
        intro:
          'These are the lines we will put in writing. Anything not listed here is something we will not assert.',
        rows: [
          {
            label: 'Feedstock type',
            options: ['Post-consumer', 'Post-industrial', 'Blended', 'Virgin'],
            note: 'Named explicitly on the quotation rather than described as recycled in general.',
          },
          {
            label: 'Supporting documentation',
            options: ['Supplier declaration', 'Third-party certification where available'],
            note: 'Provided on request before you order, not after.',
          },
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Recycled-content films can behave differently, so specification is checked against your contents.',
          },
          {
            label: 'Colour',
            options: ['Natural or grey', 'Stock colour', 'Matched colour where achievable'],
            note: 'Recycled feedstock limits how pale or how precisely matched a film can be.',
          },
          {
            label: 'Print',
            options: ['Unprinted', 'One side', 'Both sides'],
            note: 'Any environmental wording you print is your claim to substantiate in your market.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Choosing between the sustainable options',
        before:
          'Recycled content is one of three routes brands consider, and they are not interchangeable — they answer different questions and suit different customer promises. Which one fits depends on what you can honestly say and what your customers can actually do with the packaging afterwards. The distinctions, in plain terms, are set out in the ',
        link: {
          href: '/resources/sustainable-mailer-terminology-guide/',
          anchor: 'guide to sustainable packaging terminology',
        },
        after: ', which is written to be read before you brief a designer.',
      },
    ],
    faqs: [
      {
        q: 'What percentage of recycled content is in your mailers?',
        a: 'We do not publish a figure, because the content achievable varies by film, by batch and by market. We confirm the feedstock type and the proportion in writing on your quotation for the specific film being supplied, with the supporting documentation available before you order.',
      },
      {
        q: 'Are recycled poly mailers recyclable after use?',
        a: 'Recycled content and recyclability are separate questions. Flexible film is generally not accepted in household kerbside collections in the markets we serve, and is instead collected at store drop-off points where those exist. Availability varies by area, so check what applies where your customers live before printing any disposal instruction.',
      },
      {
        q: 'Is recycled film weaker than virgin film?',
        a: 'It can behave differently, which is why we check the specification against what you actually ship rather than substituting like for like. Where a recycled film is not suited to your contents we will tell you, rather than supplying something that will fail.',
      },
      {
        q: 'Can I print a recycled logo or symbol on the bag?',
        a: 'Only if it is substantiated for the film supplied and permitted in the market you sell into. We will not print a certification mark without documentation. Wording you supply is a claim you are making to your own customers, and the responsibility for it sits with you.',
      },
      {
        q: 'Does recycled content cost more?',
        a: 'Usually, and the premium varies with feedstock availability. We quote it against your specific order rather than applying a general uplift, so you can see what the choice actually costs at your volume.',
      },
    ],
    related: [
      {
        href: '/compostable-poly-mailers/',
        label: 'Compostable Poly Mailers',
        reason: 'The end-of-life route, and what has to exist for it to be a real option.',
      },
      {
        href: '/sustainable-poly-mailers/',
        label: 'Sustainable mailer options',
        reason: 'Compare the three routes side by side before deciding.',
      },
      {
        href: '/sustainability/',
        label: 'Our position on claims',
        reason: 'What we will and will not state about environmental performance.',
      },
    ],
    cta: {
      heading: 'Ask about recycled-content film',
      body: 'Tell us what you need to be able to claim. We will confirm what the available film supports, in writing, with the documentation to back it.',
      buttonLabel: 'Request recycled film details',
    },
    whatsapp:
      'Hi, I am interested in recycled content poly mailers and the documentation available.',
    collections: ['sustainable-poly-mailers'],
    group: 'sustainable',
    quotePreset: 'Recycled Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'compostable-poly-mailers',
    name: 'Compostable Poly Mailers',
    h1: 'Compostable Poly Mailers',
    title: 'Compostable Poly Mailers | What the Word Requires',
    description:
      'Compostable mailers explained honestly. What composting actually requires, why the disposal route decides whether the claim is useful, and what to verify.',
    summary:
      'An end-of-life route that only works if the route exists — what to check before you promise it to customers.',
    intro: [
      'Compostable describes a disposal route, not a property of a bag sitting in a carton. A compostable mailer only composts if it reaches a process that can break it down, and whether that process is available to your customer is the question that decides whether the claim is worth anything.',
      'This is where most compostable packaging programmes go wrong. A brand buys the material, prints "compostable" on it, and the bag goes into a general waste bin because the customer had nowhere else to put it. The environmental benefit does not happen, and the brand has made a claim it cannot support.',
      'We can quote compostable-material mailers. Before you order them, this page sets out what has to be true for the choice to do what you want it to do.',
    ],
    plan: {
      intent: 'Source compostable poly mailers.',
      audience:
        'Brands making a customer-facing environmental promise who need it to hold up.',
      problem:
        'Compostable material is useless without an available disposal route, and most buyers do not check.',
      angle:
        'Treats compostability as a disposal-infrastructure question rather than a material specification.',
      primaryKeyword: 'compostable poly mailers',
      supportingKeywords: [
        'compostable mailers',
        'compostable shipping bags',
        'eco friendly poly mailers',
      ],
      nearestPage: '/biodegradable-poly-mailers/',
      boundary:
        'Compostable is a defined disposal route with a process behind it. Biodegradable is an unqualified term with no route attached — that page covers the language risk.',
    },
    images: [
      {
        file: 'green-mailer-printed-with-eco-message-artwork.png',
        alt: 'Green mailer printed with a customer’s environmental message across the front panel',
      },
      {
        file: 'white-mailer-holding-folded-tie-dye-garment.jpg',
        alt: 'Plain mailer opened to show a folded garment, with no environmental printing on the panel',
      },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'What composting actually requires',
        standfirst: 'It is a managed process, not a passive one.',
        paragraphs: [
          'Composting is a controlled biological process. It needs sustained temperature, moisture, oxygen and time, held within ranges that a bin at the bottom of a garden generally does not reach and a landfill site never does.',
          'That is why the industry distinguishes between industrial composting, which happens at a facility built to hold those conditions, and home composting, which happens in a domestic heap at much lower temperatures. A material that composts in one may not compost in the other, and the two are assessed against different criteria.',
          'We are not going to tell you which of those a film achieves. We were not supplied documentation to support either, and stating it without evidence is exactly the practice that has brought regulatory attention to this category. What we will do is confirm what the supplier of the specific film can evidence for your order.',
        ],
      },
      {
        kind: 'steps',
        heading: 'Before you commit to a compostable programme',
        intro:
          'Work through these in order. If you fail at step two, the material choice will not save the programme.',
        steps: [
          {
            title: 'Find out what your customers can actually access',
            detail:
              'Does food-waste or garden-waste collection in their area accept packaging? In much of the US, UK, Canada and Australia it does not, and acceptance varies street by street.',
          },
          {
            title: 'Decide what you will tell them to do with it',
            detail:
              'An instruction that leads nowhere is worse than no instruction. If there is no route, say what the honest alternative is.',
          },
          {
            title: 'Ask the supplier what is documented',
            detail:
              'Which standard, assessed by whom, for which conditions, and can you see the document. Ask before you order, not after.',
          },
          {
            title: 'Check what you are allowed to print',
            detail:
              'Environmental claims and certification marks are regulated in every market we serve. What you print is your claim to defend.',
          },
          {
            title: 'Test the material against your contents',
            detail:
              'Compostable films can behave differently in strength, seal performance and shelf life. Run a sample before you switch a whole flow.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'Compostable against the alternatives',
        intro:
          'Set against the other two routes, compostable has the strongest story and the hardest execution.',
        caption: 'How the three routes differ on the questions that decide a programme.',
        columns: ['', 'Compostable', 'Recycled content', 'Conventional film'],
        rows: [
          ['Question it answers', 'Where does it go after use', 'What was it made from', 'Neither'],
          ['Depends on customer infrastructure', 'Heavily', 'Somewhat', 'No'],
          ['Documentation to verify', 'Standard and assessment', 'Feedstock and proportion', 'None needed'],
          ['Typical cost position', 'Highest', 'Moderate premium', 'Lowest'],
          ['Shelf life considerations', 'Yes — order to use', 'Standard', 'Standard'],
          ['Risk of an unsupportable claim', 'High if unverified', 'Moderate', 'Low'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Practical differences to plan for',
        intro:
          'Compostable material changes more than the environmental story. These are the operational effects worth knowing.',
        items: [
          {
            term: 'Shelf life',
            detail:
              'Materials designed to break down do not sit in a warehouse indefinitely. Order to your usage rate rather than stockpiling.',
          },
          {
            term: 'Storage conditions',
            detail:
              'Heat and humidity affect these films more than conventional polyethylene. Cool, dry and dark matters more here.',
          },
          {
            term: 'Print behaviour',
            detail:
              'Ink adhesion and colour can differ from conventional film, so proof on the actual material rather than on a substitute.',
          },
          {
            term: 'Seal and strength characteristics',
            detail:
              'Not identical to conventional film. Test with your real contents and your real packing method before switching.',
          },
          {
            term: 'Cost',
            detail:
              'The highest of the three routes, which is worth confirming against a real quote before it is promised internally.',
          },
        ],
      },
      {
        kind: 'specs',
        heading: 'What we will confirm, and what we will not',
        intro:
          'Everything below is established for your specific order. We do not publish standards, marks or timescales on this page.',
        rows: [
          {
            label: 'Material available',
            options: ['Confirmed against current supply for your market'],
            note: 'Availability differs between the markets we serve, so it is checked at quotation.',
          },
          {
            label: 'Documentation',
            options: ['Supplier declaration', 'Third-party assessment where the supplier holds it'],
            note: 'Provided for review before you order. If none exists, we tell you that.',
          },
          {
            label: 'Disposal wording',
            options: ['No printed claim', 'Wording you supply and substantiate'],
            note: 'We will not print a certification mark without documentation supporting it.',
          },
          {
            label: 'Size and format',
            options: ['Standard sizes', 'Custom dimensions'],
            note: 'Format options can be narrower on these materials than on conventional film.',
          },
          {
            label: 'Print',
            options: ['Unprinted', 'One side', 'Both sides'],
            note: 'Proofed on the actual material, because ink behaves differently on it.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'If the infrastructure is not there',
        before:
          'When your customers have no route to a composting process, compostable packaging delivers a claim rather than an outcome, and there are better places to put the same budget. Reducing material, right-sizing so parcels stop shipping air, and choosing a film with verified recycled content all produce measurable results without depending on infrastructure you do not control. The feedstock route is set out on the ',
        link: { href: '/recycled-poly-mailers/', anchor: 'recycled content mailer page' },
        after: ', which is the more practical starting point for most operations.',
      },
    ],
    faqs: [
      {
        q: 'Are your compostable mailers home compostable or industrially compostable?',
        a: 'We do not state either, because we were not supplied documentation to support a claim in either direction. We confirm what the supplier of the specific film can evidence for your order, in writing, before you commit.',
      },
      {
        q: 'How long does a compostable mailer take to break down?',
        a: 'We do not publish a timescale. Any figure depends on the specific material and on the conditions it is exposed to, and stating one without evidence is a claim we are not willing to make.',
      },
      {
        q: 'Can my customers put a compostable mailer in their food waste bin?',
        a: 'That depends entirely on what their local collection accepts, and many do not accept packaging at all. Check what applies in the areas you ship to before printing any disposal instruction, because an instruction that leads nowhere causes more harm than none.',
      },
      {
        q: 'Can compostable mailers be printed?',
        a: 'Yes, and we proof on the actual material because ink adhesion and colour can differ from conventional film. We will not print certification marks or environmental claims without documentation supporting them.',
      },
      {
        q: 'Do compostable mailers have a shelf life?',
        a: 'Materials designed to break down are affected by heat, humidity and time in storage. Order to your usage rate, store cool, dry and out of direct light, and rotate stock rather than holding a large buffer.',
      },
    ],
    related: [
      {
        href: '/biodegradable-poly-mailers/',
        label: 'Biodegradable Poly Mailers',
        reason: 'Why the neighbouring term carries more claim risk than this one.',
      },
      {
        href: '/recycled-poly-mailers/',
        label: 'Recycled Poly Mailers',
        reason: 'The route that does not depend on customer-side infrastructure.',
      },
      {
        href: '/resources/sustainable-mailer-terminology-guide/',
        label: 'Terminology guide',
        reason: 'Definitions to settle before briefing a designer or writing packaging copy.',
      },
    ],
    cta: {
      heading: 'Talk through a compostable programme',
      body: 'Tell us which markets you ship to and what you want to be able to say. We will tell you what can be evidenced before anything is quoted.',
      buttonLabel: 'Ask about compostable material',
    },
    whatsapp:
      'Hi, I would like to discuss compostable poly mailers and what documentation is available.',
    collections: ['sustainable-poly-mailers'],
    group: 'sustainable',
    quotePreset: 'Compostable Poly Mailers',
  },

  /* ===================================================================== */
  {
    slug: 'biodegradable-poly-mailers',
    name: 'Biodegradable Poly Mailers',
    h1: 'Biodegradable Poly Mailers',
    title: 'Biodegradable Poly Mailers | Reading the Claim',
    description:
      'Biodegradable is the least defined term in packaging. What it does and does not mean, why we publish no timescale, and how to specify safely.',
    summary:
      'The least defined of the three terms, and the one that carries the most claim risk for the brand printing it.',
    intro: [
      'Of the three words brands ask for, biodegradable is the one that means the least. Almost everything biodegrades eventually. Without conditions and a timeframe attached, the word describes a property that every material has and tells a customer nothing about what will actually happen to the bag.',
      'That vagueness is why advertising regulators across the markets we serve have paid particular attention to it, and why unqualified degradation claims are among the most commonly challenged statements in packaging.',
      'We can quote mailers made from materials described by their suppliers as biodegradable. What this page does is set out what you would need to know before printing that word on a parcel, because the claim you print is the claim you have to defend.',
    ],
    plan: {
      intent: 'Source biodegradable poly mailers.',
      audience:
        'Marketing and packaging leads considering a degradation claim on customer-facing packaging.',
      problem:
        'The term is undefined without conditions, and printing it unqualified creates regulatory exposure.',
      angle:
        'Claim risk and how to specify without exposure — a subject neither of the neighbouring pages covers.',
      primaryKeyword: 'biodegradable poly mailers',
      supportingKeywords: [
        'biodegradable mailers',
        'biodegradable shipping bags',
        'degradable poly bags',
      ],
      nearestPage: '/compostable-poly-mailers/',
      boundary:
        'Compostable is a defined route with a process behind it. This page is about a term with no defined route, and what that means for the brand using it.',
    },
    images: [
      {
        file: 'green-mailer-printed-with-eco-message-artwork.png',
        alt: 'Green mailer photographed at an angle, carrying a printed environmental slogan from a customer’s own design',
      },
      {
        file: 'plain-white-poly-mailer-standing-filled.jpg',
        alt: 'Unprinted white mailer standing packed, with no environmental wording of any kind',
      },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Why the word on its own says nothing',
        paragraphs: [
          'Biodegradation is the breakdown of a material by microorganisms. Whether it happens, how completely, and over what period depends entirely on the conditions the material ends up in — temperature, moisture, oxygen, microbial activity.',
          'A material that degrades in a warm, wet, oxygen-rich environment may sit unchanged for decades in a landfill, where oxygen is scarce and conditions are stable. Both statements can be true of the same film.',
          'That is why a claim without conditions is not a claim. "Biodegradable" answers none of the questions a customer would actually ask: under what conditions, how completely, how long, and verified by whom.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'The four questions a defensible claim answers',
        intro:
          'If a supplier cannot answer all four for the specific film they are selling you, the claim is not one you should print.',
        items: [
          {
            term: 'Under what conditions',
            detail:
              'Industrial composting, home composting, soil, marine, landfill. These are radically different environments and a material rarely performs the same in all of them.',
          },
          {
            term: 'How completely',
            detail:
              'Whether the material breaks down fully or fragments into smaller pieces. Fragmentation is not degradation, and it is a specific concern with some additive-based films.',
          },
          {
            term: 'Over what period',
            detail:
              'A timeframe, tied to the conditions named above. A timeframe without conditions is meaningless.',
          },
          {
            term: 'Assessed by whom',
            detail:
              'Against which method, by which body, evidenced by which document. A supplier saying so is not an assessment.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Where we stand',
        standfirst: 'We were supplied no documentation, so we make no claim.',
        paragraphs: [
          'We publish no degradation timescale, no standard reference, no certification mark and no comparison against conventional film on this page. Not because the information is commercially sensitive, but because it was not supplied to us and we will not invent it.',
          'If you need to make a degradation claim, we will go to the supplier of the specific film for your order and ask the four questions above. You will get what they can evidence, in writing, before you commit. If the answer is that nothing is documented, you will get that answer too.',
          'That is a less appealing position than a page full of green symbols. It is also the only one that leaves you able to defend what you print.',
        ],
      },
      {
        kind: 'compare',
        heading: 'The three terms, plainly',
        intro:
          'Brands often use these interchangeably. They are not interchangeable, and a customer-facing claim has to use the right one.',
        caption: 'How the three sustainability terms differ in what they promise.',
        columns: ['Term', 'What it addresses', 'What must be true'],
        rows: [
          [
            'Recycled content',
            'What the film was made from',
            'A named feedstock and a documented proportion',
          ],
          [
            'Compostable',
            'A specific managed disposal process',
            'Assessment against a defined process, and access to that process',
          ],
          [
            'Biodegradable',
            'Breakdown by microorganisms, unspecified',
            'Named conditions, completeness, timeframe and an assessment',
          ],
        ],
        outro:
          'Of the three, recycled content is the easiest to substantiate and biodegradable the hardest. That should influence which one you build a customer promise around.',
      },
      {
        kind: 'specs',
        heading: 'How we quote this material',
        intro:
          'The specification is the same shape as any other order. What differs is what we will put in writing about the material.',
        rows: [
          {
            label: 'Material description',
            options: ['As described and evidenced by the film supplier'],
            note: 'Quoted as their description, attributed to them, not restated as our claim.',
          },
          {
            label: 'Documentation',
            options: ['Whatever the supplier holds', 'None, stated plainly if that is the case'],
            note: 'You see it before you order, either way.',
          },
          {
            label: 'Printed wording',
            options: ['No environmental claim', 'Qualified wording you supply and substantiate'],
            note: 'We will not print an unqualified degradation claim or a certification mark without evidence.',
          },
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty'],
            note: 'Tested against your contents, because these materials do not always match conventional film.',
          },
          {
            label: 'Storage guidance',
            options: ['Provided with the order'],
            note: 'Materials designed to degrade are more sensitive to heat and humidity in storage.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'A better question to ask',
        before:
          'If the goal is to reduce the environmental impact of your shipping rather than to put a word on a bag, degradation is rarely the highest-leverage change available. Right-sizing so parcels stop carrying air, reducing the number of components in a pack, and moving to a film with documented recycled content all produce results that can be measured and defended. Where to start is set out in our ',
        link: { href: '/sustainability/', anchor: 'position on packaging claims' },
        after: ', which explains what we will and will not put our name to.',
      },
    ],
    faqs: [
      {
        q: 'How long do biodegradable poly mailers take to break down?',
        a: 'We publish no timescale. Any credible figure has to be tied to specific conditions and a specific assessment method, and neither was supplied to us for these materials. We will ask the film supplier for whatever they can evidence for your order.',
      },
      {
        q: 'What is the difference between biodegradable and compostable?',
        a: 'Compostable refers to a defined, managed process with conditions attached and an assessment behind it. Biodegradable, used on its own, refers to breakdown by microorganisms under unstated conditions over an unstated period. The first can be verified; the second, unqualified, cannot.',
      },
      {
        q: 'Can I print "biodegradable" on my mailers?',
        a: 'We will not print an unqualified degradation claim. If you have documentation supporting qualified wording — naming the conditions and the timeframe — we will print what your evidence supports, and the responsibility for that claim in your market remains yours.',
      },
      {
        q: 'Are these mailers as strong as conventional ones?',
        a: 'Not necessarily. Materials formulated to degrade can differ in strength, seal performance and shelf life. Test a sample with your real contents and your real packing method before switching a live flow.',
      },
      {
        q: 'Why will you not just tell me it is eco-friendly?',
        a: 'Because it is not a statement anyone can substantiate, and regulators in the markets we serve treat vague environmental claims as a problem in their own right. We would rather give you something you can defend than something that reads well.',
      },
    ],
    related: [
      {
        href: '/compostable-poly-mailers/',
        label: 'Compostable Poly Mailers',
        reason: 'The route with a defined process behind it, and what it depends on.',
      },
      {
        href: '/recycled-poly-mailers/',
        label: 'Recycled Poly Mailers',
        reason: 'The easiest of the three routes to evidence.',
      },
      {
        href: '/blog/recycled-vs-compostable-vs-biodegradable-mailers/',
        label: 'Comparing the three routes',
        reason: 'A longer read on how the terms are used and misused.',
      },
    ],
    cta: {
      heading: 'Ask what can be evidenced',
      body: 'Tell us what you want to be able to claim and where you sell. We will find out what the film supplier can document and show you before you order.',
      buttonLabel: 'Request material documentation',
    },
    whatsapp:
      'Hi, I want to understand what documentation exists for biodegradable poly mailers.',
    collections: ['sustainable-poly-mailers'],
    group: 'sustainable',
    quotePreset: 'Biodegradable Poly Mailers',
  },
];
