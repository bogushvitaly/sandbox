import { Component } from '@angular/core';

import { SystemAnalyticsBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-analytics',
  templateUrl: 'system-analytics.component.html'
})
export class SystemAnalyticsComponent extends SystemAnalyticsBaseComponent {
  constructor() {
    super();
  }
}
