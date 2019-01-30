import { NgModule } from '@angular/core';
import { SystemLoggingModule as SharedSystemLoggingModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMLOGGING_COMPONENTS } from './components';

@NgModule({
  imports: [SharedSystemLoggingModule, UIModule],
  declarations: [...SYSTEMLOGGING_COMPONENTS],
  exports: [...SYSTEMLOGGING_COMPONENTS]
})
export class SystemLoggingModule {}
