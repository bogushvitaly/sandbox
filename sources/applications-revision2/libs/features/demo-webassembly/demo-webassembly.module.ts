import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { DEMOWEBASSEMBLY_PROVIDERS } from "./services";

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  providers: [...DEMOWEBASSEMBLY_PROVIDERS]
})
export class DemoWebassemblyModule {}
