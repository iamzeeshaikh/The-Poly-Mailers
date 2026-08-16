# Unverified specifications and open items

Everything the site declines to state, and everything that needs a decision or a
document from you before it can be stated. Nothing on this list blocks the site
from going live; all of it affects what the site is allowed to say.

## 1. Material specifications never supplied

The brief instructed that certifications, material percentages, recycled
content, compostability standards, biodegradation timelines, exact gauges, MOQs,
delivery times, production times, prices, carrier compatibility, laboratory
results and reviews must not be invented.

Of those, exactly one has since been supplied: a unit price of $0.30, given by
the client on 2026-08-16 with an instruction to publish merchant schema. It is
therefore a stated figure rather than an invented one, and it appears on the
page as well as in the markup. Everything else on this list was never supplied
and does not appear.

This is enforced structurally rather than editorially. The `SpecRow` type in
`src/lib/claims.ts` has no field for a value — only a list of selectable options
and a note on what changes between them. A single fabricated figure cannot be
typed into the content model.

| Item | Current treatment | What we need to state it |
| --- | --- | --- |
| Film gauge / thickness | Described as "Standard", "Heavier duty", "Heaviest available for the format" | Supplier figures, the unit, and whether each is a target or a minimum |
| Recycled content | Feedstock type and proportion confirmed per order | A supplier declaration or mill certificate for each film |
| Compostability | No standard, mark or class stated | An assessment document naming the standard and the conditions |
| Biodegradation | No timescale, conditions or method stated | Conditions, completeness, timeframe and the assessing body |
| Certification marks | None displayed | The certificate itself, plus permission to display the mark |
| Minimum order quantity | "Quoted against what you need" | The real threshold per specification, if one exists |
| Lead and production times | "Confirmed in writing per order" | Typical ranges by specification and quantity |
| Prices | $0.30 per unit, published as an indicative starting figure on every product page and in the Offer | A rate card, or confirmation that a single indicative figure is what you want carried across all 29 products |
| Carrier compatibility | No approval or compatibility claimed | Written confirmation from the carrier, if any exists |
| Customer reviews | None on the site or in the markup | A verified review programme |

## 2. Supplied photography — issues found

The 29 approved folders contain 87 files, of which 64 are unique by checksum.
Five distinct photographs were excluded and are listed in
`docs/09-image-report.md` with the reason for each. Summarised:

* A watermarked stock mockup carrying Lorem Ipsum and a fabricated address,
  present in four folders.
* An image showing TÜV certification marks, a "4–6 months" decomposition claim
  and a stated PLA/PBAT/corn-starch composition, present in the compostable and
  biodegradable folders. The brief forbids both certification logos and
  decomposition periods without evidence.
* A marketplace-watermarked image ("HUALIWEN", "20 PCS").
* Mailers printed with a competing packaging company's brand mark.
* Kraft paper padded mailers filed under a poly self-seal product.

### Retained but qualified

Three photographs carry sustainability wording printed on the bag by whoever
produced the original sample: a green mailer reading "100% eco-friendly
compostable and biodegradable", a grey mailer reading "made of up to 50%
recycled polyethylene", and a white mailer reading "made from 100% recycled
materials".

They are used with a visible caption stating that printed messaging is the
artwork of the business that ordered those samples, that The Poly Mailers does
not certify those claims, and that composition is confirmed at quotation. Alt
text describes the wording as printed artwork, never as a property of the
material.

**Recommendation:** replace all three with unbranded photography. A caption
manages the risk; it does not remove it.

### Third-party brand marks

Several retained photographs show other businesses' names — Puppysew Packaging,
Stesha Supply Co., anwe., Doctor Toys, and a book cover. They are presented as
examples of customer artwork, which is accurate and conventional in this
industry. **Recommendation:** commission own photography before any paid
campaign.

### Products with no exclusive photography

Large Poly Mailers, 24x24 and White Poly Mailers have no image that is not also
used elsewhere. Each page writes its own alt text and caption, but the pages
would be materially stronger with their own photographs.

Two images were borrowed within the size family to give Large Poly Mailers a
usable gallery, because its own folder contained only shared assets and one
excluded file. This is recorded in the image report.

## 3. Business details not supplied

None of these is invented anywhere on the site. Each needs confirming before the
relevant page is complete:

| Missing | Where it would appear |
| --- | --- |
| Registered company name and number | Footer, terms |
| Registered address | Terms, privacy |
| VAT or tax registration | Terms, quotations |
| Governing law and jurisdiction | Terms |
| Payment terms | Terms, quotations |
| Quantity tolerance on manufactured runs | Custom order policy — currently "stated on your quotation" |
| Reporting window for a damaged or short delivery | Custom order policy — currently "stated on your quotation" |
| Data retention period | Privacy policy — currently states no fixed period rather than inventing one |
| Social media profile URLs | Organization schema `sameAs`, currently omitted |
| Manufacturing location | About page — currently "confirmed per order in writing" |

The privacy policy deliberately says "we have not set a fixed retention period,
because publishing a number we do not actually enforce would be worse than
saying so." If a real policy exists, replacing that paragraph is a one-line
change.

## 4. Search demand deliberately not targeted

Roughly 7,000 monthly searches in the supplied research were left on the table,
with reasons recorded in `docs/01-audit-and-architecture.md`:

* Retailer-navigational terms — `uline poly mailers`, `staples poly mailers`,
  `amazon poly mailers`, `dollar tree poly mailers`, `target poly mailers`,
  `office depot poly mailers`, `upaknship`, `walgreens`, `ecoenclose`,
  `sticker mule`, `scotch`. Building pages for competitors' brand names would
  be thin, would misrepresent who we are, and cannot be satisfied by a
  custom-quote manufacturer.
* Carrier-branded supply — `usps poly mailers`, `usps shipping bags`. The site
  makes no carrier claims anywhere.
* `free poly mailers` (390/mo) — partly served by `/samples/`, with no
  free-product claim made.
* `poly mailers near me` and variants (~3,400/mo) — served by the location
  pages, which state plainly that orders are produced to order and shipped, with
  no address, branch or local-stock language.

If the client wants any of this demand, it needs a commercial decision first —
not a page.

## 5. Decisions taken that you may want to revisit

**`/colored-poly-mailers/` is the product page.** The brief listed that URL twice:
once as mandatory product #12 and once as a suggested colour-collection URL. One
canonical URL per page is non-negotiable, so the mandatory product list won and
the colour collection lives at `/poly-mailer-colors/`.

**No hreflang.** The four country hubs are different pages about different
markets, not localised versions of one page. Declaring them as alternates would
misrepresent the relationship, and the brief explicitly warned against adding
hreflang merely because country hubs exist.

**Merchant listings are live, on a client instruction that overrode the original
brief.** The brief said not to invent prices; the client subsequently supplied
$0.30 per unit and asked for merchant schema. So every product now carries a
single flat `Offer` at that figure, with `MerchantReturnPolicy` and
`OfferShippingDetails`, plus a feed at `/google-merchant-feed.xml`.

Three things were held back, because they would fail rather than help:

* **No `AggregateOffer` price range.** A range implies a ceiling that has not
  been published, and a price that does not match the page is the usual reason
  an item is disapproved.
* **`MerchantReturnNotPermitted`, not a return window.** `/custom-order-policy/`
  states that a printed run made to your artwork cannot be restocked, resold or
  returned. A finite window would read better in a listing and would contradict
  the page it links to.
* **No `deliveryTime` and no `gtin`.** No lead times were ever supplied and a
  made-to-order item has no barcode. Inventing either in JSON is the same
  fabrication the site declines to make in prose, and Google checks markup
  against the page.

The visible price and the `Offer` price are generated from one constant, and the
content audit fails the build if they ever disagree.

**Location pages stop at 55.** The brief's list is covered in full. No further
pages were generated, because a page with nothing specific to say about a place
is worse than no page. `/locations/` says this in as many words.

## 6. Known dependency advisory

`npm audit` reports a high-severity ReDoS advisory in `path-to-regexp`, reached
through `@vercel/routing-utils` inside `@astrojs/vercel`. It is a build-time
dependency only: it parses route patterns from the config during the build and
is not present in the deployed static output or the serverless function.

The advertised fix downgrades `@astrojs/vercel` from 11.x to 8.x, which is a
breaking change and an older adapter. Not taken. Worth revisiting when the
adapter ships a patched dependency.

## 7. Recommended before launch

1. ~~Set the four SMTP variables and send a live test through the form.~~ Done
   2026-08-16 — verified with `npm run test:smtp`. Still to do: set the same
   values in Vercel, and move off the personal Gmail sender onto a mailbox on
   the domain. See `docs/14-environment-variables.md`.
2. Publish SPF, DKIM and DMARC records for the sending domain, once the sender
   is on that domain — they cannot align with a Gmail account.
3. Supply company registration details, or confirm they should stay off the site.
4. Decide the retention period for enquiry data.
5. Replace the three claim-bearing photographs.
6. Confirm the quantity tolerance and the damage-reporting window.
7. Run Lighthouse against the live domain — it cannot be measured meaningfully
   from a local build.
8. Verify Search Console and submit `/sitemap-index.xml`.
