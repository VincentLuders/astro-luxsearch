import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  adapter: undefined,
  server: {
    port: 3000
  },
  build: {
    inlineStylesheets: 'always'
  }
}); 