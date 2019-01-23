// Our very simple example plugin.
const TextInjectionPlugin = require(`${process.cwd()}/tools/build-extension/index-inject.plugin`);

const fs = require('fs');
const path = require('path');
const DotenvPlugin = require('webpack-dotenv-extended-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const STATIC_DIR_PATH = path.join(process.cwd(), 'dist', 'apps', 'web-application');
const ENVIRONMENT_PATH = path.join(process.cwd(), 'libs', 'core', 'environments');
const DOTENV_CONFIG_FILE = path.join(process.cwd(), '..', '..', '..', '..', 'configs', 'sandbox', `.env.${process.env.CI_ENVIRONMENT_NAME}`);

const ROUTES = [];

const IS_CI = !process.env.GITLAB_CI && fs.existsSync(DOTENV_CONFIG_FILE);

function NothingPlugin() {
  this.apply = function () {};
}

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
    IS_CI ? new NothingPlugin() : new DotenvPlugin({
      path: DOTENV_CONFIG_FILE
    }),
    new FriendlyErrorsWebpackPlugin(),
    new ReplaceInFileWebpackPlugin([{
      dir: ENVIRONMENT_PATH,
      files: ['environment.ts'],
      rules: [{
        search: /apiKey: '([\s\S]*?)'/,
        replace: `apiKey: '${process.env.API_KEY}'`
      }, {
        search: /authDomain: '([\s\S]*?)'/,
        replace: `authDomain: '${process.env.AUTH_DOMAIN}'`
      }, {
        search: /databaseURL: '([\s\S]*?)'/,
        replace: `databaseURL: '${process.env.DATABASE_URL}'`
      }, {
        search: /projectId: '([\s\S]*?)'/,
        replace: `projectId: '${process.env.PROJECT_ID}'`
      }, {
        search: /storageBucket: '([\s\S]*?)'/,
        replace: `storageBucket: '${process.env.STORAGE_BUCKET}'`
      }, {
        search: /messagingSenderId: '([\s\S]*?)'/,
        replace: `messagingSenderId: '${process.env.MESSAGING_SENDER_ID}'`
      }]
    }]),
    new PrerenderSPAPlugin({
      staticDir: STATIC_DIR_PATH,
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
    }),
    // new TextInjectionPlugin()
  ]
};
