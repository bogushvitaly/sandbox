import { NgModule } from "@angular/core";
import { UiMdbootstrapModule as SharedUiMdbootstrapModule } from "@applications/features";
import { UIModule } from "../ui/ui.module";

@NgModule({
  imports: [SharedUiMdbootstrapModule, UIModule]
})
export class UiMdbootstrapModule {}
