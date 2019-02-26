import { NgModule } from "@angular/core";

import { UIModule } from "../ui/ui.module";
import { BABYLON_COMPONENTS } from "./components";
import { UIRENDERBABYLON_PROVIDERS } from "./services";

import { UiRenderBabylonModule as SharedUiRenderBabylonModule } from "@applications/features";

@NgModule({
  imports: [SharedUiRenderBabylonModule, UIModule],
  providers: [...UIRENDERBABYLON_PROVIDERS],
  declarations: [...BABYLON_COMPONENTS],
  exports: [...BABYLON_COMPONENTS]
})
export class UiRenderBabylonModule {}
