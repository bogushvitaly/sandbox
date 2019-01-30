import { Component } from '@angular/core';

import { SystemAuthenticationBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-authentication',
  templateUrl: 'system-authentication.component.html'
})
export class SystemAuthenticationComponent extends SystemAuthenticationBaseComponent {

  constructor() {
    super();
  }
}