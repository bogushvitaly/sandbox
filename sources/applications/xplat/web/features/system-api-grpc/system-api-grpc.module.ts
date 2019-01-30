import { NgModule } from '@angular/core';
import { SystemApiGrpcModule as SharedSystemApiGrpcModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMAPIGRPC_COMPONENTS } from './components';

@NgModule({
  imports: [SharedSystemApiGrpcModule, UIModule],
  declarations: [...SYSTEMAPIGRPC_COMPONENTS],
  exports: [...SYSTEMAPIGRPC_COMPONENTS]
})
export class SystemApiGrpcModule {}
