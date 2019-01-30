import { NgModule } from '@angular/core';
import { UiMdcModule as SharedUiMdcModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { UIMDC_COMPONENTS } from './components';

@NgModule({
  imports: [SharedUiMdcModule, UIModule],
  declarations: [...UIMDC_COMPONENTS],
  exports: [...UIMDC_COMPONENTS]
})
export class UiMdcModule {}
