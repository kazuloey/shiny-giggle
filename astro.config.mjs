import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Use minimal configuration to avoid plugin issues
  vite: {
    ssr: {
      noExternal: ['*'],
    },
    // Reduce plugin usage
    plugins: [],
    // Disable certain features that might cause issues
    build: {
      cssCodeSplit: false
    }
  }
});