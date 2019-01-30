import { Component } from '@angular/core';

import { SystemInputGestureBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-input-gesture',
  templateUrl: 'system-input-gesture.component.html'
})
export class SystemInputGestureComponent extends SystemInputGestureBaseComponent {

  constructor() {
    super();
  }
}