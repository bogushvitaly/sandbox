import { Component } from '@angular/core';

import { HeroDetailBaseComponent } from '@frontend/features';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent extends HeroDetailBaseComponent {

  constructor() {
    super();
  }
}