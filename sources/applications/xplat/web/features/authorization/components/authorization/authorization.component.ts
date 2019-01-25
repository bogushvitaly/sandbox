import { Component } from '@angular/core';

import { AuthorizationBaseComponent } from '@application/features';

@Component({
  selector: 'app-authorization',
  templateUrl: 'authorization.component.html'
})
export class AuthorizationComponent extends AuthorizationBaseComponent {
  constructor() {
    super();
  }
}
