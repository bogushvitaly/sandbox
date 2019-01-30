import { NgModule } from '@angular/core';
import { SystemAnalyticsModule as SharedSystemAnalyticsModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMANALYTICS_COMPONENTS } from './components';

@NgModule({
  imports: [SharedSystemAnalyticsModule, UIModule],
  declarations: [...SYSTEMANALYTICS_COMPONENTS],
  exports: [...SYSTEMANALYTICS_COMPONENTS]
})
export class SystemAnalyticsModule {}
