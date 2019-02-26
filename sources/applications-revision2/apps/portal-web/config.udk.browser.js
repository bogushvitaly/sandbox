const path = require("path");
const DotenvPlugin = require("webpack-dotenv-extended-plugin");
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const JSDOMRenderer = require("@prerenderer/renderer-jsdom");
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;

const STATIC_DIR = path.join(process.cwd(), "dist", "apps", "portal-web");
const OUTPUT_DIR = path.join(STATIC_DIR, "static");
const ROUTES = require("./static.paths.js");

const prerenderConfig = {
  staticDir: STATIC_DIR,
  outputDir: OUTPUT_DIR,
  routes: ROUTES,
  minify: {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: true,
    keepClosingSlash: true,
    sortAttributes: true
  },
  renderer: new JSDOMRenderer({ renderAfterTime: 5000 })
};

module.exports = function mutateBrowserConfig(config) {
  if (config.mode === "production") {
    config.plugins.push();
  }
};
