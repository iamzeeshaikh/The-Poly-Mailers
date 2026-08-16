# Accessibility report

Verified in Chromium via `npm run qa`, against the built site, at six viewport
widths. The full machine-readable result is in `docs/qa-browser-report.json`.

## What was tested and passed

| Check | Result |
| --- | --- |
| Skip link is the first tab stop | Pass — on every page, jumping straight to `#main` |
| Keyboard operation of the image gallery | Pass — thumbnails activate the stage image and support arrow keys |
| Keyboard operation of the design tool | Pass — colour swatches behave as a radio group with arrow-key navigation |
| Native disclosure semantics for FAQs | Pass — `<details>` / `<summary>`, not scripted divs |
| Form error handling | Pass — 7 inline errors rendered, 7 fields marked `aria-invalid`, no navigation |
| Focus management on error | Pass — focus moves to the first field that needs attention |
| Value preservation after a failed submit | Pass — nothing the user typed is lost |
| Reduced motion | Pass — no revealed content stays hidden when motion is reduced |
| Rendering without JavaScript | Pass — 1,297 words and 6 images render on a product page with scripting off |
| Colour contrast | Pass — 199 sampled text elements meet WCAG AA against their computed background |
| Horizontal overflow | Pass — no page can be scrolled sideways at 320, 375, 414, 768, 1024 or 1440px |

## Built-in structure

* One `<h1>` per page; heading order checked by the content audit on all 150
  built pages, with no skipped levels.
* Landmarks throughout: `header`, `nav` (labelled), `main`, `footer`, plus
  labelled `section` elements for major page regions.
* Lists marked up as lists. Comparison tables use `<th scope="col">` and
  `<th scope="row">`, with a `<caption>` describing what is being compared.
* Every form control has a visible, associated `<label>`. Error text is linked
  through `aria-describedby` and announced via `role="alert"`.
* Errors are described in words, never by colour alone.
* Focus is never removed; `:focus-visible` renders a 3px outline with an offset
  on every interactive element.
* Interactive targets are at least 42px tall, and 48px for primary controls.
* Text inputs are 16px, which stops iOS Safari zooming the viewport on focus.
* `prefers-reduced-motion` is honoured globally: transitions collapse to 0.001ms
  and every scroll-revealed element is shown immediately.
* Tables scroll inside their own container rather than pushing the page.
* The WhatsApp button is bottom-left, so it does not sit over a primary action,
  and carries a descriptive `aria-label` rather than an icon alone.
* Decorative images carry `alt=""`; their meaning is exposed through the
  control that wraps them.

## The design tool specifically

The configurator is the component most likely to exclude someone, so it was
built without a drag-only interaction:

* Artwork scale and position are `<input type="range">` controls, so a keyboard
  user has exactly the same control as a pointer user rather than a degraded
  alternative.
* Colour swatches implement the radio-group pattern with `role="radio"`,
  `aria-checked`, roving `tabindex` and arrow-key navigation.
* The SVG preview has a `<title>` and a `<desc>` that is rewritten on every
  change, so a screen-reader user hears the current configuration described in
  words rather than being told there is an image.
* Every configuration option is a native `<select>`, `<input>` or `<button>`.
* The page states plainly that anything the tool captures can be typed into the
  quote form's message field instead, and will be applied identically.

## What has not been done

No audit by an independent accessibility specialist, and no testing with people
who use assistive technology daily. Automated checks and careful construction
find a large class of problems and miss the ones that matter most to real users.

Screen-reader testing has been reasoned about rather than performed: the markup
is semantic and the ARIA is minimal and conventional, but that is not the same
as having listened to it in NVDA, JAWS or VoiceOver.

`/accessibility-statement/` says this publicly rather than claiming a
conformance level the work has not earned, and invites reports as defects.

## Recommended next steps

1. Screen-reader passes in VoiceOver and NVDA, prioritising the design tool, the
   quote form and the product gallery.
2. An independent audit before any accessibility claim is made in a tender or
   procurement response.
3. Keyboard testing by someone who navigates by keyboard habitually — not the
   same thing as a developer pressing Tab.
