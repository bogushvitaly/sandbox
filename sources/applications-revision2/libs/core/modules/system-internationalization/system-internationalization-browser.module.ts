import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TransferState } from "@angular/platform-browser";
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule
} from "@ngx-translate/core";

import {
  CommonMissingTranslationHandler,
  SYSTEMINTERNATIONALIZATION_PROVIDERS,
  TranslationLoaderBrowserService
} from "./services";

export function translateStaticLoader(
  http: HttpClient,
  transferState: TransferState
): TranslationLoaderBrowserService {
  return new TranslationLoaderBrowserService(
    "/assets/i18n/",
    ".json",
    transferState,
    http
  );
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CommonMissingTranslationHandler
      },
      loader: {
        provide: TranslateLoader,
        useFactory: translateStaticLoader,
        deps: [HttpClient, TransferState]
      }
    })
  ],
  providers: [...SYSTEMINTERNATIONALIZATION_PROVIDERS]
})
export class SystemInternationalizationBrowserModule {}
