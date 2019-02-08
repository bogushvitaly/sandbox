import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import * as tf from '@tensorflow/tfjs';

import { features, labels } from '../data/data';

import { BaseComponent, environment } from '@application/core';
import { DemoTensorflowDrawableDirective } from '@application/web/features/demo-tensorflow/directives/demo-tensorflow-drawable.directive';

export abstract class DemoTensorflowBaseComponent extends BaseComponent implements OnInit {
  public text = 'DemoTensorflow';

  constructor(protected platformId: Object) {
    super();
  }

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
    const MODEL_PATH = `${environment.staticContentServerUrl}/tfjs-models/digit-recognition/model.json`;

    this.model = await tf.loadModel(MODEL_PATH);
  }

  async trainNewModel() {
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    this.linearModel.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    const xs = tf.tensor1d(features);
    const ys = tf.tensor1d(labels);

    await this.linearModel.fit(xs, ys);
  }

  linearPrediction(val) {
    const output = this.linearModel.predict(tf.tensor2d([parseInt(val, 10)], [1, 1])) as any;
    this.prediction = Array.from(output.dataSync())[0];
  }

  async predict(imageData: ImageData) {
    const pred = await tf.tidy(() => {
      let img = tf.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28, 1] as any);
      img = tf.cast(img, 'float32');

      const output = this.model.predict(img) as any;

      this.predictions = Array.from(output.dataSync());
    });
  }
}
