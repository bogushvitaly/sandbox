import { Component } from '@angular/core';

import { DemoCssGridBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-css-grid',
  templateUrl: 'demo-css-grid.component.html'
})
export class DemoCssGridComponent extends DemoCssGridBaseComponent {

  constructor() {
    super();
  }
}