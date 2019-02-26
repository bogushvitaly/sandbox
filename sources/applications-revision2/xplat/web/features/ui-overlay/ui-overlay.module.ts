import { NgModule } from "@angular/core";

import { SharedModule } from "../shared";
import { UiMaterialModule } from "../ui-material";
import { UIModule } from "../ui/ui.module";
import { UIOVERLAY_COMPONENTS } from "./components";
import { UiOverlayComponent } from "./components/ui-overlay/ui-overlay.component";
import { UIOVERLAY_PROVIDERS } from "./services";

import { UiOverlayModule as SharedUiOverlayModule } from "@applications/features";

@NgModule({
  imports: [SharedUiOverlayModule, UIModule, UiMaterialModule, SharedModule],
  declarations: [...UIOVERLAY_COMPONENTS],
  providers: [...UIOVERLAY_PROVIDERS],
  exports: [...UIOVERLAY_COMPONENTS],
  entryComponents: [UiOverlayComponent]
})
export class UiOverlayModule {}
