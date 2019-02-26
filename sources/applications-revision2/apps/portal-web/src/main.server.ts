// These are important and needed before anything else
import "zone.js/dist/zone-node";
import "reflect-metadata";
// import 'jsdom-global/register'

import { createServer } from "http";
import { join } from "path";

import { enableProdMode } from "@angular/core";
import { NgSetupOptions } from "@nguniversal/express-engine";
import { MODULE_MAP } from "@nguniversal/module-map-ngfactory-loader";

import { createApi } from "./api";
import { applyPolyfills } from "./polyfills.server";

export { AppServerModule } from "./app/app.server.module";

export const HOST = process.env.PORTAL_WEB_HOST || "0.0.0.0";
export const PORT = process.env.PORTAL_WEB_PORT || 4000;

export const BROWSER_DIST_PATH = join(
  __dirname,
  "..",
  process.env.PORTAL_WEB_NAME
);

applyPolyfills(BROWSER_DIST_PATH);

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

let requestListener = createApi(
  BROWSER_DIST_PATH,
  getNgRenderMiddlewareOptions()
);

let server: any;

if (!process.env.SERVERLESS_ENVIRONMENT) {
  // Start up the Node server
  server = createServer((req: any, res: any) => {
    requestListener(req, res);
  });

  server.listen(PORT, () => {
    console.log(`Server listening -- http://${HOST}:${PORT}`);
  });

  // HMR on server side
  if (module.hot) {
    const hmr = () => {
      const {
        AppServerModuleNgFactory
      } = require("./app/app.server.module.ngfactory");

      exports.AppServerModuleNgFactory = AppServerModuleNgFactory;

      requestListener = require("./api").createApi(
        BROWSER_DIST_PATH,
        getNgRenderMiddlewareOptions()
      );
    };

    module.hot.accept("./api", hmr);
    module.hot.accept("./app/app.server.module.ngfactory", hmr);
    module.hot.accept(
      "./app/features/loaders/demoAnimationsLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoAssemblyscriptLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoBabylonLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoBmToolsLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoCovalentUiLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoCssLayoutsLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoForceGraphLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoGoogleMapsLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoHeroesLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoImagePreviewLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoKnowledgeBaseLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoMaterialLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoOpencvLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoReglLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoTensorflowLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoUniversalLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoVersionLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoWebassemblyLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/uiAuthFirebaseLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/demoItemsLoader.module.ngfactory",
      hmr
    );
    module.hot.accept(
      "./app/features/loaders/viewWelcomeLoader.module.ngfactory",
      hmr
    );
  }
}

export default server;
