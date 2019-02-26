import { join } from "path";

import { applyDomino } from "@nestjs/ng-universal";

export function applyPolyfills(distPath: string) {
  applyDomino(global, join(distPath, "index.html"));

  console.log(distPath);

  (global as any).XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  (global as any).WebSocket = require("ws");
  (global as any).fetch = require("node-fetch");
  (global as any).window = {};
}
