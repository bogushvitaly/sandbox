import { Component } from '@angular/core';

import { DemoCovalentUiBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-ui',
  templateUrl: 'demo-covalent-ui.component.html'
})
export class DemoCovalentUiComponent extends DemoCovalentUiBaseComponent {
  constructor() {
    super();
  }
}
