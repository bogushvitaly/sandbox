import { isPlatformBrowser } from "@angular/common";
import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild
} from "@angular/core";
import * as tf from "@tensorflow/tfjs";

import { DemoTensorflowDrawableDirective } from "../../directives";

import { environment } from "@applications/core";
import {
  DemoTensorflowBaseComponent,
  features,
  labels
} from "@applications/features";

@Component({
  selector: "app-demo-tensorflow",
  templateUrl: "demo-tensorflow.component.html",
  styleUrls: ["demo-tensorflow.component.scss"]
})
export class DemoTensorflowComponent extends DemoTensorflowBaseComponent
  implements OnInit {
  isBrowser: Boolean = false;
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super();

    this.isBrowser = isPlatformBrowser(platformId);
  }

  text = "DemoTensorflow";

  linearModel: tf.Sequential;
  prediction: any;

  model: tf.Model;
  predictions: any;

  @ViewChild(DemoTensorflowDrawableDirective) canvas;

  ngOnInit() {
    this.loadModel();
    this.trainNewModel();
  }

  async loadModel() {
    const MODEL_PATH = `${
      environment.staticContentServerUrl
    }/tfjs-models/digit-recognition/model.json`;

    this.model = await tf.loadModel(MODEL_PATH);
  }

  async trainNewModel() {
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    this.linearModel.compile({ loss: "meanSquaredError", optimizer: "sgd" });

    const xs = tf.tensor1d(features);
    const ys = tf.tensor1d(labels);

    await this.linearModel.fit(xs, ys);
  }

  linearPrediction(val) {
    const output = this.linearModel.predict(
      tf.tensor2d([parseInt(val, 10)], [1, 1])
    ) as any;
    this.prediction = Array.from(output.dataSync())[0];
  }

  async predict(imageData: ImageData) {
    const pred = await tf.tidy(() => {
      let img = tf.browser.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28, 1] as any);
      img = tf.cast(img, "float32");

      const output = this.model.predict(img) as any;

      this.predictions = Array.from(output.dataSync());
    });
  }
}
