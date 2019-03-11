import { Component } from '@angular/core';

import { SystemInputJoystickBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-input-joystick',
  templateUrl: 'system-input-joystick.component.html'
})
export class SystemInputJoystickComponent extends SystemInputJoystickBaseComponent {

  constructor() {
    super();
  }
}