// angular
import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule } from "@angular/router";

// app
import { SharedModule } from "./features/shared/shared.module";

import { LoadingStrategyService } from "@applications/core";
// libs
import { routeBase } from "@applications/features";
import {
  NavigationComponent,
  ShellComponent,
  UiLayoutModule
} from "@applications/web";

const rootRouteConfig: ExtraOptions = {
  useHash: false,
  initialNavigation: true,
  preloadingStrategy: LoadingStrategyService
};

@NgModule({
  imports: [
    SharedModule,
    UiLayoutModule,
    RouterModule.forRoot(
      routeBase(ShellComponent, NavigationComponent, {
        demoAnimations:
          "./features/loaders/demoAnimationsLoader.module#DemoAnimationsLoaderModule",
        demoAssemblyscript:
          "./features/loaders/demoAssemblyscriptLoader.module#DemoAssemblyscriptLoaderModule",
        demoBabylon:
          "./features/loaders/demoBabylonLoader.module#DemoBabylonLoaderModule",
        demoBmTools:
          "./features/loaders/demoBmToolsLoader.module#DemoBmToolsLoaderModule",
        demoCovalentUi:
          "./features/loaders/demoCovalentUiLoader.module#DemoCovalentUiLoaderModule",
        demoCssLayouts:
          "./features/loaders/demoCssLayoutsLoader.module#DemoCssLayoutsLoaderModule",
        demoForceGraph:
          "./features/loaders/demoForceGraphLoader.module#DemoForceGraphLoaderModule",
        demoGoogleMaps:
          "./features/loaders/demoGoogleMapsLoader.module#DemoGoogleMapsLoaderModule",
        demoHeroes:
          "./features/loaders/demoHeroesLoader.module#DemoHeroesLoaderModule",
        demoImagePreview:
          "./features/loaders/demoImagePreviewLoader.module#DemoImagePreviewLoaderModule",
        demoKnowledgeBase:
          "./features/loaders/demoKnowledgeBaseLoader.module#DemoKnowledgeBaseLoaderModule",
        demoMaterial:
          "./features/loaders/demoMaterialLoader.module#DemoMaterialLoaderModule",
        demoOpencv:
          "./features/loaders/demoOpencvLoader.module#DemoOpencvLoaderModule",
        demoRegl:
          "./features/loaders/demoReglLoader.module#DemoReglLoaderModule",
        demoTensorflow:
          "./features/loaders/demoTensorflowLoader.module#DemoTensorflowLoaderModule",
        demoUniversal:
          "./features/loaders/demoUniversalLoader.module#DemoUniversalLoaderModule",
        demoVersion:
          "./features/loaders/demoVersionLoader.module#DemoVersionLoaderModule",
        demoWebassembly:
          "./features/loaders/demoWebassemblyLoader.module#DemoWebassemblyLoaderModule",
        uiAuthFirebase:
          "./features/loaders/uiAuthFirebaseLoader.module#UiAuthFirebaseLoaderModule",
        demoItems:
          "./features/loaders/demoItemsLoader.module#DemoItemsLoaderModule",
        viewWelcome:
          "./features/loaders/viewWelcomeLoader.module#ViewWelcomeLoaderModule"
      }),
      rootRouteConfig
    )
  ]
})
export class AppRoutingModule {}
