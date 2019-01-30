import { NgModule } from '@angular/core';
import { DemoFlexLayoutModule as SharedDemoFlexLayoutModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { DEMOFLEXLAYOUT_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedDemoFlexLayoutModule,UIModule
  ],
  declarations: [
    ...DEMOFLEXLAYOUT_COMPONENTS
  ],
  exports: [
    ...DEMOFLEXLAYOUT_COMPONENTS
  ]
})
export class DemoFlexLayoutModule {}

