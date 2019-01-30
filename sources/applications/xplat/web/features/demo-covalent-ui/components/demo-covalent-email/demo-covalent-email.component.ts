import { Component } from '@angular/core';

import { DemoCovalentEmailBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-email',
  templateUrl: 'demo-covalent-email.component.html'
})
export class DemoCovalentEmailComponent extends DemoCovalentEmailBaseComponent {
  constructor() {
    super();
  }
}
