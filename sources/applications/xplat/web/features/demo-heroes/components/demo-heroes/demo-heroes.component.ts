import { Component } from '@angular/core';

import { DemoHeroesBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-heroes',
  templateUrl: 'demo-heroes.component.html'
})
export class DemoHeroesComponent extends DemoHeroesBaseComponent {
  constructor() {
    super();
  }
}
