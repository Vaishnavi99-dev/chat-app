/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  clearMocks: true,

  // REMOVE THIS -> it was wrong and causing failures
  // setupFiles: ['<rootDir>/jest.config.js'],

  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  // OPTIONAL: you can keep this or remove it
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
