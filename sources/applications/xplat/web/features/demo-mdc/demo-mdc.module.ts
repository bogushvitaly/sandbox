import { NgModule } from '@angular/core';
import { DemoMdcModule as SharedDemoMdcModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { DEMOMDC_COMPONENTS } from './components';

@NgModule({
  imports: [SharedDemoMdcModule, UIModule],
  declarations: [...DEMOMDC_COMPONENTS],
  exports: [...DEMOMDC_COMPONENTS]
})
export class DemoMdcModule {}
