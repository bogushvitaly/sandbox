import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PIPES } from "./pipes";

const MODULES = [FlexLayoutModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [...MODULES],
  declarations: [...PIPES],
  exports: [...MODULES, ...PIPES]
})
export class UISharedModule {}
