import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { UiSwiperModule } from "../ui-swiper";

// libs
import { UISharedModule } from "@applications/features";

const MODULES = [CommonModule, UISharedModule, UiSwiperModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class UIModule {}
