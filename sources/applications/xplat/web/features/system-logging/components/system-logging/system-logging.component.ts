import { Component } from '@angular/core';

import { SystemLoggingBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-logging',
  templateUrl: 'system-logging.component.html'
})
export class SystemLoggingComponent extends SystemLoggingBaseComponent {
  constructor() {
    super();
  }
}
