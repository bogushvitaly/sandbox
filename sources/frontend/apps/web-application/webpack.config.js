// Our very simple example plugin.
const HelloWorldPlugin = require(`${process.cwd()}/tools/build-extension/index-inject.plugin`);

const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const ROUTES = [];

module.exports = {
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    crypto: true,
    stream: true
    // process: 'mock',
    // tty: 'mock'
    // global: true,
    // tty: false,
    // module: false,
    // clearImmediate: false,
    // setImmediate: false,
    // os: 'empty',
  },
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: path.join(process.cwd(), 'dist', 'apps', 'web-application'),
      routes: ROUTES,
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },
      renderer: new Renderer({
        injectProperty: '__PRERENDER_INJECTED',
        inject: {
          foo: 'bar'
        },
        maxConcurrentRoutes: 4,
        renderAfterDocumentEvent: 'custom-render-trigger',
        renderAfterElementExists: 'my-app-element',
        renderAfterTime: 5000,
        headless: true,
        executablePath: process.env.CHROME_BIN
      })
    })
    // new HelloWorldPlugin()
  ]
};
