const {
  pathsToModuleNameMapper
} = require('ts-jest');
const {
  compilerOptions
} = require('./tsconfig'); // replace with the path to your tsconfig.json file

module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/'],
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: './test-setup.ts',
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-preset-angular/AngularSnapshotSerializer.js',
    '<rootDir>/node_modules/jest-preset-angular/HTMLCommentSerializer.js',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  testPathIgnorePatterns: ['/node_modules/', '/storybook-static/', 'angularshots.test.js', 'dist'],
  transform: {
    '^.+\\.(ts|js|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
  }
};
