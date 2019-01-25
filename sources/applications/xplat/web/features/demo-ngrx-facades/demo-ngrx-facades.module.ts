import { NgModule } from '@angular/core';
import { DemoNgrxFacadesModule as SharedDemoNgrxFacadesModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { DEMONGRXFACADES_COMPONENTS } from './components';

@NgModule({
  imports: [SharedDemoNgrxFacadesModule, UIModule],
  declarations: [...DEMONGRXFACADES_COMPONENTS],
  exports: [...DEMONGRXFACADES_COMPONENTS]
})
export class DemoNgrxFacadesModule {}
