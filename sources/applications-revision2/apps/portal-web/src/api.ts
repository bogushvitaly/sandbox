import * as express from "express";
import * as expressStaticGzip from "express-static-gzip";
import { join } from "path";

import { ngExpressEngine, NgSetupOptions } from "@nguniversal/express-engine";
import { REQUEST, RESPONSE } from "@nguniversal/express-engine/tokens";

import * as ROUTES from "../static.paths.js";

export function createApi(distPath: string, ngSetupOptions: NgSetupOptions) {
  const api = express();

  const STATIC_DIR = join(distPath, "static");

  api.set("view engine", "html");
  api.set("views", distPath);

  // Angular Express Engine
  api.engine("html", ngExpressEngine(ngSetupOptions));

  setupRedirectRules(api);

  // Server static files from distPath
  // api.get("*.*", express.static(distPath));

  api.get("*.*", expressStaticGzip(distPath, { enableBrotli: true }));

  api.get(ROUTES, express.static(STATIC_DIR));

  // All regular routes use the Universal engine
  api.get("*", (req, res) => {
    global["navigator"] = req["headers"]["user-agent"];
    const http =
      req.headers["x-forwarded-proto"] === undefined
        ? "http"
        : req.headers["x-forwarded-proto"];

    const url = req.originalUrl;
    // tslint:disable-next-line:no-console
    console.time(`GET: ${url}`);

    res.render(
      "index",
      {
        req: req,
        res: res,
        providers: [
          {
            provide: REQUEST,
            useValue: req
          },
          {
            provide: RESPONSE,
            useValue: res
          },
          {
            provide: "ORIGIN_URL",
            useValue: `${http}://${req.headers.host}`
          }
        ]
      },
      (err: Error, html: string) => {
        // tslint:disable-next-line:no-console
        console.timeEnd(`GET: ${url}`);
        res.status(html ? 200 : 500).send(html || err.message);
      }
    );
  });

  return api;
}

function setupRedirectRules(api) {
  const redirectohttps = false;
  const redirectowww = false;
  const wwwredirecto = false;
  api.use((req, res, next) => {
    // for domain/index.html
    if (req.url === "/index.html") {
      res.redirect(301, "https://" + req.hostname);
    }

    // check if it is a secure (https) request
    // if not redirect to the equivalent https url
    if (
      redirectohttps &&
      req.headers["x-forwarded-proto"] !== "https" &&
      req.hostname !== "localhost"
    ) {
      // special for robots.txt
      if (req.url === "/robots.txt") {
        next();
        return;
      }
      res.redirect(301, "https://" + req.hostname + req.url);
    }

    // www or not
    if (redirectowww && !req.hostname.startsWith("www.")) {
      res.redirect(301, "https://www." + req.hostname + req.url);
    }

    // www or not
    if (wwwredirecto && req.hostname.startsWith("www.")) {
      const host = req.hostname.slice(4, req.hostname.length);
      res.redirect(301, "https://" + host + req.url);
    }

    next();
  });
}
