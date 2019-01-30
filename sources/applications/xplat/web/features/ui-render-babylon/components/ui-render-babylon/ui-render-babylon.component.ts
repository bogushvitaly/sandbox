import { Component } from '@angular/core';

import { UiRenderBabylonBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-render-babylon',
  templateUrl: 'ui-render-babylon.component.html'
})
export class UiRenderBabylonComponent extends UiRenderBabylonBaseComponent {
  constructor() {
    super();
  }
}
