import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://palmtreeinfotech.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  redirects: {
    '/case-studies/manufacturing-units-consolidated-dashboard': '/case-studies/manufacturing-unit-consolidated-dashboard',
    '/google-cloud': '/stack',
  },
});
