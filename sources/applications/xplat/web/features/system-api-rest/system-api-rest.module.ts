import { NgModule } from '@angular/core';
import { SystemApiRestModule as SharedSystemApiRestModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMAPIREST_COMPONENTS } from './components';

@NgModule({
  imports: [SharedSystemApiRestModule, UIModule],
  declarations: [...SYSTEMAPIREST_COMPONENTS],
  exports: [...SYSTEMAPIREST_COMPONENTS]
})
export class SystemApiRestModule {}
