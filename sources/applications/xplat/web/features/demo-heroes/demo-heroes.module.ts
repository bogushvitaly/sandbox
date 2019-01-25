import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoHeroesModule as SharedDemoHeroesModule } from '@application/features';

import { UIModule } from '../ui/ui.module';
import { DEMOHEROES_COMPONENTS, DemoHeroesComponent } from './components';
import { DEMOHEROES_PROVIDERS } from './services';

@NgModule({
  imports: [
    SharedDemoHeroesModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoHeroesComponent
      }
    ])
  ],
  declarations: [...DEMOHEROES_COMPONENTS],
  exports: [...DEMOHEROES_COMPONENTS],
  providers: [...DEMOHEROES_PROVIDERS]
})
export class DemoHeroesModule {}
