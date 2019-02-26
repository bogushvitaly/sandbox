import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UiRenderReglModule } from "../ui-render-regl";
import { UIModule } from "../ui/ui.module";
import { DEMOREGL_COMPONENTS, DemoReglComponent } from "./components";

import {
  DemoReglModule as SharedDemoReglModule,
  routeDemoRegl
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoReglModule,
    UIModule,
    UiRenderReglModule,
    SharedModule,
    RouterModule.forChild(routeDemoRegl(DemoReglComponent))
  ],
  declarations: [...DEMOREGL_COMPONENTS],
  exports: [...DEMOREGL_COMPONENTS]
})
export class DemoReglModule {}
