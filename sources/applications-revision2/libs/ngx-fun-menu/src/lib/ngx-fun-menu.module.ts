import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MenuContainerComponent, MenuWingComponent } from "./components";
import { MenuOptionsService, MenuSpinService } from "./services";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MenuWingComponent, MenuContainerComponent],
  providers: [MenuOptionsService, MenuSpinService],
  exports: [MenuContainerComponent]
})
export class NgxFunMenuModule {}
