import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UIModule } from "../ui/ui.module";
import {
  DEMOASSEMBLYSCRIPT_COMPONENTS,
  DemoAssemblyscriptComponent
} from "./components";

import {
  DemoAssemblyscriptModule as SharedDemoAssemblyscriptModule,
  routeDemoAssemblyscript
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoAssemblyscriptModule,
    UIModule,
    SharedModule,
    RouterModule.forChild(routeDemoAssemblyscript(DemoAssemblyscriptComponent))
  ],
  declarations: [...DEMOASSEMBLYSCRIPT_COMPONENTS],
  exports: [...DEMOASSEMBLYSCRIPT_COMPONENTS]
})
export class DemoAssemblyscriptModule {}
