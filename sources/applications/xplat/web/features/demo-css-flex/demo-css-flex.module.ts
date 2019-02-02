import { NgModule } from '@angular/core';
import { DemoCssFlexModule as SharedDemoCssFlexModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { DEMOCSSFLEX_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedDemoCssFlexModule,UIModule
  ],
  declarations: [
    ...DEMOCSSFLEX_COMPONENTS
  ],
  exports: [
    ...DEMOCSSFLEX_COMPONENTS
  ]
})
export class DemoCssFlexModule {}

