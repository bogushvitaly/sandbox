import { NgModule } from '@angular/core';
import { SystemInputKeyboardModule as SharedSystemInputKeyboardModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMINPUTKEYBOARD_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedSystemInputKeyboardModule,UIModule
  ],
  declarations: [
    ...SYSTEMINPUTKEYBOARD_COMPONENTS
  ],
  exports: [
    ...SYSTEMINPUTKEYBOARD_COMPONENTS
  ]
})
export class SystemInputKeyboardModule {}

