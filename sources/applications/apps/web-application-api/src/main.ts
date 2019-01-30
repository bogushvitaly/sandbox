import * as express from 'express';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

export const IS_SERVERLESS = !!process.env.FUNCTION_NAME;

export const HOST = process.env.HOST || '0.0.0.0';
export const PORT = process.env.PORT || 5000;

export const server: express.Express = express();

const bootstrap = async (expressInstance: express.Express) => {
  const app = await NestFactory.create(AppModule, expressInstance);
  app.enableCors();
  IS_SERVERLESS ? app.init() : app.listen(PORT);
};

bootstrap(server);
