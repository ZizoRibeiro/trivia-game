module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/__tests__/setup.js',
  moduleFileExtensions: ['js'],

  clearMocks: true,

  coverageDirectory: 'coverage',

  preset: 'jest-expo',

  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
};
