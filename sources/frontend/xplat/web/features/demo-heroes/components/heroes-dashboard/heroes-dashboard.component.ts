import { Component } from '@angular/core';

import { HeroesDashboardBaseComponent } from '@frontend/features';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: 'heroes-dashboard.component.html'
})
export class HeroesDashboardComponent extends HeroesDashboardBaseComponent {

  constructor() {
    super();
  }
}