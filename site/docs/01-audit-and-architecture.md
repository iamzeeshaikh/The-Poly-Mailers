# The Poly Mailers — Source Audit, Keyword Map and Architecture

Date of audit: 2026-08-15
Source of truth: `../Final Product Folders` (29 approved folders) and `../Keyword Stats 2026-08-10 at 18_15_05.csv`

---

## 1. Source file audit

### 1.1 Product folders

29 folders, matching the approved list exactly. No rejected products present
(no Polystyrene Burger Boxes, no Mylar Polyester Film). 12 folders carry a
`README.md` with supplier instructions; those instructions are honoured below.

87 image files total (52 PNG, 35 JPG), but only **64 are unique by checksum**.
23 files are byte-identical copies shared between folders.

### 1.2 Duplicate imagery (checksum groups)

| Shared asset | Appears in |
|---|---|
| A | 14.5x19 (02), 19x24 (03), 24x24 (02), large (03) |
| B | 12x15 (01), 14.5x19 (03), white (02) |
| C | personalized-bubble (01), poly-bubble (02) |
| D | compostable (03), recycled (02) |
| E | 12x15 (02), blank (02), white (01) |
| F | 6x9 (02), light-pink (02), pink (02), small (02) |
| G | 14.5x19 (01), 19x24 (02), 24x24 (01), large (01) |
| H | biodegradable (03), recycled (01) |
| I | 12x15 (03), 24x24 (03) |
| J | recycled (03), white (03) |
| K | biodegradable (02), compostable (02) |
| L | biodegradable (01), compostable (01) |
| M | 19x24 (01), large (02) |
| N | 6x9 (03), pink (01) |
| O | 6x9 (01), light-pink (01), small (03) |

Consequence: **Large Poly Mailers, 24x24 and White Poly Mailers have no
exclusive photography at all.** Every asset they use also appears elsewhere.

Decisions taken:

1. No image is used as evidence of a size. Alt text never asserts dimensions
   unless the dimension is legibly printed in the photograph itself
   (only `19x24-poly-mailers-01.png` qualifies, and that asset is therefore
   reserved for `/19x24-poly-mailers/` and not reused on `/large-poly-mailers/`).
2. Every page writes its own alt text and, where used, its own caption. No two
   pages emit identical alt text for a shared asset. Enforced by the
   duplicate-alt audit in `scripts/audit-content.mjs`.
3. `docs/09-image-report.md` records the full source → optimised mapping.

### 1.3 Images excluded from the build (5 assets)

| File | Reason |
|---|---|
| `14-5x19-poly-mailers-02.png` | Watermarked third-party stock mockup ("pixpine.com"), Lorem Ipsum body copy and a fabricated name/address block. |
| `compostable-poly-mailers-02.png` = `biodegradable-poly-mailers-02.png` | Shows TÜV certification marks, a "4–6 months" decomposition claim and a PLA+PBAT+corn-starch composition. The brief forbids certification logos and decomposition periods without supplied evidence. |
| `padded-poly-mailers-02.jpg` | Marketplace watermark ("HUALIWEN") and a "20 PCS" retail badge. |
| `pink-poly-mailers-03.png` | Mailers printed with a competing packaging company's brand mark. |
| `self-seal-poly-mailers-01.jpg` | Kraft paper padded mailers — wrong material for a poly self-seal page. |

### 1.4 Images kept but qualified

Three retained photographs carry sustainability wording printed on the bag
itself by whoever produced the original sample:

* green mailer printed "100% eco-friendly compostable and biodegradable"
  (used on `/compostable-poly-mailers/` and `/biodegradable-poly-mailers/`)
* grey mailer printed "made of up to 50% recycled polyethylene"
  (used on `/biodegradable-poly-mailers/` and `/recycled-poly-mailers/`)
* white mailer printed "this mailer is made from 100% recycled materials"
  (used on `/recycled-poly-mailers/`)

These are shown with a visible caption stating that printed messaging is the
artwork of the business that ordered those samples, that The Poly Mailers does
not certify those claims, and that material composition and any compliance
documentation are confirmed with the quotation. Alt text describes the printed
message as printed artwork, never as a property of the product.

Several other photographs show third-party brand marks (Puppysew Packaging,
Stesha Supply Co., anwe., Doctor Toys). They are retained as examples of
customer artwork and are described that way. Replacing them with own
photography is listed in `docs/15-open-items.md`.

---

## 2. Keyword research findings

1,064 keywords, July 2025 – June 2026 averages. 276 have ≥50 average monthly
searches; those drive the map. Headline demand:

* `poly mailers` 18,100 · `shipping bags` 9,900 · `polymailers` 5,400 ·
  `mailer poly` 5,400 · `polythene mailing bags` 4,400 (UK phrasing) ·
  `poly mailer bags` 4,400 · `poly bubble mailers` 4,400 ·
  `poly bags for shipping` 4,400 · `apparel shipping bags` 3,600

### 2.1 Demand deliberately not targeted

| Cluster | Volume | Decision |
|---|---|---|
| `usps poly mailers`, `amazon poly mailers`, `uline poly mailers`, `staples poly mailers`, `dollar tree poly mailers`, `target poly mailers`, `office depot poly mailers`, `upaknship poly mailers`, `walgreens poly mailers`, `ecoenclose poly mailer`, `sticker mule …`, `scotch poly bubble mailer` | ~7,000 combined | Navigational demand for other retailers and for carrier-branded supplies. No page is created. Building pages for them would be thin, would misrepresent who we are, and cannot be satisfied by a custom-quote manufacturer. Carrier compatibility is never claimed anywhere on the site. |
| `free poly mailers` | 390 | Partly satisfied by `/samples/`, which explains how sample requests work. No free-product claim is made. |
| `poly mailers near me`, `poly mailer bags near me`, `large poly mailers near me` | ~3,400 combined | Local intent, but there are no local premises. Served by the location pages, which state plainly that orders are produced to order and shipped to the named market. No address, branch or "local warehouse" language anywhere. |

### 2.2 Synonym consolidation (no separate pages)

* `polymailers`, `polymailer`, `mailer poly`, `poly mailer bags`, `poly bags for shipping`, `poly envelopes`, `mailing pouches`, `mailer bags` → homepage / products overview
* `personalized poly mailers`, `personalised poly mailers`, `poly mailers personalized`, `printed poly mailers`, `branded poly mailers`, `poly mailers with logo` → `/custom-poly-mailers/`
* `poly mailers for clothes`, `poly mailers for shipping clothes`, `plastic shipping bags for clothes`, `t shirt mailers` → `/apparel-shipping-bags/`
* `big`, `huge`, `extra large poly mailers` → `/large-poly-mailers/`
* `cushioned poly mailers`, `padded poly envelopes`, `poly mailers padded` → `/padded-poly-mailers/`
* `cheap poly mailers`, `bulk poly mailers`, `bulk poly mailer bags` → `/economy-poly-mailers/`

### 2.3 Ambiguous term resolved

`green poly mailers` (90/mo) reads as both a colour and a sustainability term.
Assigned to `/colored-poly-mailers/` as a colour, because the adjacent phrases
in the data set (`purple`, `red`, `light blue`, `teal`) are unambiguously
colours. `eco friendly poly mailers` (320/mo) carries the sustainability intent
and is assigned to `/sustainable-poly-mailers/`.

---

## 3. URL conflict resolved

The brief lists `/colored-poly-mailers/` twice: once as mandatory product #12
and once as a suggested colour-collection URL. One canonical URL per page is
non-negotiable, so:

* `/colored-poly-mailers/` — **product page** (mandatory list wins). Owns
  `colored poly mailers`, `colored poly mailer bags`, and the individual
  colour terms that have no dedicated product page (purple, green, red, blue, teal).
* `/poly-mailer-colors/` — **collection**. Comparison and navigation across the
  five colour products; owns `poly mailer colors`, `colored mailer options`.
  It contains no product-page prose: it is a chooser, a contrast/print-legibility
  table and a set of routes onward.

---

## 4. Cannibalisation boundaries

| Page A | Page B | Boundary |
|---|---|---|
| `/custom-poly-mailers/` | `/custom-printed-poly-mailers/` | A = ordering a custom printed mailer (product, transactional). B = collection, choosing which printable format suits the run. |
| `/custom-poly-mailers/` | `/printing-options/` | A = the product. B = how the print methods work and what each does to cost and lead time. |
| `/printing-options/` | `/artwork-guidelines/` | Method selection vs file specification. |
| `/artwork-guidelines/` | `/resources/printing-and-artwork-guide/` | Spec sheet vs end-to-end preparation walkthrough. |
| `/padded-poly-mailers/` | `/poly-bubble-mailers/` | Broad protective requirement, any cushioning construction, vs the specific poly-outer / bubble-lined construction. |
| `/poly-bubble-mailers/` | `/personalized-bubble-mailers/` | The construction vs printing that construction. |
| `/protective-mailers/` | both of the above | Collection: which protective format for which contents. |
| `/pink-poly-mailers/` | `/light-pink-poly-mailers/` | Saturated/deeper pinks, retail and promotional, vs blush and pastel, boutique/beauty. Separate keywords, separate photography intent, separate FAQs. |
| `/colored-poly-mailers/` | both pink pages, white, black | Mixed-colour and selectable-range intent; never repeats a single-colour page's copy. |
| `/blank-poly-mailers/` | `/economy-poly-mailers/` | Unprinted stock across colours vs cost-led specification. |
| `/blank-poly-mailers/` | `/white-poly-mailers/` | Print status vs colour. |
| `/large-poly-mailers/` | 14.5x19, 19x24, 24x24 | Broad "large" intent and how to pick between the large sizes vs each exact size's own use cases. |
| `/small-poly-mailers/` | 6x9, 9x12 | Same pattern at the small end. |
| `/recycled-` / `/compostable-` / `/biodegradable-` | each other | Feedstock (post-consumer content) vs end-of-life route (composting) vs terminology and degradation language. Different buyers, different questions, different FAQs. |
| `/sustainable-poly-mailers/` | the three above | Collection: how to choose between them. |
| `/sustainability/` | `/sustainable-poly-mailers/` | Company position and what we will and will not claim vs product selection. |
| `/resources/sustainable-mailer-terminology-guide/` | all sustainability pages | Definitions and how to read a supplier claim. |
| `/poly-mailer-sizes/` | `/size-guide/` | Collection of size products with a comparison table vs the decision framework for choosing a size for your own product. |
| `/size-guide/` | `/resources/poly-mailer-size-guide/` | Decision framework vs tabular size reference. |
| `/resources/mailer-measurement-guide/` | both | How to physically measure an item and a mailer. |
| `/materials/` | `/resources/poly-mailer-material-guide/` | What we can supply vs how to compare film options and specify them. |
| `/apparel-shipping-bags/` | `/industries/clothing-and-apparel/` | Product page (the bag) vs sector page (the fulfilment operation). |
| `/design-your-poly-mailer/` | `/request-a-quote/` | Configure and visualise vs submit a specification. |

---

## 5. Page inventory (149 indexable + 2 non-indexable)

* Core commercial: `/`, `/poly-mailers/`, `/request-a-quote/`, `/contact/`,
  `/about/`, `/how-it-works/`, `/samples/`, `/faq/`, `/design-your-poly-mailer/` (9)
* Products (29)
* Collections: `/poly-mailer-sizes/`, `/poly-mailer-colors/`,
  `/sustainable-poly-mailers/`, `/protective-mailers/`,
  `/custom-printed-poly-mailers/`, `/seasonal-poly-mailers/` (6)
* Capability pages: `/materials/`, `/printing-options/`, `/artwork-guidelines/`,
  `/size-guide/`, `/sustainability/` (5)
* Industries: hub + 10 (11)
* Resources: hub + 10 (11)
* Blog: index + 10 (11)
* Locations: `/locations/`, 4 country hubs, 20 US states, 20 US cities,
  5 UK, 5 Canada, 5 Australia (60)
* Policy and utility: `/privacy-policy/`, `/terms-and-conditions/`,
  `/shipping-and-delivery/`, `/custom-order-policy/`,
  `/accessibility-statement/`, `/sitemap/` (6)
* Non-indexable: `/thank-you/`, `/404`

---

## 6. Content-integrity rules encoded in the build

`src/lib/claims.ts` holds the single source of truth for what may be stated.
Product data cannot express a price, a gauge in microns, an MOQ, a lead time, a
recycled percentage, a certification or a decomposition period — those fields do
not exist on the type. Anything of that nature is expressed as a
`confirmedAtQuote` option list, which renders as a selectable specification with
the standing note that the final specification is confirmed on the quotation.

`scripts/audit-content.mjs` fails the build gate on: banned vocabulary,
duplicate titles / descriptions / H1s / intros / FAQs / CTA text, missing alt
text, duplicate alt text, thin pages, missing trailing slashes, canonical
conflicts, orphan pages and broken internal links.
