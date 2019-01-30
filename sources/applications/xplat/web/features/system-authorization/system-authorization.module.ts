import { NgModule } from '@angular/core';
import { SystemAuthorizationModule as SharedSystemAuthorizationModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMAUTHORIZATION_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedSystemAuthorizationModule,UIModule
  ],
  declarations: [
    ...SYSTEMAUTHORIZATION_COMPONENTS
  ],
  exports: [
    ...SYSTEMAUTHORIZATION_COMPONENTS
  ]
})
export class SystemAuthorizationModule {}

