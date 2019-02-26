import { NgModule, Optional, SkipSelf } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgtUniversalModule } from "@ng-toolkit/universal";

// libs
import { CoreModule, PlatformWindowToken } from "@applications/core";
import { throwIfAlreadyLoaded } from "@applications/utils";

// factories
export function winFactory() {
  return window;
}

@NgModule({
  imports: [
    BrowserModule,
    NgtUniversalModule,
    CoreModule.forRoot([
      {
        provide: PlatformWindowToken,
        useFactory: winFactory
      }
    ])
  ]
})
export class AppCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AppCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, "AppCoreModule");
  }
}
