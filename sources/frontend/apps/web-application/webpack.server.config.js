const nodeExternals = require('webpack-node-externals');

var nodeModules = {};

module.exports = {
  target: 'node',
  externals: ["aws-amplify","aws-amplify-angular","aws-appsync","express","express-rate-limit","express-serve-static-core","firebase","ws","grpc"]
};
