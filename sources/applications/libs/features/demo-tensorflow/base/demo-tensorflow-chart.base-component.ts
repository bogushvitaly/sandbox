import { Input, OnChanges } from '@angular/core';

import { BaseComponent } from '@application/core';

export abstract class DemoTensorflowChartBaseComponent extends BaseComponent implements OnChanges {
  public text = 'DemoTensorflowChart';

  constructor() {
    super();
  }

  @Input() data;

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: '#ef6c00',
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            fontSize: 40
          }
        }
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false
          }
        }
      ]
    }
  };

  barChartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  barChartType = 'bar';
  barChartLegend = false;

  barChartData: any;

  ngOnChanges() {
    this.barChartData = [
      {
        data: this.data || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        label: 'Predictions',
        backgroundColor: '#ef6c00'
      }
    ];
  }
}
