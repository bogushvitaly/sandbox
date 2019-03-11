import { Component } from '@angular/core';

import { UiAppHeaderBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-app-header',
  templateUrl: 'ui-app-header.component.html',
  styleUrls: ['ui-app-header.component.scss']
})
export class UiAppHeaderComponent extends UiAppHeaderBaseComponent {
  constructor() {
    super();
  }
}
