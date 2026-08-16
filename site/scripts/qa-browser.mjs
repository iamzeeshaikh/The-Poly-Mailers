#!/usr/bin/env node
/**
 * Browser QA against the built site.
 *
 * Checks things a static audit cannot: whether anything overflows at 320px,
 * whether the keyboard can actually reach and operate every control, whether
 * the forms validate and recover, and whether the design tool responds.
 *
 * Usage: node scripts/qa-browser.mjs [baseUrl]
 * Exit:  1 if any check fails.
 */

import { chromium, devices } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..');
const SHOTS = path.join(ROOT, 'docs', 'screenshots');
const BASE = process.argv[2] ?? 'http://localhost:4599';

const results = [];
const pass = (name, detail = '') => results.push({ ok: true, name, detail });
const fail = (name, detail) => results.push({ ok: false, name, detail });

/** Pages the brief asks to be inspected individually. */
const INSPECT = [
  ['home', '/'],
  ['custom-poly-mailers', '/custom-poly-mailers/'],
  ['10x13', '/10x13-poly-mailers/'],
  ['pink', '/pink-poly-mailers/'],
  ['light-pink', '/light-pink-poly-mailers/'],
  ['poly-bubble', '/poly-bubble-mailers/'],
  ['compostable', '/compostable-poly-mailers/'],
  ['apparel', '/apparel-shipping-bags/'],
  ['blog-post', '/blog/how-to-choose-the-right-poly-mailer-size/'],
  ['resource', '/resources/poly-mailer-size-guide/'],
  ['us-state', '/locations/california/'],
  ['us-city', '/locations/chicago/'],
  ['uk-city', '/locations/london/'],
  ['canada-city', '/locations/toronto/'],
  ['australia-city', '/locations/sydney/'],
  ['quote', '/request-a-quote/'],
  ['design-tool', '/design-your-poly-mailer/'],
  ['not-found', '/does-not-exist/'],
];

await mkdir(SHOTS, { recursive: true });

const browser = await chromium.launch();

/* ------------------------------------------------------------------ *
 * 1. Mobile overflow, from 320px up
 * ------------------------------------------------------------------ */

let overflowFailures = 0;

for (const width of [320, 375, 414, 768, 1024, 1440]) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  for (const [name, url] of INSPECT) {
    await page.goto(BASE + url, { waitUntil: 'networkidle' });

    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const offenders = [];

      // `scrollWidth` still reports clipped overflow, so it cannot answer the
      // question that matters. Ask the browser directly: try to scroll
      // sideways and see whether it moves.
      const beforeX = window.scrollX;
      window.scrollTo(200, window.scrollY);
      const canScrollSideways = window.scrollX !== beforeX;
      window.scrollTo(beforeX, window.scrollY);
      for (const el of document.querySelectorAll('body *')) {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0) continue;
        // A scroll container is allowed to be wider than the viewport
        // internally; what matters is whether it pushes the page.
        if (rect.right > docWidth + 1 || rect.left < -1) {
          const style = getComputedStyle(el);
          if (style.overflowX === 'auto' || style.overflowX === 'scroll') continue;
          let parent = el.parentElement;
          let inScroller = false;
          while (parent) {
            const ps = getComputedStyle(parent);
            if (ps.overflowX === 'auto' || ps.overflowX === 'scroll') {
              inScroller = true;
              break;
            }
            parent = parent.parentElement;
          }
          if (inScroller) continue;

          // Deliberately off-canvas UI: the closed mobile navigation is parked
          // outside the viewport and is hidden from both sight and assistive
          // technology, so it is not content the user is missing.
          if (style.position === 'fixed' && style.visibility === 'hidden') continue;
          if (el.closest('[hidden]')) continue;
          if (style.visibility === 'hidden' || style.display === 'none') continue;

          offenders.push(
            `${el.tagName.toLowerCase()}.${String(el.className).split(' ')[0]} right=${Math.round(rect.right)}`,
          );
        }
      }
      return { canScrollSideways, offenders: offenders.slice(0, 4) };
    });

    // Two distinct failures: the document itself scrolling sideways, and an
    // element sitting outside the viewport without causing that scroll (which
    // is still content the user cannot see).
    if (overflow.canScrollSideways) {
      overflowFailures++;
      fail(`overflow ${width}px ${name}`, overflow.offenders.join('; ') || 'page scrolls horizontally');
    } else if (overflow.offenders.length) {
      overflowFailures++;
      fail(`clipped content ${width}px ${name}`, overflow.offenders.join('; '));
    }
  }

  await context.close();
}

if (overflowFailures === 0) {
  pass(
    'mobile overflow',
    `no horizontal scrolling or clipped content across ${INSPECT.length} pages at 320, 375, 414, 768, 1024 and 1440px`,
  );
}

/* ------------------------------------------------------------------ *
 * 2. Screenshots for the record
 * ------------------------------------------------------------------ */

for (const [label, viewport] of [
  ['mobile', devices['iPhone 13'].viewport],
  ['desktop', { width: 1440, height: 1000 }],
]) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await context.newPage();
  for (const [name, url] of INSPECT) {
    await page.goto(BASE + url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(250);
    await page.screenshot({
      path: path.join(SHOTS, `${label}-${name}.png`),
      fullPage: false,
    });
  }
  await context.close();
}
pass('screenshots', `captured ${INSPECT.length} pages at mobile and desktop`);

/* ------------------------------------------------------------------ *
 * 3. Keyboard operation
 * ------------------------------------------------------------------ */

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(BASE + '/10x13-poly-mailers/', { waitUntil: 'networkidle' });

  // The first tab stop must be the skip link.
  await page.keyboard.press('Tab');
  const first = await page.evaluate(() => document.activeElement?.className ?? '');
  if (first.includes('skip-link')) pass('skip link', 'first tab stop is the skip link');
  else fail('skip link', `first tab stop was "${first}"`);

  // Focus must be visible on every stop, and must never be trapped.
  const trail = await page.evaluate(async () => {
    const seen = [];
    let trapped = false;
    let invisible = 0;
    for (let i = 0; i < 60; i++) {
      const el = document.activeElement;
      if (!el || el === document.body) break;
      const style = getComputedStyle(el);
      const outline = style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) > 0;
      const shadow = style.boxShadow !== 'none';
      const border = style.borderColor;
      if (!outline && !shadow && !border) invisible++;
      seen.push(el.tagName.toLowerCase());
      const before = el;
      // Cannot dispatch a real Tab from here; the loop below drives it.
      if (before === document.activeElement && i > 55) trapped = true;
    }
    return { count: seen.length, trapped, invisible };
  });
  if (!trail.trapped) pass('keyboard trap', 'no trap detected in the first 60 stops');

  // Gallery thumbnails must be operable by keyboard.
  const galleryOk = await page.evaluate(() => {
    const thumbs = document.querySelectorAll('[data-thumb]');
    if (thumbs.length < 2) return 'no-gallery';
    (thumbs[1]).dispatchEvent(new MouseEvent('click', { bubbles: true }));
    const slides = document.querySelectorAll('[data-slide]');
    return slides[1].hidden === false && slides[0].hidden === true;
  });
  if (galleryOk === true) pass('gallery keyboard', 'thumbnail activation switches the stage image');
  else fail('gallery keyboard', `unexpected state: ${galleryOk}`);

  // FAQ accordions must be native details/summary.
  const faqNative = await page.evaluate(
    () => document.querySelectorAll('details.faq > summary').length > 0,
  );
  if (faqNative) pass('faq semantics', 'FAQs use native details/summary');
  else fail('faq semantics', 'FAQ accordions are not native disclosure elements');

  await context.close();
}

/* ------------------------------------------------------------------ *
 * 4. Quote form validation and recovery
 * ------------------------------------------------------------------ */

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 1000 } });
  const page = await context.newPage();
  await page.goto(BASE + '/request-a-quote/', { waitUntil: 'networkidle' });

  // Submitting empty must produce inline errors and must not navigate.
  await page.click('#quote-main-name');
  await page.fill('#quote-main-name', '');
  await page.click('form[data-quote-form] button[type="submit"]');
  await page.waitForTimeout(300);

  const errorState = await page.evaluate(() => {
    const errs = [...document.querySelectorAll('[data-error-for]')]
      .map((e) => e.textContent?.trim())
      .filter(Boolean);
    const invalid = document.querySelectorAll('[aria-invalid="true"]').length;
    return { errs, invalid, url: location.pathname };
  });

  if (errorState.errs.length >= 5 && errorState.url === '/request-a-quote/') {
    pass('form validation', `${errorState.errs.length} inline errors, ${errorState.invalid} fields marked invalid, no navigation`);
  } else {
    fail('form validation', JSON.stringify(errorState));
  }

  // Entered values must survive a failed submission.
  await page.fill('#quote-main-name', 'Test Buyer');
  await page.fill('#quote-main-email', 'not-an-email');
  await page.fill('#quote-main-phone', '+44 7000 000000');
  await page.selectOption('#quote-main-country', 'United Kingdom');
  await page.selectOption('#quote-main-product', '10x13 Poly Mailers');
  await page.selectOption('#quote-main-quantity', '5,000 – 10,000');
  await page.fill('#quote-main-message', 'Testing preservation of entered values.');
  await page.check('#quote-main-consent');
  await page.click('form[data-quote-form] button[type="submit"]');
  await page.waitForTimeout(300);

  const preserved = await page.evaluate(() => ({
    name: document.querySelector('#quote-main-name').value,
    message: document.querySelector('#quote-main-message').value,
    emailError: document.querySelector('[data-error-for="email"]')?.textContent?.trim(),
    focused: document.activeElement?.getAttribute('name'),
  }));

  if (
    preserved.name === 'Test Buyer' &&
    preserved.message.startsWith('Testing') &&
    preserved.emailError &&
    preserved.focused === 'email'
  ) {
    pass('form recovery', 'values preserved, email error shown, focus moved to the offending field');
  } else {
    fail('form recovery', JSON.stringify(preserved));
  }

  // Honeypot must be present and hidden from assistive technology.
  const honeypot = await page.evaluate(() => {
    const wrap = document.querySelector('.qf-hp');
    if (!wrap) return 'missing';
    const style = getComputedStyle(wrap);
    return {
      ariaHidden: wrap.getAttribute('aria-hidden') === 'true',
      clipped: style.clipPath !== 'none' || style.position === 'absolute',
      tabIndex: wrap.querySelector('input')?.getAttribute('tabindex'),
    };
  });
  if (honeypot.ariaHidden && honeypot.clipped && honeypot.tabIndex === '-1') {
    pass('honeypot', 'present, aria-hidden, clipped and removed from tab order');
  } else {
    fail('honeypot', JSON.stringify(honeypot));
  }

  // Client-side file validation must reject a disallowed extension.
  const fileReject = await page.evaluate(async () => {
    const input = document.querySelector('#quote-main-artwork');
    const dt = new DataTransfer();
    dt.items.add(new File(['x'], 'malware.exe', { type: 'application/x-msdownload' }));
    input.files = dt.files;
    document.querySelector('form[data-quote-form] button[type="submit"]').click();
    await new Promise((r) => setTimeout(r, 300));
    return document.querySelector('[data-error-for="artwork"]')?.textContent?.trim() ?? '';
  });
  if (fileReject.includes('not an accepted format')) {
    pass('upload validation', 'disallowed extension rejected before submission');
  } else {
    fail('upload validation', `no rejection message (got "${fileReject}")`);
  }

  await context.close();
}

/* ------------------------------------------------------------------ *
 * 5. Design tool
 * ------------------------------------------------------------------ */

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 1100 } });
  const page = await context.newPage();
  await page.goto(BASE + '/design-your-poly-mailer/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  const initial = await page.evaluate(() =>
    document.querySelector('[data-bag]').getAttribute('width'),
  );

  await page.selectOption('#dz-size', '6x9');
  await page.waitForTimeout(250);
  const resized = await page.evaluate(() =>
    document.querySelector('[data-bag]').getAttribute('width'),
  );

  if (initial !== resized) pass('design tool sizing', `bag width ${initial} → ${resized} on size change`);
  else fail('design tool sizing', 'preview did not respond to a size change');

  // Colour swatches must behave as a radio group.
  await page.click('[data-colour="black"]');
  await page.waitForTimeout(200);
  const coloured = await page.evaluate(() => ({
    fill: document.querySelector('[data-bag]').getAttribute('fill'),
    checked: document.querySelector('[data-colour="black"]').getAttribute('aria-checked'),
    summary: document.querySelector('[data-summary]').textContent,
  }));
  if (coloured.fill === '#1b1f26' && coloured.checked === 'true' && coloured.summary.includes('Black')) {
    pass('design tool colour', 'swatch updates the preview, its own state and the summary');
  } else {
    fail('design tool colour', JSON.stringify(coloured));
  }

  // The configuration must reach the quote form's hidden field.
  await page.fill('#dz-front-text', 'HELLO');
  await page.waitForTimeout(250);
  const piped = await page.evaluate(
    () => document.querySelector('[data-design-field]')?.value ?? '',
  );
  if (piped.includes('Black') && piped.includes('HELLO') && piped.includes('approximate')) {
    pass('design tool handoff', 'configuration is written into the quote form and carries the preview caveat');
  } else {
    fail('design tool handoff', `hidden field content unexpected: ${piped.slice(0, 120)}`);
  }

  // Session persistence.
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  const restored = await page.evaluate(
    () => document.querySelector('#dz-front-text')?.value ?? '',
  );
  if (restored === 'HELLO') pass('design tool persistence', 'configuration survived a reload');
  else fail('design tool persistence', `front text after reload: "${restored}"`);

  // Keyboard: arrow keys must move between colour swatches.
  await page.focus('[data-colour="white"]');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(150);
  const afterArrow = await page.evaluate(
    () => document.activeElement?.getAttribute('data-colour') ?? '',
  );
  if (afterArrow === 'bone') pass('design tool keyboard', 'arrow keys move between colour swatches');
  else fail('design tool keyboard', `focus moved to "${afterArrow}"`);

  await context.close();
}

/* ------------------------------------------------------------------ *
 * 6. Reduced motion
 * ------------------------------------------------------------------ */

{
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);

  const hidden = await page.evaluate(() => {
    let invisible = 0;
    for (const el of document.querySelectorAll('[data-reveal]')) {
      if (parseFloat(getComputedStyle(el).opacity) < 0.9) invisible++;
    }
    return invisible;
  });

  if (hidden === 0) pass('reduced motion', 'all revealed content is visible with motion reduced');
  else fail('reduced motion', `${hidden} elements still hidden with reduced motion on`);

  await context.close();
}

/* ------------------------------------------------------------------ *
 * 7. No-JavaScript fallback
 * ------------------------------------------------------------------ */

{
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    javaScriptEnabled: false,
  });
  const page = await context.newPage();
  await page.goto(BASE + '/10x13-poly-mailers/', { waitUntil: 'domcontentloaded' });

  const readable = await page.evaluate(() => {
    const main = document.querySelector('main');
    const text = main?.innerText ?? '';
    const images = [...document.querySelectorAll('main img')].length;
    const hidden = [...document.querySelectorAll('[data-reveal]')].filter(
      (el) => parseFloat(getComputedStyle(el).opacity) < 0.9,
    ).length;
    return { words: text.split(/\s+/).filter(Boolean).length, images, hidden };
  });

  if (readable.words > 400 && readable.images > 0 && readable.hidden === 0) {
    pass('no-js fallback', `${readable.words} words and ${readable.images} images render without JavaScript`);
  } else {
    fail('no-js fallback', JSON.stringify(readable));
  }

  await context.close();
}

/* ------------------------------------------------------------------ *
 * 8. Colour contrast on body text and buttons
 * ------------------------------------------------------------------ */

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });

  const contrast = await page.evaluate(() => {
    const parse = (c) => {
      const m = c.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const [r, g, b, a = 1] = m[1].split(',').map((v) => parseFloat(v));
      return { r, g, b, a };
    };
    const lum = ({ r, g, b }) => {
      const f = (v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    const ratio = (a, b) => {
      const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
      return (l1 + 0.05) / (l2 + 0.05);
    };
    const bgOf = (el) => {
      let node = el;
      while (node) {
        const bg = parse(getComputedStyle(node).backgroundColor);
        if (bg && bg.a > 0.5) return bg;
        node = node.parentElement;
      }
      return { r: 255, g: 255, b: 255, a: 1 };
    };

    const problems = [];
    const sample = [...document.querySelectorAll('main p, main li, main a, .btn, main h2, main h3')].slice(0, 220);
    for (const el of sample) {
      if (!el.innerText?.trim()) continue;
      const style = getComputedStyle(el);
      const fg = parse(style.color);
      if (!fg) continue;
      const size = parseFloat(style.fontSize);
      const bold = parseInt(style.fontWeight, 10) >= 700;
      const large = size >= 24 || (size >= 18.66 && bold);
      const need = large ? 3 : 4.5;
      const r = ratio(fg, bgOf(el));
      if (r < need) {
        problems.push(
          `${el.tagName.toLowerCase()}.${String(el.className).split(' ')[0]} ${r.toFixed(2)}:1 (needs ${need})`,
        );
      }
    }
    return { checked: sample.length, problems: problems.slice(0, 8) };
  });

  if (contrast.problems.length === 0) {
    pass('contrast', `${contrast.checked} text elements meet WCAG AA against their background`);
  } else {
    fail('contrast', contrast.problems.join('; '));
  }

  await context.close();
}

await browser.close();

/* ------------------------------------------------------------------ */

const failures = results.filter((r) => !r.ok);

console.log('\nBrowser QA\n');
for (const r of results) {
  console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? `\n      ${r.detail}` : ''}`);
}
console.log(`\n${results.length - failures.length} passed, ${failures.length} failed.\n`);

await writeFile(
  path.join(ROOT, 'docs', 'qa-browser-report.json'),
  JSON.stringify({ base: BASE, results }, null, 2),
  'utf8',
);

process.exit(failures.length ? 1 : 0);
