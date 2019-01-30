import { NgModule } from '@angular/core';
import { SystemApiGraphqlModule as SharedSystemApiGraphqlModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMAPIGRAPHQL_COMPONENTS } from './components';

@NgModule({
  imports: [SharedSystemApiGraphqlModule, UIModule],
  declarations: [...SYSTEMAPIGRAPHQL_COMPONENTS],
  exports: [...SYSTEMAPIGRAPHQL_COMPONENTS]
})
export class SystemApiGraphqlModule {}
