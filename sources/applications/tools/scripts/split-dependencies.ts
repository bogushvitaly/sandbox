const _ = require('lodash/fp');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const replace = require('replace-in-file');

const EXTERNAL_DEPENDENCIES = [
  '@angular',
  '@nguniversal',
  '@rdfjs',
  '@tensorflow',
  '@nest',
  'firebase',
  'ngx-auth-firebaseui',
  'aws',
  'express',
  'ws',
  'xhr2',
  'rxjs',
  'zone.js',
  'reflect-metadata',
  'lodash'
];
const FORCE_EXCLUDE = ['grpc'];

const PACKAGES_FILE = path.join(process.cwd(), 'package.json');
const ANGULAR_CONFIG_FILE = path.join(process.cwd(), 'angular.json');
const PACKAGES_FILE_CONTENT = fs.readFileSync(PACKAGES_FILE, 'utf8');
const WEB_APPLICATION_PATH = path.join(process.cwd(), 'apps', 'web-application');
const WEB_APPLICATION_SERVER_WEBPACK_CONFIG = path.join(WEB_APPLICATION_PATH, 'webpack.server.config.js');

const splitPackagesInclude = (list: any) =>
  _.differenceWith((string: any, fragment: any) => _.startsWith(fragment, string), list, EXTERNAL_DEPENDENCIES);

const getDependenciesList = _.flow([JSON.parse, _.at(['dependencies']), _.first, _.keys]);

const dependenciesList = getDependenciesList(PACKAGES_FILE_CONTENT);

const internalDependencies = splitPackagesInclude(dependenciesList);
const externalDependencies = _.difference(dependenciesList, internalDependencies);
const extendedExternalDependencies = _.concat(externalDependencies, FORCE_EXCLUDE);

console.log(`Internal server dependencies: ${JSON.stringify(internalDependencies)}\n`);
console.log(`External server dependencies: ${JSON.stringify(extendedExternalDependencies)}`);

// Install Firebase Functions Dependencies
shell.cd(`${process.cwd()}/functions`);

shell.exec(`pnpm install --offline ${_.join(' ', extendedExternalDependencies)}`);

// Patch Server Webpack
shell.cp(path.join(__dirname, 'webpack.server.config.js'), WEB_APPLICATION_PATH);

const options = {
  files: WEB_APPLICATION_SERVER_WEBPACK_CONFIG,
  from: /externals: (.*)?/,
  to: `externals: ${JSON.stringify(extendedExternalDependencies)}`
};

replace(options)
  .then(changes => {
    console.log('Modified files:', changes.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });

export {};
