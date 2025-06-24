import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests/e2e',
  use: {
    baseURL: 'http://localhost:5173/shop',  
    headless: true,
  },
});
