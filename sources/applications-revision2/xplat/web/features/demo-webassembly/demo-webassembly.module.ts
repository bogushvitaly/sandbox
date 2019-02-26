import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UIModule } from "../ui/ui.module";
import {
  DEMOWEBASSEMBLY_COMPONENTS,
  DemoWebassemblyComponent
} from "./components";

import {
  DemoWebassemblyModule as SharedDemoWebassemblyModule,
  routeDemoWebassembly
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoWebassemblyModule,
    UIModule,
    SharedModule,
    RouterModule.forChild(routeDemoWebassembly(DemoWebassemblyComponent))
  ],
  declarations: [...DEMOWEBASSEMBLY_COMPONENTS],
  exports: [...DEMOWEBASSEMBLY_COMPONENTS]
})
export class DemoWebassemblyModule {}
