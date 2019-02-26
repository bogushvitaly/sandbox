// from workaround:
// https://github.com/angular/angular-cli/issues/6373#issuecomment-319116889
import { NgModule } from "@angular/core";

// xplat
import { DemoItemsModule } from "@applications/web";

@NgModule({
  imports: [DemoItemsModule]
})
export class DemoItemsLoaderModule {}
