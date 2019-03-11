import { join } from 'path';

import { FastifyAdapter, NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

export const HOST = process.env.HOST || '0.0.0.0';
export const PORT = process.env.PORT || 4002;

export const IS_SERVERLESS = !!process.env.FUNCTION_NAME;

export const server: any = new FastifyAdapter();

async function bootstrap(serverInstance) {
  const app = await NestFactory.create(AppModule, serverInstance);
  app.enableCors();
  app.useStaticAssets({
    root: join(__dirname, 'assets'),
    prefix: '/'
  });
  IS_SERVERLESS
    ? app.init()
    : app.listen(PORT, () => {
        console.log(`Listening at ${HOST}:${PORT}`);
      });
}

bootstrap(server);
