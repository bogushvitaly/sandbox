import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UIModule } from "../ui/ui.module";
import { DEMOBMTOOLS_COMPONENTS, DemoBmToolsComponent } from "./components";

import {
  DemoBmToolsModule as SharedDemoBmToolsModule,
  routeDemoBmTools
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoBmToolsModule,
    UIModule,
    SharedModule,
    RouterModule.forChild(routeDemoBmTools(DemoBmToolsComponent))
  ],
  declarations: [...DEMOBMTOOLS_COMPONENTS],
  exports: [...DEMOBMTOOLS_COMPONENTS]
})
export class DemoBmToolsModule {}
