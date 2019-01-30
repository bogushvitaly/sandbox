import { NgModule } from '@angular/core';
import { UiSwiperModule as SharedUiSwiperModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { UISWIPER_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedUiSwiperModule,UIModule
  ],
  declarations: [
    ...UISWIPER_COMPONENTS
  ],
  exports: [
    ...UISWIPER_COMPONENTS
  ]
})
export class UiSwiperModule {}

