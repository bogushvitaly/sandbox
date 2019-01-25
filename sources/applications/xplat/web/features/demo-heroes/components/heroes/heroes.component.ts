import { Component } from '@angular/core';

import { HeroesBaseComponent } from '@application/features';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html'
})
export class HeroesComponent extends HeroesBaseComponent {

  constructor() {
    super();
  }
}