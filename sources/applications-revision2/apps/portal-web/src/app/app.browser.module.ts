import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserTransferStateModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { REQUEST } from "@nguniversal/express-engine/tokens";

import { environment } from "../environments/browser/environment";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { InlineStyleComponent } from "./inline-style/inline-style.component";
import { InlineStyleModule } from "./inline-style/inline-style.module";

import { SystemInternationalizationBrowserModule } from "@applications/core";

// the Request object only lives on the server
export function getRequest(): any {
  return { headers: { cookie: document.cookie } };
}

const flexConfig = {
  addFlexToParent: true
};

@NgModule({
  imports: [
    AppModule,
    FlexLayoutModule.withConfig(flexConfig),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    InlineStyleModule,
    SystemInternationalizationBrowserModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  bootstrap: [AppComponent, InlineStyleComponent],
  providers: [
    {
      // The server provides these in main.server
      provide: REQUEST,
      useFactory: getRequest
    },
    { provide: "ORIGIN_URL", useValue: location.origin }
  ],
  declarations: []
})
export class AppBrowserModule {}
