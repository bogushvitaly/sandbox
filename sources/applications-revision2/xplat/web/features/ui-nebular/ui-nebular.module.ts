import { NgModule } from "@angular/core";
import { UiNebularModule as SharedUiNebularModule } from "@applications/features";
import { UIModule } from "../ui/ui.module";

@NgModule({
  imports: [SharedUiNebularModule, UIModule]
})
export class UiNebularModule {}
