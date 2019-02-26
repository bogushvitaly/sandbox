import { CommonModule } from "@angular/common";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

import {
  SYSTEMINTERNATIONALIZATION_PROVIDERS,
  TranslationService
} from "./services";

export function initLanguage(translateService: TranslationService): Function {
  return (): Promise<any> => translateService.initLanguage();
}

@NgModule({
  imports: [CommonModule, TranslateModule],
  providers: [
    ...SYSTEMINTERNATIONALIZATION_PROVIDERS,
    {
      provide: APP_INITIALIZER,
      useFactory: initLanguage,
      multi: true,
      deps: [TranslationService]
    }
  ]
})
export class SystemInternationalizationModule {}
