# Country and location inventory

Four country hubs and 55 regional pages.

| Market | Hub | State pages | City pages |
| --- | --- | ---: | ---: |
| United States | `/usa/` | 20 | 20 |
| United Kingdom | `/uk/` | 0 | 5 |
| Canada | `/canada/` | 0 | 5 |
| Australia | `/australia/` | 0 | 5 |
| **Total** | **4 hubs** | **20** | **35** |

## Every location page and the angle it owns

The test applied to each: if the place name were swapped for another, would the
page still be true? Where the answer was yes, the page was rewritten until it
was no.

### United States

| Page | URL | Angle |
| --- | --- | --- |
| California | `/locations/california/` | Packaging as content — the state where the parcel is filmed more often than anywhere else. |
| Texas | `/locations/texas/` | Volume operations and the specific problem of storing adhesive-closure packaging in a hot climate. |
| Florida | `/locations/florida/` | Humidity — the only page on the site where moisture is the primary specification driver. |
| New York | `/locations/new-york/` | Storage cost as a packaging constraint, plus two sectors that want opposite things from the same product. |
| Pennsylvania | `/locations/pennsylvania/` | Minimising the number of packaging lines in an operation that ships genuinely varied formats. |
| Illinois | `/locations/illinois/` | Packaging for parcels that will be handled repeatedly before reaching a customer, plus cold-weather behaviour. |
| Ohio | `/locations/ohio/` | Meeting an inbound specification written by a fulfilment centre or retail partner. |
| Georgia | `/locations/georgia/` | The transition from a first packaging decision to a production specification — a growth-stage page. |
| North Carolina | `/locations/north-carolina/` | Packaging bought by one business to satisfy another business’s brand standard. |
| New Jersey | `/locations/new-jersey/` | Repacking — buying packaging for goods that arrive in one format and must leave in another. |
| Virginia | `/locations/virginia/` | Reverse logistics — designing outbound packaging around the cost of processing it coming back. |
| Washington | `/locations/washington/` | A rigorous sustainability conversation — what is actually documentable, addressed to buyers who will check. |
| Massachusetts | `/locations/massachusetts/` | Ordering packaging for demand with two annual peaks rather than a steady curve. |
| Arizona | `/locations/arizona/` | Heat affecting parcel contents in transit — a limit of the packaging, not a feature of it. |
| Tennessee | `/locations/tennessee/` | Fixed deadline, uncertain quantity — merchandise and event-driven packaging planning. |
| Colorado | `/locations/colorado/` | Loft — packaging products that are light, bulky and resist compression. |
| Michigan | `/locations/michigan/` | Packaging as a controlled specification — consistency, change notice and documentation. |
| Maryland | `/locations/maryland/` | Institutional procurement — quotation validity, purchase orders and budget cycles. |
| Minnesota | `/locations/minnesota/` | Supplying into retail, where the specification is set by the buying organisation. |
| Indiana | `/locations/indiana/` | Change control — what happens when a material changes, and how it should be handled. |
| New York City | `/locations/new-york-city/` | The final hundred feet of an urban delivery — mailrooms, doormen and stacked parcels. |
| Los Angeles | `/locations/los-angeles/` | Keeping packaging current when the product cycle is measured in weeks. |
| Chicago | `/locations/chicago/` | Trade show and event shipping — packaging for handling you do not control. |
| Houston | `/locations/houston/` | Export shipping — longer transits, more handling and documentation that must survive. |
| Phoenix | `/locations/phoenix/` | Long, low-touch transits — exposure over time rather than impact from handling. |
| Philadelphia | `/locations/philadelphia/` | Genuinely small volumes — packaging for a business shipping tens of parcels a week. |
| San Antonio | `/locations/san-antonio/` | Bilingual packaging — what two languages do to layout and legibility on a small panel. |
| San Diego | `/locations/san-diego/` | Coordinating packaging delivery with production that happens elsewhere. |
| Dallas | `/locations/dallas/` | Wholesale fulfilment — packaging judged by a receiving shop, not by a customer. |
| Austin | `/locations/austin/` | Creator merchandise — small volumes, known audience, unpredictable timing. |
| Jacksonville | `/locations/jacksonville/` | The transition from container freight to individual parcels. |
| Fort Worth | `/locations/fort-worth/` | Heavy, hardware-laden soft goods that behave nothing like ordinary apparel. |
| Columbus | `/locations/columbus/` | Sample and pre-production shipping, where each parcel carries a commercial decision. |
| Indianapolis | `/locations/indianapolis/` | A central position reducing handling — and the possibility of over-specifying as a result. |
| Charlotte | `/locations/charlotte/` | Corporate and internal sends — parcels to employees, clients and partners rather than customers. |
| Seattle | `/locations/seattle/` | Prolonged low-intensity moisture exposure, and what it does to labels and closures. |
| Denver | `/locations/denver/` | Air pressure changes and their effect on sealed and inflated packaging. |
| Boston | `/locations/boston/` | Receiving a bulk packaging delivery into constrained premises. |
| Nashville | `/locations/nashville/` | Hand-packing at home or in a small space, without warehouse infrastructure. |
| Atlanta | `/locations/atlanta/` | Weight and dimensional billing — where packaging mass is a direct, measurable cost. |

### United Kingdom

| Page | URL | Angle |
| --- | --- | --- |
| London | `/locations/london/` | Postal format thresholds — where parcel thickness rather than weight decides the price. |
| Birmingham | `/locations/birmingham/` | B2B and trade shipping, where the parcel is checked in rather than opened. |
| Manchester | `/locations/manchester/` | Burst demand — packaging planned for a campaign day rather than an average month. |
| Glasgow | `/locations/glasgow/` | Remote and island delivery — longer transits, more handling, harsher conditions. |
| Leeds | `/locations/leeds/` | Store fulfilment — the same order packed in a warehouse or in a shop stockroom. |

### Canada

| Page | URL | Angle |
| --- | --- | --- |
| Toronto | `/locations/toronto/` | Cross-border parcels — documentation, inspection and additional custody changes. |
| Vancouver | `/locations/vancouver/` | Canadian plastics regulation — what it covers, what it does not, and where to verify. |
| Montreal | `/locations/montreal/` | French-language packaging in Quebec — the layout consequences of two languages. |
| Calgary | `/locations/calgary/` | Sustained deep cold — its effect on film flexibility and adhesive bonding. |
| Ottawa | `/locations/ottawa/` | Enormous variation in transit within one country, and how to specify across it. |

### Australia

| Page | URL | Angle |
| --- | --- | --- |
| Sydney | `/locations/sydney/` | Lead time as a planning input — how distance changes ordering and stockholding. |
| Melbourne | `/locations/melbourne/` | High presentation standards at deliberately small volumes. |
| Brisbane | `/locations/brisbane/` | A reversed seasonal calendar and what it does to campaign packaging planning. |
| Perth | `/locations/perth/` | Long domestic freight in both directions — inbound stockholding and outbound transit. |
| Adelaide | `/locations/adelaide/` | Environmental claim substantiation in the Australian regulatory context. |

## Rules applied to every location page

* No local address, phone number, branch, depot or collection point is implied
  anywhere. Each page states that orders are produced to order and shipped.
* The single displayed phone number is never labelled as local to any market.
* No population figures, market-size statistics or other local data. Sector
  notes describe what a place is commercially known for, which is general
  knowledge, not invented data.
* Section order, block types, FAQs, product recommendations, CTA wording and
  internal-link destinations all vary between pages by design.
* The build fails on duplicate slugs, and the content audit fails on similar
  content within the location family.
