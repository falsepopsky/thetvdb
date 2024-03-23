import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ['text'],
      include: ['packages/api/src/*.ts'],
    },
    setupFiles: ['./vitest.setup.ts'],
  },
});
