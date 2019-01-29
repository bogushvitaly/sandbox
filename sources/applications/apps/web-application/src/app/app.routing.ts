// angular
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// app
import { SharedModule } from './features/shared/shared.module';

// libs
import { routeBase } from '@application/features';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(
      routeBase(
        {
          base: './features/shell/shell.loader.module#ShellLoaderModule',
          // items: './features/items/items.loader.module#ItemsLoaderModule',
          // version: './features/version/version.loader.module#VersionLoaderModule',
          heroes: './features/heroes/heroes.loader.module#HeroesLoaderModule'
          // authorization: './features/authorization/authorization.loader.module#AuthorizationLoaderModule'
          authorization: './features/authorization/authorization.loader.module#AuthorizationLoaderModule'
        },
        [{ path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule' }]
      ),
      {
        preloadingStrategy: PreloadAllModules,
        initialNavigation: true
      }
    )
  ]
})
export class AppRoutingModule {}
