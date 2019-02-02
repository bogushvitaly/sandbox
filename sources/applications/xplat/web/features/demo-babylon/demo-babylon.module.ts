import { NgModule } from '@angular/core';
import { DemoBabylonModule as SharedDemoBabylonModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { DEMOBABYLON_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedDemoBabylonModule,UIModule
  ],
  declarations: [
    ...DEMOBABYLON_COMPONENTS
  ],
  exports: [
    ...DEMOBABYLON_COMPONENTS
  ]
})
export class DemoBabylonModule {}

