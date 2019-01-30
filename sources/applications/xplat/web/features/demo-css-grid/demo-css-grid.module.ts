import { NgModule } from '@angular/core';
import { DemoCssGridModule as SharedDemoCssGridModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { DEMOCSSGRID_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedDemoCssGridModule,UIModule
  ],
  declarations: [
    ...DEMOCSSGRID_COMPONENTS
  ],
  exports: [
    ...DEMOCSSGRID_COMPONENTS
  ]
})
export class DemoCssGridModule {}

