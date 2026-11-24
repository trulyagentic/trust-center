import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://trust.trulyagentic.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
