// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const SITE = 'https://thepolymailers.com';

/** Pages that must never enter the sitemap or be indexed. */
const EXCLUDED = new Set([
  `${SITE}/thank-you/`,
  `${SITE}/404/`,
]);

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel({
    imageService: false,
    webAnalytics: { enabled: false },
  }),
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  image: {
    // Local sharp pipeline; every rendition is emitted at build time.
    responsiveStyles: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDED.has(page),
      changefreq: 'weekly',
      lastmod: new Date('2026-08-15'),
      serialize(item) {
        // Priority signals which pages matter most when a crawler has to
        // choose. changefreq stays at the integration default rather than
        // being narrowed here, because the enum is owned by the integration.
        const path = new URL(item.url).pathname;

        if (path === '/') item.priority = 1.0;
        else if (/^\/(request-a-quote|design-your-poly-mailer)\/$/.test(path)) item.priority = 0.9;
        else if (/^\/(blog|resources|locations|industries)\//.test(path)) item.priority = 0.5;
        else if (
          /^\/(privacy-policy|terms-and-conditions|accessibility-statement|custom-order-policy|shipping-and-delivery|sitemap)\/$/.test(
            path,
          )
        ) {
          item.priority = 0.2;
        } else item.priority = 0.7;

        return item;
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
