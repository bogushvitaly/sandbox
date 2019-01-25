import { Component } from '@angular/core';

import { DemoNgrxFacadesBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-ngrx-facades',
  templateUrl: 'demo-ngrx-facades.component.html'
})
export class DemoNgrxFacadesComponent extends DemoNgrxFacadesBaseComponent {
  constructor() {
    super();
  }
}
