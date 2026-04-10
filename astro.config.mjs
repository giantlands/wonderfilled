import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wonderfilled.games',
  output: 'static',
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
  devToolbar: {
    enabled: false,
  },
});
