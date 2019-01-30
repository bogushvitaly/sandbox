import { NgModule } from '@angular/core';
import { SystemAuthenticationModule as SharedSystemAuthenticationModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMAUTHENTICATION_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedSystemAuthenticationModule,UIModule
  ],
  declarations: [
    ...SYSTEMAUTHENTICATION_COMPONENTS
  ],
  exports: [
    ...SYSTEMAUTHENTICATION_COMPONENTS
  ]
})
export class SystemAuthenticationModule {}

