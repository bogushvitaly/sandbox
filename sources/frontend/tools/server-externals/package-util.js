const _ = require('lodash/fp');
const ASTSource = require('ast-source').default;
const estraverse = require('estraverse');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const APP_NAME = 'application-web-server';

const EXTERNALS_LIST = ['@angular/', '@nguniversal/', 'firebase', 'rxjs', 'zone.js', 'express', 'ws'];

const pathPackages = path.join(process.cwd(), 'package.json');
const pathPackagesFunctions = path.join(process.cwd(), 'functions');
const pathWebpackSource = path.join(__dirname, 'webpack.config.js');
const pathServerWebpackSource = path.join(process.cwd(), 'apps', APP_NAME, 'webpack.config.js');

const packagesJsonContent = fs.readFileSync(pathPackages, 'utf8');

const splitPackagesInclude = dependenciesList =>
  _.differenceWith((string, fragment) => _.includes(fragment, string), dependenciesList, EXTERNALS_LIST);

const getDependenciesList = _.flow([JSON.parse, _.at(['dependencies']), _.first, _.keys]);
const dependenciesList = getDependenciesList(packagesJsonContent);

const internalDependencies = splitPackagesInclude(dependenciesList);
const externalDependencies = _.difference(dependenciesList, internalDependencies);

const externalDependenciesString = _.join(' ', externalDependencies);

const functionsString = `npm install && npm install ${externalDependenciesString}`;

shell.cd(pathPackagesFunctions);
shell.exec(functionsString);

applyServerWebpackPatch();

function applyServerWebpackPatch() {
  function transform(AST) {
    const replaced = {
      type: 'ArrayExpression',
      elements: _.map(
        item => ({
          type: 'Literal',
          value: item
        }),
        internalDependencies
      )
    };
    return estraverse.replace(AST, {
      enter: function(node) {
        if ((node.type === 'ArrayExpression', _.includes(128, node.range))) {
          return replaced;
        }
      }
    });
  }

  var source = new ASTSource(fs.readFileSync(pathWebpackSource, 'utf-8'), {
    filePath: pathWebpackSource,
    disableSourceMap: true
  });
  var output = source.transform(transform).output();
  fs.writeFileSync(pathServerWebpackSource, output.codeWithMap, 'utf-8');
}
