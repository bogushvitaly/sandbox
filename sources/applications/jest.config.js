module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js',
  },
  resolver: '@nrwl/builders/plugins/jest/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coveragePathIgnorePatterns: ['typings.d.ts'],
  preset: 'jest-preset-angular',
  setupFiles: ["jest-canvas-mock"],
  setupTestFrameworkScriptFile: './jest-test-setup.ts',
  globals: {
    window: true
  },
};
