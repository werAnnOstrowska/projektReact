import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',  // to do testow z react
    globals: true, 
    exclude: ['tests/e2e/**', 'node_modules/**',],
    setupFiles: './vitest.setup.ts',
  },
});
