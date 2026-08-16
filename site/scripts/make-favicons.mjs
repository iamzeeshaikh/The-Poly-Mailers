#!/usr/bin/env node
/**
 * Builds the favicon set from public/favicon.svg.
 *
 * An SVG alone is enough for browsers and is not enough for Google. The
 * documented requirement for a search-result favicon is a square icon at a
 * stable URL, and in practice /favicon.ico is what gets fetched first — it is
 * requested by the crawler even when no <link> points at it. Shipping only an
 * SVG is the usual reason a site renders a globe placeholder in results.
 *
 * Google also prefers a size that is a multiple of 48px, so 48 and 96 are
 * emitted rather than the 16/32 pair a browser tab would be happy with.
 */

import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const SVG = path.join(PUBLIC, 'favicon.svg');

const svg = await readFile(SVG);

/** Rasterise at a given square size. density keeps the strokes crisp. */
const png = (size) =>
  sharp(svg, { density: Math.max(72, size * 4) })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();

/**
 * Minimal ICO container around PNG payloads.
 *
 * The format is a 6-byte header, then one 16-byte directory entry per image,
 * then the payloads. Every browser and crawler in use accepts PNG-encoded
 * entries, which avoids having to emit a BMP.
 */
function ico(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(entries.length, 4);

  let offset = 6 + entries.length * 16;
  const dir = [];

  for (const { size, data } of entries) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width, 0 means 256
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height
    e.writeUInt8(0, 2); // palette count
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // colour planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    dir.push(e);
    offset += data.length;
  }

  return Buffer.concat([header, ...dir, ...entries.map((e) => e.data)]);
}

const sizes = [16, 32, 48];
const rendered = await Promise.all(sizes.map(async (size) => ({ size, data: await png(size) })));

await writeFile(path.join(PUBLIC, 'favicon.ico'), ico(rendered));
await writeFile(path.join(PUBLIC, 'favicon-96x96.png'), await png(96));
await writeFile(path.join(PUBLIC, 'apple-touch-icon.png'), await png(180));

console.log(
  `favicon.ico (${sizes.join('/')}px), favicon-96x96.png and apple-touch-icon.png written from favicon.svg.`,
);
