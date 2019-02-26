import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UiRenderReglService {
  canvas: HTMLCanvasElement;
  constructor() {}

  handleResize(canvas: HTMLCanvasElement, window: Window) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }
}
