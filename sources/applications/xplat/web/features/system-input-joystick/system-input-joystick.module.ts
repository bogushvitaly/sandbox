import { NgModule } from '@angular/core';
import { SystemInputJoystickModule as SharedSystemInputJoystickModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMINPUTJOYSTICK_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedSystemInputJoystickModule,UIModule
  ],
  declarations: [
    ...SYSTEMINPUTJOYSTICK_COMPONENTS
  ],
  exports: [
    ...SYSTEMINPUTJOYSTICK_COMPONENTS
  ]
})
export class SystemInputJoystickModule {}

