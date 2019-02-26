// from workaround:
// https://github.com/angular/angular-cli/issues/6373#issuecomment-319116889
import { NgModule } from "@angular/core";

import { DemoUniversalModule } from "@applications/web";

// xplat

@NgModule({
  imports: [DemoUniversalModule]
})
export class DemoUniversalLoaderModule {}
