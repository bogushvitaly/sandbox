import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoCovalentUiModule as SharedDemoCovalentUiModule } from '@frontend/features';

import { UIModule } from '../ui/ui.module';
import { DEMOCOVALENTUI_COMPONENTS, DemoCovalentUiComponent } from './components';

@NgModule({
  imports: [
    SharedDemoCovalentUiModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoCovalentUiComponent
      }
    ])
  ],
  declarations: [...DEMOCOVALENTUI_COMPONENTS],
  exports: [...DEMOCOVALENTUI_COMPONENTS]
})
export class DemoCovalentUiModule {}
