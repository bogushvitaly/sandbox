import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SYSTEMINPUTKEYBOARD_PROVIDERS } from "./services";

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  providers: [...SYSTEMINPUTKEYBOARD_PROVIDERS]
})
export class SystemInputKeyboardModule {}
