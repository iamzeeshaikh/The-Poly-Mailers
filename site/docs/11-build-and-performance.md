# Build and performance report

## Output

| | |
| --- | ---: |
| HTML pages | 150 |
| Total HTML | 10438 KB |
| Average page HTML | 69.6 KB |
| Largest page HTML | 115.0 KB |
| JavaScript bundles | 3 |
| Total JavaScript | 15.0 KB uncompressed |
| CSS files | 4 |
| Total CSS | 45.3 KB uncompressed |
| Image renditions | 1299 |
| Fonts | 2 files, 115 KB total |

## JavaScript actually shipped

There is no framework runtime. No React, no Vue, no hydration, no client
router. Every script is hand-written and scoped to the component that needs it:

| Script | Loaded on | Purpose |
| --- | --- | --- |
| Scroll reveal | every page | One IntersectionObserver that unhooks each element as it fires. Skipped entirely under reduced motion. |
| Header | every page | Mobile panel, dropdowns, Escape handling, breakpoint reset. |
| Quote form | pages with a form | Client-side validation mirroring the server rules, error rendering, focus management. |
| Gallery | product pages | Thumbnail switching with arrow-key support. |
| Hero figure | homepage | Colour swatch swapping via CSS custom properties. |
| Design tool | `/design-your-poly-mailer/` | The configurator. Loaded only on that page. |

The design tool is the heaviest script and it exists on exactly one page, so it
never affects the pages that matter for acquisition.

## Core Web Vitals

The build is engineered against the three metrics rather than measured against
them — a real Lighthouse figure needs the production domain, a real network and
field data, none of which exist yet. What has been done:

**LCP.** Static HTML from a CDN with no render-blocking third-party requests.
Both fonts are self-hosted, subset to latin, and preloaded. The LCP image on
product and article pages is preloaded with a matching `imagesrcset` so the
preload and the render resolve to the same file. Critical CSS is inlined by
Astro where it is small enough to be worth it.

**INP.** Almost nothing to interact with is JavaScript-driven. The FAQ
accordions are native `<details>`, the tables are CSS-scrolled, the navigation
is a class toggle. No script does layout reads in a loop or attaches
unthrottled scroll handlers.

**CLS.** Every image has `width`, `height` and a container with a fixed
`aspect-ratio`. The gallery reserves a 1:1 box and a fixed-height caption area
so switching images cannot move anything. Fonts use metric-matched fallback
faces with `size-adjust`, so the swap does not reflow text. The WhatsApp
button is fixed-position with reserved dimensions.

## Verification performed

* `npm run audit` — 150 built pages checked for metadata, canonicals, schema,
  links, alt text, duplication and banned vocabulary. **0 errors.**
* `npm run qa` — 18 representative pages driven in Chromium at 320, 375, 414,
  768, 1024 and 1440px. **17 checks, 0 failures**, covering horizontal overflow,
  keyboard operation, focus visibility, form validation and recovery, upload
  rejection, the design tool, reduced motion, a JavaScript-disabled render and
  WCAG AA contrast on 199 text elements.
* `npm run test:quote` — the form endpoint driven against a local SMTP server.
  **15 checks, 0 failures**, covering CSRF, validation, allow lists, header
  injection, honeypot, timing, magic-byte upload validation, SVG script
  rejection, output escaping and rate limiting.
* `npx astro check` — **0 type errors** across 73 files.

## Not verified

Lighthouse and real-device field measurement, because both need the production
domain live. Run them after DNS cutover.
