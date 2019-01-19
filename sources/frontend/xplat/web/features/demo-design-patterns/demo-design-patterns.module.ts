import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoDesignPatternsModule as SharedDemoDesignPatternsModule } from '@frontend/features';

import { UIModule } from '../ui/ui.module';
import { DEMODESIGNPATTERNS_COMPONENTS, DemoDesignPatternsComponent } from './components';

@NgModule({
  imports: [
    SharedDemoDesignPatternsModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoDesignPatternsComponent
      }
    ])
  ],
  declarations: [...DEMODESIGNPATTERNS_COMPONENTS],
  exports: [...DEMODESIGNPATTERNS_COMPONENTS]
})
export class DemoDesignPatternsModule {}
