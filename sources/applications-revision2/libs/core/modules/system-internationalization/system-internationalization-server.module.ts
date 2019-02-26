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
  TranslationLoaderServerService
} from "./services";

export function translateFactory(
  transferState: TransferState
): TranslationLoaderServerService {
  return new TranslationLoaderServerService(
    "./dist/apps/portal-web/assets/i18n",
    ".json",
    transferState
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
        useFactory: translateFactory,
        deps: [TransferState]
      }
    })
  ],
  providers: [...SYSTEMINTERNATIONALIZATION_PROVIDERS]
})
export class SystemInternationalizationServerModule {}
