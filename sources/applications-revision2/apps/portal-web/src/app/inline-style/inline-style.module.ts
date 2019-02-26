import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { InlineStyleComponent } from "./inline-style.component";

@NgModule({
  imports: [CommonModule],
  declarations: [InlineStyleComponent],
  exports: [InlineStyleComponent]
})
export class InlineStyleModule {}
