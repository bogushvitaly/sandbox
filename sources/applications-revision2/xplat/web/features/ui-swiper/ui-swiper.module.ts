import {
  SWIPER_CONFIG,
  SwiperConfigInterface,
  SwiperModule
} from "ngx-swiper-wrapper";

import { NgModule } from "@angular/core";

import { UISWIPER_COMPONENTS } from "./components";

import { UiSwiperModule as SharedUiSwiperModule } from "@applications/features";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: "horizontal",
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  imports: [SharedUiSwiperModule, SwiperModule],
  declarations: [...UISWIPER_COMPONENTS],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  exports: [...UISWIPER_COMPONENTS, SwiperModule]
})
export class UiSwiperModule {}
