import { Component } from '@angular/core';

import { HeroSearchBaseComponent } from '@frontend/features';

@Component({
  selector: 'app-hero-search',
  templateUrl: 'hero-search.component.html'
})
export class HeroSearchComponent extends HeroSearchBaseComponent {

  constructor() {
    super();
  }
}