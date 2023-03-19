/** @type {import('jest').Config} */

export default {
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
  },
  extensionsToTreatAsEsm: ['.ts'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.m?[tj]s?$': '@swc/jest',
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
};
