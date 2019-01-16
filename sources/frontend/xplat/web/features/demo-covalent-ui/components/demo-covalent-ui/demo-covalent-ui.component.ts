import { Component } from '@angular/core';

import { DemoCovalentUiBaseComponent } from '@frontend/features';

@Component({
  selector: 'app-demo-covalent-ui',
  templateUrl: 'demo-covalent-ui.component.html'
})
export class DemoCovalentUiComponent extends DemoCovalentUiBaseComponent {
  constructor() {
    super();
  }
}
