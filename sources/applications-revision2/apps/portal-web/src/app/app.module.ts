import { CookieModule, CookieService } from "ngx-cookie";

import { NgModule } from "@angular/core";
// libs
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
// app
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./features/shared/shared.module";

export const APP_ID = "my-app";

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
    CookieModule.forRoot(),
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
