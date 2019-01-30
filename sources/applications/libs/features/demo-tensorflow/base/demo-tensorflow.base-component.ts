import { Component, OnInit, ViewChild } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

import { features, labels } from '../data/data';

import { BaseComponent } from '@application/core';
import { DemoTensorflowDrawableDirective } from '@application/web/features/demo-tensorflow/directives/demo-tensorflow-drawable.directive';

export abstract class DemoTensorflowBaseComponent extends BaseComponent implements OnInit {
  public text = 'DemoTensorflow';

  constructor() {
    super();
  }

  linearModel: tf.Sequential;
  prediction: any;

  model: tf.Model;
  predictions: any;

  @ViewChild(DemoTensorflowDrawableDirective) canvas;

  ngOnInit() {
    this.trainNewModel();
    this.loadModel();
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
    this.model = await tf.loadModel('/assets/ml-models/model.json');
  }

  async predict(imageData: ImageData) {
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
