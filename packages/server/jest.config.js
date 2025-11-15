// /** @type {import('jest').Config} */
// export default {
//   testEnvironment: 'node',
//   testMatch: ['**/tests/**/*.test.js'],
//   clearMocks: true,
//   coverageDirectory: 'coverage',
//   coverageProvider: 'v8',
//   coverageThreshold: {
//     global: {
//       branches: 90,
//       functions: 90,
//       lines: 90,
//       statements: 90,
//     },
//   },
// };


// jest.config.mjs

/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFiles: ['<rootDir>/jest.setup.js'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};

