import { enableProdMode } from '@angular/core';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

enableProdMode();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  await app.listen(PORT, HOST);
}

bootstrap()
  .then(() => Logger.log(`Server listening on http://${HOST}:${PORT}`))
  .catch(err => console.error(err));
