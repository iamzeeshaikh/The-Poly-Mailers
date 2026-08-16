# Metadata audit

Measured across all 148 indexable pages in the built output.

## Uniqueness

| Check | Result |
| --- | --- |
| Duplicate titles | **None** |
| Duplicate descriptions | **None** |
| Duplicate H1s | **None** |
| Pages with no title | 0 |
| Pages with no description | 0 |
| Pages with no H1 | 0 |

## Length distribution

| | Titles | Descriptions |
| --- | ---: | ---: |
| Shortest | 26 | 100 |
| Average | 50 | 141 |
| Longest | 67 | 159 |
| Over 60 characters | 7 | — |
| Over 130 characters | — | 132 |

Titles are written for clarity first. Where a title runs past 60 characters it
is because truncating it would have cost the distinguishing word — the brief
asks for intent over mechanical truncation, and that is the trade taken.

Descriptions sit above the 120–130 band on many pages for the same reason: each
one states what the page argues rather than repeating the title. None exceeds
159 characters.

## Canonicals and robots

| Check | Result |
| --- | --- |
| Pages with a self-referencing canonical | 148 / 148 |
| Canonical mismatches | 0 |
| Indexable pages carrying noindex | 0 |
| Non-indexable pages missing noindex | 0 |

Every indexable page emits `index, follow, max-image-preview:large`.

## hreflang

None is emitted anywhere. The four country hubs are different pages about
different markets, not localised versions of one page, so declaring them as
alternates would misrepresent the relationship. See
`docs/01-audit-and-architecture.md`.
