import { Component } from '@angular/core';

import { UiAngularMaterialBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-angular-material',
  templateUrl: 'ui-angular-material.component.html'
})
export class UiAngularMaterialComponent extends UiAngularMaterialBaseComponent {
  constructor() {
    super();
  }
}
