import * as express from 'express';
import { IncomingMessage } from 'http';

import { ngExpressEngine, NgSetupOptions } from '@nguniversal/express-engine';

export function createApi(distPath: string, ngSetupOptions: NgSetupOptions) {
  const api = express();

  api.set('view engine', 'html');
  api.set('views', distPath);

  // Angular Express Engine
  api.engine('html', ngExpressEngine(ngSetupOptions));

  // Server static files from distPath
  api.get('*.*', express.static(distPath));

  // All regular routes use the Universal engine
  api.get('*', (req: any, res: any) => res.render('index', { req, res }));

  return api;
}
