import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UiLayoutModule } from "../ui-layout";
import { UiMaterialModule } from "../ui-material";
import { VIEWWELCOME_COMPONENTS, ViewWelcomeComponent } from "./components";

import {
  routeViewWelcome,
  ViewWelcomeModule as SharedViewWelcomeModule
} from "@applications/features";
import { SystemApiRestModule } from "@applications/core";

@NgModule({
  imports: [
    SharedViewWelcomeModule,
    UiMaterialModule,
    UiLayoutModule,
    SharedModule,
    SystemApiRestModule,
    RouterModule.forChild(routeViewWelcome(ViewWelcomeComponent))
  ],
  declarations: [...VIEWWELCOME_COMPONENTS],
  exports: [...VIEWWELCOME_COMPONENTS]
})
export class ViewWelcomeModule {}
