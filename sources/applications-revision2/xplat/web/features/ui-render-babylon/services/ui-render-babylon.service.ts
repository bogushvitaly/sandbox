import { Engine, Scene } from "babylonjs";

import { Injectable, NgZone } from "@angular/core";

const earcut = require("earcut");
(window as any).earcut = earcut;

@Injectable({
  providedIn: "root"
})
export class UiRenderBabylonService {
  private engine: Engine;
  private uid: number;

  constructor(private zone: NgZone) {
    if (!this.uid) {
      this.uid = Math.floor(Date.now() / 1);
    }
  }

  createEngine(canvas: HTMLCanvasElement, windows: Window): Engine {
    this.engine = new Engine(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    windows.addEventListener("resize", () => {
      this.engine.resize();
      canvas.width = windows.innerWidth;
      canvas.height = windows.innerHeight;
    });

    return this.engine;
  }

  getEngine(): Engine {
    return this.engine;
  }

  getUID(): number {
    return this.uid;
  }

  start(scene: Scene): void {
    this.zone.runOutsideAngular(() => {
      this.engine.runRenderLoop(() => {
        scene.render();
      });
    });
  }
}
