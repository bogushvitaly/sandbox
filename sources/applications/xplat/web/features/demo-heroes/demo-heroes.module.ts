import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import {
  DEMOHEROES_COMPONENTS,
  DemoHeroesComponent,
  HeroDetailComponent,
  HeroesComponent,
  HeroesDashboardComponent
} from './components';
import { DEMOHEROES_PIPES } from './pipes';
import { DEMOHEROES_PROVIDERS } from './services';

import { DemoHeroesModule as SharedDemoHeroesModule } from '@application/features';

@NgModule({
  imports: [
    SharedDemoHeroesModule,
    UIModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoHeroesComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
          { path: 'dashboard', component: HeroesDashboardComponent },
          { path: 'detail/:id', component: HeroDetailComponent },
          { path: 'heroes', component: HeroesComponent }
        ]
      }
    ])
  ],
  declarations: [...DEMOHEROES_COMPONENTS, ...DEMOHEROES_PIPES],
  exports: [...DEMOHEROES_COMPONENTS],
  providers: [...DEMOHEROES_PROVIDERS]
})
export class DemoHeroesModule {}
