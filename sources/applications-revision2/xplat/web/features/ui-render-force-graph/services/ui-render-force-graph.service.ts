import ForceGraph3D from "3d-force-graph";

import { Injectable, NgZone } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UiRenderForceGraphService {
  private canvas: HTMLCanvasElement;
  private engine: any;
  private uid: number;

  constructor(private zone: NgZone) {
    if (!this.uid) {
      this.uid = Math.floor(Date.now() / 1);
    }
  }

  createEngine(
    surface: HTMLElement,
    windows: Window,
    controlType: string = "fly"
  ) {
    this.zone.runOutsideAngular(() => {
      this.engine = ForceGraph3D({
        controlType,
        rendererConfig: { antialias: true }
      })(surface)
        .backgroundColor("#e0e0e0")
        .nodeColor(() => "#797979")
        .nodeLabel(node => `<span style="color: #2b2b2b">${node.id}</span>`)
        .showNavInfo(false)
        .nodeResolution(16);
    });

    this.canvas = surface.querySelector("canvas");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";

    window.addEventListener("resize", () => {
      this.engine.width(window.innerWidth);
      this.engine.height(window.innerHeight);
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });

    return this.engine;
  }

  getEngine(): any {
    return this.engine;
  }

  getUID(): number {
    return this.uid;
  }
}
