import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UIModule } from "../ui/ui.module";
import {
  DEMOANIMATIONS_COMPONENTS,
  DemoAnimationsComponent
} from "./components";

import {
  DemoAnimationsModule as SharedDemoAnimationsModule,
  routeDemoAnimations
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoAnimationsModule,
    UIModule,
    SharedModule,
    RouterModule.forChild(routeDemoAnimations(DemoAnimationsComponent))
  ],
  declarations: [...DEMOANIMATIONS_COMPONENTS],
  exports: [...DEMOANIMATIONS_COMPONENTS]
})
export class DemoAnimationsModule {}
