import { NgModule } from '@angular/core';
import { SystemInternationalizationModule as SharedSystemInternationalizationModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMINTERNATIONALIZATION_COMPONENTS } from './components';

@NgModule({
  imports: [SharedSystemInternationalizationModule, UIModule],
  declarations: [...SYSTEMINTERNATIONALIZATION_COMPONENTS],
  exports: [...SYSTEMINTERNATIONALIZATION_COMPONENTS]
})
export class SystemInternationalizationModule {}
