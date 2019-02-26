import { NgModule } from "@angular/core";

import { SharedModule } from "../shared";
import { UIModule } from "../ui";
import { UiMaterialModule } from "../ui-material";
import { UILAYOUT_COMPONENTS } from "./components";

import { UiLayoutModule as SharedUiLayoutModule } from "@applications/features";
import { NgxFunMenuModule } from "@applications/ngx-fun-menu";

@NgModule({
  imports: [
    SharedUiLayoutModule,
    UIModule,
    UiMaterialModule,
    SharedModule,
    NgxFunMenuModule
  ],
  declarations: [...UILAYOUT_COMPONENTS],
  exports: [...UILAYOUT_COMPONENTS]
})
export class UiLayoutModule {}
