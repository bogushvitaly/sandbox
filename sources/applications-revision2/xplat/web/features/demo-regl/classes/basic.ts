import * as GLTransitions from "gl-transitions";
import * as REGL from "regl";
import * as createREGLTransition from "regl-transition";

interface Uniforms {
  color: REGL.Vec4;
}

interface Attributes {
  position: REGL.Vec2[];
}

export class Main {
  constructor() {}

  createScene(canvas: HTMLCanvasElement): void {
    const regl = REGL({ canvas });

    const delay = 1;
    const duration = 1.5;
    const imgSrcs = [
      "assets/images/1.jpg",
      "assets/images/2.jpg",
      "assets/images/3.jpg",
      "assets/images/4.jpg"
    ];

    const loadImage = src =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.onabort = reject;
        img.src = src;
      });

    const transitions = GLTransitions.map(t => createREGLTransition(regl, t));

    Promise.all(imgSrcs.map(loadImage)).then(imgs => {
      const slides = imgs.map(img => regl.texture(img));
      regl.frame(({ time }) => {
        const index = Math.floor(time / (delay + duration));
        const from = slides[index % slides.length];
        const to = slides[(index + 1) % slides.length];
        const transition = transitions[index % transitions.length];
        const total = delay + duration;
        const progress = Math.max(0, (time - index * total - delay) / duration);
        transition({ progress, from, to });
      });
    });
  }
}
