import * as express from 'express';

import { enableProdMode } from '@angular/core';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

enableProdMode();

export const server: express.Express = express();

const IS_SERVERLESS_ENVIRONMENT = !!process.env.FUNCTION_NAME;

const initNestApplication = async (expressInstance: express.Express) => {
  const app = await NestFactory.create(AppModule, expressInstance);
  app.init();
};

const startNestApplication = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(PORT, HOST);
};

IS_SERVERLESS_ENVIRONMENT
  ? initNestApplication(server)
  : startNestApplication()
      .then(() => Logger.log(`Server listening on http://${HOST}:${PORT}`))
      .catch(err => console.error(err));
