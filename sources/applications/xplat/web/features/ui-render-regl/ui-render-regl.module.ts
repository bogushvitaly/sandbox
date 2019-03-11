import { NgModule } from '@angular/core';
import { UiRenderReglModule as SharedUiRenderReglModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { UIRENDERREGL_COMPONENTS } from './components';

@NgModule({
  imports: [SharedUiRenderReglModule, UIModule],
  declarations: [...UIRENDERREGL_COMPONENTS],
  exports: [...UIRENDERREGL_COMPONENTS]
})
export class UiRenderReglModule {}
