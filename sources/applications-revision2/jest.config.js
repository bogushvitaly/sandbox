const esModules = ["@agm"].join("|");

module.exports = {
  testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)"],
  transform: {
    [`(${esModules}).+\\.js$`]: "babel-jest",
    "^.+\\.(ts|js|html)$": "jest-preset-angular/preprocessor.js"
  },
  resolver: "@nrwl/builders/plugins/jest/resolver",
  moduleFileExtensions: ["ts", "js", "html"],
  collectCoverage: true,
  coverageReporters: ["json"],
  coveragePathIgnorePatterns: ["typings.d.ts"]
};
