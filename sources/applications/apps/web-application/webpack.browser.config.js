const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function mutateBrowserConfig(config) {
  if (config.mode === 'production') {
    config.plugins.push(new CompressionPlugin());
  }
};
