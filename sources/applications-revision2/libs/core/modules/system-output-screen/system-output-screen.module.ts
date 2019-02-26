import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SYSTEMOUTPUTSCREEN_DIRECTIVES } from "./directives";
import { NgtUniversalModule } from "@ng-toolkit/universal";

@NgModule({
  imports: [NgtUniversalModule],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [...SYSTEMOUTPUTSCREEN_DIRECTIVES],
  exports: [...SYSTEMOUTPUTSCREEN_DIRECTIVES]
})
export class SystemOutputScreenModule {}
