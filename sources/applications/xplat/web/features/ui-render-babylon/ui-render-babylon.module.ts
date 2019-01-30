import { NgModule } from '@angular/core';
import { UiRenderBabylonModule as SharedUiRenderBabylonModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { UIRENDERBABYLON_COMPONENTS } from './components';

@NgModule({
  imports: [SharedUiRenderBabylonModule, UIModule],
  declarations: [...UIRENDERBABYLON_COMPONENTS],
  exports: [...UIRENDERBABYLON_COMPONENTS]
})
export class UiRenderBabylonModule {}
