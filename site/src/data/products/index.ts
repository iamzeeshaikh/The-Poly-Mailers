import type { ProductPage } from '../types';
import { sizeProducts } from './sizes';
import { colorProducts } from './colors';
import { printProducts } from './print';
import { sustainableProducts } from './sustainable';
import { protectiveProducts } from './protective';
import { specialtyProducts } from './specialty';

/** The 29 approved products, in the order they appear on the products overview. */
export const products: readonly ProductPage[] = [
  ...sizeProducts,
  ...colorProducts,
  ...printProducts,
  ...sustainableProducts,
  ...protectiveProducts,
  ...specialtyProducts,
];

export const productBySlug = new Map(products.map((p) => [p.slug, p]));

export function productsInCollection(collection: string): readonly ProductPage[] {
  return products.filter((p) => p.collections.includes(collection));
}

export function productsInGroup(group: ProductPage['group']): readonly ProductPage[] {
  return products.filter((p) => p.group === group);
}

/** Products surfaced on the homepage, chosen by search demand rather than alphabetically. */
export const featuredSlugs = [
  '10x13-poly-mailers',
  'custom-poly-mailers',
  'poly-bubble-mailers',
  'apparel-shipping-bags',
  'black-poly-mailers',
  'pink-poly-mailers',
  '9x12-poly-mailers',
  'recycled-poly-mailers',
] as const;

export const featuredProducts = featuredSlugs
  .map((slug) => productBySlug.get(slug))
  .filter((p): p is ProductPage => Boolean(p));

if (products.length !== 29) {
  throw new Error(
    `Expected exactly 29 approved products, found ${products.length}. Check src/data/products/*.ts`,
  );
}
