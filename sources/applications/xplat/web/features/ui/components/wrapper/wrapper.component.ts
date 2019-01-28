import { Component } from '@angular/core';

import { WrapperBaseComponent } from '@application/features';

@Component({
  selector: 'app-wrapper',
  templateUrl: 'wrapper.component.html'
})
export class WrapperComponent extends WrapperBaseComponent {
  constructor() {
    super();
  }
}
