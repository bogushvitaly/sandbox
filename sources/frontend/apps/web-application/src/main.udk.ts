// These are important and needed before anything else
import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import { createServer, IncomingMessage } from 'http';
import { join } from 'path';

import { enableProdMode } from '@angular/core';
import { applyDomino } from '@nestjs/ng-universal';
import { NgSetupOptions } from '@nguniversal/express-engine';
import { MODULE_MAP } from '@nguniversal/module-map-ngfactory-loader';

import { createApi } from './api';

const BROWSER_DIR = join(__dirname, '..', 'web-application');

applyDomino(global, join(BROWSER_DIR, 'index.html'));

export { AppServerModule } from './app/app.server.module';

export const PORT = process.env.PORT || 4000;
export const BROWSER_DIST_PATH = join(BROWSER_DIR);

export const getNgRenderMiddlewareOptions: () => NgSetupOptions = () => ({
  bootstrap: exports.AppServerModuleNgFactory,
  providers: [
    // Import module map for lazy loading
    {
      provide: MODULE_MAP,
      useFactory: () => exports.LAZY_MODULE_MAP,
      deps: []
    }
  ]
});

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

let requestListener = createApi(BROWSER_DIST_PATH, getNgRenderMiddlewareOptions());

// Start up the Node server
const server = createServer((req: any, res: any) => {
  requestListener(req, res);
});

server.listen(PORT, () => {
  console.log(`Server listening -- http://localhost:${PORT}`);
});

// HMR on server side
if (module.hot) {
  const hmr = () => {
    const { AppServerModuleNgFactory } = require('./app/app.server.module.ngfactory');

    exports.AppServerModuleNgFactory = AppServerModuleNgFactory;

    requestListener = require('./api').createApi(BROWSER_DIST_PATH, getNgRenderMiddlewareOptions());
  };

  module.hot.accept('./api', hmr);
  module.hot.accept('./app/app.server.module.ngfactory', hmr);
}

export default server;
