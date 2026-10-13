// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages 用户站点：https://coffeemil.github.io
export default defineConfig({
  site: 'https://coffeemil.github.io',
  base: '/',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      theme: 'min-light',
      wrap: true,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
