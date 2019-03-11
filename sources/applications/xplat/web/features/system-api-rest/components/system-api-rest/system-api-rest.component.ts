import { Component } from '@angular/core';

import { SystemApiRestBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-api-rest',
  templateUrl: 'system-api-rest.component.html'
})
export class SystemApiRestComponent extends SystemApiRestBaseComponent {
  constructor() {
    super();
  }
}
