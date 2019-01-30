import { Component } from '@angular/core';

import { DemoTensorflowBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-tensorflow',
  templateUrl: 'demo-tensorflow.component.html',
  styleUrls: ['demo-tensorflow.component.scss']
})
export class DemoTensorflowComponent extends DemoTensorflowBaseComponent {
  constructor() {
    super();
  }
}
