import {
  Color4,
  Engine,
  FreeCamera,
  HemisphericLight,
  Scene,
  Vector3
} from "babylonjs";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

require("babylonjs-mesh-writer");

declare global {
  interface Window {
    BABYLON: {
      MeshWriter: any;
    };
  }
}

export class Main {
  scene: any;
  camera: FreeCamera;
  light: HemisphericLight;
  canvas: HTMLCanvasElement;
  engine: Engine;

  constructor() {}

  createScene(canvas: HTMLCanvasElement, engine: Engine): Scene {
    this.canvas = canvas;
    this.engine = engine;

    // Create a basic BJS Scene object.
    this.scene = new Scene(this.engine);
    this.scene.clearColor = Color4.FromHexString("#e0e0e0");

    // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
    this.camera = new FreeCamera(
      "camera1",
      new Vector3(0, 15, -20),
      this.scene
    );

    this.camera.keysUp.push(87); // "w"
    this.camera.keysDown.push(83); // "s"
    this.camera.keysLeft.push(65); // "a"
    this.camera.keysRight.push(68); // "d"

    // Target the camera to scene origin.
    this.camera.setTarget(Vector3.Zero());

    // Attach the camera to the canvas.
    this.camera.attachControl(this.canvas, false);
    //Light direction is up and left

    const light = new HemisphericLight(
      "light1",
      new Vector3(0, 10, 0),
      this.scene
    );
    light.intensity = 0.5;

    const scale = 0.1;
    const Writer = window.BABYLON.MeshWriter(this.scene, {
      scale: scale
    });
    new Writer("ABCDEFGHIJKLMNOPQRSTUVWXYZ", {
      anchor: "center",
      "letter-height": 50,
      color: "#222222",
      position: {
        z: 20
      }
    });
    new Writer("abcdefghijklmnopqrstuvwxyz", {
      anchor: "center",
      "letter-height": 50,
      color: "#3f3f3f",
      position: {
        y: -20
      }
    });
    new Writer("$12,345-#67,890 = 100%++!{}", {
      anchor: "left", // The default value; this line has no effect
      "letter-height": 20,
      color: "#797979",
      position: {
        y: 40,
        x: 5
      }
    });

    new Writer("false||TRUE === 1 && 0.0??", {
      anchor: "right",
      "letter-height": 20,
      color: "#797979",
      position: {
        y: 40,
        x: -5
      }
    });

    const source = interval(1000);

    const subscribe = source.pipe(take(9)).subscribe(val => {
      new Writer(String(val), {
        anchor: "center",
        "letter-height": 50,
        color: "#222222",
        position: { x: -200 + val * 50, y: -10, z: -70 }
      });
    });

    return this.scene;
  }
}
