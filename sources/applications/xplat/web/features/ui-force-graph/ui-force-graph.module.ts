import { NgModule } from '@angular/core';
import { UiForceGraphModule as SharedUiForceGraphModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { UIFORCEGRAPH_COMPONENTS } from './components';

@NgModule({
  imports: [SharedUiForceGraphModule, UIModule],
  declarations: [...UIFORCEGRAPH_COMPONENTS],
  exports: [...UIFORCEGRAPH_COMPONENTS]
})
export class UiForceGraphModule {}
