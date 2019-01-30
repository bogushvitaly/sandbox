import { NgModule } from '@angular/core';
import { SystemInputGestureModule as SharedSystemInputGestureModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMINPUTGESTURE_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedSystemInputGestureModule,UIModule
  ],
  declarations: [
    ...SYSTEMINPUTGESTURE_COMPONENTS
  ],
  exports: [
    ...SYSTEMINPUTGESTURE_COMPONENTS
  ]
})
export class SystemInputGestureModule {}

