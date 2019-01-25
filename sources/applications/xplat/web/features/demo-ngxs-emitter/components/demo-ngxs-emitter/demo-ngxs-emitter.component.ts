import { Component } from '@angular/core';

import { DemoNgxsEmitterBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-ngxs-emitter',
  templateUrl: 'demo-ngxs-emitter.component.html'
})
export class DemoNgxsEmitterComponent extends DemoNgxsEmitterBaseComponent {
  constructor() {
    super();
  }
}
