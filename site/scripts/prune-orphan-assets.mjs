#!/usr/bin/env node
/**
 * Removes image assets that the build emitted but nothing references.
 *
 * Astro copies the original file for every asset declared through a content
 * collection's `image()` helper, even when only optimised derivatives are used.
 * For ten blog heroes that is several megabytes of PNG and JPG in the output
 * that no page ever requests.
 *
 * This step reads every HTML, CSS and JS file in the output, collects the
 * filenames they actually reference, and deletes image assets that appear in
 * none of them. It only ever touches raster image files inside `_astro`, and it
 * prints what it removed so the deletion is auditable rather than silent.
 *
 * Usage: node scripts/prune-orphan-assets.mjs [--dry]
 */

import { readdir, readFile, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..');
const DRY = process.argv.includes('--dry');

/**
 * Both output directories are pruned. The adapter copies static files into
 * `.vercel/output/static` during the build, which is what actually deploys —
 * cleaning only `dist/client` would leave the waste in the shipped artifact.
 */
const TARGETS = [
  path.join(ROOT, 'dist', 'client'),
  path.join(ROOT, '.vercel', 'output', 'static'),
];

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const exists = async (p) => {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
};

let totalRemoved = 0;
let totalFreed = 0;

for (const DIST of TARGETS) {
  if (!(await exists(DIST))) continue;
  const ASSETS = path.join(DIST, '_astro');
  if (!(await exists(ASSETS))) continue;

  const { removed, freed } = await prune(DIST, ASSETS);
  totalRemoved += removed;
  totalFreed += freed;
}

if (totalRemoved === 0) {
  console.log('No orphaned image assets.');
} else {
  console.log(
    `${DRY ? 'Would remove' : 'Removed'} ${totalRemoved} unreferenced image assets across ${
      TARGETS.length
    } output directories (${(totalFreed / 1024 / 1024).toFixed(2)} MB).`,
  );
}

async function prune(DIST, ASSETS) {
  const all = await walk(DIST);

// Everything that can name an asset: markup, stylesheets, scripts and the
// sitemap. Read them all rather than assuming where a reference can appear.
const referencing = all.filter((f) => /\.(html|css|js|mjs|xml|json|txt)$/i.test(f));
const images = all.filter(
  (f) => f.startsWith(ASSETS) && /\.(png|jpe?g|avif|webp|gif|svg)$/i.test(f),
);

let haystack = '';
for (const file of referencing) haystack += await readFile(file, 'utf8');

const orphans = [];
let freed = 0;

for (const image of images) {
  const name = path.basename(image);
  if (haystack.includes(name)) continue;
  const size = (await stat(image)).size;
  orphans.push({ name, size });
  freed += size;
  if (!DRY) await unlink(image);
}

  if (orphans.length) {
    console.log(
      `${DRY ? 'Would remove' : 'Removed'} ${orphans.length} from ${path.relative(ROOT, DIST)}:`,
    );
    for (const o of orphans.sort((a, b) => b.size - a.size)) {
      console.log(`  ${(o.size / 1024).toFixed(0).padStart(6)} KB  ${o.name}`);
    }
  }

  return { removed: orphans.length, freed };
}
