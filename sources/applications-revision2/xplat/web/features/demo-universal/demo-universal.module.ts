import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { UIModule } from "../ui/ui.module";
import { DEMOUNIVERSAL_COMPONENTS, DemoUniversalComponent } from "./components";
import { MockBrowserModule } from "./modules/mock-browser/mock-browser.module";
import { MockServerModule } from "./modules/mock-server/mock-server.module";

import {
  DemoUniversalModule as SharedDemoUniversalModule,
  routeDemoUniversal,
  SharedModule
} from "@applications/features";
import { environment } from "@applications/portal-web/environment/environment";

@NgModule({
  imports: [
    SharedDemoUniversalModule,
    UIModule,
    SharedModule,
    environment.isServer ? MockServerModule : MockBrowserModule,
    RouterModule.forChild(routeDemoUniversal(DemoUniversalComponent))
  ],
  declarations: [...DEMOUNIVERSAL_COMPONENTS],
  exports: [...DEMOUNIVERSAL_COMPONENTS]
})
export class DemoUniversalModule {}
