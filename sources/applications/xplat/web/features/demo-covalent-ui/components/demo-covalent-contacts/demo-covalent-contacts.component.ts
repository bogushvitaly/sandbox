import { Component } from '@angular/core';

import { DemoCovalentContactsBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-contacts',
  templateUrl: 'demo-covalent-contacts.component.html'
})
export class DemoCovalentContactsComponent extends DemoCovalentContactsBaseComponent {
  constructor() {
    super();
  }
}
