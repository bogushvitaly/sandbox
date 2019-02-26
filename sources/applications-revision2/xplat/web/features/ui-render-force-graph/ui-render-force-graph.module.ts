import { NgModule } from "@angular/core";

import { UIModule } from "../ui/ui.module";
import { UIRENDERFORCEGRAPH_COMPONENTS } from "./components";
import { UIRENDERFORCEGRAPH_PROVIDERS } from "./services";

import { UiRenderForceGraphModule as SharedUiRenderForceGraphModule } from "@applications/features";

@NgModule({
  imports: [SharedUiRenderForceGraphModule, UIModule],
  providers: [...UIRENDERFORCEGRAPH_PROVIDERS],
  declarations: [...UIRENDERFORCEGRAPH_COMPONENTS],
  exports: [...UIRENDERFORCEGRAPH_COMPONENTS]
})
export class UiRenderForceGraphModule {}
