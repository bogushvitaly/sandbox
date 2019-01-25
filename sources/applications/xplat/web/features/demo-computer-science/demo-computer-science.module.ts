import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComputerScienceModule as SharedDemoComputerScienceModule } from '@application/features';

import { UIModule } from '../ui/ui.module';
import { DEMOCOMPUTERSCIENCE_COMPONENTS, DemoComputerScienceComponent } from './components';

@NgModule({
  imports: [
    SharedDemoComputerScienceModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComputerScienceComponent
      }
    ])
  ],
  declarations: [...DEMOCOMPUTERSCIENCE_COMPONENTS],
  exports: [...DEMOCOMPUTERSCIENCE_COMPONENTS]
})
export class DemoComputerScienceModule {}
