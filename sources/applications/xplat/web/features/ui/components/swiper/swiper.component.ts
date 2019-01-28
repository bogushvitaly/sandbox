import { Component } from '@angular/core';

import { SwiperBaseComponent } from '@application/features';

@Component({
  selector: 'app-swiper',
  templateUrl: 'swiper.component.html'
})
export class SwiperComponent extends SwiperBaseComponent {
  constructor() {
    super();
  }
}
