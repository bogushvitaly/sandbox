import { NgModule } from "@angular/core";

import { UIModule } from "../ui/ui.module";
import { UIRENDERREGL_COMPONENTS } from "./components";
import { UIRENDERREGL_PROVIDERS } from "./services";

import { UiRenderReglModule as SharedUiRenderReglModule } from "@applications/features";

@NgModule({
  imports: [SharedUiRenderReglModule, UIModule],
  providers: [...UIRENDERREGL_PROVIDERS],
  declarations: [...UIRENDERREGL_COMPONENTS],
  exports: [...UIRENDERREGL_COMPONENTS]
})
export class UiRenderReglModule {}
