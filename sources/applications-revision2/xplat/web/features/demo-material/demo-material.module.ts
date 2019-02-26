import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UiMaterialModule } from "../ui-material";
import { UIModule } from "../ui/ui.module";
import {
  DEMOMATERIAL_COMPONENTS,
  DemoMaterialAddressComponent,
  DemoMaterialComponent,
  DemoMaterialDashboardComponent,
  DemoMaterialDragAndDropComponent,
  DemoMaterialTableComponent,
  DemoMaterialTreeComponent
} from "./components";

import {
  DemoMaterialModule as SharedDemoMaterialModule,
  routeDemoMaterial
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoMaterialModule,
    UIModule,
    UiMaterialModule,
    SharedModule,
    RouterModule.forChild(
      routeDemoMaterial(
        DemoMaterialComponent,
        DemoMaterialAddressComponent,
        DemoMaterialDashboardComponent,
        DemoMaterialDragAndDropComponent,
        DemoMaterialTableComponent,
        DemoMaterialTreeComponent
      )
    )
  ],
  declarations: [...DEMOMATERIAL_COMPONENTS],
  exports: [...DEMOMATERIAL_COMPONENTS]
})
export class DemoMaterialModule {}
