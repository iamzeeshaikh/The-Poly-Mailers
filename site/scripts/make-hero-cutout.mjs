#!/usr/bin/env node
/**
 * Builds the hero banner asset.
 *
 * The supplied photograph is a 1080x1080 cutout on a pure white sweep. Dropped
 * into a wide hero with `object-fit: cover`, the crop eats the fan and leaves
 * one flat blue rectangle. Compositing it against the dark hero instead needs
 * the white removed, so this derives an alpha channel from the source rather
 * than us hand-masking it.
 *
 * The key is a soft luminance threshold on the darkest channel: the sweep is
 * 250+ on every channel, the lightest thing in the subject is the grey closure
 * strip at roughly 175, so there is a wide margin and the ramp only has to
 * cover anti-aliased edge pixels.
 *
 * Writes to src/assets/, never to the supplied product folders.
 */

import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src/assets/products/colored-poly-mailers-blue-yellow-red-black-fan.png');
const OUT = path.join(ROOT, 'src/assets/hero/colored-poly-mailers-fan-cutout.png');

/** Fully transparent at or above this on every channel. */
const CLEAR_AT = 250;
/** Fully opaque at or below this. Between the two, alpha ramps linearly. */
const KEEP_AT = 228;

const src = sharp(SRC).ensureAlpha();
const { width, height } = await src.metadata();
const raw = await src.raw().toBuffer();

let cleared = 0;
for (let i = 0; i < raw.length; i += 4) {
  const min = Math.min(raw[i], raw[i + 1], raw[i + 2]);
  if (min >= CLEAR_AT) {
    raw[i + 3] = 0;
    cleared++;
  } else if (min > KEEP_AT) {
    raw[i + 3] = Math.round(((CLEAR_AT - min) / (CLEAR_AT - KEEP_AT)) * 255);
  }
}

/* The photograph carries a faint shadow along the right edge of the front
   mailer, and thresholding it pixel by pixel leaves a serrated border that is
   plainly visible against a dark hero. Cleaning it on the alpha channel alone
   fixes the edge without touching a single colour value: a median pass drops
   isolated pixels, a half-pixel blur feathers what is left, and a slight
   contrast curve pulls the interior back to fully opaque so the mailers do not
   go translucent. */
const px = width * height;
const alpha = new Uint8Array(px);
for (let i = 0; i < px; i++) alpha[i] = raw[i * 4 + 3];

/* 3x3 median. Isolated pixels along the shadow are outliers by definition, so
   the median removes them while leaving a genuine edge exactly where it is —
   which a blur on its own would not do. */
const med = new Uint8Array(px);
const win = new Uint8Array(9);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    let n = 0;
    for (let dy = -1; dy <= 1; dy++) {
      const yy = y + dy;
      if (yy < 0 || yy >= height) continue;
      for (let dx = -1; dx <= 1; dx++) {
        const xx = x + dx;
        if (xx < 0 || xx >= width) continue;
        win[n++] = alpha[yy * width + xx];
      }
    }
    const w = win.slice(0, n).sort();
    med[y * width + x] = w[n >> 1];
  }
}

/* One box pass to feather what the median left, then a contrast curve so the
   interior returns to fully opaque rather than sitting at 250-ish. */
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    let sum = 0;
    let n = 0;
    for (let dy = -1; dy <= 1; dy++) {
      const yy = y + dy;
      if (yy < 0 || yy >= height) continue;
      for (let dx = -1; dx <= 1; dx++) {
        const xx = x + dx;
        if (xx < 0 || xx >= width) continue;
        sum += med[yy * width + xx];
        n++;
      }
    }
    raw[(y * width + x) * 4 + 3] = Math.max(0, Math.min(255, Math.round((sum / n) * 1.25 - 24)));
  }
}

/* Trim the transparent margin so the subject fills its own box. Without this
   the fan keeps the sweep's padding and looks small in the hero however it is
   positioned. */
await sharp(raw, { raw: { width, height, channels: 4 } })
  .png()
  .trim({ threshold: 2 })
  .toFile(OUT);

const out = await sharp(OUT).metadata();
console.log(
  `${width}x${height} → ${out.width}x${out.height} after trim; ` +
    `${((cleared / (raw.length / 4)) * 100).toFixed(1)}% of the frame was background.`,
);
