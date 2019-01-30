import { Component } from '@angular/core';

import { UiCovalentBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-covalent',
  templateUrl: 'ui-covalent.component.html'
})
export class UiCovalentComponent extends UiCovalentBaseComponent {
  constructor() {
    super();
  }
}
