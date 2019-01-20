const {
  pathsToModuleNameMapper
} = require('ts-jest/utils');
const {
  compilerOptions
} = require('./tsconfig');

module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: 'apps/storybook/tsconfig.spec.json'
    },
    __TRANSFORM_HTML__: true
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|js)?(x)',
    '**/+(*.)+(spec|test).+(ts|js)?(x)'
  ],
  moduleFileExtensions: [
    'ts',
    'js',
    'html'
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx)'
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: './jest-test-setup.ts',
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-preset-angular/AngularSnapshotSerializer.js',
    '<rootDir>/node_modules/jest-preset-angular/HTMLCommentSerializer.js',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/storybook-static/', 'angularshots.test.js', 'dist'],
  transform: {
    '^.+\\.(ts|js|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
  },
}
