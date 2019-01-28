import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { DEMOHEROES_PROVIDERS, InMemoryDataService } from './services';

import { environment } from '@application/core';
import { DemoHeroesModule as SharedDemoHeroesModule } from '@application/features';

@NgModule({
  imports: [
    SharedDemoHeroesModule,
    UIModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService, {
          dataEncapsulation: false
        }),
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
