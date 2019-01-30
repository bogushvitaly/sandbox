import { Component } from '@angular/core';

import { SystemInputKeyboardBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-input-keyboard',
  templateUrl: 'system-input-keyboard.component.html'
})
export class SystemInputKeyboardComponent extends SystemInputKeyboardBaseComponent {

  constructor() {
    super();
  }
}