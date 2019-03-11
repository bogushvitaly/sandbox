import { Component } from '@angular/core';

import { DemoFlexLayoutBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-flex-layout',
  templateUrl: 'demo-flex-layout.component.html'
})
export class DemoFlexLayoutComponent extends DemoFlexLayoutBaseComponent {

  constructor() {
    super();
  }
}