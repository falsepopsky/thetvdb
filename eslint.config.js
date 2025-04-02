import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import jsdoc from 'eslint-plugin-jsdoc';
import nodePlugin from 'eslint-plugin-n';
// @ts-expect-error: types doesn't exist
import pluginPromise from 'eslint-plugin-promise';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  {
    plugins: { nodePlugin },
    extends: [nodePlugin.configs['flat/recommended-module']],
    rules: {
      'n/no-unsupported-features/node-builtins': ['error', { ignores: ['fetch', 'import.meta.dirname'] }],
      'n/no-missing-import': 'off',
    },
  },
  pluginPromise.configs['flat/recommended'],
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  { files: ['packages/api/tests/*.test.ts'], plugins: { vitest }, rules: { ...vitest.configs.recommended.rules } },
  {
    files: ['packages/api/src/*.ts'],
    plugins: { jsdoc },
    rules: {
      'jsdoc/require-jsdoc': [
        'error',
        { require: { ClassDeclaration: true, FunctionDeclaration: true, MethodDefinition: true } },
      ],
    },
  },
  {
    rules: {
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, classes: false, enums: false, variables: false, typedefs: false },
      ],
      '@typescript-eslint/return-await': ['error', 'always'],
      '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', disallowTypeAnnotations: true, fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
      ],
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreArrowShorthand: false, ignoreVoidOperator: false },
      ],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2023,
      },
    },
  },
  { files: ['**/*.js'], ...tseslint.configs.disableTypeChecked },
  { ignores: ['**/dist/', 'packages/api/tests/*', 'packages/web/.astro/*', 'examples'] }
);
