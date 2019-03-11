import { Component } from '@angular/core';

import { UiForceGraphBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-force-graph',
  templateUrl: 'ui-force-graph.component.html'
})
export class UiForceGraphComponent extends UiForceGraphBaseComponent {
  constructor() {
    super();
  }
}
