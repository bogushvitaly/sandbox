// angular
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

// app
import { SharedModule } from './features/shared/shared.module';

import { LoadingStrategyService } from '@application/core';
import { routeBase } from '@application/features';
import {
  UiAppMenuComponent,
  UiAppMenuModule,
  UiAppShellComponent,
  UiAppShellModule
} from '@application/web';

const rootRouteConfig: ExtraOptions = {
  useHash: false,
  initialNavigation: true,
  enableTracing: false,
  preloadingStrategy: LoadingStrategyService
};

@NgModule({
  imports: [
    SharedModule,
    UiAppShellModule,
    UiAppMenuModule,
    RouterModule.forRoot(
      routeBase(UiAppShellComponent, UiAppMenuComponent, {
        demoHeroes: './features/demoHeroes.loader.module#DemoHeroesLoaderModule',
        demoItems: './features/demoItems.loader.module#DemoItemsLoaderModule',
        demoAngularMaterial: './features/demoAngularMaterial.loader.module#DemoAngularMaterialLoaderModule',
        demoTensorFlow: './features/demoTensorFlow.loader.module#DemoTensorFlowLoaderModule',
        demoVersion: './features/demoVersion.loader.module#DemoVersionLoaderModule',
        uiAuthFirebase: './features/uiAuthFirebase.loader.module#UiAuthFirebaseLoaderModule',
        demoImagePreview: './features/demoImagePreview.loader.module#DemoImagePreviewLoaderModule'
      }),
      rootRouteConfig
    )
  ]
})
export class AppRoutingModule {}
