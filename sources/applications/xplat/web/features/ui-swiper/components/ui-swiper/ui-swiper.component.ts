import { Component } from '@angular/core';

import { UiSwiperBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-swiper',
  templateUrl: 'ui-swiper.component.html'
})
export class UiSwiperComponent extends UiSwiperBaseComponent {

  constructor() {
    super();
  }
}