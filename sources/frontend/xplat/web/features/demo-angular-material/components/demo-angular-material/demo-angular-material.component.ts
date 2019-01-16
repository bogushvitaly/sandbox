import { Component } from '@angular/core';

import { DemoAngularMaterialBaseComponent } from '@frontend/features';

@Component({
  selector: 'app-demo-angular-material',
  templateUrl: 'demo-angular-material.component.html'
})
export class DemoAngularMaterialComponent extends DemoAngularMaterialBaseComponent {
  constructor() {
    super();
  }
}
