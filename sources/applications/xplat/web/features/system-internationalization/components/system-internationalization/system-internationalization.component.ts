import { Component } from '@angular/core';

import { SystemInternationalizationBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-internationalization',
  templateUrl: 'system-internationalization.component.html'
})
export class SystemInternationalizationComponent extends SystemInternationalizationBaseComponent {
  constructor() {
    super();
  }
}
