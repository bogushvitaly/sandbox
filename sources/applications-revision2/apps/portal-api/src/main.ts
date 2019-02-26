import * as express from "express";

import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";

export const HOST = process.env.HOST || "0.0.0.0";
export const PORT = process.env.PORT || 4001;

export const IS_SERVERLESS = JSON.stringify(process.env.FUNCTION_NAME);

export const server: express.Express = express();

const bootstrap = async (serverInstance: express.Express) => {
  const app = await NestFactory.create(AppModule, serverInstance);
  app.enableCors();
  IS_SERVERLESS
    ? app.init()
    : app.listen(PORT, () => {
        console.log(`Listening at ${HOST}:${PORT}`);
      });
};

bootstrap(server);
