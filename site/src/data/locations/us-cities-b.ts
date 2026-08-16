import type { LocationPage } from './types';

/**
 * US cities, part two. Jacksonville through Atlanta.
 */

export const usCitiesB: readonly LocationPage[] = [
  /* ===================================================================== */
  {
    slug: 'jacksonville',
    name: 'Jacksonville',
    market: 'usa',
    kind: 'city',
    region: 'South',
    h1: 'Poly Mailers for Jacksonville Businesses',
    title: 'Poly Mailers Jacksonville | Container to Parcel',
    description:
      'Poly mailers for Jacksonville businesses — turning inbound container freight into outbound parcels, and specifying packaging for that transition.',
    summary: 'Turning inbound freight into outbound parcels, and packaging the transition.',
    intro: [
      'Jacksonville’s port and logistics base produces a particular kind of operation: goods arrive by the container and leave one parcel at a time. Everything about the packaging decision sits at that transition point.',
      'The interesting constraint is that the inbound format was decided by somebody else, often on another continent, and the outbound format has to work regardless of what turns up.',
    ],
    angle: 'The transition from container freight to individual parcels.',
    primaryKeyword: 'poly mailers jacksonville',
    supportingKeywords: ['shipping bags jacksonville', 'import to parcel packaging', 'port logistics packaging'],
    sectors: [
      { name: 'Import and distribution', note: 'A port city with a business base built around goods arriving in bulk.' },
      { name: 'Third-party fulfilment', note: 'Operations breaking down imported stock for several brand clients.' },
      { name: 'Ecommerce', note: 'Own-channel brands importing and fulfilling from the same location.' },
    ],
    recommended: [
      { slug: 'blank-poly-mailers', why: 'Breaking down stock for multiple clients rules out branding on the outer.' },
      { slug: '10x13-poly-mailers', why: 'The outbound standard once bulk goods are broken into single orders.' },
      { slug: 'economy-poly-mailers', why: 'Where packaging is a per-unit line in a high-throughput operation.' },
      { slug: '19x24-poly-mailers', why: 'For the portion of outbound volume that goes to trade rather than to consumers.' },
    ],
    blocks: [
      {
        kind: 'steps',
        heading: 'Specifying at the break-bulk point',
        intro:
          'Five decisions that determine how efficiently a container becomes parcels.',
        steps: [
          { title: 'Find out what arrives inner-packed', detail: 'Goods that arrive individually bagged need no further packaging beyond the mailer. Goods that arrive loose need two layers.' },
          { title: 'Size against the unit, not the case', detail: 'The case quantity is irrelevant to the outbound decision. The single unit is what has to fit.' },
          { title: 'Decide where inner bagging happens, if it is needed', detail: 'Doing it at the point of unpacking is faster than doing it per order later.' },
          { title: 'Standardise the outbound range hard', detail: 'A break-bulk operation runs on repetition. Two or three sizes, with written rules.' },
          { title: 'Check what printed information must carry through', detail: 'Origin marking, warnings and barcodes on the inbound packaging may need to appear on the outbound one.' },
        ],
      },
      {
        kind: 'bullets',
        heading: 'What goes wrong at this transition',
        items: [
          { term: 'Sizing against what arrived', detail: 'The inbound format tells you nothing about the outbound requirement. Size against the single unit a customer receives.' },
          { term: 'Missing required markings', detail: 'Information printed on inbound packaging sometimes has to appear on what the customer receives. Check before it becomes a compliance problem.' },
          { term: 'Double handling', detail: 'Bagging individually at order-picking time rather than at unpacking time costs a step on every order rather than once per case.' },
          { term: 'Too many outbound sizes', detail: 'A high-throughput operation loses more to bench decisions than it saves on film.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Storage between the two',
        before:
          'Goods sitting between arrival and dispatch is inventory, and so is the packaging waiting to be used on it. In this climate that second stock needs the same attention as the first: sealed, off the floor, away from external walls and out of direct light, because heat and humidity age the closure adhesive rather than the film. The state-level view of that problem is set out on the ',
        link: { href: '/locations/florida/', anchor: 'Florida page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Should goods be bagged at unpacking or at order picking?',
        a: 'At unpacking, almost always. Bagging once per case as stock is put away costs less than bagging once per order later, and it means a picker handles a ready unit rather than a loose one.',
      },
      {
        q: 'Does printed information on imported packaging need to carry through?',
        a: 'Sometimes, particularly warnings, origin marking and barcodes. Check what applies to your product category before it becomes a compliance question, and send us the required wording so it can be printed rather than stickered.',
      },
      {
        q: 'How many outbound sizes should a break-bulk operation run?',
        a: 'Two or three, with written rules at the bench. A high-throughput operation loses more to packers deciding between sizes than it saves by matching every parcel perfectly.',
      },
    ],
    related: [
      { href: '/locations/florida/', label: 'Florida', reason: 'The state view, covering humidity and seasonality.' },
      { href: '/blank-poly-mailers/', label: 'Blank stock', reason: 'The unbranded line most break-bulk operations run.' },
      { href: '/usa/', label: 'Supplying the United States', reason: 'How a US order moves from quotation to delivery.' },
    ],
    cta: {
      heading: 'Specify an outbound range',
      body: 'Tell us what arrives and what a customer receives. We will specify the smallest outbound range that covers the gap.',
      buttonLabel: 'Quote outbound packaging',
    },
    whatsapp: 'Hi, I break down imported stock in Jacksonville and need outbound packaging.',
  },

  /* ===================================================================== */
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    market: 'usa',
    kind: 'city',
    region: 'South',
    h1: 'Poly Mailers for Fort Worth Businesses',
    title: 'Poly Mailers Fort Worth | Heavy & Awkward Goods',
    description:
      'Poly mailers for Fort Worth businesses — packaging leather, western wear and equipment that is heavier, harder and more awkward than typical apparel.',
    summary: 'Leather, western wear and equipment — heavier and harder than ordinary apparel.',
    intro: [
      'Fort Worth ships a category of goods that sits awkwardly between apparel and hardware. Leather goods, western wear, boots, tack and equipment are all technically soft goods, and none of them behaves like a folded t-shirt.',
      'They are heavier for their size, they have hardware on them, and several of them have a shape that will not fold flat. That combination breaks most standard apparel packaging advice.',
    ],
    angle: 'Heavy, hardware-laden soft goods that behave nothing like ordinary apparel.',
    primaryKeyword: 'poly mailers fort worth',
    supportingKeywords: ['leather goods packaging', 'western wear shipping', 'shipping bags fort worth'],
    sectors: [
      { name: 'Western wear and leather goods', note: 'A long-established regional trade in boots, belts, hats and leatherwork.' },
      { name: 'Equestrian and agricultural supply', note: 'Tack and equipment with buckles, hardware and irregular shapes.' },
      { name: 'Ecommerce and distribution', note: 'A conventional fulfilment base alongside the specialist trades.' },
    ],
    recommended: [
      { slug: '12x15-poly-mailers', why: 'Heavier soft goods need room and film weight rather than a tight fit.' },
      { slug: 'padded-poly-mailers', why: 'Hardware inside a bag behaves like a corner, and cushioning absorbs it.' },
      { slug: '14-5x19-poly-mailers', why: 'Boots, hats and anything that will not fold flat.' },
      { slug: 'materials', why: 'Film weight matters more here than on almost any other apparel category.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'Why leather and hardware break standard advice',
        intro:
          'Four properties that ordinary apparel does not have.',
        items: [
          { term: 'Weight for size', detail: 'A leather belt weighs several times what a garment of the same packed size does, which changes how it behaves when the parcel moves.' },
          { term: 'Hardware', detail: 'Buckles, studs, rivets and eyelets all concentrate force against the film from inside. This is the most common cause of failure in this category.' },
          { term: 'Shapes that resist folding', detail: 'A boot, a hat, a saddle pad. None of them becomes a rectangle, and forcing them into one damages the goods before it damages the bag.' },
          { term: 'Surfaces that mark', detail: 'Finished leather scuffs against film and against itself. Separation matters as much as cushioning.' },
        ],
      },
      {
        kind: 'steps',
        heading: 'Packing hardware-laden goods',
        intro:
          'Five steps that prevent most of the damage in this category.',
        steps: [
          { title: 'Wrap the hardware, not the whole item', detail: 'A buckle wrapped in tissue or a small sleeve stops it working through the film. The rest of the item usually needs nothing.' },
          { title: 'Fold hardware inward', detail: 'So it faces the contents rather than the bag. Costs nothing and removes the most common puncture point.' },
          { title: 'Separate finished surfaces', detail: 'Two leather items rubbing for a journey will mark each other. A layer between them is cheaper than a return.' },
          { title: 'Choose room over compression', detail: 'Heavy goods forced into a tight bag put continuous load on the seal. A size up is the right answer here even though it usually is not.' },
          { title: 'Use a heavier film', detail: 'This is the category where the standard weight genuinely is not enough.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'When a mailer is the wrong choice',
        before:
          'Some goods in this category should not go in a flexible bag at all. A structured hat, a rigid boot box that must arrive sellable, anything with a protrusion that cannot be tucked — all of them are better served by a carton, and adding film weight will not change that. Working out which failure you actually have before specifying anything is set out in the ',
        link: { href: '/resources/protective-mailer-comparison/', anchor: 'protective construction reference' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What film weight suits leather goods and hardware?',
        a: 'Heavier than standard, consistently. Buckles, studs and rivets concentrate force against the film from inside, and this is one of the few soft-goods categories where the lighter specification genuinely is not adequate.',
      },
      {
        q: 'How do I stop buckles puncturing the bag?',
        a: 'Wrap the hardware rather than the whole item, and fold it inward so it faces the contents. Both cost almost nothing and together they remove the most common failure in this category.',
      },
      {
        q: 'Can boots and hats ship in poly mailers?',
        a: 'Soft-structured ones can, with room rather than compression and a heavier film. Anything structured that must arrive undeformed — a rigid hat, a boot box that has to be sellable — belongs in a carton instead.',
      },
    ],
    related: [
      { href: '/locations/texas/', label: 'Texas', reason: 'The state view, covering volume and storage in heat.' },
      { href: '/padded-poly-mailers/', label: 'Padded options', reason: 'Cushioning for hardware and finished surfaces.' },
      { href: '/materials/', label: 'Materials', reason: 'What changes between film weights.' },
    ],
    cta: {
      heading: 'Package heavy soft goods',
      body: 'Tell us what you ship, including anything with hardware on it. We will specify a film weight and format that suit the load.',
      buttonLabel: 'Get a heavy-goods specification',
    },
    whatsapp: 'Hi, I ship leather and western goods from Fort Worth and need suitable mailers.',
  },

  /* ===================================================================== */
  {
    slug: 'columbus',
    name: 'Columbus',
    market: 'usa',
    kind: 'city',
    region: 'Midwest',
    h1: 'Poly Mailers for Columbus Businesses',
    title: 'Poly Mailers Columbus | Sample & Pre-Production Sends',
    description:
      'Poly mailers for Columbus businesses — packaging for samples moving between design, factory and buyer, where a parcel represents a decision.',
    summary: 'Sample sends between design, factory and buyer, where a parcel carries a decision.',
    intro: [
      'Columbus has a concentration of apparel and retail head-office work, and that generates a packaging requirement most operations never think about: sample shipping. Not product going to a customer, but garments moving between a design team, a factory and a buyer.',
      'These parcels are small in number and disproportionate in consequence. A sample that arrives creased, marked or late does not cost a replacement; it costs a decision cycle.',
    ],
    angle: 'Sample and pre-production shipping, where each parcel carries a commercial decision.',
    primaryKeyword: 'poly mailers columbus',
    supportingKeywords: ['sample shipping packaging', 'shipping bags columbus', 'pre production sample bags'],
    sectors: [
      { name: 'Apparel design and buying', note: 'Head-office teams moving samples between designers, factories and buyers.' },
      { name: 'Retail and own-brand development', note: 'Pre-production approval cycles that depend on physical samples arriving in condition.' },
      { name: 'Fulfilment and distribution', note: 'A substantial logistics base alongside the head-office work.' },
    ],
    recommended: [
      { slug: 'custom-frosted-poly-bags', why: 'A sample stays presented and visible without being handled.' },
      { slug: '12x15-poly-mailers', why: 'Room for a garment to travel flat rather than compressed.' },
      { slug: 'padded-poly-mailers', why: 'Where a sample must arrive with no marks at all.' },
      { slug: 'blank-poly-mailers', why: 'Sample shipping needs no branding and often benefits from being anonymous.' },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'A sample is evidence, not stock',
        standfirst: 'Which changes what the packaging has to protect.',
        paragraphs: [
          'A production garment arriving slightly creased is a customer service issue. A sample garment arriving creased is a corrupted piece of evidence, because the person opening it is assessing fit, drape and finish, and a crease from packaging looks exactly like a fault in the make.',
          'That is the reason sample shipping justifies packaging that would be over-specified for production. Room rather than compression, a presentation bag inside the mailer, and enough film weight that the parcel does not deform under other parcels.',
          'It is also why anonymity often helps. A sample travelling between a factory and a buyer is commercially sensitive, and a parcel that announces the brand on the outside is doing the opposite of what is wanted.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What sample shipping needs that production does not',
        items: [
          { term: 'Room, not fit', detail: 'A garment that travels flat with space arrives assessable. One compressed into a tight bag arrives with packaging artefacts.' },
          { term: 'A presentation layer', detail: 'A frosted bag inside the mailer keeps the piece clean and lets it be examined without being handled repeatedly.' },
          { term: 'Identification without disclosure', detail: 'The recipient needs to know which sample it is; the world does not need to know whose it is.' },
          { term: 'Tolerance for repeated handling', detail: 'Samples travel more than once, often to several people, and packaging that survives one journey may not survive four.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Samples that travel repeatedly',
        before:
          'A sample rarely goes to one place. It goes to a buyer, back to a designer, out to a second opinion and sometimes to a factory again, which means the packaging is opened and resealed several times. A double-strip closure turns that into a practical process rather than a series of new bags, and it keeps the sample in the same packaging throughout. The closure options are set out on the ',
        link: { href: '/self-seal-poly-mailers/', anchor: 'closure options page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What packaging suits garment samples?',
        a: 'A presentation bag inside a mailer with room rather than a tight fit, so the piece arrives flat and assessable. A crease caused by packaging looks identical to a fault in the make, which is exactly what a sample is being examined for.',
      },
      {
        q: 'Should sample parcels be branded?',
        a: 'Usually not. Samples travelling between a factory and a buyer are commercially sensitive, and an anonymous parcel is generally preferred. Identification should be enough for the recipient and no more.',
      },
      {
        q: 'How do I package a sample that will be passed around?',
        a: 'With a resealable closure, so it stays in the same packaging through several openings. A double adhesive strip means the sample can go out, come back and go out again without a new bag each time.',
      },
    ],
    related: [
      { href: '/locations/ohio/', label: 'Ohio', reason: 'The state view, covering fulfilment centre requirements.' },
      { href: '/custom-frosted-poly-bags/', label: 'Presentation bags', reason: 'The layer that keeps a sample assessable.' },
      { href: '/industries/clothing-and-apparel/', label: 'Clothing and apparel', reason: 'The wider garment operation.' },
    ],
    cta: {
      heading: 'Package samples properly',
      body: 'Tell us what your samples are and how far they travel. We will specify packaging that keeps them assessable rather than merely intact.',
      buttonLabel: 'Quote sample packaging',
    },
    whatsapp: 'Hi, I ship garment samples from Columbus and need packaging that protects them.',
  },

  /* ===================================================================== */
  {
    slug: 'indianapolis',
    name: 'Indianapolis',
    market: 'usa',
    kind: 'city',
    region: 'Midwest',
    h1: 'Poly Mailers for Indianapolis Businesses',
    title: 'Poly Mailers Indianapolis | Short Transit Advantage',
    description:
      'Poly mailers for Indianapolis businesses — how a central shipping position shortens transits, reduces handling and changes what packaging needs to do.',
    summary: 'How a central position shortens transits and lowers what packaging has to withstand.',
    intro: [
      'Indianapolis sits close to the centre of the national parcel network, which produces an advantage most businesses never quantify: parcels leaving here reach a large share of the country in fewer legs and fewer handling events than parcels leaving a coast.',
      'Fewer handling events means fewer opportunities for damage, and that is a real input into a packaging specification. It is one of the few situations where the honest advice is that you may be over-specifying.',
    ],
    angle: 'A central position reducing handling — and the possibility of over-specifying as a result.',
    primaryKeyword: 'poly mailers indianapolis',
    supportingKeywords: ['shipping bags indianapolis', 'central distribution packaging', 'mailers indiana'],
    sectors: [
      { name: 'National fulfilment', note: 'Operations located centrally to reduce average transit distance across the country.' },
      { name: 'Distribution and logistics', note: 'A dense freight and parcel infrastructure built around the central position.' },
      { name: 'Ecommerce', note: 'Own-channel brands taking advantage of the same reach.' },
    ],
    recommended: [
      { slug: 'economy-poly-mailers', why: 'Fewer handling events genuinely does reduce what the film has to withstand.' },
      { slug: '10x13-poly-mailers', why: 'The general-purpose standard for national fulfilment.' },
      { slug: 'blank-poly-mailers', why: 'Where the operation is fulfilment rather than brand-led.' },
      { slug: 'self-seal-poly-mailers', why: 'Bench speed matters more than protection when transits are short.' },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Handling events, not distance, cause damage',
        paragraphs: [
          'Parcels are not damaged by travelling. They are damaged at handling points — sortation, transfer, loading, unloading — and the number of those is a function of network structure rather than of miles.',
          'A parcel leaving a central position often reaches its destination through fewer of them than one leaving an edge of the network, and that materially reduces the number of opportunities for something to go wrong.',
          'For a business shipping mostly regionally from here, that can justify a lighter specification than a coastal operation would need for the same product — which is not advice most suppliers volunteer, but it is what the evidence supports.',
        ],
      },
      {
        kind: 'steps',
        heading: 'Testing whether you are over-specified',
        intro:
          'Four steps. Do them before ordering, not after.',
        steps: [
          { title: 'Look at your actual damage rate by product', detail: 'Not overall. If damage clusters in one line, the specification is right for the rest.' },
          { title: 'Quote the specification below your current one', detail: 'Alongside your current one, so you can see the difference in real numbers.' },
          { title: 'Run a controlled batch', detail: 'A few thousand parcels on the lighter specification, tracked separately.' },
          { title: 'Compare the damage rate against the saving', detail: 'If the rate does not move, the saving is genuinely free. If it moves at all, work out whether the arithmetic still holds.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Where the saving is not free',
        before:
          'A lighter specification is only sensible where the failure mode it protects against is not present. Anything with hard corners, anything heavy for its size, and anything that ships beyond your regional core all argue for keeping the heavier film. The way to work out which failure you actually have is set out on the ',
        link: { href: '/economy-poly-mailers/', anchor: 'economy specification page' },
        after: ', which includes the arithmetic for deciding whether a saving is real.',
      },
    ],
    faqs: [
      {
        q: 'Does a central location mean I can use lighter packaging?',
        a: 'Sometimes, for regional shipping, because parcels pass through fewer handling points. It is worth testing rather than assuming: quote both specifications, run a controlled batch on the lighter one, and compare the damage rate against the saving.',
      },
      {
        q: 'What actually damages parcels?',
        a: 'Handling events rather than distance. Sortation, transfer and loading are where damage happens, so a route with fewer of them puts less stress on packaging regardless of how far the parcel travels.',
      },
      {
        q: 'Should I run one specification for all destinations?',
        a: 'Most operations do, because the admin of two is rarely worth it. If a large share of your volume is regional and a small share is national, though, the arithmetic is worth checking rather than assuming.',
      },
    ],
    related: [
      { href: '/locations/indiana/', label: 'Indiana', reason: 'The state view, covering specification consistency.' },
      { href: '/economy-poly-mailers/', label: 'Economy specification', reason: 'Where a lighter film is genuinely safe.' },
      { href: '/usa/', label: 'How we supply the US market', reason: 'How a US order moves from quotation to delivery.' },
    ],
    cta: {
      heading: 'Check whether you are over-specified',
      body: 'Send your current specification and your damage rate. We will quote the level below it so you can compare properly.',
      buttonLabel: 'Compare two specifications',
    },
    whatsapp: 'Hi, I ship nationally from Indianapolis and want to review our packaging specification.',
  },

  /* ===================================================================== */
  {
    slug: 'charlotte',
    name: 'Charlotte',
    market: 'usa',
    kind: 'city',
    region: 'Southeast',
    h1: 'Poly Mailers for Charlotte Businesses',
    title: 'Poly Mailers Charlotte | Corporate & Internal Sends',
    description:
      'Poly mailers for Charlotte businesses — corporate gifting, employee packs and internal mailing, where the recipient is a colleague or a client.',
    summary: 'Corporate gifting and internal sends, where the recipient works for you or with you.',
    intro: [
      'A large professional services base produces a packaging requirement that has nothing to do with retail: parcels sent to employees, clients and partners rather than to customers. Onboarding packs, recognition gifts, client sends, event materials.',
      'These are low-volume, high-consequence parcels. Nobody bought anything, so the parcel is not delivering a purchase — it is delivering an impression, usually to someone whose opinion matters commercially.',
    ],
    angle: 'Corporate and internal sends — parcels to employees, clients and partners rather than customers.',
    primaryKeyword: 'poly mailers charlotte',
    supportingKeywords: ['corporate gifting packaging', 'employee pack mailers', 'shipping bags charlotte'],
    sectors: [
      { name: 'Professional and financial services', note: 'Client sends, event materials and internal distribution rather than product shipping.' },
      { name: 'Corporate gifting and recognition', note: 'Onboarding packs and recognition gifts sent to home addresses.' },
      { name: 'Ecommerce and retail', note: 'A conventional commercial base alongside the corporate demand.' },
    ],
    recommended: [
      { slug: 'black-poly-mailers', why: 'A parcel that reads as considered without any print at all.' },
      { slug: 'custom-poly-mailers', why: 'Where a corporate identity should be present on the outside.' },
      { slug: '10x13-poly-mailers', why: 'The size most onboarding and gift packs actually need.' },
      { slug: 'padded-poly-mailers', why: 'Corporate gifts are frequently fragile and always visible if damaged.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'What a corporate send has to get right',
        intro:
          'Four things, and none of them is cost per unit.',
        items: [
          { term: 'It must arrive on a date', detail: 'A start date, an event, an announcement. Unlike a retail order, arriving early or late defeats the purpose entirely.' },
          { term: 'It goes to a home address', detail: 'Which means porch delivery, weather, and a recipient who may not be expecting it.' },
          { term: 'It represents an organisation', detail: 'A damaged or shabby parcel from an employer says something a damaged retail parcel does not.' },
          { term: 'The quantity is exact', detail: 'Fifty new starters means fifty packs. Manufacturing tolerance matters here in a way it rarely does elsewhere.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Low volume, high consequence',
        paragraphs: [
          'Corporate sends are usually measured in dozens or low hundreds, which is a quantity where unit price is almost irrelevant and everything else matters.',
          'That inverts the usual advice. It is worth paying for the heavier film, the cushioned format, the printed bag and the exact colour, because the total spend is small and the cost of a poor impression on fifty new employees or twenty key clients is not.',
          'The one thing to be careful about is quantity. Manufactured runs carry a tolerance either side of the ordered figure, and for a send where every recipient must receive one, that tolerance needs to be discussed rather than discovered.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Getting the count exactly right',
        before:
          'Because a production run does not stop at an exact unit, an order for fifty may deliver slightly more or slightly fewer. For most commercial shipping that is immaterial; for a send where the count is fixed by a headcount it is not. Tell us at enquiry stage that the quantity is exact rather than approximate, and it can be specified accordingly. How tolerance is stated and handled is set out on the ',
        link: { href: '/custom-order-policy/', anchor: 'custom order policy' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Can I order an exact quantity for a corporate send?',
        a: 'Tell us the quantity is fixed rather than approximate at enquiry stage. Manufactured runs carry a tolerance either side of the ordered figure, and where a headcount decides the number it needs to be specified rather than assumed.',
      },
      {
        q: 'Is it worth printing packaging for a small corporate run?',
        a: 'Often, yes, which is the opposite of the usual advice. At low volumes the total spend is small and the cost of a poor impression on a group of employees or clients is not, so the arithmetic favours specifying up rather than down.',
      },
      {
        q: 'What packaging suits sends to home addresses?',
        a: 'Weather-resistant film, a cushioned format if anything inside is fragile, and an opaque outer. A corporate parcel sitting on a porch is subject to exactly the same conditions as a retail one, with more at stake if it fails.',
      },
    ],
    related: [
      { href: '/locations/north-carolina/', label: 'North Carolina', reason: 'The state view, covering contract manufacturing.' },
      { href: '/industries/gift-retail/', label: 'Gift packaging', reason: 'Where the recipient is not the buyer.' },
      { href: '/custom-poly-mailers/', label: 'Custom printed mailers', reason: 'What a printed run involves at small volumes.' },
    ],
    cta: {
      heading: 'Package a corporate send',
      body: 'Tell us the headcount, the date it has to arrive and what goes inside. We will specify for the occasion rather than for unit cost.',
      buttonLabel: 'Quote a corporate order',
    },
    whatsapp: 'Hi, I need packaging for a corporate gifting or onboarding send in Charlotte.',
  },

  /* ===================================================================== */
  {
    slug: 'seattle',
    name: 'Seattle',
    market: 'usa',
    kind: 'city',
    region: 'West',
    h1: 'Poly Mailers for Seattle Businesses',
    title: 'Poly Mailers Seattle | Doorstep Exposure in Rain',
    description:
      'Poly mailers for Seattle businesses — what hours of light rain on a doorstep does to a parcel, and what water resistance actually means over time.',
    summary: 'What hours of steady rain on a doorstep does to a parcel and its label.',
    intro: [
      'Packaging is usually tested against a downpour, which a film mailer handles well. Seattle poses a different question: what happens over six hours of persistent light rain on an unsheltered doorstep, which is a much more common experience here.',
      'The answer is different from the downpour answer, and it mostly concerns the label and the closure rather than the film.',
    ],
    angle: 'Prolonged low-intensity moisture exposure, and what it does to labels and closures.',
    primaryKeyword: 'poly mailers seattle',
    supportingKeywords: ['waterproof mailers seattle', 'rain resistant packaging', 'shipping bags seattle'],
    sectors: [
      { name: 'Outdoor and technical apparel', note: 'A concentration of brands whose customers expect packaging to cope with the weather they design for.' },
      { name: 'Technology and accessories', note: 'Own-channel hardware brands where moisture reaching contents is a total loss.' },
      { name: 'Speciality food and coffee', note: 'Direct-selling producers shipping goods that are ruined rather than marked by damp.' },
    ],
    recommended: [
      { slug: 'poly-bubble-mailers', why: 'A film outer plus a lining that keeps contents away from the wettest surface.' },
      { slug: 'black-poly-mailers', why: 'Water marks show less, and the film sheds rather than absorbs.' },
      { slug: 'self-seal-poly-mailers', why: 'The closure is where prolonged exposure actually gets in.' },
      { slug: '10x13-poly-mailers', why: 'A close fit means less surface area for water to pool against.' },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'What "water resistant" means over six hours',
        standfirst: 'The film is not the weak point. The closure is.',
        paragraphs: [
          'Polyethylene film does not absorb water at all, which is why a poly mailer handles a downpour better than any paper alternative. Sustained exposure does not change that.',
          'What sustained exposure does change is everything around the film. Water pools in the fold at the closure and works along the seal. It gets under the edge of a label and lifts it. It sits in the slack of a loosely packed parcel and stays there.',
          'So the answers are about the closure and the shape rather than the material: a fully pressed seal along its whole length, a parcel packed flat so there is nowhere for water to pool, and a label applied to a taut surface where the edges cannot lift.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Reducing prolonged exposure damage',
        items: [
          { term: 'Press the entire seal, especially the ends', detail: 'Water works along a partial bond from the corners inward, given enough time.' },
          { term: 'Pack flat, with the slack squeezed out', detail: 'A loose parcel has folds, and folds hold water against the closure.' },
          { term: 'Apply labels to a taut area', detail: 'A lifted label edge is where water gets under, and a soaked label is a delivery exception as well as a mess.' },
          { term: 'Consider a lining for sensitive contents', detail: 'A cushioned layer keeps the contents off the surface most likely to be damp.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'What a film mailer cannot do',
        before:
          'A poly mailer is water resistant, not waterproof. It is not sealed, and given long enough with water sitting against the closure, moisture can get in. For contents that would be ruined rather than marked — electronics, paper goods, anything absorbent — the contents need their own protection inside the bag rather than relying on it. The limits of each construction are set out honestly in the ',
        link: { href: '/resources/protective-mailer-comparison/', anchor: 'protective construction reference' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Are poly mailers waterproof in persistent rain?',
        a: 'The film is, entirely. The closure is not sealed, and over hours of exposure water can work along a partially bonded seal or under a lifted label. Pressing the full seal and packing flat address most of it.',
      },
      {
        q: 'How do I stop labels coming off in the rain?',
        a: 'Apply them to a flat, taut area of the parcel where the edges cannot lift. A label across a fold or over slack film lifts at the corner, and once water is under the edge it comes away quickly.',
      },
      {
        q: 'Do I need extra protection for moisture-sensitive contents?',
        a: 'For anything that would be ruined rather than marked, yes. A mailer is water resistant rather than waterproof, so contents that cannot tolerate any moisture need their own barrier inside the bag.',
      },
    ],
    related: [
      { href: '/locations/washington/', label: 'Washington', reason: 'The state view, covering evidence-led sustainability.' },
      { href: '/poly-bubble-mailers/', label: 'Poly bubble mailers', reason: 'A film outer with a lining between contents and surface.' },
      { href: '/self-seal-poly-mailers/', label: 'Closure options', reason: 'Where prolonged moisture actually gets in.' },
    ],
    cta: {
      heading: 'Specify for wet doorsteps',
      body: 'Tell us what you ship and how sensitive it is to moisture. We will specify for hours of exposure rather than for a passing shower.',
      buttonLabel: 'Get a weather specification',
    },
    whatsapp: 'Hi, I ship from Seattle and need packaging that copes with prolonged rain.',
  },

  /* ===================================================================== */
  {
    slug: 'denver',
    name: 'Denver',
    market: 'usa',
    kind: 'city',
    region: 'West',
    h1: 'Poly Mailers for Denver Businesses',
    title: 'Poly Mailers Denver | Altitude & Air Freight Effects',
    description:
      'Poly mailers for Denver businesses — what altitude and air transport do to sealed and inflated packaging, and when it matters.',
    summary: 'What altitude and air freight do to sealed packaging, and when it matters.',
    intro: [
      'Denver raises a packaging question almost nowhere else does: what happens to a sealed parcel when the air pressure around it drops. It matters on the ground here, and it matters again for anything travelling by air.',
      'For most contents it is a curiosity. For a few — anything sealed, inflated or containing liquid — it is a real effect worth designing around.',
    ],
    angle: 'Air pressure changes and their effect on sealed and inflated packaging.',
    primaryKeyword: 'poly mailers denver',
    supportingKeywords: ['altitude packaging', 'air freight packaging', 'shipping bags denver'],
    sectors: [
      { name: 'Outdoor and technical goods', note: 'A dense cluster of brands, many shipping products that are themselves sealed or inflatable.' },
      { name: 'Food and beverage', note: 'Direct-selling producers shipping sealed packaging that responds to pressure change.' },
      { name: 'Health and supplements', note: 'Sealed containers and pouches that behave differently at altitude.' },
    ],
    recommended: [
      { slug: 'poly-bubble-mailers', why: 'Bubble linings contain sealed air, which expands as pressure drops.' },
      { slug: 'padded-poly-mailers', why: 'Comparing cushioning types where an inflated lining is a consideration.' },
      { slug: '12x15-poly-mailers', why: 'Room for contents that expand rather than a tight fit that resists them.' },
      { slug: 'self-seal-poly-mailers', why: 'A seal under expansion pressure is tested differently from one under load.' },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'What actually happens',
        paragraphs: [
          'Air trapped in a sealed space expands as the surrounding pressure drops. That applies to the air inside a sealed food pouch, inside an inflated cushioning system, and inside a mailer sealed at sea level and delivered at altitude.',
          'The effects are usually mild and occasionally not. A sealed snack pouch arrives visibly taut. An air-filled cushion becomes firmer than intended. A tightly sealed mailer with no slack can put its closure under pressure it was not designed to hold.',
          'The mitigations are straightforward: leave a little slack rather than sealing a parcel absolutely rigid, prefer bubble linings over inflated void systems where a parcel will change altitude significantly, and be aware that this affects your suppliers’ packaging inside your parcel as much as it affects yours.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'When this matters and when it does not',
        intro:
          'Four cases where it is worth thinking about, and the honest note that most shipping is not one of them.',
        items: [
          { term: 'Sealed pouches and containers inside the parcel', detail: 'These are the contents that visibly change, and occasionally the ones that fail.' },
          { term: 'Air-filled cushioning', detail: 'Systems inflated at low altitude become firmer higher up, which is usually fine and occasionally too firm.' },
          { term: 'Anything shipped by air', detail: 'Cargo holds are pressurised, but not to sea level, so the effect is present on any air leg.' },
          { term: 'Everything else', detail: 'Soft goods, garments, books, most accessories. The effect exists and does not matter.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Cushioning that does not inflate',
        before:
          'Where a parcel will change altitude significantly and cushioning is required, a bubble-lined mailer behaves more predictably than an inflated void-fill system, because the volume of trapped air is small and distributed rather than concentrated in a few large cells. It is also lighter and takes less space in storage. The construction and how it protects is set out on the ',
        link: { href: '/poly-bubble-mailers/', anchor: 'poly bubble mailer page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Does altitude affect poly mailers?',
        a: 'Only where air is sealed inside something. A mailer around soft goods is unaffected; sealed pouches, inflated cushioning and containers with trapped air all expand as pressure drops, which is usually visible rather than damaging.',
      },
      {
        q: 'Should I leave slack in a parcel shipped by air?',
        a: 'A little, rather than sealing it absolutely rigid. A parcel with no give puts its closure under expansion pressure it was not designed to hold, and a small amount of slack removes the effect entirely.',
      },
      {
        q: 'Is bubble lining better than air pillows at altitude?',
        a: 'It behaves more predictably, because the trapped air is distributed in many small cells rather than concentrated in a few large ones. It is also lighter and stores flat, which matters independently of altitude.',
      },
    ],
    related: [
      { href: '/locations/colorado/', label: 'Colorado', reason: 'The state view, covering lofty outdoor goods.' },
      { href: '/poly-bubble-mailers/', label: 'Poly bubble mailers', reason: 'Cushioning that behaves predictably with pressure change.' },
      { href: '/usa/', label: 'US ordering and delivery', reason: 'How a US order moves from quotation to delivery.' },
    ],
    cta: {
      heading: 'Ship at altitude',
      body: 'Tell us whether anything you ship is sealed, inflated or liquid. We will tell you honestly whether altitude is a consideration for you.',
      buttonLabel: 'Ask about altitude effects',
    },
    whatsapp: 'Hi, I ship from Denver and want to know whether altitude affects my packaging.',
  },

  /* ===================================================================== */
  {
    slug: 'boston',
    name: 'Boston',
    market: 'usa',
    kind: 'city',
    region: 'Northeast',
    h1: 'Poly Mailers for Boston Businesses',
    title: 'Poly Mailers Boston | Receiving Without a Dock',
    description:
      'Poly mailers for Boston businesses — receiving a packaging order into premises with no loading dock, no lift and restricted street access.',
    summary: 'Receiving a bulk packaging order into premises that were not built for one.',
    intro: [
      'Most packaging advice is about the parcels you send. This page is about the delivery you receive, because in Boston that is genuinely the harder problem for a lot of businesses.',
      'Narrow streets, buildings that predate loading docks, restricted parking, upper-floor units with no goods lift. A pallet of packaging is easy to quote and difficult to actually get through the door.',
    ],
    angle: 'Receiving a bulk packaging delivery into constrained premises.',
    primaryKeyword: 'poly mailers boston',
    supportingKeywords: ['shipping bags boston', 'packaging delivery access', 'small premises packaging'],
    sectors: [
      { name: 'Independent retail and studios', note: 'Businesses operating from small units and upper floors in older buildings.' },
      { name: 'Publishing and print', note: 'A long-established base, often in premises that were never built for freight.' },
      { name: 'Ecommerce and direct selling', note: 'Own-channel brands operating from constrained city premises.' },
    ],
    recommended: [
      { slug: 'small-poly-mailers', why: 'Smaller formats mean lighter, more manageable cartons through a difficult door.' },
      { slug: 'blank-poly-mailers', why: 'Ordering smaller quantities more often is easier when there is no artwork commitment.' },
      { slug: '9x12-poly-mailers', why: 'A widely used size that arrives in cartons a person can carry.' },
      { slug: '10x13-poly-mailers', why: 'The general-purpose standard, still in manageable carton sizes.' },
    ],
    blocks: [
      {
        kind: 'steps',
        heading: 'Ordering into constrained premises',
        intro:
          'Five things to tell us at quotation stage, because each one changes how an order is structured.',
        steps: [
          { title: 'Whether there is a loading dock', detail: 'And if not, whether a vehicle can legally stop outside for long enough to unload.' },
          { title: 'Whether there is a lift', detail: 'A pallet to a third-floor unit with no goods lift is a different delivery from one to a ground-floor unit.' },
          { title: 'Carton weight you can actually handle', detail: 'One person carrying cartons up stairs sets a real limit, and it is worth stating it.' },
          { title: 'Any street or timing restrictions', detail: 'Loading windows, permit requirements or narrow access all affect how a delivery is arranged.' },
          { title: 'Whether a split delivery helps', detail: 'Two smaller deliveries are sometimes far easier than one large one, and it is a normal thing to ask for.' },
        ],
      },
      {
        kind: 'bullets',
        heading: 'Trade-offs worth making',
        intro:
          'Where access is the constraint, these are the compromises that usually pay off.',
        items: [
          { term: 'Order more often, in smaller quantities', detail: 'Higher unit price, but a delivery you can actually receive and store.' },
          { term: 'Prefer smaller formats where the range allows', detail: 'Small-format mailers arrive in lighter, more manageable cartons.' },
          { term: 'Ask about carton size, not just quantity', detail: 'How an order is packed matters as much as how much of it there is.' },
          { term: 'Say yes to a split delivery', detail: 'It is a normal arrangement, and it is far cheaper than a failed delivery attempt.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Storage once it is inside',
        before:
          'The other half of the constraint is where it goes once through the door. Packaging needs to be stored flat, sealed and out of direct light, and a damp basement or a radiator-adjacent cupboard will both age the closure adhesive faster than a cool dry room. If storage is genuinely tight, ordering to a season rather than a year is the sensible response. The wider set of first-order considerations is set out on the ',
        link: { href: '/industries/small-businesses/', anchor: 'small business packaging page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Can you deliver packaging without a loading dock?',
        a: 'Yes, but tell us at quotation stage. No dock, no lift, restricted street access and stairs all change how an order should be structured, and it is far easier to plan around than to run into on the day.',
      },
      {
        q: 'Can an order be split across two deliveries?',
        a: 'It is a normal arrangement and often the sensible one where access or storage is constrained. It costs a little more than a single delivery and considerably less than a failed one.',
      },
      {
        q: 'How heavy are cartons of mailers?',
        a: 'It depends on the size and quantity per carton. If one person will be carrying them up stairs, tell us the weight you can manage and the order can be packed to suit rather than to a default.',
      },
    ],
    related: [
      { href: '/locations/massachusetts/', label: 'Massachusetts', reason: 'The state view, covering two-peak demand planning.' },
      { href: '/shipping-and-delivery/', label: 'Shipping and delivery', reason: 'What we confirm about delivery on a quotation.' },
      { href: '/small-poly-mailers/', label: 'Small formats', reason: 'Lighter cartons through a difficult door.' },
    ],
    cta: {
      heading: 'Order into a difficult address',
      body: 'Tell us about your access and storage before we quote. We will structure the order around what you can actually receive.',
      buttonLabel: 'Discuss delivery access',
    },
    whatsapp: 'Hi, I am in Boston with no loading dock and need packaging delivered manageably.',
  },

  /* ===================================================================== */
  {
    slug: 'nashville',
    name: 'Nashville',
    market: 'usa',
    kind: 'city',
    region: 'South',
    h1: 'Poly Mailers for Nashville Businesses',
    title: 'Poly Mailers Nashville | Direct-to-Fan Fulfilment',
    description:
      'Poly mailers for Nashville artists and small labels — packing direct-to-fan orders at home or in a small space, without a warehouse behind you.',
    summary: 'Direct-to-fan fulfilment packed at home rather than in a warehouse.',
    intro: [
      'A lot of merchandise leaving Nashville is packed by the person who made it, or by two people in a room behind a studio. There is no bench, no forklift and no packing station — there is a table, a box of mailers and an evening after a show.',
      'That is a genuinely different operation from a fulfilment centre, and the packaging decisions that suit it are different too.',
    ],
    angle: 'Hand-packing at home or in a small space, without warehouse infrastructure.',
    primaryKeyword: 'poly mailers nashville',
    supportingKeywords: ['direct to fan packaging', 'artist merch mailers', 'shipping bags nashville'],
    sectors: [
      { name: 'Artists and independent labels', note: 'Direct-to-fan sales packed by the artist or a small team.' },
      { name: 'Merchandise and print', note: 'A strong regional base of decorators and printers serving the music economy.' },
      { name: 'Small-batch retail', note: 'Independent businesses shipping modest volumes from small premises.' },
    ],
    recommended: [
      { slug: 'self-seal-poly-mailers', why: 'No tape dispenser, no scissors, one motion. It matters when you are packing by hand.' },
      { slug: '10x13-poly-mailers', why: 'Merchandise is mostly apparel, and this size covers most of it.' },
      { slug: 'blank-poly-mailers', why: 'Low commitment, low storage, and no artwork to approve before you can ship.' },
      { slug: 'black-poly-mailers', why: 'A parcel that looks intentional without any printing at all.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'Packing by hand, at volume, in an evening',
        intro:
          'Four things that make a difference when there is no packing station.',
        items: [
          { term: 'A closure that needs nothing else', detail: 'Peel, fold, press. No tape, no scissors, no second consumable to run out of at eleven at night.' },
          { term: 'One size for almost everything', detail: 'Deciding between sizes is slow when you are packing a hundred by hand. One size and an occasional larger bag is faster.' },
          { term: 'Cartons you can lift', detail: 'Packaging that arrives in manageable cartons matters when it is being carried up stairs rather than moved by pallet truck.' },
          { term: 'Labels that go on straight', detail: 'A flat parcel takes a label cleanly. It is the difference between a stack that looks professional and one that does not.' },
        ],
      },
      {
        kind: 'steps',
        heading: 'Setting up a table to pack a hundred orders',
        intro:
          'Five things worth doing once that save an hour every time.',
        steps: [
          { title: 'Lay the mailers out open, in a row', detail: 'Peeling and folding one at a time is where the time goes. Prepare a batch first.' },
          { title: 'Fold everything before you bag anything', detail: 'Batching by task rather than by order is substantially faster by hand.' },
          { title: 'Print labels in the same order as your pick list', detail: 'It removes the search step, which is the slowest part of hand packing.' },
          { title: 'Seal with a full press, every time', detail: 'The most common failure in hand-packed parcels is a folded but unpressed strip.' },
          { title: 'Keep the inserts pre-counted', detail: 'Cards and stickers counted into stacks of ten before you start.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'When it stops fitting on a table',
        before:
          'At some point direct-to-fan volume outgrows an evening and a table, and that is the moment to think about size standardisation, written rules and a proper bench rather than about a cheaper bag. The decisions that come with that transition are set out on the ',
        link: { href: '/locations/tennessee/', anchor: 'Tennessee state page' },
        after: ', which covers planning merchandise runs at a larger scale.',
      },
    ],
    faqs: [
      {
        q: 'What packaging is easiest to pack by hand?',
        a: 'A self-seal mailer with a single adhesive strip. Peel, fold, press — no tape, no scissors and nothing else to run out of when you are packing a hundred orders in an evening.',
      },
      {
        q: 'How many sizes should a small merch operation stock?',
        a: 'One for almost everything, plus an occasional larger bag. Deciding between sizes is slow when packing by hand, and the film saved by matching every parcel exactly is not worth the time it costs.',
      },
      {
        q: 'Can I get packaging in cartons I can carry?',
        a: 'Tell us how it will be handled on arrival and the order can be packed accordingly. Packaging carried up stairs by one person has a different practical limit from packaging moved by pallet truck.',
      },
    ],
    related: [
      { href: '/locations/tennessee/', label: 'Tennessee', reason: 'The state view, covering merchandise runs at scale.' },
      { href: '/self-seal-poly-mailers/', label: 'Self-seal closures', reason: 'The closure that suits hand packing.' },
      { href: '/locations/austin/', label: 'Austin', reason: 'The same problem in a creator-led economy.' },
    ],
    cta: {
      heading: 'Package a direct-to-fan operation',
      body: 'Tell us roughly how many orders you pack and where you pack them. We will suggest something that suits a table rather than a warehouse.',
      buttonLabel: 'Ask about small-scale packing',
    },
    whatsapp: 'Hi, I pack direct-to-fan merch orders by hand in Nashville and need suitable mailers.',
  },

  /* ===================================================================== */
  {
    slug: 'atlanta',
    name: 'Atlanta',
    market: 'usa',
    kind: 'city',
    region: 'Southeast',
    h1: 'Poly Mailers for Atlanta Businesses',
    title: 'Poly Mailers Atlanta | Weight-Sensitive Air Shipping',
    description:
      'Poly mailers for Atlanta businesses — packaging where every gram is billed, and how weight and dimensions decide the real cost of a parcel.',
    summary: 'Where every gram is billed, and packaging weight is a direct cost.',
    intro: [
      'Atlanta’s air freight infrastructure means a substantial share of parcels leaving here go by air at some point, and air shipping bills weight and volume more aggressively than road does.',
      'That makes packaging weight a direct, visible cost rather than a rounding error, and it is one of the few situations where the difference between a mailer and a carton shows up plainly on an invoice.',
    ],
    angle: 'Weight and dimensional billing — where packaging mass is a direct, measurable cost.',
    primaryKeyword: 'poly mailers atlanta',
    supportingKeywords: ['lightweight shipping bags', 'air freight packaging', 'shipping bags atlanta'],
    sectors: [
      { name: 'Expedited and air-based fulfilment', note: 'Operations built around fast delivery, where air legs are routine rather than unusual.' },
      { name: 'Direct-to-consumer brands', note: 'A large and fast-growing own-channel base shipping nationally.' },
      { name: 'Film and entertainment merchandise', note: 'Production-linked merchandise with short, sharp demand peaks.' },
    ],
    recommended: [
      { slug: 'economy-poly-mailers', why: 'The lightest specification that safely holds your contents is a direct saving on every air parcel.' },
      { slug: '10x13-poly-mailers', why: 'Right-sizing matters more when volume is billed, not just weight.' },
      { slug: 'small-poly-mailers', why: 'The smallest safe size is the cheapest to fly.' },
      { slug: 'padded-poly-mailers', why: 'Where cushioning is necessary, a mailer is far lighter than a carton with void fill.' },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'Where the weight actually is',
        intro:
          'Before optimising the mailer, it is worth knowing what proportion of the parcel it accounts for.',
        caption: 'Typical contributors to a parcel’s billed weight and volume.',
        columns: ['Component', 'Weight contribution', 'Volume contribution'],
        rows: [
          ['Product', 'Usually most of it', 'Usually most of it'],
          ['Poly mailer', 'Very small', 'Very small'],
          ['Carton alternative', 'Substantial', 'Substantial'],
          ['Void fill', 'Small but real', 'Large'],
          ['Inserts and paperwork', 'Small', 'Negligible'],
          ['Air in an oversized parcel', 'None', 'Large, and billed'],
        ],
        outro:
          'The single largest saving available is almost never the bag itself. It is the air inside an oversized one, because dimensional billing charges for volume whether or not anything is in it.',
      },
      {
        kind: 'steps',
        heading: 'Reducing billed weight and volume',
        intro:
          'In order of how much they typically save.',
        steps: [
          { title: 'Right-size the parcel', detail: 'Shipping less air is the biggest lever by a wide margin under dimensional billing.' },
          { title: 'Replace cartons with mailers where the contents allow', detail: 'A carton with void fill weighs several times what a mailer does, and takes far more volume.' },
          { title: 'Remove components', detail: 'Every insert, filler and second bag is billed. Removing one from every parcel compounds quickly.' },
          { title: 'Choose the lightest safe film', detail: 'Real, but small. Do this last, and only where the failure mode is genuinely absent.' },
          { title: 'Weigh and measure a real packed parcel', detail: 'Before and after. Assumptions about parcel weight are wrong more often than not.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'The limit of lightening',
        before:
          'There is a point at which a lighter specification stops saving money, because the damage rate rises faster than the shipping cost falls. That point arrives sooner than most buyers expect, and it arrives immediately for anything with hard corners or real weight. The arithmetic for working out where it sits for your own operation is set out on the ',
        link: { href: '/economy-poly-mailers/', anchor: 'economy specification page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'How much can lighter packaging actually save?',
        a: 'Less than most people expect from the bag itself, and far more from right-sizing. Under dimensional billing, the air inside an oversized parcel costs more than the film ever will.',
      },
      {
        q: 'Are poly mailers cheaper to ship than cartons?',
        a: 'Substantially, for contents that do not need structural protection. A carton plus void fill weighs several times what a mailer does and takes considerably more volume, and both are billed.',
      },
      {
        q: 'Should I use the lightest film available?',
        a: 'Only where the failure mode it protects against is genuinely absent — soft contents, no hard corners, no real weight. Otherwise the damage rate rises faster than the shipping cost falls, and the saving reverses.',
      },
    ],
    related: [
      { href: '/locations/georgia/', label: 'Georgia', reason: 'The state view, covering growth-stage packaging decisions.' },
      { href: '/economy-poly-mailers/', label: 'Economy specification', reason: 'Where lightening is safe and where it is not.' },
      { href: '/size-guide/', label: 'Right-sizing method', reason: 'The largest saving available under dimensional billing.' },
    ],
    cta: {
      heading: 'Reduce billed weight',
      body: 'Send a packed parcel’s weight and dimensions and we will tell you where the saving actually is. It is usually not the bag.',
      buttonLabel: 'Review parcel weight',
    },
    whatsapp: 'Hi, I ship by air from Atlanta and want to reduce billed weight and volume.',
  },
];
