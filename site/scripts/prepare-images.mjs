#!/usr/bin/env node
/**
 * Copies approved product photography out of `Final Product Folders` into
 * `src/assets/products` under descriptive, SEO-readable filenames.
 *
 * The source folders are read-only as far as this script is concerned: it only
 * ever reads from them. Nothing is written back, renamed or deleted there.
 *
 * Excluded assets and the reason for each are declared inline so the decision
 * travels with the code. The mapping it prints becomes docs/09-image-report.md.
 */
import { readdir, mkdir, copyFile, writeFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..');
const SOURCE = path.resolve(ROOT, '..', 'Final Product Folders');
const DEST = path.join(ROOT, 'src', 'assets', 'products');

/** file basename -> reason it is not published */
const EXCLUDED = {
  '14-5x19-poly-mailers-02.png':
    'Watermarked third-party stock mockup (pixpine.com) containing Lorem Ipsum body copy and a fabricated name and address block.',
  'compostable-poly-mailers-02.png':
    'Shows TUV certification marks, a 4-6 month decomposition claim and a stated PLA/PBAT/corn-starch composition. No supporting documentation was supplied.',
  'biodegradable-poly-mailers-02.png':
    'Byte-identical to compostable-poly-mailers-02.png; excluded for the same certification-mark reason.',
  'padded-poly-mailers-02.jpg':
    'Carries a marketplace watermark (HUALIWEN) and a 20 PCS retail badge.',
  'pink-poly-mailers-03.png':
    'Mailers are printed with a competing packaging company brand mark.',
  'self-seal-poly-mailers-01.jpg':
    'Kraft paper padded mailers — wrong material for a poly self-seal product page.',
};

/**
 * Descriptive filename per source asset. Names describe what is visibly in the
 * photograph. They never assert a dimension, a material or a certification.
 */
const NAMES = {
  // --- sizes -------------------------------------------------------------
  '10x13-poly-mailers-01.jpg': 'white-poly-mailer-pair-angled-teal-backdrop',
  '10x13-poly-mailers-02.jpg': 'white-poly-mailer-front-and-back-lime-backdrop',
  '10x13-poly-mailers-03.jpg': 'white-poly-mailer-open-peel-strip-blue-backdrop',
  '12x15-poly-mailers-01.jpg': 'white-poly-mailers-fanned-dark-seal-strip',
  '12x15-poly-mailers-02.png': 'white-poly-mailer-filled-and-flat-pair',
  '12x15-poly-mailers-03.png': 'silver-grey-poly-mailers-stacked-open-flap',
  '14-5x19-poly-mailers-01.png': 'white-poly-mailer-holding-folded-jacket',
  '19x24-poly-mailers-01.png': 'white-poly-mailers-with-19-by-24-inch-callouts',
  '6x9-poly-mailers-01.jpg': 'pink-poly-mailers-rolled-stack-red-backdrop',
  '6x9-poly-mailers-02.jpg': 'light-pink-poly-mailers-fanned-silver-seal',
  '6x9-poly-mailers-03.jpg': 'deep-pink-poly-mailers-stacked-with-insert-card',
  '9x12-poly-mailers-01.png': 'green-poly-mailer-single-angled-grey-backdrop',
  '9x12-poly-mailers-02.png': 'pink-floral-poly-mailers-fanned-with-book',
  '9x12-poly-mailers-03.png': 'black-poly-mailers-printed-with-customer-logo',
  'large-poly-mailers-01.png': 'large-white-poly-mailer-holding-folded-jacket',
  'small-poly-mailers-01.jpg': 'purple-poly-mailers-rolled-stack',

  // --- colours -----------------------------------------------------------
  'black-poly-mailers-01.png': 'matte-black-poly-mailers-front-and-back',
  'black-poly-mailers-02.png': 'black-poly-mailers-pair-on-split-grey-backdrop',
  'black-poly-mailers-03.png': 'black-poly-mailers-printed-logo-flat-lay',
  'blank-poly-mailers-01.png': 'unprinted-white-poly-mailers-fanned-stack',
  'blank-poly-mailers-03.png': 'unprinted-white-poly-mailers-rolled-bundle',
  'colored-poly-mailers-01.png': 'colored-poly-mailers-blue-yellow-red-black-fan',
  'colored-poly-mailers-02.png': 'blue-poly-mailers-pair-angled',
  'colored-poly-mailers-03.png': 'violet-poly-mailer-filled-angled',
  'light-pink-poly-mailers-03.jpg': 'blush-pink-bubble-lined-mailers-stacked',
  'pink-poly-mailers-01.jpg': 'bright-pink-poly-mailers-fanned-stack',
  'white-poly-mailers-01.png': 'white-poly-mailer-filled-and-flat-pair',

  // --- print and custom --------------------------------------------------
  'custom-poly-mailers-01.jpg': 'black-poly-mailer-printed-with-message-copy',
  'custom-poly-mailers-02.jpg': 'orange-poly-mailer-printed-edge-pattern',
  'custom-poly-mailers-03.jpg': 'black-poly-mailer-printed-inside-and-out-with-garment',
  'custom-frosted-poly-bags-01.png': 'frosted-zip-poly-bags-pair-with-care-symbols',
  'custom-frosted-poly-bags-02.png': 'frosted-zip-poly-bag-holding-folded-garment',
  'custom-frosted-poly-bags-03.png': 'frosted-zip-poly-bags-holding-knitwear',
  'economy-poly-mailers-01.jpg': 'plain-white-poly-mailer-standing-filled',
  'economy-poly-mailers-02.jpg': 'white-poly-mailer-with-green-flap-detail',
  'economy-poly-mailers-03.jpg': 'white-poly-mailers-stacked-with-rolled-film',
  'apparel-shipping-bags-01.png': 'lilac-apparel-mailer-held-open-by-hands',
  'apparel-shipping-bags-02.png': 'colored-apparel-mailers-fanned-with-polo-shirt',
  'apparel-shipping-bags-03.png': 'white-apparel-mailer-with-placeholder-logo-artwork',

  // --- sustainability ----------------------------------------------------
  'biodegradable-poly-mailers-01.png': 'green-mailer-printed-with-eco-message-artwork',
  'biodegradable-poly-mailers-03.jpg': 'grey-mailer-printed-with-recycled-content-artwork',
  'compostable-poly-mailers-03.jpg': 'white-mailer-holding-folded-tie-dye-garment',
  'recycled-poly-mailers-03.jpg': 'white-mailer-printed-with-recycled-materials-artwork',

  // --- protective --------------------------------------------------------
  'padded-poly-mailers-01.jpg': 'teal-bubble-lined-mailers-stacked-with-peel-strip',
  'padded-poly-mailers-03.jpg': 'kraft-faced-bubble-lined-mailer-open-corner',
  'poly-bubble-mailers-01.png': 'black-bubble-lined-poly-mailers-printed-logo',
  'poly-bubble-mailers-03.png': 'colored-printed-bubble-lined-mailers-arranged-fan',
  'personalized-bubble-mailers-01.png': 'teal-bubble-mailer-printed-thank-you-artwork',
  'personalized-bubble-mailers-02.png': 'cream-bubble-mailer-printed-line-illustration',
  'personalized-bubble-mailers-03.png': 'two-printed-bubble-mailers-with-address-labels',
  'self-seal-poly-mailers-02.jpg': 'white-self-seal-mailer-holding-folded-jeans',
  'self-seal-poly-mailers-03.jpg': 'white-self-seal-mailers-with-tear-strip-detail',

  // --- specialty / seasonal ---------------------------------------------
  'bee-poly-mailers-01.png': 'sage-green-mailer-printed-bee-and-daisy-pattern',
  'bee-poly-mailers-02.png': 'white-mailer-printed-honey-and-bee-pattern',
  'bee-poly-mailers-03.png': 'sunflower-and-bee-printed-mailers-fanned',
  'halloween-poly-mailers-01.png': 'purple-halloween-mailer-printed-haunted-house-scene',
  'halloween-poly-mailers-02.png': 'blush-halloween-mailer-printed-pumpkin-and-bat-pattern',
  'halloween-poly-mailers-03.png': 'violet-halloween-mailer-printed-jack-o-lantern-pattern',
  'christmas-poly-mailers-01.png': 'pink-christmas-mailer-printed-gingerbread-pattern',
  'christmas-poly-mailers-02.png': 'white-christmas-mailers-printed-winter-botanical-pattern',
  'christmas-poly-mailers-03.png': 'red-christmas-mailer-printed-snowflake-pattern',
};

const md5 = (buf) => createHash('md5').update(buf).digest('hex');

async function main() {
  const folders = (await readdir(SOURCE, { withFileTypes: true }))
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  await mkdir(DEST, { recursive: true });

  const mapping = [];
  const skipped = [];
  const hashToName = new Map();

  // Resolve exclusions to checksums first, so an excluded photograph stays
  // excluded in every folder it was copied into, whatever it is named there.
  const excludedHashes = new Map();
  for (const folder of folders) {
    for (const file of await readdir(path.join(SOURCE, folder))) {
      if (EXCLUDED[file]) {
        excludedHashes.set(
          md5(readFileSync(path.join(SOURCE, folder, file))),
          EXCLUDED[file],
        );
      }
    }
  }

  for (const folder of folders) {
    const files = (await readdir(path.join(SOURCE, folder)))
      .filter((f) => /\.(png|jpe?g)$/i.test(f) && !f.startsWith('.'))
      .sort();

    for (const file of files) {
      const src = path.join(SOURCE, folder, file);
      const buf = readFileSync(src);
      const hash = md5(buf);

      const excludedReason = EXCLUDED[file] ?? excludedHashes.get(hash);
      if (excludedReason) {
        skipped.push({ folder, file, reason: excludedReason });
        continue;
      }

      // Byte-identical assets are stored once and referenced by many pages.
      const existing = hashToName.get(hash);
      if (existing) {
        mapping.push({
          source: `${folder}/${file}`,
          published: existing,
          note: 'Byte-identical to an asset already published; stored once and referenced by every page that uses it, each with its own alt text.',
          bytes: buf.length,
        });
        continue;
      }

      const name = NAMES[file];
      if (!name) {
        skipped.push({ folder, file, reason: 'No descriptive filename assigned.' });
        continue;
      }

      const ext = path.extname(file).toLowerCase() === '.png' ? '.png' : '.jpg';
      const target = `${name}${ext}`;

      await copyFile(src, path.join(DEST, target));
      hashToName.set(hash, target);
      const info = await stat(src);
      mapping.push({
        source: `${folder}/${file}`,
        published: target,
        note: '',
        bytes: info.size,
      });
    }
  }

  await writeFile(
    path.join(ROOT, 'src', 'data', 'image-manifest.json'),
    JSON.stringify({ mapping, skipped }, null, 2) + '\n',
    'utf8',
  );

  console.log(
    `Published ${hashToName.size} unique assets from ${mapping.length} source references. Skipped ${skipped.length}.`,
  );
  for (const s of skipped) console.log(`  skip  ${s.folder}/${s.file} — ${s.reason}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
