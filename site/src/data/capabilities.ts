import type { ContentPage } from './types';

/**
 * Capability pages — what we can supply and how it is decided.
 *
 * Boundary against the resource guides: these pages answer "what will you do
 * for me", the resources answer "how do I work this out myself". Materials
 * lists what is selectable; the material guide teaches you to compare films.
 * Printing options lists methods; the printing and artwork guide walks a file
 * from design to press. Artwork guidelines is the specification sheet.
 */

export const capabilityPages: readonly ContentPage[] = [
  /* ===================================================================== */
  {
    slug: 'materials',
    name: 'materials',
    h1: 'Poly Mailer Materials',
    title: 'Poly Mailer Materials | Film, Weight & Finish',
    description:
      'What we can supply and how each material choice is made — film weight, opacity, finish and lining, selected against what you actually ship.',
    summary: 'The material choices available, and what each one changes.',
    intro: [
      'There is no standard material here to accept or decline. Film weight, opacity, finish and lining are separate decisions, and each one is made against what you ship rather than against a general recommendation.',
      'This page sets out what is selectable and what each choice does. It deliberately contains no gauge figures in microns or mils, because the film available varies by market and by production run, and a number published here would not be the number in your carton.',
    ],
    plan: {
      intent: 'Understand what materials a poly mailer supplier can offer.',
      audience: 'Buyers specifying an order who need to know what the variables are.',
      problem: 'Suppliers publish gauge numbers that cannot be compared like for like.',
      angle:
        'Explains what each material variable does rather than listing specifications we cannot guarantee.',
      primaryKeyword: 'poly mailer materials',
      supportingKeywords: ['poly mailer film', 'mailer material options', 'polyethylene mailer film'],
      nearestPage: '/resources/poly-mailer-material-guide/',
      boundary:
        'This page states what we supply. The material guide teaches you how to compare films between suppliers.',
    },
    blocks: [
      {
        kind: 'prose',
        heading: 'Why we do not publish a gauge',
        standfirst: 'A number without a method is not a specification.',
        paragraphs: [
          'Film thickness gets quoted in microns or mils, and the figures are not comparable between suppliers. Some measure the film flat, some measure the finished bag; some quote a target, some quote a minimum; and a film described identically can behave differently depending on how it was produced.',
          'Publishing a figure here would give you something that looks precise and cannot be used to compare anything. Instead we describe films by what they do, and confirm the actual specification for your order in writing on the quotation.',
          'If you need a numeric specification for an internal document or a tender, ask and we will provide what the supplier of your film can evidence for that run.',
        ],
      },
      {
        kind: 'specs',
        heading: 'What is selectable',
        intro: 'Every line is a choice. Nothing here is fixed until it is on your quotation.',
        rows: [
          {
            label: 'Film weight',
            options: ['Standard', 'Heavier duty', 'Heaviest available for the format'],
            note: 'Governs how much concentrated force the bag takes before it fails, which matters for anything with a corner.',
          },
          {
            label: 'Opacity',
            options: ['Standard', 'Higher opacity'],
            note: 'Decides whether dark contents shadow through a pale film. Irrelevant on black.',
          },
          {
            label: 'Finish',
            options: ['Gloss', 'Matte'],
            note: 'Changes how printed colour reads and how visibly the bag shows handling marks.',
          },
          {
            label: 'Lining',
            options: ['None', 'Bubble', 'Foam'],
            note: 'Bubble absorbs impact; foam protects surfaces; neither resists crushing.',
          },
          {
            label: 'Construction',
            options: ['Flat', 'Side gusset'],
            note: 'A gusset gives lofty contents somewhere to go, producing a square parcel rather than a barrel.',
          },
          {
            label: 'Recycled content',
            options: ['Standard film', 'Recycled-content film where available'],
            note: 'Feedstock type and proportion are confirmed per order with the supplier documentation behind them.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'Choosing film weight against your contents',
        intro:
          'This is the material decision that causes the most failures when it is made on price alone.',
        items: [
          {
            term: 'Soft goods only',
            detail:
              'Garments, textiles and soft accessories put almost no stress on film. The standard weight is genuinely enough.',
          },
          {
            term: 'Anything boxed',
            detail:
              'A box corner concentrates the whole force of a drop onto one point. Move up a weight, or add cushioning.',
          },
          {
            term: 'Zips, studs, buckles',
            detail:
              'Hardware on a garment behaves like a corner from the inside. Heavier film, or a lining.',
          },
          {
            term: 'Large formats',
            detail:
              'The contents that need a big bag are heavier, and a big bag flexes more. We do not quote the lightest films above a certain size.',
          },
          {
            term: 'High-value contents',
            detail:
              'The per-unit saving on lighter film is trivial against the value at risk in one failure.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Storage affects material performance',
        before:
          'Film is stable in storage; the adhesive on the closure is not. Heat, damp and direct sunlight degrade it, and a carton that has sat by a window for a year will seal noticeably worse than one stored in the dark. Keep stock flat, sealed, off the floor and out of light, and rotate so the oldest is used first. Where a material is designed to break down, storage matters more still, which is covered on the ',
        link: { href: '/compostable-poly-mailers/', anchor: 'compostable material page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What are poly mailers made of?',
        a: 'Polyethylene film, in varying weights and finishes, sometimes with a bubble or foam lining bonded inside. Recycled-content and alternative-material films are available where the supplier can document what is in them.',
      },
      {
        q: 'What thickness of poly mailer do I need?',
        a: 'It depends on what is inside rather than on a number. Soft goods with no hard edges suit the standard weight; anything boxed, hardware-laden or heavy needs a heavier film or a lining. Tell us what you ship and we will specify it.',
      },
      {
        q: 'Are poly mailers waterproof?',
        a: 'The film resists rain and splashing, which is enough for a parcel left on a doorstep. It is not a sealed barrier — water can enter at the closure — so it should not be relied on for immersion or prolonged exposure.',
      },
      {
        q: 'Can I have the material specification in writing?',
        a: 'Yes. Every quotation states the specification we are quoting, and where you need supplier documentation for an internal record or a tender, ask and we will provide what exists for that film.',
      },
    ],
    related: [
      {
        href: '/resources/poly-mailer-material-guide/',
        label: 'Comparing films between suppliers',
        reason: 'The reference for evaluating a quote that is not ours.',
      },
      {
        href: '/protective-mailers/',
        label: 'Protective options',
        reason: 'Where lining rather than film weight is the answer.',
      },
      {
        href: '/economy-poly-mailers/',
        label: 'Economy specification',
        reason: 'Where the material decision is being made on cost.',
      },
    ],
    cta: {
      heading: 'Specify a material',
      body: 'Describe what you ship — weight, shape, whether anything is boxed — and we will specify a film and put it in writing.',
      buttonLabel: 'Get a material specification',
    },
    whatsapp: 'Hi, I need help specifying the right poly mailer material for my products.',
  },

  /* ===================================================================== */
  {
    slug: 'printing-options',
    name: 'printing options',
    h1: 'Printing Options',
    title: 'Printing Options for Poly Mailers | Coverage & Cost',
    description:
      'How poly mailers are printed, what each coverage level costs you, and which decisions to make before a designer starts work.',
    summary: 'Print methods, coverage levels and what actually moves the price.',
    intro: [
      'Most buyers assume the number of colours drives the price of a printed mailer. It contributes, but three other decisions move it further: how many you order, how much of the bag the ink covers, and whether you print one side or two.',
      'This page sets out the choices in the order they should be made, so you brief a designer once against a specification rather than twice against a guess.',
    ],
    plan: {
      intent: 'Understand poly mailer printing options and costs.',
      audience: 'Marketing and procurement leads scoping a printed run.',
      problem: 'Not knowing which printing decisions carry cost before committing to a design.',
      angle: 'Ranks the decisions by their effect on price, which no product page does.',
      primaryKeyword: 'poly mailer printing options',
      supportingKeywords: ['printed poly mailers', 'mailer print coverage', 'custom mailer printing'],
      nearestPage: '/custom-poly-mailers/',
      boundary:
        'This page explains the methods and their cost consequences. The custom mailers page is the transactional page for placing the order.',
    },
    blocks: [
      {
        kind: 'compare',
        heading: 'What moves the price, in order',
        intro:
          'If you need to bring a printed run inside a budget, work down this list rather than cutting colours first.',
        caption: 'Printing decisions ranked by their effect on the price per unit.',
        columns: ['Decision', 'Effect on price', 'Worth doing when'],
        rows: [
          [
            'Quantity',
            'Largest single lever — setup spreads across the run',
            'Volume is predictable enough to store and use it',
          ],
          [
            'Coverage',
            'Substantial — ink area, not colour count',
            'A logo will do the job a full-bleed design was going to do',
          ],
          [
            'Sides printed',
            'Adds a production stage',
            'The reverse carries returns or disposal information',
          ],
          [
            'Colour count',
            'Moderate — each colour is a setup',
            'Two strong colours can replace a subtle palette',
          ],
          [
            'Colour matching',
            'Modest, plus a proof round',
            'The brand colour has to be exact rather than close',
          ],
          [
            'Interior printing',
            'Separate operation, priced separately',
            'The unboxing moment is part of the product',
          ],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Coverage levels, and what each is for',
        intro:
          'Coverage is the decision buyers underestimate most, and the one that changes both cost and how the parcel reads.',
        items: [
          {
            term: 'Logo only',
            detail:
              'A single mark, placed deliberately. Cheapest print available, and on a coloured base it often looks more considered than heavy coverage does.',
          },
          {
            term: 'Partial coverage',
            detail:
              'A mark plus a message, a pattern band or a printed label panel. The most common choice once a brand has run a first order.',
          },
          {
            term: 'Full coverage',
            detail:
              'Ink across the whole panel. Striking, and the most expensive. It also leaves nowhere clean for a shipping label unless you design a panel in.',
          },
          {
            term: 'Interior print',
            detail:
              'Printed inside the bag so the design appears when it opens. A separate operation, and one that only pays off for gift and premium ranges.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'The order to make print decisions in',
        intro:
          'Each decision constrains the next. Making them in this sequence removes almost every reason for a second proof round.',
        steps: [
          {
            title: 'Size, settled on a physical sample',
            detail: 'Artwork is laid out for a panel. Changing the panel means redrawing the file.',
          },
          {
            title: 'Base colour and finish',
            detail:
              'The base decides which inks will read. Finish changes how those inks look once printed.',
          },
          {
            title: 'Coverage and sides',
            detail: 'The budget conversation belongs here, before anyone designs anything.',
          },
          {
            title: 'Label position',
            detail:
              'Decide where the shipping label goes and design a clear zone for it. This is the step most often skipped.',
          },
          {
            title: 'Artwork to specification',
            detail:
              'Vector where possible, bleed allowance included, fonts outlined, colour mode correct.',
          },
          {
            title: 'Proof, then production',
            detail: 'Nothing is scheduled until you approve the proof in writing.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Print behaviour differs by surface',
        before:
          'The same file behaves differently on flat film, on a cushioned surface and on translucent frosted film. Fine lines that hold on one break up on another, and white ink that reads crisply on a dark base disappears on a pale one. Before commissioning artwork it is worth checking which surface you are printing on, because a design adapted after the fact rarely looks as considered as one drawn for the format. The surfaces are compared on the ',
        link: { href: '/custom-printed-poly-mailers/', anchor: 'printed format comparison' },
        after: '.',
      },
      {
        kind: 'prose',
        heading: 'Proofing, and what a proof does not tell you',
        paragraphs: [
          'A digital proof shows placement, scale and the relationship between elements accurately. It is the right way to check that your mark is where you want it and that nothing important falls on the flap or under the label.',
          'It shows colour approximately. A screen is backlit and film is not, and a colour that looks correct on a calibrated monitor can arrive materially different. Where colour is commercially important — a brand colour customers recognise — ask for a physical check rather than approving on screen.',
          'Once a proof is approved it becomes the reference the run is checked against, which is why we ask for approval in writing rather than by implication.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How are poly mailers printed?',
        a: 'Ink is applied to the film before the bag is formed, which is why print decisions have to be made before production rather than added afterwards. It is also why coverage affects cost more than colour count does.',
      },
      {
        q: 'Is full-coverage printing worth the extra cost?',
        a: 'It depends on what the parcel is doing. For brands whose customers photograph deliveries, often yes. For most operations a well-placed mark on a coloured base achieves most of the recognition at a fraction of the cost.',
      },
      {
        q: 'Can I print on the inside of a poly mailer?',
        a: 'Yes, as a separate operation with its own cost. It creates a strong unboxing moment and is most commonly specified by gift, subscription and premium ranges rather than general ecommerce.',
      },
      {
        q: 'How many colours can be printed?',
        a: 'More than most designs need. The practical constraint is contrast against the base film rather than the number of inks, and two strong colours usually outperform a subtle multi-colour palette on this substrate.',
      },
    ],
    related: [
      {
        href: '/artwork-guidelines/',
        label: 'Artwork guidelines',
        reason: 'The file specification to work to once the print decisions are made.',
      },
      {
        href: '/custom-poly-mailers/',
        label: 'Order a printed run',
        reason: 'The transactional page, with the ordering process in full.',
      },
      {
        href: '/design-your-poly-mailer/',
        label: 'Design tool',
        reason: 'Try coverage and placement options before committing to a brief.',
      },
    ],
    cta: {
      heading: 'Scope a printed run',
      body: 'Tell us your quantity and what you want printed. We will price a few coverage options so you can see what each one costs before you brief a designer.',
      buttonLabel: 'Price printing options',
    },
    whatsapp: 'Hi, I would like to understand printing options and costs for poly mailers.',
  },

  /* ===================================================================== */
  {
    slug: 'artwork-guidelines',
    name: 'artwork guidelines',
    h1: 'Artwork Guidelines',
    title: 'Artwork Guidelines | File Specification for Print',
    description:
      'The file specification for custom poly mailer printing — formats, bleed, resolution, colour mode, fonts and the checks we run before proofing.',
    summary: 'The exact file requirements, and the checks a file goes through before it is proofed.',
    intro: [
      'This is the specification sheet. Hand it to whoever is producing your artwork and most of the back-and-forth disappears.',
      'It covers what to send, how to set it up, and the checks we run when it arrives. It does not cover how to design for a mailer — that is a different problem, and it is dealt with on the printing and artwork guide.',
    ],
    plan: {
      intent: 'Find the file specification for supplying print artwork.',
      audience: 'Designers and studios producing packaging artwork for a client.',
      problem: 'Files arrive without bleed, in the wrong colour mode, or with live fonts.',
      angle: 'A specification sheet, written to be handed to a production designer.',
      primaryKeyword: 'poly mailer artwork guidelines',
      supportingKeywords: ['mailer print file setup', 'packaging artwork specification', 'print ready artwork'],
      nearestPage: '/resources/printing-and-artwork-guide/',
      boundary:
        'This page is the specification. The printing and artwork guide is the walkthrough, written for someone learning the process.',
    },
    blocks: [
      {
        kind: 'specs',
        heading: 'File requirements',
        intro: 'Send a file that meets all of these and it goes straight to proof.',
        rows: [
          {
            label: 'Preferred formats',
            options: ['AI', 'EPS', 'PDF', 'SVG'],
            note: 'Vector artwork scales to any size on the bag without losing an edge.',
          },
          {
            label: 'Accepted raster formats',
            options: ['PNG', 'JPG', 'PSD'],
            note: 'Usable for photographic elements; not ideal for logos or type.',
          },
          {
            label: 'Raster resolution',
            options: ['300 ppi at final size', 'Higher for fine detail'],
            note: 'Resolution at final printed size, not at the size the file happens to be.',
          },
          {
            label: 'Colour mode',
            options: ['CMYK', 'Named spot colours'],
            note: 'RGB files have to be converted, and the conversion is where colour surprises come from.',
          },
          {
            label: 'Bleed',
            options: ['3 mm minimum on any edge the artwork runs to'],
            note: 'Film moves fractionally on press; without bleed part of the run gets a white sliver.',
          },
          {
            label: 'Fonts',
            options: ['Outlined or converted to paths'],
            note: 'Live fonts substitute silently if we do not hold the exact same version.',
          },
          {
            label: 'Minimum line weight',
            options: ['0.5 pt on flat film', 'Substantially heavier on cushioned surfaces'],
            note: 'Anything finer closes up, and it closes up more on textured film.',
          },
          {
            label: 'Layers',
            options: ['Flattened', 'Layered with a flattened preview'],
            note: 'A flattened preview tells us what you intended if a layer misbehaves.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'Layout rules specific to a mailer',
        intro:
          'These are the ones that catch designers who have only produced print for paper.',
        items: [
          {
            term: 'Keep clear of the flap',
            detail:
              'The top band folds over and is sealed. Anything placed there is invisible on a packed parcel.',
          },
          {
            term: 'Keep clear of the side welds',
            detail:
              'The edges are sealed and pinched. Artwork running into them distorts.',
          },
          {
            term: 'Design a label zone',
            detail:
              'Decide where the shipping label goes and leave that area clear. Without one, the label lands on your artwork on a large share of parcels.',
          },
          {
            term: 'Design for the packed shape',
            detail:
              'A composition that fills a flat template stretches once there is something inside. Centred marks with breathing room survive; edge-to-edge compositions do not.',
          },
          {
            term: 'Check contrast against the base',
            detail:
              'A dark mark cannot go on a dark film. Settle the base colour before the artwork, not after.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'What happens when your file arrives',
        intro:
          'Five checks, and we come back to you rather than guessing if any of them fails.',
        steps: [
          {
            title: 'Technical check',
            detail:
              'Format, resolution at final size, colour mode, bleed, outlined fonts, minimum line weights.',
          },
          {
            title: 'Layout check against the format',
            detail:
              'Flap clearance, weld clearance, label zone, and how the design behaves on the surface you have chosen.',
          },
          {
            title: 'Contrast check against the base',
            detail:
              'Every element assessed against the film colour and finish you have selected.',
          },
          {
            title: 'Proof produced',
            detail:
              'Placement, scale and colour shown on your chosen specification, returned to you for approval.',
          },
          {
            title: 'Written approval, then scheduling',
            detail:
              'Production is booked against the approved proof. Changes after this point mean a new proof.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Rights and permissions',
        before:
          'Before you send artwork, confirm you hold the commercial reproduction rights to everything in it. Stock illustration bought on a personal licence, an image found online and a design a freelancer was paid to produce are three different legal positions, and only one of them is safe to print at volume. Fonts carry licences too, and some restrict use in a logo or in packaging. Where a design incorporates a pattern rather than a mark, the additional considerations are covered on the ',
        link: { href: '/bee-poly-mailers/', anchor: 'patterned mailer page' },
        after: '.',
      },
      {
        kind: 'callout',
        heading: 'Sending artwork with your enquiry',
        body: 'The quote form accepts PDF, AI, EPS, PSD, SVG, PNG and JPG. Files are checked on upload and are attached to the enquiry rather than stored on a public path. If your file is larger than the upload limit, send a link and we will collect it.',
      },
    ],
    faqs: [
      {
        q: 'What file format should I supply for poly mailer printing?',
        a: 'Vector — AI, EPS, PDF or SVG — with fonts outlined. Raster formats work for photographic elements at 300 ppi at final printed size, but they are not the right choice for a logo or for type.',
      },
      {
        q: 'How much bleed do you need?',
        a: 'At least 3 mm on any edge the artwork is intended to run to. Film shifts fractionally during production, and without bleed some of the run comes out with an uneven white edge on one side.',
      },
      {
        q: 'Do I need to convert my artwork to CMYK?',
        a: 'It helps. RGB files have to be converted before printing, and the conversion is where unexpected colour shifts come from. Supplying CMYK or a named spot colour means you have seen the conversion rather than us making it for you.',
      },
      {
        q: 'What if my logo has very fine lines?',
        a: 'Tell us before the run. Fine lines close up on flexible film in a way they never do on paper, and they close up further on a cushioned surface. Usually a slightly heavier weight of the same mark solves it, and we will show you both on the proof.',
      },
      {
        q: 'Can you redraw or adjust my artwork?',
        a: 'We can make production adjustments — adding bleed, outlining fonts, adapting a mark into a repeat. Substantial design work is a separate conversation, and we will say so rather than quietly reinterpreting your identity.',
      },
    ],
    related: [
      {
        href: '/resources/printing-and-artwork-guide/',
        label: 'Preparing artwork from scratch',
        reason: 'The walkthrough for someone doing this for the first time.',
      },
      {
        href: '/printing-options/',
        label: 'Printing options',
        reason: 'The decisions to settle before artwork is produced.',
      },
      {
        href: '/design-your-poly-mailer/',
        label: 'Design tool',
        reason: 'Position artwork on a mailer and see approximate placement.',
      },
    ],
    cta: {
      heading: 'Have artwork checked',
      body: 'Send your file with a quote request and we will run the checks above, then come back with a proof or with exactly what needs changing.',
      buttonLabel: 'Send artwork for checking',
    },
    whatsapp: 'Hi, I have artwork for poly mailers and would like it checked before ordering.',
  },

  /* ===================================================================== */
  {
    slug: 'size-guide',
    name: 'size selection',
    h1: 'Choosing a Poly Mailer Size',
    title: 'Poly Mailer Size Guide | Choosing for Your Product',
    description:
      'A method for choosing a mailer size for your own product — what to measure, what to test, and the mistakes that cost the most.',
    summary: 'A decision framework for sizing against your own products, not a size chart.',
    intro: [
      'A size chart tells you what sizes exist. It does not tell you which one your product needs, because that depends on how your team folds, what goes in the parcel besides the product, and which shipping bands you buy on.',
      'This page is the method. Work through it once and you will have a size mix that holds for years, rather than one you revisit every time a new product line launches.',
    ],
    plan: {
      intent: 'Work out which poly mailer size to order for a specific product.',
      audience: 'Anyone specifying packaging for a product range for the first time.',
      problem: 'Size charts list dimensions but do not tell you what will fit.',
      angle: 'A repeatable method, including the shipping-band arithmetic most guides ignore.',
      primaryKeyword: 'poly mailer size guide',
      supportingKeywords: ['what size poly mailer do I need', 'choosing mailer size', 'mailer sizing'],
      nearestPage: '/poly-mailer-sizes/',
      boundary:
        'This page teaches the method. The size collection lists the sizes we make with a comparison table.',
    },
    blocks: [
      {
        kind: 'steps',
        heading: 'The method',
        intro:
          'Half an hour once, rather than a recurring argument at the packing bench.',
        steps: [
          {
            title: 'Pick your five most-shipped products',
            detail:
              'Not your whole catalogue. Five usually covers the large majority of your order volume, and they will cluster into two or three sizes.',
          },
          {
            title: 'Build a real order for each',
            detail:
              'Product, plus the card, the tissue, the sticker and the returns slip. Size against the parcel you actually send, not the item.',
          },
          {
            title: 'Have your own packers fold them',
            detail:
              'At working pace. A careful desk fold and a bench fold under pressure are different sizes, and you will get the second one.',
          },
          {
            title: 'Pack, seal and check the strip',
            detail:
              'The adhesive must meet clean film along its whole length. If contents reach the strip anywhere, the size is too tight.',
          },
          {
            title: 'Drop each parcel once from bench height',
            detail:
              'Flat, onto a hard floor. A seal that opens on one drop will open in a sorting hub.',
          },
          {
            title: 'Weigh and measure the packed parcels',
            detail:
              'Check them against the shipping bands you actually buy on. This is where a size decision quietly saves or costs real money.',
          },
          {
            title: 'Choose the smallest size that passes',
            detail:
              'If two sizes both work, the smaller one is cheaper per unit and travels better, because slack air makes a parcel less stable rather than more forgiving.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'What to measure, and what not to bother with',
        intro:
          'Three measurements matter and one commonly quoted number does not.',
        items: [
          {
            term: 'Packed width',
            detail:
              'The widest point once folded, measured across the fold rather than across the flat item.',
          },
          {
            term: 'Packed length',
            detail: 'The longest point once folded, including anything that will not compress.',
          },
          {
            term: 'Packed depth',
            detail:
              'The one most people skip, and the one that decides both fit and which shipping band you land in.',
          },
          {
            term: 'Flat dimensions of the product',
            detail:
              'Almost useless on their own. A flat garment tells you nothing about what it becomes when it is folded.',
          },
        ],
      },
      {
        kind: 'compare',
        heading: 'Common sizing mistakes and what they cost',
        intro:
          'These four account for most of the size decisions that get reversed within a year.',
        caption: 'Sizing mistakes ranked by what they actually cost.',
        columns: ['Mistake', 'What it costs', 'Fix'],
        rows: [
          [
            'Sizing against the product, not the order',
            'A whole run that stops fitting once inserts are added',
            'Pack a complete order before deciding',
          ],
          [
            'Choosing a tight size to save film',
            'More in shipping than the film saved, because thickness rises',
            'Weigh and measure the packed parcel',
          ],
          [
            'Buying one size larger for safety',
            'Higher unit cost and less stable parcels',
            'Choose the smallest that seals without strain',
          ],
          [
            'Standardising on one size across a varied range',
            'Waste on light orders, failures on heavy ones',
            'Two or three sizes, chosen from real order data',
          ],
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'When the answer is not a bigger bag',
        before:
          'If parcels are arriving damaged rather than arriving burst, sizing up will not help — cushioning will, and more space can make things worse by letting contents move. Work out which failure you actually have before changing the size, because impact, abrasion, crushing and movement each need a different response. The diagnosis is set out in the ',
        link: { href: '/protective-mailers/', anchor: 'protective mailer comparison' },
        after: ', which starts from the damage rather than from the packaging.',
      },
    ],
    faqs: [
      {
        q: 'How do I know what size poly mailer I need?',
        a: 'Pack a complete order — product, insert, tissue, returns slip — fold it the way your team folds at working pace, and pick the smallest size that seals onto clean film without strain. Ten minutes with two sample sizes settles it more reliably than any chart.',
      },
      {
        q: 'Should I size up to be safe?',
        a: 'No. An oversized mailer costs more per unit and leaves slack air, which lets contents move and makes damage more likely rather than less. The smallest size that closes properly is the right one.',
      },
      {
        q: 'How many sizes should I stock?',
        a: 'Two or three for most operations. One size means waste on small orders and strain on large ones; four or more introduces decisions at the bench that get made inconsistently once volume rises.',
      },
      {
        q: 'Do mailer dimensions include the flap?',
        a: 'Conventions vary between suppliers, which is why two identical-looking numbers can describe different bags. Rather than compare figures that may not mean the same thing, we confirm on each quotation which measurement applies.',
      },
    ],
    related: [
      {
        href: '/poly-mailer-sizes/',
        label: 'The sizes we make',
        reason: 'Every size compared once you know what you are looking for.',
      },
      {
        href: '/resources/mailer-measurement-guide/',
        label: 'How to measure',
        reason: 'The practical detail behind the measuring step above.',
      },
      {
        href: '/samples/',
        label: 'Request samples',
        reason: 'Two candidate sizes is the fastest way to finish this process.',
      },
    ],
    cta: {
      heading: 'Get a size recommendation',
      body: 'Tell us your five most-shipped products and roughly what goes in each parcel. We will recommend a size mix, explain the reasoning, and quote it.',
      buttonLabel: 'Ask for a size recommendation',
    },
    whatsapp: 'Hi, I need help working out which poly mailer sizes to order.',
  },

  /* ===================================================================== */
  {
    slug: 'sustainability',
    name: 'sustainability',
    h1: 'Sustainability and What We Will Claim',
    title: 'Sustainability | Our Position on Packaging Claims',
    description:
      'What The Poly Mailers will and will not state about environmental performance, why, and what we do instead of publishing green marketing.',
    summary: 'Our position on environmental claims, and the changes that produce results without one.',
    intro: [
      'There is no certification mark on this website. No recycled percentage, no breakdown timescale, no comparison against conventional film. That is a deliberate position rather than an oversight, and this page explains it.',
      'The short version: we were not supplied documentation to support those claims, and a claim we cannot evidence for your specific order is worth less to you than no claim at all — particularly in a category where advertising regulators across the markets we serve have taken a close interest in packaging language.',
      'What follows is what we will do instead.',
    ],
    plan: {
      intent: 'Understand a supplier’s environmental position and credibility.',
      audience: 'Sustainability leads and buyers assessing whether a supplier can be trusted.',
      problem: 'Packaging suppliers publish green claims that cannot be substantiated on inspection.',
      angle:
        'A stated position on claims rather than a product page — the only page on the site that explains the policy itself.',
      primaryKeyword: 'sustainable packaging claims',
      supportingKeywords: [
        'poly mailer sustainability',
        'environmental packaging claims',
        'greenwashing packaging',
      ],
      nearestPage: '/sustainable-poly-mailers/',
      boundary:
        'This page is our policy. The sustainable collection helps you choose between the three product routes.',
    },
    blocks: [
      {
        kind: 'bullets',
        heading: 'What we will not publish',
        intro:
          'Each of these is something a packaging supplier could easily assert. None of them was supplied to us with evidence, so none of them appears anywhere on this site.',
        items: [
          {
            term: 'Recycled content percentages',
            detail:
              'Content varies by film, by production batch and by market. A single figure on a web page could not be honoured for every order.',
          },
          {
            term: 'Certification marks',
            detail:
              'A mark is a statement that an assessment happened. We hold no documentation for one, so we do not display one.',
          },
          {
            term: 'Decomposition or breakdown periods',
            detail:
              'Any credible figure depends on named conditions and an assessment method. Without both, a timescale is a guess dressed as data.',
          },
          {
            term: 'Home or industrial compostability status',
            detail:
              'These are assessed against different criteria and a material may meet one and not the other. We were shown neither assessment.',
          },
          {
            term: 'Carbon footprint comparisons',
            detail:
              'A comparison requires a defined boundary and a method. We have not run one, so we do not cite one.',
          },
        ],
      },
      {
        kind: 'steps',
        heading: 'What we do instead',
        intro:
          'When you need to make an environmental claim, this is the process we run for your order.',
        steps: [
          {
            title: 'You tell us what you need to be able to say',
            detail:
              'To a customer, on a pack, in a tender, or to a retailer with its own packaging policy.',
          },
          {
            title: 'We go to the supplier of the specific film',
            detail:
              'Not to a general datasheet. To the film that will actually be produced for your order.',
          },
          {
            title: 'We ask for the evidence',
            detail:
              'Feedstock type and proportion, assessment method, assessing body, and the document itself.',
          },
          {
            title: 'You see it before you commit',
            detail:
              'Including when the answer is that nothing is documented. That answer is information too.',
          },
          {
            title: 'It goes on the quotation',
            detail:
              'What is evidenced is written down, so what you were told and what you ordered are the same thing.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Where the real reductions are',
        standfirst: 'None of these needs a certificate to defend.',
        paragraphs: [
          'Right-sizing is the largest lever most operations have. A parcel that fits uses less film, weighs less and takes less space on a vehicle, and unlike a material claim it can be measured in your own data within a month.',
          'Reducing components is the second. Every insert, void filler, second bag and piece of tape is material that was manufactured and will be discarded. Removing one from a parcel that ships ten thousand times a year is a real reduction.',
          'Specifying a returns strip is the third and it is often overlooked. A resealable mailer removes an entire second piece of packaging from every return, which in a category with fashion-level return rates is a substantial share of total material.',
          'None of these is as marketable as a leaf symbol. All of them are defensible.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Reading a competitor’s claims',
        before:
          'If you are comparing quotations, the environmental section is where the differences between suppliers are largest and least verifiable. Ask each one for the feedstock type, the proportion, the assessment method and the document, and see who can produce all four. A supplier who publishes a confident percentage and cannot evidence it has told you something useful about the rest of their quotation. The vocabulary to run that conversation is set out in the ',
        link: {
          href: '/resources/sustainable-mailer-terminology-guide/',
          anchor: 'sustainable packaging terminology guide',
        },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Are your poly mailers eco-friendly?',
        a: 'That phrase has no defined meaning, so we do not use it. We can supply recycled-content, compostable-material and biodegradable-material films, and we will tell you exactly what the supplier of each can evidence for your order — including when the answer is nothing.',
      },
      {
        q: 'Why will you not just say your mailers are recyclable?',
        a: 'Because recyclability depends on what collection your customers can access, not on the material alone. Flexible film is generally not accepted in household kerbside collections in the markets we serve. Telling customers to recycle something they cannot recycle is worse than saying nothing.',
      },
      {
        q: 'Can you provide documentation for a tender or an audit?',
        a: 'We will provide whatever the supplier of the specific film holds, and we will be explicit about what is not covered. We will not produce a document that says more than the evidence supports.',
      },
      {
        q: 'What is the most effective change I can make?',
        a: 'Right-sizing, almost always. Shipping less air reduces material per parcel and often moves parcels into lower weight bands at the same time. It is measurable in your own data and needs no certification to defend.',
      },
    ],
    related: [
      {
        href: '/sustainable-poly-mailers/',
        label: 'The three sustainable routes',
        reason: 'Choosing between recycled, compostable and biodegradable.',
      },
      {
        href: '/recycled-poly-mailers/',
        label: 'Recycled content',
        reason: 'The route that is easiest to evidence.',
      },
      {
        href: '/size-guide/',
        label: 'Right-sizing method',
        reason: 'The change with the largest measurable effect.',
      },
    ],
    cta: {
      heading: 'Ask what can be evidenced',
      body: 'Tell us what you need to claim and where you sell. We will come back with what the available film supports, and with the documentation behind it.',
      buttonLabel: 'Request material evidence',
    },
    whatsapp:
      'Hi, I would like to know what environmental documentation is available for your mailers.',
  },
];
