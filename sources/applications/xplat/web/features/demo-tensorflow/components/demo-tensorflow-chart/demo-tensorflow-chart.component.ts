import { Component } from '@angular/core';

import { DemoTensorflowChartBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-tensorflow-chart',
  templateUrl: 'demo-tensorflow-chart.component.html'
})
export class DemoTensorflowChartComponent extends DemoTensorflowChartBaseComponent {
  constructor() {
    super();
  }
}
