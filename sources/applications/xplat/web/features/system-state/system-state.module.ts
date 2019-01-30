import { NgModule } from '@angular/core';
import { SystemStateModule as SharedSystemStateModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMSTATE_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedSystemStateModule,UIModule
  ],
  declarations: [
    ...SYSTEMSTATE_COMPONENTS
  ],
  exports: [
    ...SYSTEMSTATE_COMPONENTS
  ]
})
export class SystemStateModule {}

