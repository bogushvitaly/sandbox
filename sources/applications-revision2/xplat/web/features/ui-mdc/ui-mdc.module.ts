import { NgModule } from "@angular/core";
import { UiMdcModule as SharedUiMdcModule } from "@applications/features";
import { UIModule } from "../ui/ui.module";

@NgModule({
  imports: [SharedUiMdcModule, UIModule]
})
export class UiMdcModule {}
