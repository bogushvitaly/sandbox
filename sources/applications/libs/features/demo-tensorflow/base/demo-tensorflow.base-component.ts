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

import { BaseComponent } from '@application/core';
import { DemoTensorflowDrawableDirective } from '@application/web/features/demo-tensorflow/directives/demo-tensorflow-drawable.directive';

export abstract class DemoTensorflowBaseComponent extends BaseComponent implements AfterViewInit {
  public text = 'DemoTensorflow';

  constructor(protected platformId: Object) {
    super();
  }

  linearModel: tf.Sequential;
  prediction: any;

  model: tf.Model;
  predictions: any;

  @ViewChild(DemoTensorflowDrawableDirective) canvas;

  ngAfterViewInit() {
    this.loadModel();
    this.trainNewModel();
  }

  async trainNewModel() {
    // Define a model for linear regression.
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    // Prepare the model for training: Specify the loss and the optimizer.
    this.linearModel.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    // Training data, completely random stuff
    const xs = tf.tensor1d(features);
    const ys = tf.tensor1d(labels);

    // Train
    await this.linearModel.fit(xs, ys);

    console.log('model trained!');
  }

  linearPrediction(val) {
    const output = this.linearModel.predict(tf.tensor2d([parseInt(val, 10)], [1, 1])) as any;
    this.prediction = Array.from(output.dataSync())[0];
  }

  async loadModel() {
    // (global as any).fetch = require('node-fetch');

    const MODEL_PATH = 'http://localhost:4002/assets/tfjs-models/digit-recognition/model.json';
    // const MODEL_PATH = 'file:///assets/tfjs-models/model.json';

    this.model = await tf.loadModel(MODEL_PATH);

    // if (isPlatformBrowser(this.platformId)) {
    // this.model = await tf.loadModel('/assets/tfjs-models/model.json');
    // }
    // if (isPlatformServer(this.platformId)) {
    // require('@tensorflow/tfjs-node');
    // this.model = await tf.loadModel('http://localhost:4000/assets/tfjs-models/model.json');
    // this.model = await tf.loadModel('file://assets/tfjs-models/model.json');
    // }
  }

  async predict(imageData: ImageData) {
    // if (isPlatformBrowser(this.platformId)) {
    // this.model = await tf.loadModel('/assets/tfjs-models/model.json');
    // }
    if (isPlatformServer(this.platformId)) {
      // this.model = await tf.loadModel('./dist/apps/web-application/browser/assets/tfjs-models/model.json');
      // let fs = require('fs');
      // fs.readdir(__dirname, function(err, items) {
      //   console.log(222222222);
      //   console.log(items);
      // });
      // (global as any).fetch = require('node-fetch');
      // const MODEL_PATH = 'file:///assets/tfjs-models/model.json';
      // this.model = await tf.loadModel(MODEL_PATH);
    }

    const pred = await tf.tidy(() => {
      // Convert the canvas pixels to
      let img = tf.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28, 1] as any);
      img = tf.cast(img, 'float32');

      // Make and format the predications
      const output = this.model.predict(img) as any;

      // Save predictions on the component
      this.predictions = Array.from(output.dataSync());
    });
  }
}
