// angular
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// app
import { SharedModule } from './features/shared/shared.module';
import { NotFoundComponent } from './not-found.component';

// libs
import { routeBase } from '@application/features';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(
      routeBase(
        {
          base: './features/shell/shell.loader.module#ShellLoaderModule',
          items: './features/items/items.loader.module#ItemsLoaderModule',
          version: './features/version/version.loader.module#VersionLoaderModule',
          authorization: './features/authorization/authorization.loader.module#AuthorizationLoaderModule'
        },
        [
          { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule' },
          { path: '**', component: NotFoundComponent }
        ]
      ),
      {
        preloadingStrategy: PreloadAllModules,
        initialNavigation: true
      }
    )
  ]
})
export class AppRoutingModule {}
