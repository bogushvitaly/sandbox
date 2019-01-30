import { Component } from '@angular/core';

import { DemoMdcBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-mdc',
  templateUrl: 'demo-mdc.component.html'
})
export class DemoMdcComponent extends DemoMdcBaseComponent {
  constructor() {
    super();
  }
}
