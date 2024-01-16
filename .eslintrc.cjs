module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'promise'],
  extends: ['untidy'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './packages/web/tsconfig.json', './packages/api/tsconfig.json'],
  },
  ignorePatterns: ['dist', 'examples', '*.cjs', 'jest.*.js', 'env.d.ts'],
};
