import { Component } from '@angular/core';

import { DemoCssFlexBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-css-flex',
  templateUrl: 'demo-css-flex.component.html'
})
export class DemoCssFlexComponent extends DemoCssFlexBaseComponent {

  constructor() {
    super();
  }
}