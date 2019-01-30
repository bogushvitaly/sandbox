import { Component } from '@angular/core';

import { DemoCovalentDashboardBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-dashboard',
  templateUrl: 'demo-covalent-dashboard.component.html'
})
export class DemoCovalentDashboardComponent extends DemoCovalentDashboardBaseComponent {
  constructor() {
    super();
  }
}
