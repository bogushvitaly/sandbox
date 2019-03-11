import { Component } from '@angular/core';

import { UiAppFooterBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-app-footer',
  templateUrl: 'ui-app-footer.component.html',
  styleUrls: ['ui-app-footer.component.scss']
})
export class UiAppFooterComponent extends UiAppFooterBaseComponent {
  constructor() {
    super();
  }
}
