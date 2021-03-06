import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import {
  makeStateKey,
  StateKey,
  TransferState
} from "@angular/platform-browser";
import { TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export class TranslationLoaderBrowserService implements TranslateLoader {
  constructor(
    private prefix: string = "i18n",
    private suffix: string = ".json",
    private transferState: TransferState,
    private http: HttpClient
  ) {}

  getTranslation(lang: string): Observable<any> {
    const key: StateKey<number> = makeStateKey<number>(
      `transfer-translate-${lang}`
    );
    const data: any = this.transferState.get(key, null);
    if (data) {
      return new Observable(observer => {
        observer.next(data);
        observer.complete();
      });
    } else {
      return new TranslateHttpLoader(
        this.http,
        this.prefix,
        this.suffix
      ).getTranslation(lang);
    }
  }
}
