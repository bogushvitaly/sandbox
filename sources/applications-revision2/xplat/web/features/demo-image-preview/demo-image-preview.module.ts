import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UiMaterialModule } from "../ui-material";
import { UIModule } from "../ui/ui.module";
import {
  DEMOIMAGEPREVIEW_COMPONENTS,
  DemoImagePreviewComponent
} from "./components";

import {
  DemoImagePreviewModule as SharedDemoImagePreviewModule,
  routeDemoImagePreview
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoImagePreviewModule,
    UIModule,
    UiMaterialModule,
    SharedModule,
    RouterModule.forChild(routeDemoImagePreview(DemoImagePreviewComponent))
  ],
  declarations: [...DEMOIMAGEPREVIEW_COMPONENTS],
  exports: [...DEMOIMAGEPREVIEW_COMPONENTS]
})
export class DemoImagePreviewModule {}
