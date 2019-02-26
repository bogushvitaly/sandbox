import { CookieBackendService, CookieService } from "ngx-cookie";

import { NgModule } from "@angular/core";
import { FlexLayoutServerModule } from "@angular/flex-layout/server";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {
  ServerModule,
  ServerTransferStateModule
} from "@angular/platform-server";
import { ModuleMapLoaderModule } from "@nguniversal/module-map-ngfactory-loader";

import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { InlineStyleComponent } from "./inline-style/inline-style.component";
import { InlineStyleModule } from "./inline-style/inline-style.module";

import { SystemInternationalizationServerModule } from "@applications/core";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    FlexLayoutServerModule,
    ServerTransferStateModule,
    InlineStyleModule,
    SystemInternationalizationServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent, InlineStyleComponent],
  providers: [{ provide: CookieService, useClass: CookieBackendService }]
})
export class AppServerModule {}
