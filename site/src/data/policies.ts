import type { ContentPage } from './types';
import { BRAND } from '~/lib/site';

/**
 * Policy pages.
 *
 * These state only what is true of how this website and this business operate
 * as described in the brief. They do not invent a registered company number, a
 * registered office, a governing-law jurisdiction, a returns window in days, a
 * data-retention period in months, or a named data protection officer — none of
 * which was supplied. Every such gap is marked in docs/15-open-items.md as
 * something the client must confirm before launch.
 */

export const policyPages: readonly ContentPage[] = [
  /* ===================================================================== */
  {
    slug: 'privacy-policy',
    name: 'this privacy policy',
    h1: 'Privacy Policy',
    title: 'Privacy Policy | The Poly Mailers',
    description:
      'What personal information The Poly Mailers collects through this website, why, how long it is kept and how to ask for it to be removed.',
    summary: 'How enquiry data is collected, used and removed.',
    intro: [
      'This policy covers information collected through thepolymailers.com. It is written to be read rather than to be defended, so it says what actually happens rather than describing every theoretical possibility.',
      'If anything here is unclear, or you want your information removed, email ' + BRAND.email + ' and we will deal with it.',
    ],
    plan: {
      intent: 'Understand how a supplier handles enquiry data.',
      audience: 'Visitors submitting a quote request, and buyers running supplier due diligence.',
      problem: 'Privacy policies rarely say what actually happens to the data.',
      angle: 'Plain description of the actual data flow on this site, with no boilerplate padding.',
      primaryKeyword: 'privacy policy',
      supportingKeywords: [],
      nearestPage: '/terms-and-conditions/',
      boundary: 'Data handling here; commercial terms on the terms page.',
    },
    blocks: [
      {
        kind: 'bullets',
        heading: 'What we collect, and when',
        intro:
          'We collect information at one point only: when you choose to send it to us.',
        items: [
          {
            term: 'Quote and contact form submissions',
            detail:
              'Your name, business email, phone or WhatsApp number, country, the product and quantity you asked about, anything you typed in the message field, and any artwork files you attached.',
          },
          {
            term: 'Design tool configurations',
            detail:
              'If you submit a configuration from the design tool, the choices you made travel with your enquiry. They are held in your own browser until you submit or clear them.',
          },
          {
            term: 'The page you enquired from',
            detail:
              'A hidden field records which page a form was submitted from, so we can answer in context.',
          },
          {
            term: 'Nothing else',
            detail:
              'There is no analytics script, no advertising pixel, no third-party tag manager and no cookie set by us on this website.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'What we do with it',
        paragraphs: [
          'Enquiry details are emailed to our sales inbox so a person can reply to you with a quotation. That is the purpose, and we do not use the information for anything else.',
          'We do not sell personal information, we do not share it with advertisers or data brokers, and we do not add enquirers to a marketing list without being asked to.',
          'Artwork files you attach are sent to us as email attachments under a randomised filename. They are not written to a public folder on this website and they are not given a public URL.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Who else is involved',
        intro:
          'Three third parties are necessarily involved in getting your enquiry to us. There are no others.',
        items: [
          {
            term: 'Our hosting provider',
            detail:
              'Serves this website and runs the form endpoint. Standard server logs may include an IP address, which is used to rate-limit abusive traffic.',
          },
          {
            term: 'Our email provider',
            detail:
              'Transmits and stores the enquiry email so we can read and reply to it.',
          },
          {
            term: 'WhatsApp, if you use it',
            detail:
              'The WhatsApp button opens a conversation on their platform, and their own terms and privacy policy apply to it rather than ours.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'How long we keep it',
        paragraphs: [
          'Enquiry emails are retained while there is an active commercial conversation and for a reasonable period afterwards, so that a repeat order can be quoted against what was agreed before.',
          'We have not set a fixed retention period in this document, because publishing a number we do not actually enforce would be worse than saying so. If you want your details removed, ask and we will remove them.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Your rights',
        intro:
          'Depending on where you are, data protection law gives you rights over information we hold about you. We will honour these regardless of which market you are in.',
        items: [
          {
            term: 'Ask what we hold',
            detail: 'We will tell you what we have and where it came from.',
          },
          {
            term: 'Ask for corrections',
            detail: 'If something is wrong, tell us and we will fix it.',
          },
          {
            term: 'Ask for deletion',
            detail:
              'We will delete your enquiry and any attached artwork, subject to any records we are legally required to keep.',
          },
          {
            term: 'Object to how it is used',
            detail: 'If you would rather we did not hold your details at all, say so.',
          },
        ],
        outro: `To exercise any of these, email ${BRAND.email}. We will not ask you to justify the request.`,
      },
      {
        kind: 'callout',
        heading: 'Cookies',
        body: 'This website sets no cookies of its own and runs no analytics or advertising scripts. The design tool stores your configuration in your browser\'s own session storage so a page reload does not lose your work; that data never leaves your device unless you submit it with an enquiry, and closing the tab clears it.',
      },
    ],
    related: [
      {
        href: '/terms-and-conditions/',
        label: 'Terms and conditions',
        reason: 'The commercial terms that apply alongside this policy.',
      },
      {
        href: '/contact/',
        label: 'Contact us',
        reason: 'How to reach a person about anything on this page.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'terms-and-conditions',
    name: 'these terms',
    h1: 'Terms and Conditions',
    title: 'Terms and Conditions | The Poly Mailers',
    description:
      'The terms that apply to using this website and to quotations issued by The Poly Mailers, including what a quotation does and does not commit either side to.',
    summary: 'Website terms and the status of a quotation.',
    intro: [
      'These terms cover two things: your use of this website, and the status of a quotation we issue. Order-specific terms are set out on the quotation itself, which is the document that governs any order you place.',
      'Nothing here overrides a signed agreement. Where an agreed contract and this page differ, the contract applies.',
    ],
    plan: {
      intent: 'Understand the terms of engaging with this supplier.',
      audience: 'Buyers and their procurement or legal teams.',
      problem: 'Knowing what a quotation actually commits either party to.',
      angle: 'Explains the quotation as a document rather than reciting generic website terms.',
      primaryKeyword: 'terms and conditions',
      supportingKeywords: [],
      nearestPage: '/custom-order-policy/',
      boundary: 'General terms here; made-to-order specifics on the custom order policy.',
    },
    blocks: [
      {
        kind: 'bullets',
        heading: 'Using this website',
        items: [
          {
            term: 'Content is guidance, not specification',
            detail:
              'Everything on this site describes what we can supply and how choices are made. The specification for your order is the one written on your quotation, and it takes precedence over any page here.',
          },
          {
            term: 'Prices shown are indicative',
            detail:
              'The unit price published on product pages is an indicative starting figure. It is not an offer to sell at that price, and it is not a quotation. Because every order is made to a specification, the price that applies to you is the one written on your quotation, which supersedes any figure on this site.',
          },
          {
            term: 'Images are illustrative',
            detail:
              'Product photography shows the type of product described. Printed designs shown are examples of customer artwork, not stock designs available to order.',
          },
          {
            term: 'Our content belongs to us',
            detail:
              'The text, structure and design of this site are ours. Please do not reproduce them.',
          },
          {
            term: 'Your artwork belongs to you',
            detail:
              'Sending us artwork gives us permission to use it to produce your order and to show you a proof. It does not transfer any rights in it.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'What a quotation is',
        standfirst: 'A written specification and a price, valid for a stated period.',
        paragraphs: [
          'A quotation sets out the size, film weight, closure, colour, finish, print coverage and quantity we are pricing, together with the price and the period for which it holds. It is the document to check, because it is the one an order is produced against.',
          'A quotation is not an order. Nothing is scheduled until you confirm it, and for printed work nothing is produced until you have also approved a proof in writing.',
          'Where the specification changes after a quotation is issued — a different size, a heavier film, a change of coverage — the quotation is reissued rather than adjusted informally, so there is never ambiguity about what was agreed.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Responsibilities on each side',
        intro:
          'Made-to-order manufacturing works when both sides are clear about which decisions belong to whom.',
        items: [
          {
            term: 'You confirm the specification',
            detail:
              'Sizes, quantities and the market an order ships to are yours to confirm. We will advise, and we will flag anything that looks wrong, but the final specification is your decision.',
          },
          {
            term: 'You approve the proof',
            detail:
              'Printed work is produced against the proof you approve. Checking spelling, contact details and any wording on it is your responsibility, because we cannot know what your website address should say.',
          },
          {
            term: 'You hold the rights to your artwork',
            detail:
              'By sending artwork you confirm you are entitled to reproduce it commercially. Claims arising from artwork you supplied are yours.',
          },
          {
            term: 'You substantiate your own claims',
            detail:
              'Any environmental or performance wording you ask us to print is a statement you are making to your customers, and the responsibility for it in your market is yours.',
          },
          {
            term: 'We produce to the approved specification',
            detail:
              'And we tell you rather than shipping something approximate if a run cannot meet it.',
          },
        ],
      },
      {
        kind: 'callout',
        heading: 'Terms still to be confirmed',
        body: 'Governing law, jurisdiction, company registration details and payment terms are set on the quotation and any agreement signed with it, rather than on this page. Ask for them in writing before placing a first order if your procurement process requires them up front.',
        tone: 'caution',
      },
    ],
    related: [
      {
        href: '/custom-order-policy/',
        label: 'Custom order policy',
        reason: 'What applies specifically to made-to-order production.',
      },
      {
        href: '/privacy-policy/',
        label: 'Privacy policy',
        reason: 'How enquiry information is handled.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'shipping-and-delivery',
    name: 'shipping and delivery',
    h1: 'Shipping and Delivery Information',
    title: 'Shipping and Delivery | The Poly Mailers',
    description:
      'How orders are dispatched to the US, UK, Canada and Australia, what is confirmed at the point of order, and what changes between markets.',
    summary: 'How orders reach each of the four markets we serve.',
    intro: [
      'Orders are manufactured to your specification and shipped to the address you give us. We hold no local branches, depots or collection points in any market, so everything below is about how a made-to-order shipment reaches you rather than about stock leaving a warehouse near you.',
      'This page describes the process. The specifics for your order — carrier arrangements, documentation, timing and cost — are confirmed on your quotation, because they depend on quantity, weight, destination and the date you place the order.',
    ],
    plan: {
      intent: 'Understand how and where a supplier ships.',
      audience: 'Buyers in the four served markets checking logistics before ordering.',
      problem: 'Needing to know what is confirmed when, without being given invented delivery times.',
      angle: 'Describes the process and what varies, without stating a lead time we cannot guarantee.',
      primaryKeyword: 'poly mailer shipping and delivery',
      supportingKeywords: [],
      nearestPage: '/locations/',
      boundary: 'Logistics process here; market-specific commercial context on the country hubs.',
    },
    blocks: [
      {
        kind: 'prose',
        heading: 'Why there is no delivery time on this page',
        paragraphs: [
          'Production time depends on the specification, the quantity, whether the run is printed, and how quickly a proof is approved. Transit time depends on the destination, the weight and the service selected. A single figure covering all of that would be wrong for most orders.',
          'So instead of publishing a number, we confirm a schedule in writing for your specific order at the point of quotation, and we tell you the date to work backwards from rather than a duration to guess with.',
          'If you have a fixed date — a campaign launch, a peak season, a retail delivery window — say so at enquiry stage. It changes what we recommend.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What is confirmed on your quotation',
        intro: 'Everything below is stated in writing before you commit to an order.',
        items: [
          {
            term: 'The delivery address and market',
            detail: 'Including whether it is a business address, a residential one or a fulfilment centre.',
          },
          {
            term: 'The production schedule',
            detail:
              'What has to happen by when, including the point at which proof approval becomes the critical path.',
          },
          {
            term: 'The shipping arrangement',
            detail: 'How the order travels and who is responsible for it at each stage.',
          },
          {
            term: 'Cost and who bears it',
            detail:
              'Shipping cost is quoted rather than absorbed into a unit price, so you can see it.',
          },
          {
            term: 'Documentation',
            detail:
              'Any paperwork the destination market requires for a commercial shipment.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'What changes between the four markets',
        intro:
          'The product does not change between markets. These do.',
        items: [
          {
            term: 'Currency',
            detail:
              'Quotations are issued in the currency of the destination market.',
          },
          {
            term: 'Import documentation and charges',
            detail:
              'Requirements differ by destination and are confirmed per order rather than generalised here.',
          },
          {
            term: 'Film availability',
            detail:
              'Not every film, colour or material is available for every market. This is confirmed before you order, not after.',
          },
          {
            term: 'Delivery arrangements',
            detail:
              'How a shipment reaches a business address in Perth is a different arrangement from one reaching a fulfilment centre in Ohio.',
          },
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Receiving and storing an order',
        before:
          'Mailers arrive in cartons on a pallet for larger orders. Check the count against the delivery note before signing, and store the cartons flat, sealed, off the floor and out of direct sunlight. The film is stable; the adhesive on the closure is the part that ages, and heat and light are what age it. Rotate so the oldest cartons are used first. If an order arrives damaged or short, tell us promptly — what happens next is set out in the ',
        link: { href: '/custom-order-policy/', anchor: 'custom order policy' },
        after: '.',
      },
    ],
    faqs: [
      {
        q: 'Which countries do you ship to?',
        a: 'The United States, United Kingdom, Canada and Australia. Orders are produced to order and shipped to the address you provide; we do not hold stock locally in any of those markets.',
      },
      {
        q: 'How long will my order take?',
        a: 'It depends on the specification, the quantity, whether it is printed and how quickly a proof is approved. We confirm a schedule in writing for your specific order rather than publishing a figure that would be wrong for most of them.',
      },
      {
        q: 'Can you ship to a fulfilment centre?',
        a: 'Yes, and it is worth telling us at enquiry stage, because fulfilment centres often have specific labelling, palletisation and booking requirements that need to be built into the order.',
      },
      {
        q: 'Who pays import duties?',
        a: 'This is set out on your quotation rather than assumed, because it depends on the destination and the shipping arrangement. Ask before ordering if it affects your budgeting.',
      },
    ],
    related: [
      {
        href: '/locations/',
        label: 'Markets we serve',
        reason: 'Commercial context for each country and region.',
      },
      {
        href: '/custom-order-policy/',
        label: 'Custom order policy',
        reason: 'What happens if an order arrives short or damaged.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'custom-order-policy',
    name: 'the custom order policy',
    h1: 'Custom Order Policy',
    title: 'Custom Order Policy | Made-to-Order Terms',
    description:
      'How made-to-order production works — proof approval, quantity variation, what can be changed and when, and what happens if something is wrong on arrival.',
    summary: 'What applies to production made specifically for you.',
    intro: [
      'Made-to-order manufacturing is not retail, and applying retail expectations to it causes most of the disputes in this industry. A printed run produced to your artwork cannot be restocked, resold or returned to a shelf, because there is no shelf it belongs on.',
      'This page sets out what that means in practice: what can be changed and at what point, what happens if an order is wrong, and what a run of custom packaging genuinely commits both sides to.',
    ],
    plan: {
      intent: 'Understand returns and change terms for custom manufacturing.',
      audience: 'Buyers placing a first bespoke order who expect retail-style returns.',
      problem: 'Retail return expectations do not apply to made-to-order production.',
      angle: 'Explains why custom production is different, and what protection you do have.',
      primaryKeyword: 'custom order policy',
      supportingKeywords: ['made to order packaging terms', 'custom packaging returns'],
      nearestPage: '/terms-and-conditions/',
      boundary: 'Production and change terms here; general website and quotation terms there.',
    },
    blocks: [
      {
        kind: 'steps',
        heading: 'Where changes can be made, and where they cannot',
        intro:
          'A custom order passes through points after which a change costs a run rather than an email.',
        steps: [
          {
            title: 'Before the quotation is confirmed',
            detail:
              'Anything can change. Size, film, colour, coverage, quantity. This is the point to be indecisive.',
          },
          {
            title: 'After confirmation, before the proof',
            detail:
              'Specification changes are still possible. The quotation is reissued so what is agreed stays unambiguous.',
          },
          {
            title: 'At proof stage',
            detail:
              'Artwork changes belong here. Ask for as many rounds as you need — a proof round costs far less than a reprint.',
          },
          {
            title: 'After proof approval',
            detail:
              'Production is scheduled against the approved proof. Changes from this point mean a new proof and, once material is committed, a new run.',
          },
          {
            title: 'After production',
            detail:
              'Custom printed material cannot be resold to anyone else. Changes at this point mean a fresh order.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'What we are responsible for',
        intro: 'If any of these happens, tell us and we will resolve it.',
        items: [
          {
            term: 'The order does not match the approved proof',
            detail:
              'Wrong colour, wrong placement, wrong artwork. The proof is the reference and we are held to it.',
          },
          {
            term: 'The order does not match the written specification',
            detail:
              'Wrong size, wrong film, wrong closure, wrong finish.',
          },
          {
            term: 'A manufacturing defect',
            detail:
              'Failed seals, adhesive that does not release cleanly, print defects across the run.',
          },
          {
            term: 'A short delivery',
            detail:
              'Counts are verified by carton before dispatch, and a genuine shortfall is ours to make good.',
          },
          {
            term: 'Damage in transit where we arranged shipping',
            detail: 'Report it promptly with photographs of the packaging as it arrived.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'What sits with you',
        intro:
          'These are the things we cannot check on your behalf, and they are why the proof stage matters.',
        items: [
          {
            term: 'Errors in artwork you approved',
            detail:
              'A misspelled word, an old web address or a wrong handle on an approved proof cannot be caught by us, because we have no way to know what it should say.',
          },
          {
            term: 'Choosing a size that turns out not to fit',
            detail:
              'This is why samples exist. A sample before a run costs almost nothing; a run in the wrong size costs the run.',
          },
          {
            term: 'Ordering more than you can use',
            detail:
              'Particularly on seasonal work. We will quote a contingency quantity separately so you can see what it costs.',
          },
          {
            term: 'Rights in the artwork you supply',
            detail: 'Confirming you may reproduce it commercially is your responsibility.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Quantity variation on a manufactured run',
        paragraphs: [
          'Production runs of film do not stop at an exact unit, so a manufactured order may deliver slightly above or slightly below the quantity ordered. This is normal in the industry rather than a defect.',
          'The tolerance that applies to your order is stated on your quotation, along with how any variation is charged. If an exact quantity matters — a set number of units for a subscription drop, for instance — say so at enquiry stage so we can specify accordingly.',
        ],
      },
      {
        kind: 'linked-prose',
        heading: 'Reporting a problem',
        before:
          'Contact us as soon as you find an issue, with the order reference, photographs of the cartons and the affected product as received, and the approximate proportion of the delivery affected. Keep the affected stock until the matter is resolved, because we may need to see it. The fastest route is the address and number on the ',
        link: { href: '/contact/', anchor: 'contact page' },
        after: ', and we will confirm next steps in writing so both sides have a record.',
      },
    ],
    faqs: [
      {
        q: 'Can I return custom printed mailers?',
        a: 'Not as a change of mind, because printed material produced to your artwork cannot be resold or restocked. Where an order does not match the approved proof or the written specification, or has a manufacturing defect, we make it right.',
      },
      {
        q: 'What if I approve a proof and then spot a mistake?',
        a: 'Tell us immediately. If production has not started, we will reproof at no drama. Once material is committed the run cannot be recovered, which is why we ask for approval in writing and encourage as many proof rounds as you want beforehand.',
      },
      {
        q: 'Will I receive exactly the quantity I ordered?',
        a: 'Manufactured runs carry a tolerance either side of the ordered quantity, stated on your quotation along with how any variation is charged. If an exact count matters for your operation, tell us at enquiry stage.',
      },
      {
        q: 'How quickly do I need to report a problem?',
        a: 'As soon as you find it, and while the stock is still available to inspect. The specific window that applies to your order is stated on your quotation.',
      },
    ],
    related: [
      {
        href: '/how-it-works/',
        label: 'The ordering process',
        reason: 'Where each of these stages sits in a full order.',
      },
      {
        href: '/samples/',
        label: 'Samples',
        reason: 'The step that prevents most of the problems on this page.',
      },
    ],
  },

  /* ===================================================================== */
  {
    slug: 'accessibility-statement',
    name: 'accessibility',
    h1: 'Accessibility Statement',
    title: 'Accessibility Statement | The Poly Mailers',
    description:
      'How thepolymailers.com is built for keyboard, screen reader and reduced-motion use, what has been tested, and what to do if something does not work.',
    summary: 'What has been built and tested for accessibility, and how to report a problem.',
    intro: [
      'This website is built to be usable with a keyboard alone, with a screen reader, at high zoom, and with motion turned off. This page states what that means concretely and what has actually been checked, rather than asserting a conformance level as a marketing claim.',
      'If something on this site does not work for you, email ' + BRAND.email + ' with the page and what happened. We will fix it and tell you when it is done.',
    ],
    plan: {
      intent: 'Check a supplier’s accessibility position.',
      audience: 'Users with access needs, and procurement teams with accessibility requirements.',
      problem: 'Accessibility statements usually claim conformance without evidence.',
      angle: 'States what was built and tested specifically, and is candid about what was not.',
      primaryKeyword: 'accessibility statement',
      supportingKeywords: [],
      nearestPage: '/contact/',
      boundary: 'Accessibility commitments here; general contact routes there.',
    },
    blocks: [
      {
        kind: 'bullets',
        heading: 'What has been built in',
        items: [
          {
            term: 'Keyboard operation throughout',
            detail:
              'Navigation, dropdown panels, the image gallery, the FAQ accordions, the forms and the design tool are all operable without a mouse, with visible focus at every step and no keyboard traps.',
          },
          {
            term: 'A skip link',
            detail:
              'The first focusable element on every page jumps straight to the main content, past the navigation.',
          },
          {
            term: 'Semantic structure',
            detail:
              'One h1 per page, headings in order, lists marked up as lists, tables with proper header cells, and landmarks so a screen reader can move by region.',
          },
          {
            term: 'Labelled form fields',
            detail:
              'Every input has a visible associated label. Errors are announced, described in words rather than colour alone, and focus moves to the first field that needs attention.',
          },
          {
            term: 'Reduced motion support',
            detail:
              'Every animation on the site respects the operating-system reduced-motion setting. With it on, content appears without transitions rather than being hidden.',
          },
          {
            term: 'Contrast and target size',
            detail:
              'Text and interface colours were chosen against contrast requirements, and interactive controls are sized for touch.',
          },
          {
            term: 'Descriptive alt text',
            detail:
              'Every product photograph has alt text describing what is actually visible. No two pages reuse the same alt text for a shared image.',
          },
          {
            term: 'Content that works without JavaScript',
            detail:
              'Text, images and navigation are present in the HTML. Scripting adds the gallery, the menu panels and the design tool rather than being required to read the page.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'What has been tested, and what has not',
        paragraphs: [
          'Structure, landmarks, heading order, form labelling, focus order, contrast and reduced-motion behaviour have been checked during development, along with keyboard operation of every interactive component.',
          'What has not happened is a full audit by an independent accessibility specialist, or testing with people who use assistive technology daily. Those are the things that find the problems development testing misses, and we would rather say so than imply a level of assurance we have not earned.',
          'The design tool is the component most likely to have gaps. It is keyboard operable and every control is labelled, but a visual canvas is inherently harder to use without sight. Anything the tool can do can also be described in the quote form message field, and we will apply it exactly the same way.',
        ],
      },
      {
        kind: 'callout',
        heading: 'Tell us if something does not work',
        body: `Email ${BRAND.email} with the page address, what you were trying to do and what happened. Reports about this website are treated as defects rather than as feature requests, and we will tell you when a fix is live.`,
      },
    ],
    related: [
      {
        href: '/contact/',
        label: 'Other ways to reach us',
        reason: 'Phone and WhatsApp, if email is not the easiest route for you.',
      },
      {
        href: '/request-a-quote/',
        label: 'Request a quote',
        reason: 'The form itself, if you would rather send a brief in words.',
      },
    ],
  },
];
