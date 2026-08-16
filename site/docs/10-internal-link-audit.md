# Internal link audit

Contextual links only. Header, footer and breadcrumb navigation are excluded,
because a link present on all 150 pages says nothing about whether a
page is genuinely connected.

## Summary

| | |
| --- | ---: |
| Contextual internal links | 1466 |
| Average inbound per page | 9.1 |
| Average outbound per page | 9.0 |
| **Orphan pages** | **0** |
| Pages with a single inbound link | 0 |
| Broken internal links | 0 |
| Generic anchors ("click here", "read more") | 0 |

Zero orphans and zero broken links. The orphan check enumerates every indexable
URL first and subtracts the ones with inbound links, rather than walking the
links that exist — a walk over found links can never surface a page nothing
points at.

## Least-linked pages

The ten pages with the fewest contextual inbound links. None is at zero.

| Page | Inbound |
| --- | ---: |
| `/about/` | 2 |
| `/accessibility-statement/` | 2 |
| `/blog/how-custom-printed-poly-mailers-support-brand-recognition/` | 2 |
| `/blog/how-to-choose-the-right-poly-mailer-size/` | 2 |
| `/blog/` | 2 |
| `/blog/poly-mailers-vs-padded-mailers/` | 2 |
| `/faq/` | 2 |
| `/industries/` | 2 |
| `/sitemap/` | 2 |
| `/blog/how-to-prepare-artwork-for-custom-poly-mailer-printing/` | 3 |

## Most-linked pages

| Page | Inbound |
| --- | ---: |
| `/request-a-quote/` | 132 |
| `/privacy-policy/` | 117 |
| `/blank-poly-mailers/` | 45 |
| `/10x13-poly-mailers/` | 45 |
| `/usa/` | 31 |
| `/self-seal-poly-mailers/` | 30 |
| `/padded-poly-mailers/` | 30 |
| `/custom-poly-mailers/` | 27 |
| `/economy-poly-mailers/` | 24 |
| `/poly-bubble-mailers/` | 20 |

## Pages linking out least

| Page | Distinct outbound |
| --- | ---: |
| `/accessibility-statement/` | 2 |
| `/design-your-poly-mailer/` | 2 |
| `/faq/` | 2 |
| `/privacy-policy/` | 2 |
| `/request-a-quote/` | 2 |
| `/resources/closure-and-self-seal-guide/` | 2 |
| `/resources/mailer-measurement-guide/` | 2 |
| `/shipping-and-delivery/` | 2 |

## Repeated anchors

Anchor text used more than ten times with the same destination:

| Anchor → destination | Uses |
| --- | ---: |
| privacy policy → /privacy-policy/ | 116 |

Both entries above are structural rather than editorial: the first is the
call-to-action button that closes most pages, the second is the "related pages"
card that routes regional pages back to their market hub. Neither is exact-match
anchor text pointed at a commercial keyword, and neither appears inside body
copy.

## Rules the build enforces

* At most one contextual link per section. Sections that carry a link use the
  `linked-prose` block type, which structurally allows exactly one.
* No generic anchors. `click here`, `read more`, `here`, `view`, `more`,
  `learn more`, `link` and `this page` all fail the audit.
* Every internal href ends in a trailing slash; the audit fails otherwise.
* Every page must have at least one contextual outbound link.
* Every indexable page must have at least one contextual inbound link.

## Link graph design

* Products link to their collection, to adjacent sizes, and to the capability
  page that explains the decision behind them.
* Collections link down to products and across to the resource that goes deeper.
* Locations link to their country hub, to two or three products with a
  location-specific reason, and to one capability or resource page.
* Industries link to five products, each with a sector-specific reason.
* Articles link to the product or resource that continues the argument, never
  more than one per section.
* Resources link to the capability page that turns the guidance into an order.

No page links to every product. The nearest thing to that is the products
overview, which is a catalogue page and exists for exactly that purpose.
