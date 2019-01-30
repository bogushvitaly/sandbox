import { Component } from '@angular/core';

import { DemoCovalentStarterTemplateBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-starter-template',
  templateUrl: 'demo-covalent-starter-template.component.html'
})
export class DemoCovalentStarterTemplateComponent extends DemoCovalentStarterTemplateBaseComponent {
  constructor() {
    super();
  }
}
