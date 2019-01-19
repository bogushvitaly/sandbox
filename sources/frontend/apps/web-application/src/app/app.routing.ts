// angular
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// libs
import { routeBase } from '@frontend/features';

// app
import { SharedModule } from './features/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(
      routeBase({
        base: './features/shell/shell.loader.module#ShellLoaderModule',
        items: './features/items/items.loader.module#ItemsLoaderModule',
        version: './features/version/version.loader.module#VersionLoaderModule',
        authorization: './features/authorization/authorization.loader.module#AuthorizationLoaderModule'
      }),
      {
        preloadingStrategy: PreloadAllModules
        // initialNavigation: true
      }
    )
  ]
})
export class AppRoutingModule {}
