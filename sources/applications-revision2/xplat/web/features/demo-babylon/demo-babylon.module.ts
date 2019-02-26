import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { UiRenderBabylonModule } from "../ui-render-babylon";
import { UIModule } from "../ui/ui.module";
import { DEMOBABYLON_COMPONENTS, DemoBabylonComponent } from "./components";

import {
  DemoBabylonModule as SharedDemoBabylonModule,
  routeDemoBabylon
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoBabylonModule,
    UIModule,
    SharedModule,
    UiRenderBabylonModule,
    RouterModule.forChild(routeDemoBabylon(DemoBabylonComponent))
  ],
  declarations: [...DEMOBABYLON_COMPONENTS],
  exports: [...DEMOBABYLON_COMPONENTS]
})
export class DemoBabylonModule {}
