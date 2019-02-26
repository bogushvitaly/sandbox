import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { UIModule } from "../ui";
import { UiMaterialModule } from "../ui-material";
import {
  DEMOCSSLAYOUTS_COMPONENTS,
  DemoCssLayoutsComponent
} from "./components";

import {
  DemoCssLayoutsModule as SharedDemoCssLayoutsModule,
  routeDemoCssLayoutsModule,
  SharedModule
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoCssLayoutsModule,
    UIModule,
    UiMaterialModule,
    SharedModule,
    RouterModule.forChild(routeDemoCssLayoutsModule(DemoCssLayoutsComponent))
  ],
  declarations: [...DEMOCSSLAYOUTS_COMPONENTS],
  exports: [...DEMOCSSLAYOUTS_COMPONENTS]
})
export class DemoCssLayoutsModule {}
