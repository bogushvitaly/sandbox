const webpack = require('webpack');
const ContentInjectionPlugin = require(`${process.cwd()}/tools/build-extension/index-inject.plugin`);

module.exports = {
  node: {
    path: true,
    crypto: true,
    stream: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.wasm$/,
        loader: 'wasm-loader'
      },
      {
        test: /\.asc$/,
        loader: 'assemblyscript-live-loader'
      }
    ]
  },

  plugins: []
};
