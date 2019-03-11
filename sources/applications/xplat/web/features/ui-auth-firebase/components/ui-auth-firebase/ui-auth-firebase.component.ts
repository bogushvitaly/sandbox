import { Component } from '@angular/core';

import { UiAuthFirebaseBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-auth-firebase',
  templateUrl: 'ui-auth-firebase.component.html'
})
export class UiAuthFirebaseComponent extends UiAuthFirebaseBaseComponent {
  constructor() {
    super();
  }
}
