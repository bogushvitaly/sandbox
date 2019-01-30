import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import { createServer } from 'http';
import { join } from 'path';

import { enableProdMode } from '@angular/core';
import { applyDomino } from '@nestjs/ng-universal';
import { NgSetupOptions } from '@nguniversal/express-engine';
import { MODULE_MAP } from '@nguniversal/module-map-ngfactory-loader';

import { createApi } from './api';

export { AppServerModule } from './app/app.server.module';

export const IS_SERVERLESS = !!process.env.FUNCTION_NAME;

export const HOST = process.env.HOST || '0.0.0.0';
export const PORT = process.env.PORT || 4000;

export const BROWSER_DIST_PATH = join(__dirname, '..', 'browser');
applyDomino(global, join(BROWSER_DIST_PATH, 'index.html'));

export const getNgRenderMiddlewareOptions: () => NgSetupOptions = () => ({
  bootstrap: exports.AppServerModuleNgFactory,
  providers: [
    {
      provide: MODULE_MAP,
      useFactory: () => exports.LAZY_MODULE_MAP,
      deps: []
    }
  ]
});

enableProdMode();

export let requestListener = createApi(BROWSER_DIST_PATH, getNgRenderMiddlewareOptions());

// Start up the Node server
if (!IS_SERVERLESS) {
  const server = createServer((req: any, res: any) => {
    requestListener(req, res);
  });

  server.listen(PORT, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
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
}
