// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const SITE = 'https://thepolymailers.com';

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
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
