import { Component } from '@angular/core';

import { UiRenderReglBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-render-regl',
  templateUrl: 'ui-render-regl.component.html'
})
export class UiRenderReglComponent extends UiRenderReglBaseComponent {
  constructor() {
    super();
  }
}
