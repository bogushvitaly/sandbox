import { Component } from '@angular/core';

import { DemoBabylonBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-babylon',
  templateUrl: 'demo-babylon.component.html'
})
export class DemoBabylonComponent extends DemoBabylonBaseComponent {

  constructor() {
    super();
  }
}