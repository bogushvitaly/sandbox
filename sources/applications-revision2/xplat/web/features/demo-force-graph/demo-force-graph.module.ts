import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UiRenderForceGraphModule } from "../ui-render-force-graph";
import { UIModule } from "../ui/ui.module";
import {
  DEMOFORCEGRAPH_COMPONENTS,
  DemoForceGraphComponent
} from "./components";

import {
  DemoForceGraphModule as SharedDemoForceGraphModule,
  routeDemoForceGraph
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoForceGraphModule,
    UIModule,
    UiRenderForceGraphModule,
    SharedModule,
    RouterModule.forChild(routeDemoForceGraph(DemoForceGraphComponent))
  ],
  declarations: [...DEMOFORCEGRAPH_COMPONENTS],
  exports: [...DEMOFORCEGRAPH_COMPONENTS]
})
export class DemoForceGraphModule {}
