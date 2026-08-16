import type { LocationPage } from './types';
import { usStatesA } from './us-states-a';
import { usStatesB } from './us-states-b';
import { usCitiesA } from './us-cities-a';
import { usCitiesB } from './us-cities-b';
import { ukCities } from './uk-cities';
import { caAuCities } from './ca-au-cities';

export type { LocationPage } from './types';
export { countryHubs, countryBySlug, type CountryHub } from './countries';

export const locations: readonly LocationPage[] = [
  ...usStatesA,
  ...usStatesB,
  ...usCitiesA,
  ...usCitiesB,
  ...ukCities,
  ...caAuCities,
];

export const locationBySlug = new Map(locations.map((l) => [l.slug, l]));

export function locationsInMarket(market: LocationPage['market']): readonly LocationPage[] {
  return locations.filter((l) => l.market === market);
}

/* A URL collision between two locations would silently drop a page, so it is a
   build error instead. */
{
  const seen = new Set<string>();
  for (const location of locations) {
    if (seen.has(location.slug)) {
      throw new Error(`Duplicate location slug "${location.slug}".`);
    }
    seen.add(location.slug);
  }
}
