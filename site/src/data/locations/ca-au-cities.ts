import type { LocationPage } from './types';

/**
 * Canadian and Australian cities.
 *
 * Both markets raise issues the US and UK pages do not: cross-border trade,
 * language requirements in Quebec, federal plastics regulation in Canada, and
 * on the Australian side a reversed seasonal calendar and genuinely long
 * domestic freight legs. Nothing here quotes a regulation's text or a carrier's
 * current terms — both change, and both are the reader's to verify.
 */

export const caAuCities: readonly LocationPage[] = [
  /* ================================ CANADA ============================= */
  {
    slug: 'toronto',
    name: 'Toronto',
    market: 'canada',
    kind: 'city',
    region: 'Ontario',
    h1: 'Poly Mailers for Toronto Businesses',
    title: 'Poly Mailers Toronto | Cross-Border Shipping',
    description:
      'Poly mailers for Toronto businesses — packaging for cross-border shipping into the US, and what changes when a parcel leaves the country.',
    summary: 'Cross-border shipping into the US, and what changes when a parcel leaves Canada.',
    intro: [
      'A large share of what leaves Toronto crosses a border, and a cross-border parcel is a different object from a domestic one. It carries paperwork, it may be inspected, and it passes through more custody changes on the way.',
      'Packaging cannot make customs simpler. What it can do is stop the documentation coming adrift, survive being opened and resealed, and avoid drawing attention it does not need.',
    ],
    angle: 'Cross-border parcels — documentation, inspection and additional custody changes.',
    primaryKeyword: 'poly mailers toronto',
    supportingKeywords: ['cross border shipping packaging', 'shipping bags toronto', 'mailers canada'],
    sectors: [
      { name: 'Ecommerce selling into the US', note: 'Own-channel brands with a customer base on both sides of the border.' },
      { name: 'Fashion and apparel', note: 'A substantial base selling direct, much of it cross-border.' },
      { name: 'Distribution and fulfilment', note: 'Operations serving both markets from one location.' },
    ],
    recommended: [
      { slug: '10x13-poly-mailers', why: 'The general-purpose format for cross-border apparel and small goods.' },
      { slug: 'self-seal-poly-mailers', why: 'A parcel opened for inspection should be resealable rather than replaced.' },
      { slug: 'padded-poly-mailers', why: 'More custody changes mean more handling than a domestic parcel sees.' },
      { slug: 'blank-poly-mailers', why: 'Cross-border shipping benefits little from branding on the outer.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'What a border adds to a parcel',
        intro:
          'Four things, all of which the packaging has to accommodate.',
        items: [
          { term: 'Documentation that must stay attached', detail: 'A pouch or label that lifts is a customs problem rather than a cosmetic one, and a flexible bag is a harder surface to attach to than a carton.' },
          { term: 'The possibility of inspection', detail: 'A parcel opened by an authority should still arrive intact, which favours a resealable closure over a single-use one.' },
          { term: 'More custody changes', detail: 'Each transfer is another handling event, and another test of a seal that was only partially pressed.' },
          { term: 'Longer dwell time', detail: 'Parcels can sit at a border facility, which extends exposure to whatever conditions are there.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Attaching documents to a flexible parcel',
        paragraphs: [
          'The single most common cross-border packaging failure is not damage. It is a document pouch or label that comes away, and it produces a delay that is disproportionate to the cost of preventing it.',
          'Two things help, both about shape rather than material. Applying documentation to a flat, taut area rather than across a fold or a bulge, which means packing the parcel flat rather than accepting whatever shape it becomes. And using a slightly heavier film, which flexes less and therefore lifts edges less.',
          'If a shipment requires a documents-enclosed pouch specifically, say so at specification stage. It changes the recommended format and it is easier to plan for than to retrofit.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Ordering packaging across a border',
        before:
          'The same considerations apply to the packaging order itself. Documentation, charges and delivery arrangements are confirmed in writing on your quotation rather than assumed, and they differ by destination and by shipping arrangement. What to settle before placing an order into a market you have not ordered into before is set out in the ',
        link: { href: '/resources/international-ordering-guide/', anchor: 'international ordering guide' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'What packaging suits cross-border shipping?',
        a: 'A parcel packed flat so documents can be applied to a taut surface, a resealable closure in case of inspection, and a slightly heavier film that flexes less. The most common failure is documentation coming adrift rather than damage.',
      },
      {
        q: 'What happens if a parcel is opened at the border?',
        a: 'It should be resealable rather than needing replacement, which is a strong argument for a double-strip closure on cross-border flows. A single-use closure means a parcel opened for inspection continues its journey compromised.',
      },
      {
        q: 'Do you ship packaging orders to Canada?',
        a: 'Yes. Orders are produced to your specification and shipped to your Canadian address, with documentation, charges and arrangements confirmed in writing on the quotation rather than assumed.',
      },
    ],
    related: [
      { href: '/canada/', label: 'Supplying Canada', reason: 'How ordering and delivery work for Canadian customers.' },
      { href: '/resources/international-ordering-guide/', label: 'International ordering', reason: 'What to settle before an order crosses a border.' },
      { href: '/self-seal-poly-mailers/', label: 'Closure options', reason: 'Resealable closures for parcels that may be opened.' },
    ],
    cta: {
      heading: 'Ship across the border',
      body: 'Tell us where parcels go and how they travel. We will specify for the extra handling and the paperwork rather than for a domestic journey.',
      buttonLabel: 'Quote cross-border packaging',
    },
    whatsapp: 'Hi, I ship cross-border from Toronto and need suitable packaging.',
  },

  /* ===================================================================== */
  {
    slug: 'vancouver',
    name: 'Vancouver',
    market: 'canada',
    kind: 'city',
    region: 'British Columbia',
    h1: 'Poly Mailers for Vancouver Businesses',
    title: 'Poly Mailers Vancouver | Plastics Rules in Canada',
    description:
      'Poly mailers for Vancouver businesses — what Canadian single-use plastics regulation does and does not cover, and how to talk about it accurately.',
    summary: 'What Canadian plastics regulation covers, what it does not, and how to be accurate.',
    intro: [
      'Canadian businesses ask us about plastics regulation more than businesses in any other market we serve, and the question is usually a version of the same one: are shipping mailers affected.',
      'The honest answer requires care rather than reassurance. Regulation in this area is specific about which items it covers, it changes, and it differs between federal, provincial and municipal levels. We will tell you what we understand and point you at where to verify it, rather than offering a legal opinion we are not qualified to give.',
    ],
    angle: 'Canadian plastics regulation — what it covers, what it does not, and where to verify.',
    primaryKeyword: 'poly mailers vancouver',
    supportingKeywords: ['plastic packaging regulation canada', 'shipping bags vancouver', 'sustainable mailers canada'],
    sectors: [
      { name: 'Direct-to-consumer brands', note: 'Businesses making customer-facing sustainability commitments in a market that scrutinises them.' },
      { name: 'Outdoor and technical goods', note: 'A strong regional cluster with environmentally engaged customers.' },
      { name: 'Food and speciality retail', note: 'Categories where packaging regulation is most active and most specific.' },
    ],
    recommended: [
      { slug: 'recycled-poly-mailers', why: 'The route that can actually be evidenced with feedstock documentation.' },
      { slug: 'sustainable-poly-mailers', why: 'Comparing the three routes on what each requires you to hold.' },
      { slug: 'compostable-poly-mailers', why: 'Where a disposal route genuinely exists for your customers.' },
      { slug: '10x13-poly-mailers', why: 'Right-sizing is the reduction you can evidence without any regulation being involved.' },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'What we can and cannot tell you',
        standfirst: 'We supply packaging. We are not your regulatory adviser.',
        paragraphs: [
          'Canadian regulation of single-use plastics is written around specified categories of item, and shipping mailers have not generally been within the categories addressed. That is our understanding rather than a legal position, and it is exactly the kind of thing that changes.',
          'Provincial and municipal rules add another layer, and extended producer responsibility obligations differ across the country. Whether any of those apply to your packaging depends on your business, your volumes and where you sell.',
          'So the useful thing we can offer is not reassurance. It is documentation: what the film is, what feedstock it uses, and what the supplier can evidence, so that whoever does advise you has something factual to work from.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What to establish, in order',
        intro:
          'Four steps that put you in a defensible position regardless of how the rules move.',
        items: [
          { term: 'Confirm what actually applies to you', detail: 'Federal, provincial and municipal rules differ, and so do producer responsibility obligations. This is a question for your own adviser rather than your packaging supplier.' },
          { term: 'Get the material documented', detail: 'Feedstock type, proportion and the supporting document, for the specific film supplied to you.' },
          { term: 'Check any wording you print', detail: 'Environmental claims are regulated separately from the material itself, and printing an unsupportable claim is a distinct risk.' },
          { term: 'Reduce what you can measure', detail: 'Right-sizing and component reduction are defensible whatever the regulatory position, because you can evidence them from your own data.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Recyclability in practice',
        before:
          'Whatever the regulatory position, the practical question your customers face is where a mailer can actually be taken. Flexible film is generally not accepted in household kerbside collection across the markets we serve, and is instead collected at store drop-off points where those exist, with availability varying by area. Printing an instruction that works where your customers live is more useful than a symbol implying a collection they cannot reach, and the distinctions behind that are set out in the ',
        link: { href: '/resources/sustainable-mailer-terminology-guide/', anchor: 'terminology guide' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Are poly mailers affected by Canadian single-use plastics rules?',
        a: 'Our understanding is that shipping mailers have not generally fallen within the specified categories addressed, but that is not a legal opinion and the position changes. Confirm what applies to your business with your own adviser; we will supply the material documentation they need.',
      },
      {
        q: 'Can you tell me whether my packaging is compliant?',
        a: 'No, and any supplier who tells you otherwise is overreaching. What we can do is document what the film is and what the supplier can evidence, so that whoever advises you is working from facts rather than from a marketing claim.',
      },
      {
        q: 'Are poly mailers recyclable in Canada?',
        a: 'Flexible film is generally not accepted kerbside and is instead collected at store drop-off points where those exist, with availability varying by area. Check what applies where your customers live before printing any disposal instruction.',
      },
    ],
    related: [
      { href: '/canada/', label: 'How we supply the Canadian market', reason: 'How ordering and delivery work for Canadian customers.' },
      { href: '/sustainability/', label: 'Our position on claims', reason: 'What we will and will not state, and why.' },
      { href: '/recycled-poly-mailers/', label: 'Recycled content', reason: 'The route that can actually be documented.' },
    ],
    cta: {
      heading: 'Get the material documented',
      body: 'Tell us what you need to be able to show and to whom. We will supply what the film supplier can evidence, and say plainly where nothing exists.',
      buttonLabel: 'Request material documentation',
    },
    whatsapp: 'Hi, I need documentation on poly mailer materials for a Vancouver business.',
  },

  /* ===================================================================== */
  {
    slug: 'montreal',
    name: 'Montreal',
    market: 'canada',
    kind: 'city',
    region: 'Quebec',
    h1: 'Poly Mailers for Montreal Businesses',
    title: 'Poly Mailers Montreal | French Language Packaging',
    description:
      'Poly mailers for Montreal businesses — packaging that meets French-language expectations in Quebec, and what that means for artwork and layout.',
    summary: 'French-language packaging requirements, and what they do to artwork and layout.',
    intro: [
      'Quebec has language legislation that affects commercial communication, including packaging, and businesses selling here plan artwork around it rather than translating afterwards.',
      'We are packaging manufacturers rather than legal advisers, so what follows is about the practical consequences for artwork and layout. What the law requires of your specific business is a question for someone qualified to answer it.',
    ],
    angle: 'French-language packaging in Quebec — the layout consequences of two languages.',
    primaryKeyword: 'poly mailers montreal',
    supportingKeywords: ['french packaging quebec', 'bilingual mailers canada', 'shipping bags montreal'],
    sectors: [
      { name: 'Retail and consumer goods', note: 'Businesses whose packaging carries customer-facing wording rather than a logo alone.' },
      { name: 'Fashion and apparel', note: 'A significant local design and retail base selling into and beyond Quebec.' },
      { name: 'Food and speciality products', note: 'Categories where product information on packaging matters most.' },
    ],
    recommended: [
      { slug: 'custom-poly-mailers', why: 'Required wording has to be printed rather than applied as a sticker if it is doing real work.' },
      { slug: '12x15-poly-mailers', why: 'Two languages need genuine room, and a larger panel is worth more than a clever layout.' },
      { slug: 'white-poly-mailers', why: 'The base with the widest ink latitude, which matters when text carries the message.' },
      { slug: '10x13-poly-mailers', why: 'The general-purpose format where wording is limited to essentials.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'Practical consequences for artwork',
        intro:
          'Four effects, all of which are easier to design for than to retrofit.',
        items: [
          { term: 'Copy volume roughly doubles', detail: 'And unevenly, because the same sentence is usually longer in one language than the other. Symmetrical layouts break.' },
          { term: 'Prominence matters, not just presence', detail: 'Language rules commonly address how prominently each language appears, not only whether it is there.' },
          { term: 'Type size comes under pressure', detail: 'Which is the opposite of what flexible film wants. Usually the answer is less copy rather than smaller type.' },
          { term: 'Proofreading needs a native reader of each', detail: 'We print exactly what is on the approved proof and have no way to know a phrase reads oddly.' },
        ],
      },
      {
        kind: 'steps',
        heading: 'Laying out two languages on a mailer',
        intro:
          'Four approaches, in rough order of how well they work on this substrate.',
        steps: [
          { title: 'Split across faces', detail: 'One language on the front, the other on the back. Each gets full-size type and neither is crowded.' },
          { title: 'Reduce the copy rather than the type', detail: 'On film, small type loses its counters. Cutting words is almost always better than shrinking them.' },
          { title: 'Use symbols where meaning allows', detail: 'Care icons and handling marks carry meaning without wording in either language.' },
          { title: 'Move detail to a printed insert', detail: 'A card can carry both languages at readable size in a way a bag panel cannot.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'What we will and will not decide for you',
        before:
          'We will lay out whatever wording you supply, show it to you on a proof, and print exactly what you approve. What we will not do is decide what your packaging is required to say, because that depends on your business and your obligations rather than on your packaging. The technical limits that shape what is achievable are set out on the ',
        link: { href: '/artwork-guidelines/', anchor: 'artwork specification page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Can you print packaging in French and English?',
        a: 'Yes. The practical constraint is space rather than process: copy roughly doubles while the panel does not, so most bilingual layouts sit most comfortably split across the front and back rather than crowded onto one face.',
      },
      {
        q: 'Do you know what Quebec language rules require?',
        a: 'We are packaging manufacturers rather than legal advisers. We will print exactly what you supply and approve; what your packaging is required to say is a question for someone qualified to advise on it.',
      },
      {
        q: 'Who checks the French copy?',
        a: 'You do, and it should be a native reader rather than a translation tool. We print what is on the approved proof and have no way to know that a phrase is awkward or wrong.',
      },
    ],
    related: [
      { href: '/canada/', label: 'Canadian ordering and delivery', reason: 'How ordering and delivery work for Canadian customers.' },
      { href: '/artwork-guidelines/', label: 'Artwork specification', reason: 'The legibility limits that shape a bilingual layout.' },
      { href: '/custom-poly-mailers/', label: 'Custom printed mailers', reason: 'The process for a printed run.' },
    ],
    cta: {
      heading: 'Print in two languages',
      body: 'Send both versions of your copy and we will lay them out so each stays readable at the size film can actually hold.',
      buttonLabel: 'Quote bilingual printing',
    },
    whatsapp: 'Hi, I need French and English printed poly mailers for a Montreal business.',
  },

  /* ===================================================================== */
  {
    slug: 'calgary',
    name: 'Calgary',
    market: 'canada',
    kind: 'city',
    region: 'Alberta',
    h1: 'Poly Mailers for Calgary Businesses',
    title: 'Poly Mailers Calgary | Packaging in Deep Cold',
    description:
      'Poly mailers for Calgary businesses — how sustained cold changes film behaviour and adhesive performance, and what to do about it.',
    summary: 'How sustained cold changes film behaviour and adhesive performance.',
    intro: [
      'Cold does two things to a poly mailer, and only one of them is widely understood. The film becomes less flexible, which is the obvious effect. The adhesive bonds less readily, which is the one that actually causes failures.',
      'In a climate with sustained deep cold rather than occasional frost, both effects are present for months rather than days, and packaging practice has to account for them.',
    ],
    angle: 'Sustained deep cold — its effect on film flexibility and adhesive bonding.',
    primaryKeyword: 'poly mailers calgary',
    supportingKeywords: ['cold weather packaging', 'shipping bags calgary', 'winter shipping mailers'],
    sectors: [
      { name: 'Energy and industrial supply', note: 'B2B shipping where packaging is practical and conditions are demanding.' },
      { name: 'Outdoor and technical goods', note: 'Products designed for the climate, shipped through it.' },
      { name: 'Ecommerce and direct selling', note: 'Own-channel businesses shipping year round in a demanding climate.' },
    ],
    recommended: [
      { slug: 'materials', why: 'Film weight matters more where cold reduces flexibility.' },
      { slug: 'self-seal-poly-mailers', why: 'The closure is where cold weather failures actually appear.' },
      { slug: '12x15-poly-mailers', why: 'Room rather than compression, because cold film is less forgiving of stretch.' },
      { slug: 'padded-poly-mailers', why: 'Cushioning where contents will be handled at temperatures that make everything more brittle.' },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Why cold seals fail',
        standfirst: 'The adhesive is the component that notices first.',
        paragraphs: [
          'Pressure-sensitive adhesive works by flowing slightly into contact with a surface under pressure. Cold reduces how readily it does that, so a seal made on cold film with cold hands in a cold room is weaker than the identical action performed warm.',
          'The failure this produces is characteristic: parcels that sealed fine at the bench and arrive open, with no obvious damage and an intact-looking strip. The bond was partial from the start.',
          'The fix costs nothing. Bring packaging into a heated space before use rather than working straight from a cold store, and give the strip a longer, firmer press than you would in summer. Warming the room is not the same as warming the stock; a carton takes hours to come up to temperature.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Cold-weather practice',
        items: [
          { term: 'Warm the stock, not just the room', detail: 'A carton brought in from a cold store is still cold in the middle for hours. Bring it in the night before.' },
          { term: 'Press longer and harder', detail: 'Cold adhesive needs more pressure and more time to form the same bond.' },
          { term: 'Avoid tight fits in winter', detail: 'Cold film stretches less before it splits, so a parcel that was fine in July can fail in January at the same size.' },
          { term: 'Consider a heavier film seasonally', detail: 'Some operations run a heavier specification through the cold months and a standard one the rest of the year.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Storage between seasons',
        before:
          'Cold storage does not damage packaging in the way heat does — the adhesive is affected while it is cold rather than permanently degraded, and it recovers as it warms. That means the sensible approach is about handling rather than about avoiding cold storage entirely: keep stock somewhere it can be brought inside ahead of use. The wider material behaviour is set out on the ',
        link: { href: '/materials/', anchor: 'materials page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Why do poly mailers come open in winter?',
        a: 'Because adhesive bonds less readily to cold film. A seal made on cold stock in a cold room is weaker than the identical action performed warm, and the parcel arrives open with an intact-looking strip.',
      },
      {
        q: 'Does cold damage packaging permanently?',
        a: 'No, unlike heat. Adhesive performance is reduced while it is cold and recovers as it warms, so the answer is to bring stock into a heated space before use rather than to avoid cold storage.',
      },
      {
        q: 'Should I use a heavier film in winter?',
        a: 'Some operations do, because cold film stretches less before splitting and a tight fit that worked in summer can fail in deep cold. Running a heavier specification seasonally is a reasonable response if you see winter failures.',
      },
    ],
    related: [
      { href: '/canada/', label: 'Poly mailer supply across Canada', reason: 'How ordering and delivery work for Canadian customers.' },
      { href: '/self-seal-poly-mailers/', label: 'Closure options', reason: 'Where cold-weather failures actually appear.' },
      { href: '/materials/', label: 'Materials', reason: 'What changes between film weights.' },
    ],
    cta: {
      heading: 'Specify for winter',
      body: 'Tell us whether you see more failures in cold months. We will look at the film weight and the sealing practice together rather than assuming one or the other.',
      buttonLabel: 'Ask about cold-weather packaging',
    },
    whatsapp: 'Hi, I ship through Calgary winters and get seal failures. Can you advise?',
  },

  /* ===================================================================== */
  {
    slug: 'ottawa',
    name: 'Ottawa',
    market: 'canada',
    kind: 'city',
    region: 'Ontario',
    h1: 'Poly Mailers for Ottawa Businesses',
    title: 'Poly Mailers Ottawa | National Distribution Geography',
    description:
      'Poly mailers for Ottawa businesses — serving a country of enormous distances from one location, and what that does to packaging decisions.',
    summary: 'Serving a very large country from one place, where transit varies enormously.',
    intro: [
      'A business shipping nationally from Ottawa serves a delivery geography with more variation than almost any other market. A parcel to Montreal and a parcel to Yellowknife have almost nothing in common beyond leaving from the same bench.',
      'That variation is the packaging problem. Specify for the short journey and the long ones fail; specify for the long journey and you over-pay on the majority.',
    ],
    angle: 'Enormous variation in transit within one country, and how to specify across it.',
    primaryKeyword: 'poly mailers ottawa',
    supportingKeywords: ['national shipping canada', 'shipping bags ottawa', 'remote delivery packaging'],
    sectors: [
      { name: 'National distribution', note: 'Operations serving the whole country from a single eastern location.' },
      { name: 'Institutional and organisational supply', note: 'Membership mailings and document distribution across a wide geography.' },
      { name: 'Ecommerce', note: 'Own-channel brands with customers spread across every region.' },
    ],
    recommended: [
      { slug: '10x13-poly-mailers', why: 'A single standard that can be specified for the harder routes without over-paying badly on the easy ones.' },
      { slug: 'poly-bubble-mailers', why: 'For the proportion of volume that travels far and is handled repeatedly.' },
      { slug: 'self-seal-poly-mailers', why: 'Every additional handling point is another test of the closure.' },
      { slug: 'blank-poly-mailers', why: 'Where distribution rather than brand is the operation.' },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'One specification or two',
        intro:
          'Where transit varies this much, it is worth deciding deliberately rather than defaulting.',
        caption: 'A single national specification compared with splitting by route.',
        columns: ['', 'One specification', 'Two specifications'],
        rows: [
          ['Bench decisions', 'None', 'One per order, made under pressure'],
          ['Cost on short routes', 'Slightly over-specified', 'Matched'],
          ['Cost on long routes', 'Matched', 'Matched'],
          ['Reorder admin', 'One line', 'Two'],
          ['Risk of the wrong bag on a long route', 'None', 'Real'],
        ],
        outro:
          'For most operations one specification set for the harder route wins, because the unit-cost difference is small and a wrong choice on a long route costs far more than the saving.',
      },
      {
        kind: 'bullets',
        heading: 'What long domestic routes add',
        items: [
          { term: 'More handling events', detail: 'Consolidation and transfer points, each one another test of a partially pressed seal.' },
          { term: 'Wider temperature swings', detail: 'A parcel can pass through very different conditions within one journey.' },
          { term: 'Longer exposure to vibration', detail: 'Which works contents loose and abrades touching surfaces over hours of road.' },
          { term: 'Harder recovery from a failure', detail: 'A damaged parcel to a remote address is a much longer problem than one across town.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Specify for the failure you cannot afford',
        before:
          'The useful question is not which specification suits the average parcel, but which failure you would least like to have. For most national distributors that is a damaged delivery to a remote address, because it is the most expensive to put right and the most visible to the customer. Specifying against that case across the whole flow usually costs less than it appears to. The arithmetic for working that out is set out on the ',
        link: { href: '/economy-poly-mailers/', anchor: 'economy specification page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Should I run different packaging for remote deliveries?',
        a: 'Usually not. The unit-cost difference between specifications is small, and running two lines adds bench decisions that get made wrong under pressure. Specifying for the harder route across the whole flow is generally cheaper overall.',
      },
      {
        q: 'What changes on a long domestic route?',
        a: 'More handling events, wider temperature variation and hours of vibration. All three argue for a close fit and a fully pressed seal rather than simply a heavier film.',
      },
      {
        q: 'Do you ship packaging orders across Canada?',
        a: 'Yes. Orders are produced to your specification and shipped to your address, with the arrangements and any documentation confirmed in writing on the quotation.',
      },
    ],
    related: [
      { href: '/canada/', label: 'Working with Canadian senders', reason: 'How ordering and delivery work for Canadian customers.' },
      { href: '/locations/glasgow/', label: 'Glasgow', reason: 'The same remote-delivery problem in another market.' },
      { href: '/self-seal-poly-mailers/', label: 'Closure options', reason: 'Why sealing matters more with repeated handling.' },
    ],
    cta: {
      heading: 'Specify across a wide geography',
      body: 'Tell us the spread of where your parcels go. We will specify against the route you cannot afford to fail rather than the average one.',
      buttonLabel: 'Get a national specification',
    },
    whatsapp: 'Hi, I ship nationally across Canada from Ottawa and need packaging advice.',
  },

  /* =============================== AUSTRALIA =========================== */
  {
    slug: 'sydney',
    name: 'Sydney',
    market: 'australia',
    kind: 'city',
    region: 'New South Wales',
    h1: 'Poly Mailers for Sydney Businesses',
    title: 'Poly Mailers Sydney | Planning Around Lead Time',
    description:
      'Poly mailers for Sydney businesses — planning packaging orders around genuine distance from suppliers, and holding the right amount of stock.',
    summary: 'Planning orders around real distance from suppliers, and how much stock to hold.',
    intro: [
      'Australian businesses order packaging differently from businesses in other markets, and the reason is simple geography. Distance from suppliers makes lead time a real planning input rather than an afterthought, and running out is a longer problem than it is elsewhere.',
      'That pushes in one direction: hold more, order earlier, and choose specifications that do not depend on a fast top-up.',
    ],
    angle: 'Lead time as a planning input — how distance changes ordering and stockholding.',
    primaryKeyword: 'poly mailers sydney',
    supportingKeywords: ['shipping bags sydney', 'mailers australia', 'custom poly mailers sydney'],
    sectors: [
      { name: 'Ecommerce and direct selling', note: 'The largest concentration of online retail in the country.' },
      { name: 'Fashion and apparel', note: 'A substantial design and retail base selling nationally and internationally.' },
      { name: 'Fulfilment and distribution', note: 'Operations serving the east coast and beyond from one location.' },
    ],
    recommended: [
      { slug: '10x13-poly-mailers', why: 'A single standard is easier to forecast and hold than a range.' },
      { slug: 'blank-poly-mailers', why: 'No artwork approval in the chain removes the step most likely to delay a delivery.' },
      { slug: 'economy-poly-mailers', why: 'Holding more stock is easier to justify when the unit cost is lower.' },
      { slug: 'custom-poly-mailers', why: 'Where a printed run is wanted, planning it well ahead is the whole game.' },
    ],
    blocks: [
      {
        kind: 'steps',
        heading: 'Ordering when lead time is real',
        intro:
          'Five habits that stop a packaging order becoming a supply problem.',
        steps: [
          { title: 'Work from a date, not a duration', detail: 'Fix the date stock must be on the bench and work backwards through production and approval.' },
          { title: 'Hold a genuine buffer', detail: 'Not a nominal one. The cost of holding stock is far lower than the cost of not being able to ship.' },
          { title: 'Settle artwork long before you need it', detail: 'Proof approval is the step most within your control and the one that most often delays delivery.' },
          { title: 'Keep a plain fallback', detail: 'A stock of unprinted bags means a delayed printed run never stops orders leaving.' },
          { title: 'Reorder at a level, not a date', detail: 'Set a stock level that triggers reordering rather than relying on a calendar reminder.' },
        ],
      },
      {
        kind: 'bullets',
        heading: 'Why holding more makes sense here',
        intro:
          'The usual advice about minimising stock assumes a fast top-up. That assumption is weaker in this market.',
        items: [
          { term: 'Running out is a longer problem', detail: 'The recovery from a stockout takes longer than it would in a market close to its suppliers.' },
          { term: 'The unit cost falls with quantity', detail: 'Which offsets part of the cost of holding more, if you have the space.' },
          { term: 'Storage conditions are manageable', detail: 'Provided stock is kept cool, dry and out of sunlight, holding more is a storage question rather than a spoilage one.' },
          { term: 'It removes urgency from every decision', detail: 'A business with a buffer can take time over a specification change rather than rushing it.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'What we confirm before you commit',
        before:
          'Because timing matters more here, we confirm a schedule in writing for your specific order rather than quoting a general figure, and we tell you which step is the critical path. For most printed orders it is proof approval rather than production, which means the date is largely in your hands. What is confirmed for each market is set out on the ',
        link: { href: '/shipping-and-delivery/', anchor: 'shipping and delivery page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'How much packaging should an Australian business hold?',
        a: 'More than the usual advice suggests, because that advice assumes a fast top-up. A genuine buffer costs less than a stockout, provided you can store it cool, dry and out of direct sunlight.',
      },
      {
        q: 'How far ahead should I order?',
        a: 'Work backwards from the date stock must be on the bench rather than forwards from today, and settle artwork well before that. We confirm the schedule for your specific order in writing so you are planning against a real date.',
      },
      {
        q: 'Do you ship packaging orders to Australia?',
        a: 'Yes. Orders are produced to your specification and shipped to your Australian address, with arrangements, documentation and timing confirmed in writing on your quotation.',
      },
    ],
    related: [
      { href: '/australia/', label: 'Supplying Australia', reason: 'How ordering and delivery work for Australian customers.' },
      { href: '/resources/international-ordering-guide/', label: 'International ordering', reason: 'What to settle before an order crosses a border.' },
      { href: '/blank-poly-mailers/', label: 'Blank stock', reason: 'The fallback that keeps orders leaving.' },
    ],
    cta: {
      heading: 'Plan a lead time',
      body: 'Tell us when stock has to be on your bench and we will work backwards, confirm the schedule, and tell you which step is the critical path.',
      buttonLabel: 'Plan an Australian order',
    },
    whatsapp: 'Hi, I am in Sydney and need to plan a poly mailer order around lead times.',
  },

  /* ===================================================================== */
  {
    slug: 'melbourne',
    name: 'Melbourne',
    market: 'australia',
    kind: 'city',
    region: 'Victoria',
    h1: 'Poly Mailers for Melbourne Businesses',
    title: 'Poly Mailers Melbourne | Independent Fashion Supply',
    description:
      'Poly mailers for Melbourne businesses — packaging for independent fashion and design labels working at deliberately modest volumes.',
    summary: 'Independent fashion at deliberately modest volumes, with high presentation standards.',
    intro: [
      'Melbourne has a design and independent fashion culture that produces a particular kind of packaging buyer: high standards, considered aesthetics, and volumes that are small by choice rather than by circumstance.',
      'That combination rules out both ends of the usual advice. Cheap packaging undermines the product, and a large printed run makes no sense for a label producing in small batches.',
    ],
    angle: 'High presentation standards at deliberately small volumes.',
    primaryKeyword: 'poly mailers melbourne',
    supportingKeywords: ['fashion packaging melbourne', 'shipping bags melbourne', 'boutique mailers australia'],
    sectors: [
      { name: 'Independent fashion and design', note: 'Small-batch labels with a strong visual identity and modest production runs.' },
      { name: 'Craft and homeware', note: 'Makers selling direct, often through their own channels and local retail.' },
      { name: 'Beauty and personal care', note: 'Independent brands with the same standards and the same scale constraints.' },
    ],
    recommended: [
      { slug: 'black-poly-mailers', why: 'A premium signal with no print cost, which is the right trade at this scale.' },
      { slug: 'light-pink-poly-mailers', why: 'Tonal options for labels whose palette is softer than black.' },
      { slug: 'blank-poly-mailers', why: 'Coloured stock plus a printed seal is the small-batch answer to branding.' },
      { slug: 'custom-frosted-poly-bags', why: 'A presentation layer that costs less than printing the outer bag.' },
    ],
    blocks: [
      {
        kind: 'compare',
        heading: 'Where the money goes at small volume',
        intro:
          'Ranked by presentation gained per dollar spent, at genuinely small quantities.',
        caption: 'Presentation options ranked for a small-batch label.',
        columns: ['Option', 'Cost at low volume', 'What it buys'],
        rows: [
          ['Coloured or black film', 'Small premium', 'Immediate recognition, no artwork needed'],
          ['Printed seal sticker', 'Low, reorders in tiny runs', 'The mark, changeable at will'],
          ['Presentation bag inside', 'Moderate', 'A garment that arrives presented rather than loose'],
          ['Printed card', 'Low', 'The voice, and the thing customers keep'],
          ['Full printed mailer', 'High per unit at this scale', 'A branded parcel, at a cost that is hard to justify yet'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'What small-batch fashion needs from packaging',
        items: [
          { term: 'To match the product’s standard', detail: 'A considered garment in careless packaging reads as a contradiction, and customers notice it immediately.' },
          { term: 'To photograph without styling', detail: 'Matte finishes and considered colours photograph evenly. Gloss white needs lighting to look right.' },
          { term: 'Not to commit a season ahead', detail: 'Small-batch production means the range moves, and packaging that outlives it is waste.' },
          { term: 'To handle returns without a second bag', detail: 'Sizing returns are certain in fashion at any scale.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Presentation inside the mailer',
        before:
          'For a label whose product justifies it, bagging the garment before it goes in the mailer changes the arrival entirely: the piece is presented rather than loose, it stays clean, and the customer keeps a resealable bag rather than discarding everything. It costs less than printing the outer and does more visible work at this scale. The format is set out on the ',
        link: { href: '/custom-frosted-poly-bags/', anchor: 'garment presentation bag page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Can a small label order printed mailers?',
        a: 'Yes, at a higher unit price because setup spreads across fewer units. Many labels at this scale get more visible effect from coloured film, a printed seal and something presented inside than from printing the bag itself.',
      },
      {
        q: 'What colour suits an independent fashion label?',
        a: 'Black and blush are the two most requested, for opposite reasons — one reads premium and hides handling marks completely, the other reads considered and soft. Both work without any printing.',
      },
      {
        q: 'How much should I order at small-batch scale?',
        a: 'A season rather than a year. The unit price is higher, and packaging that outlives a range you have already moved on from is waste however cheaply it was bought.',
      },
    ],
    related: [
      { href: '/australia/', label: 'How we supply the Australian market', reason: 'How ordering and delivery work for Australian customers.' },
      { href: '/industries/fashion-boutiques/', label: 'Boutique packaging', reason: 'The same problem, addressed in depth.' },
      { href: '/black-poly-mailers/', label: 'Black poly mailers', reason: 'The premium signal with no print cost.' },
    ],
    cta: {
      heading: 'Package a small-batch label',
      body: 'Tell us your palette and roughly how many parcels a month. We will suggest where to spend and quote a season rather than a year.',
      buttonLabel: 'Ask about small-batch options',
    },
    whatsapp: 'Hi, I run an independent fashion label in Melbourne and need considered packaging.',
  },

  /* ===================================================================== */
  {
    slug: 'brisbane',
    name: 'Brisbane',
    market: 'australia',
    kind: 'city',
    region: 'Queensland',
    h1: 'Poly Mailers for Brisbane Businesses',
    title: 'Poly Mailers Brisbane | Southern Hemisphere Calendar',
    description:
      'Poly mailers for Brisbane businesses — planning seasonal packaging around a reversed calendar, where peak retail happens in summer.',
    summary: 'Planning seasonal packaging around a reversed calendar, with peak retail in summer.',
    intro: [
      'Most packaging advice, and most seasonal design, is written on a northern-hemisphere calendar. Winter imagery for the December peak, back-to-school in September, spring campaigns in March.',
      'None of that maps onto an Australian trading year, and the mismatch matters more than it sounds — it affects when to order, what the artwork should show, and how long stock sits before it is used.',
    ],
    angle: 'A reversed seasonal calendar and what it does to campaign packaging planning.',
    primaryKeyword: 'poly mailers brisbane',
    supportingKeywords: ['seasonal packaging australia', 'shipping bags brisbane', 'christmas mailers australia'],
    sectors: [
      { name: 'Retail and gift', note: 'Businesses whose peak arrives with summer rather than winter.' },
      { name: 'Fashion and swimwear', note: 'Categories where the seasonal calendar is inverted from northern design conventions.' },
      { name: 'Ecommerce and direct selling', note: 'Own-channel brands running campaigns on a local rather than an imported calendar.' },
    ],
    recommended: [
      { slug: 'christmas-poly-mailers', why: 'The peak window, planned around a summer rather than a winter one.' },
      { slug: 'seasonal-poly-mailers', why: 'Planning a year of campaigns on the calendar you actually trade on.' },
      { slug: 'blank-poly-mailers', why: 'The fallback that means a seasonal shortfall never stops orders leaving.' },
      { slug: 'colored-poly-mailers', why: 'A colour per campaign is cheaper than a printed run per campaign.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'What flips on a southern calendar',
        intro:
          'Four planning consequences that catch businesses using imported templates.',
        items: [
          { term: 'The peak is in summer', detail: 'Which means ordering during the quietest part of the year, and holding stock through warm months rather than cool ones.' },
          { term: 'Winter imagery reads oddly', detail: 'Snow and pine on a December parcel arriving in heat is a mismatch customers notice, even if they do not comment.' },
          { term: 'Storage conditions at ordering time are the worst of the year', detail: 'Stock ordered ahead of a summer peak sits through the warmest weeks, which is when adhesive ages fastest.' },
          { term: 'Northern supplier calendars do not match yours', detail: 'Suppliers running on a northern year are busiest when you need them least, and vice versa.' },
        ],
      },
      {
        kind: 'steps',
        heading: 'Planning a summer peak',
        intro:
          'Five steps, in the order they need doing.',
        steps: [
          { title: 'Plot your own trading year', detail: 'Parcels by month on your calendar, not on a template from another hemisphere.' },
          { title: 'Choose artwork that fits the season you actually have', detail: 'Summer festive imagery rather than imported winter motifs, if you want it to read right.' },
          { title: 'Order to land before the ramp, not before the peak', detail: 'And accept that stock will sit through warm weeks, so store it properly.' },
          { title: 'Keep the quantity tight', detail: 'Seasonal stock held through a warm summer ages faster than stock held through a cool winter.' },
          { title: 'Run standard stock underneath', detail: 'So a shortfall in the seasonal line never stops orders leaving.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Storage through a warm peak',
        before:
          'Seasonal stock in this market is held through the warmest part of the year, which is exactly the condition that ages closure adhesive fastest. That argues for ordering tightly to the campaign rather than generously, and for storing away from external walls and out of direct light. The wider seasonal planning approach is set out on the ',
        link: { href: '/seasonal-poly-mailers/', anchor: 'seasonal packaging page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Should Australian festive packaging use winter imagery?',
        a: 'Only if you want it to read as imported. A December parcel arriving in summer heat with snow and pine on it is a mismatch customers register even when they do not mention it. Summer festive imagery reads more naturally.',
      },
      {
        q: 'When should seasonal stock be ordered here?',
        a: 'Before your volume starts climbing, which on a southern calendar means ordering during the quieter part of the year and holding stock through warm months. Order tightly and store it properly.',
      },
      {
        q: 'Does holding stock through summer affect it?',
        a: 'Warm storage ages the closure adhesive rather than the film. Keep cartons sealed, away from external walls and out of direct sunlight, and test a bag from anything that has been held a long time.',
      },
    ],
    related: [
      { href: '/australia/', label: 'Australian ordering and delivery', reason: 'How ordering and delivery work for Australian customers.' },
      { href: '/christmas-poly-mailers/', label: 'Christmas mailers', reason: 'Peak-season packaging planning.' },
      { href: '/seasonal-poly-mailers/', label: 'Seasonal planning', reason: 'Planning a year of campaigns.' },
    ],
    cta: {
      heading: 'Plan a summer peak',
      body: 'Send us your trading calendar rather than a template. We will plan the order around the year you actually have.',
      buttonLabel: 'Plan a seasonal order',
    },
    whatsapp: 'Hi, I am in Brisbane and need seasonal packaging planned around our summer peak.',
  },

  /* ===================================================================== */
  {
    slug: 'perth',
    name: 'Perth',
    market: 'australia',
    kind: 'city',
    region: 'Western Australia',
    h1: 'Poly Mailers for Perth Businesses',
    title: 'Poly Mailers Perth | Long Domestic Freight Legs',
    description:
      'Poly mailers for Perth businesses — planning around long domestic freight legs, and holding stock when a top-up takes real time.',
    summary: 'Long domestic freight legs, and what they mean for stockholding and specification.',
    intro: [
      'Perth businesses plan around a distance that businesses on the east coast do not have to think about. A domestic freight leg here is long by any standard, and that affects both the packaging you receive and the parcels you send.',
      'On the inbound side it means holding more and ordering earlier. On the outbound side it means a substantial share of what you send is on a long road or air leg before it reaches anyone.',
    ],
    angle: 'Long domestic freight in both directions — inbound stockholding and outbound transit.',
    primaryKeyword: 'poly mailers perth',
    supportingKeywords: ['shipping bags perth', 'western australia packaging', 'freight packaging perth'],
    sectors: [
      { name: 'Resources and industrial supply', note: 'B2B shipping over long distances, where containment matters more than presentation.' },
      { name: 'Ecommerce and direct selling', note: 'Own-channel brands serving a dispersed customer base.' },
      { name: 'Fashion and lifestyle retail', note: 'Independent labels shipping both locally and to the east coast.' },
    ],
    recommended: [
      { slug: '10x13-poly-mailers', why: 'A single standard is simpler to hold in depth than a range.' },
      { slug: 'economy-poly-mailers', why: 'Holding more is easier to justify when the unit cost is lower.' },
      { slug: 'self-seal-poly-mailers', why: 'Long road legs test a seal continuously rather than occasionally.' },
      { slug: 'padded-poly-mailers', why: 'Sustained vibration over a long leg is a different load from a single impact.' },
    ],
    blocks: [
      {
        kind: 'prose',
        heading: 'Two directions, two problems',
        paragraphs: [
          'Inbound, distance is a stockholding question. A top-up that takes real time means a buffer is not optional, and running out is a longer problem here than almost anywhere else we supply.',
          'Outbound, distance is a transit question. A parcel on a long road or air leg experiences hours of vibration rather than a series of short handling events, which works contents loose and tests a seal continuously.',
          'The two point at the same specification: hold more of a single standard, choose a close fit so nothing can move, and press the seal properly every time. Neither problem is solved by a heavier film alone.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Practical responses',
        items: [
          { term: 'Hold a genuine buffer', detail: 'Sized against how long a replacement actually takes rather than against a general rule.' },
          { term: 'Reduce to one size where you can', detail: 'Holding one size in depth is far simpler than holding three shallow.' },
          { term: 'Size close, not generously', detail: 'Movement over hours of vibration causes more damage here than impact does.' },
          { term: 'Press the whole seal', detail: 'A partial bond that survives a short delivery will not survive a long one.' },
          { term: 'Store cool, dry and dark', detail: 'Holding more only works if what you hold is still good when you get to it.' },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Ordering to a schedule',
        before:
          'Because a top-up takes real time, ordering here works most reliably against a stock level that triggers a reorder rather than against a calendar. Set the trigger high enough that a delivery has time to arrive before you reach the bottom, and confirm the schedule in writing so you are planning against a real date rather than an estimate. What is confirmed for each order is set out on the ',
        link: { href: '/shipping-and-delivery/', anchor: 'shipping and delivery page' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'How much packaging should a Perth business hold?',
        a: 'Enough to cover a replacement delivery with a real margin, which is more than the usual advice suggests because that advice assumes a fast top-up. Provided you can store it properly, holding more costs less than running out.',
      },
      {
        q: 'What damages parcels on long domestic legs?',
        a: 'Vibration rather than impact. Hours of small forces work contents loose, abrade touching surfaces and test every part of a seal. A close fit and a fully pressed closure prevent most of it.',
      },
      {
        q: 'Should I hold one size or several?',
        a: 'One where your range allows it. Holding a single size in depth is far simpler than holding three shallow, and it removes the risk of running out of exactly the one you need.',
      },
    ],
    related: [
      { href: '/australia/', label: 'Poly mailer supply across Australia', reason: 'How ordering and delivery work for Australian customers.' },
      { href: '/locations/sydney/', label: 'Sydney', reason: 'The wider Australian lead-time planning question.' },
      { href: '/self-seal-poly-mailers/', label: 'Closure options', reason: 'Why sealing technique matters over long legs.' },
    ],
    cta: {
      heading: 'Plan around distance',
      body: 'Tell us your usage rate and where your parcels go. We will propose a stock level and a specification that suit both legs of the problem.',
      buttonLabel: 'Plan a Perth order',
    },
    whatsapp: 'Hi, I am in Perth and need help planning packaging stock around freight times.',
  },

  /* ===================================================================== */
  {
    slug: 'adelaide',
    name: 'Adelaide',
    market: 'australia',
    kind: 'city',
    region: 'South Australia',
    h1: 'Poly Mailers for Adelaide Businesses',
    title: 'Poly Mailers Adelaide | Environmental Claims in Australia',
    description:
      'Poly mailers for Adelaide businesses — making environmental packaging claims that hold up under Australian consumer law scrutiny.',
    summary: 'Making environmental claims that hold up under Australian scrutiny.',
    intro: [
      'Environmental claims on packaging attract regulatory attention in every market we serve, and Australian consumer law has been an active area for exactly this kind of statement. Businesses here ask us about it more precisely than most.',
      'We are packaging manufacturers rather than legal advisers, so what we offer is not an opinion on what you may say. It is documentation, and an honest account of what can and cannot be evidenced for the material we would supply you.',
    ],
    angle: 'Environmental claim substantiation in the Australian regulatory context.',
    primaryKeyword: 'sustainable poly mailers adelaide',
    supportingKeywords: ['environmental claims packaging australia', 'shipping bags adelaide', 'eco mailers australia'],
    sectors: [
      { name: 'Food, wine and speciality producers', note: 'Categories where packaging claims are visible and scrutinised.' },
      { name: 'Direct-to-consumer brands', note: 'Own-channel businesses making customer-facing sustainability statements.' },
      { name: 'Independent retail', note: 'Smaller businesses whose brand position includes an environmental element.' },
    ],
    recommended: [
      { slug: 'recycled-poly-mailers', why: 'The route that can be evidenced with feedstock and proportion documentation.' },
      { slug: 'sustainable-poly-mailers', why: 'Comparing the three routes on what each requires you to hold.' },
      { slug: 'biodegradable-poly-mailers', why: 'Understanding why this term carries the most claim risk of the three.' },
      { slug: '10x13-poly-mailers', why: 'Right-sizing is a reduction you can evidence from your own data alone.' },
    ],
    blocks: [
      {
        kind: 'bullets',
        heading: 'What makes a claim defensible',
        intro:
          'Four properties. A claim missing any of them is exposed regardless of whether it is true.',
        items: [
          { term: 'It is specific', detail: '"Made with recycled content" says something. "Eco-friendly" says nothing and can be tested against nothing.' },
          { term: 'It is qualified', detail: 'Naming the conditions — which feedstock, which process, where it can be taken — is what turns a slogan into a statement.' },
          { term: 'It is evidenced', detail: 'A document you could produce if asked, relating to the material actually supplied to you.' },
          { term: 'It is current', detail: 'A claim true of last year’s film is not automatically true of this year’s. Reconfirm on reorder.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Why we publish no figures',
        paragraphs: [
          'You will not find a recycled percentage, a certification mark or a decomposition timescale anywhere on this website. Not because the information is sensitive, but because none was supplied to us with evidence behind it.',
          'A figure published on a supplier’s website is not a figure you could rely on if challenged about your own packaging, because it was not made about the film in your order. What is useful to you is a statement about your material, on your quotation, with the supporting document behind it.',
          'That is what we provide, including when the answer is that nothing is documented. That answer is information too, and it is better to have it before ordering than to find out when someone asks.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'The claim you can always make',
        before:
          'One category of environmental claim needs no supplier documentation at all: statements about your own operation. Reduced material per parcel, fewer components in a pack, a resealable bag that removes a returns consumable — all of them are measurable in your own data and defensible without anyone else’s cooperation. The definitions and the interrogation questions behind the other kinds are set out in the ',
        link: { href: '/resources/sustainable-mailer-terminology-guide/', anchor: 'terminology guide' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Can I say my packaging is eco-friendly?',
        a: 'It is a phrase with no defined meaning, which is exactly why it attracts scrutiny. A specific, qualified and evidenced claim about the material is defensible; a general adjective is not, however good your intentions.',
      },
      {
        q: 'What documentation can you provide?',
        a: 'Whatever the supplier of the specific film holds — feedstock type, proportion, any assessment — and we will say plainly where nothing exists. We will not produce a document that asserts more than the evidence supports.',
      },
      {
        q: 'Is packaging covered by Australian environmental claim rules?',
        a: 'Consumer law applies to representations made to consumers, and packaging claims are representations. What applies to your specific business is a question for your own adviser; our part is to give them accurate material information to work from.',
      },
    ],
    related: [
      { href: '/australia/', label: 'Working with Australian senders', reason: 'How ordering and delivery work for Australian customers.' },
      { href: '/sustainability/', label: 'Our position on claims', reason: 'What we will and will not state, and why.' },
      { href: '/resources/sustainable-mailer-terminology-guide/', label: 'Terminology guide', reason: 'The definitions behind every claim on this page.' },
    ],
    cta: {
      heading: 'Get a claim documented',
      body: 'Tell us what you want to be able to say. We will find out what the available film supports and show you the evidence before you order.',
      buttonLabel: 'Request material evidence',
    },
    whatsapp: 'Hi, I need documented sustainability information for packaging in Adelaide.',
  },
];
