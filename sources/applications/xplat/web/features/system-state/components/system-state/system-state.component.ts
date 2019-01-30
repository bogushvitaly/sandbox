import { Component } from '@angular/core';

import { SystemStateBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-state',
  templateUrl: 'system-state.component.html'
})
export class SystemStateComponent extends SystemStateBaseComponent {

  constructor() {
    super();
  }
}