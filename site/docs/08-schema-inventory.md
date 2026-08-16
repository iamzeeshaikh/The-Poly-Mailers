# Schema inventory

Every JSON-LD node emitted across the built site, counted by type.

| Type | Pages |
| --- | ---: |
| BreadcrumbList | 147 |
| FAQPage | 137 |
| WebPage | 130 |
| ItemList | 80 |
| ImageObject | 29 |
| Product | 29 |
| CollectionPage | 15 |
| BlogPosting | 10 |
| Organization | 1 |
| WebSite | 1 |
| AboutPage | 1 |
| ContactPage | 1 |

Each page emits exactly one `<script type="application/ld+json">` containing a
single `@graph`, so no entity is declared twice on a page.

## Entities defined once and referenced by @id

| Entity | Defined on | Referenced from |
| --- | --- | --- |
| `https://thepolymailers.com/#organization` | `/` | every page, via `about`, `publisher` and `manufacturer` |
| `https://thepolymailers.com/#website` | `/` | every page, via `isPartOf` |

## What Product schema deliberately omits

The `Product` nodes on the 29 product pages carry `name`, `description`,
`image`, `category`, `brand`, `manufacturer`, `url` and one
`additionalProperty` stating that supply is made to order against a written
quotation.

They carry **no** `offers`, `price`, `priceCurrency`, `availability`,
`sku`, `gtin`, `mpn`, `aggregateRating` or `review`. None of those exists
for a custom-quote manufacturer and none was supplied, so emitting them would be
fabricating structured data. `scripts/audit-content.mjs` fails the build if any
of them appears.

`AggregateOffer` is likewise absent: it requires an authentic price range and
offer count, and there is neither.

`MerchantReturnPolicy` and `OfferShippingDetails` are not emitted either,
because both are properties of an `Offer` — without a real offer there is
nothing for them to attach to. The equivalent information is published as
readable content on `/custom-order-policy/` and `/shipping-and-delivery/`.

`LocalBusiness` is not emitted anywhere: there is no supplied address, and the
audit treats its presence as an error.

## FAQPage

Emitted on 137 pages. Every question and answer is
generated from the same array that renders the visible FAQ block, so the two
cannot drift. The audit re-reads the built HTML and fails if a question or
answer in the markup is not present in the visible text.

## VideoObject

Not emitted. There are no videos on the site.
