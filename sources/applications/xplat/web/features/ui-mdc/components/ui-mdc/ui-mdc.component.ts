import { Component } from '@angular/core';

import { UiMdcBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-mdc',
  templateUrl: 'ui-mdc.component.html'
})
export class UiMdcComponent extends UiMdcBaseComponent {
  constructor() {
    super();
  }
}
