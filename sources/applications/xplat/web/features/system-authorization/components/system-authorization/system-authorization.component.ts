import { Component } from '@angular/core';

import { SystemAuthorizationBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-authorization',
  templateUrl: 'system-authorization.component.html'
})
export class SystemAuthorizationComponent extends SystemAuthorizationBaseComponent {

  constructor() {
    super();
  }
}