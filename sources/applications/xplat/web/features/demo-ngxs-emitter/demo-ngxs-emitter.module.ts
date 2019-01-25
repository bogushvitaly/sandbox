import { NgModule } from '@angular/core';
import { DemoNgxsEmitterModule as SharedDemoNgxsEmitterModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { DEMONGXSEMITTER_COMPONENTS } from './components';

@NgModule({
  imports: [SharedDemoNgxsEmitterModule, UIModule],
  declarations: [...DEMONGXSEMITTER_COMPONENTS],
  exports: [...DEMONGXSEMITTER_COMPONENTS]
})
export class DemoNgxsEmitterModule {}
