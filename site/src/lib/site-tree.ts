import { products } from '~/data/products';
import { collections } from '~/data/collections';
import { capabilityPages } from '~/data/capabilities';
import { policyPages } from '~/data/policies';
import { industries } from '~/data/industries';
import { resources } from '~/data/resources';
import { countryHubs, locations } from '~/data/locations';

/**
 * Single source of truth for the site's indexable page list.
 *
 * The HTML sitemap renders from this, and so does the orphan check in
 * scripts/audit-content.mjs — which means a page cannot be added to the site
 * without appearing in both, and the audit cannot silently pass by checking a
 * shorter list than the one that actually shipped.
 *
 * Blog posts are added at render time from the content collection rather than
 * duplicated here.
 */

export interface TreeEntry {
  href: string;
  label: string;
  note?: string;
}

export interface TreeSection {
  title: string;
  blurb: string;
  entries: TreeEntry[];
}

export function siteTree(
  blogEntries: TreeEntry[] = [],
): TreeSection[] {
  return [
    {
      title: 'Core',
      blurb: 'Where most visits start and finish.',
      entries: [
        { href: '/', label: 'Home', note: 'Broad poly mailer intent and the main routes onward.' },
        { href: '/poly-mailers/', label: 'All poly mailers', note: 'The full range, grouped by decision.' },
        { href: '/request-a-quote/', label: 'Request a quote', note: 'The main conversion route.' },
        { href: '/design-your-poly-mailer/', label: 'Design your mailer', note: 'Configure a specification visually.' },
        { href: '/samples/', label: 'Samples', note: 'Testing before you order.' },
        { href: '/how-it-works/', label: 'How ordering works', note: 'The five stages of a made-to-order run.' },
        { href: '/about/', label: 'About us', note: 'What we do and what we will not claim.' },
        { href: '/contact/', label: 'Contact', note: 'Email, phone and WhatsApp.' },
        { href: '/faq/', label: 'Questions', note: 'Cross-cutting questions about buying.' },
      ],
    },
    {
      title: 'Collections',
      blurb: 'Choosers that compare products and route onward.',
      entries: collections.map((c) => ({
        href: `/${c.slug}/`,
        label: c.h1,
        note: c.summary,
      })),
    },
    {
      title: 'Products',
      blurb: 'The 29 approved products, each answering one question.',
      entries: products.map((p) => ({
        href: `/${p.slug}/`,
        label: p.name,
        note: p.summary,
      })),
    },
    {
      title: 'Capabilities',
      blurb: 'What can be specified, and how each choice is made.',
      entries: capabilityPages.map((p) => ({
        href: `/${p.slug}/`,
        label: p.h1,
        note: p.summary,
      })),
    },
    {
      title: 'Industries',
      blurb: 'Sector pages, written around the problem each category has.',
      entries: [
        { href: '/industries/', label: 'All industries', note: 'The hub.' },
        ...industries.map((i) => ({
          href: `/industries/${i.slug}/`,
          label: i.name,
          note: i.summary,
        })),
      ],
    },
    {
      title: 'Reference guides',
      blurb: 'Tables and checklists, usable against any supplier.',
      entries: [
        { href: '/resources/', label: 'All resources', note: 'The hub.' },
        ...resources.map((r) => ({
          href: `/resources/${r.slug}/`,
          label: r.h1,
          note: r.summary,
        })),
      ],
    },
    {
      title: 'Articles',
      blurb: 'Longer reads that work one decision through.',
      entries: [{ href: '/blog/', label: 'All articles', note: 'The index.' }, ...blogEntries],
    },
    {
      title: 'Markets',
      blurb: 'The four markets we supply.',
      entries: [
        { href: '/locations/', label: 'All locations', note: 'The hub.' },
        ...countryHubs.map((c) => ({
          href: `/${c.slug}/`,
          label: c.name,
          note: `How supply works for ${c.name}.`,
        })),
      ],
    },
    {
      title: 'Regions',
      blurb: 'Each covering a different commercial situation.',
      entries: locations.map((l) => ({
        href: `/locations/${l.slug}/`,
        label: l.name,
        note: l.summary,
      })),
    },
    {
      title: 'Policies',
      blurb: 'Terms, privacy, delivery and order handling.',
      entries: policyPages.map((p) => ({
        href: `/${p.slug}/`,
        label: p.h1,
        note: p.summary,
      })),
    },
    {
      title: 'Utility',
      blurb: 'Pages that exist for navigation rather than for search.',
      entries: [{ href: '/sitemap/', label: 'Sitemap', note: 'This page.' }],
    },
  ];
}

/** Flat list of every indexable URL. Used by the audit and the orphan check. */
export function allIndexableUrls(blogEntries: TreeEntry[] = []): string[] {
  return siteTree(blogEntries).flatMap((section) => section.entries.map((e) => e.href));
}
