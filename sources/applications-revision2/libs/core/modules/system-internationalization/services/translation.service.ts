import { Observable, of } from "rxjs";

import { DOCUMENT, isPlatformBrowser, isPlatformServer } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { REQUEST } from "@nguniversal/express-engine/tokens";
import { MetaService } from "@ngx-meta/core";
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateService as NGXTranslateService
} from "@ngx-translate/core";

import { UniversalStorageService } from "../../../services/universal-storage.service";
import { Lang } from "../models";

const LANG_LIST: Lang[] = [
  { code: "pl", name: "Polish", culture: "pl-PL", isRTL: false },
  { code: "en", name: "English", culture: "en-US", isRTL: false }
];
const LANG_DEFAULT: Lang = LANG_LIST[0];
const STORAGE_LANG_NAME = "langCode";

@Injectable()
export class TranslationService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: any,
    @Inject(REQUEST) private request: any,
    @Inject(NGXTranslateService) private translate: NGXTranslateService,
    @Inject(MetaService) private meta: MetaService,
    @Inject(UniversalStorageService) private appStorage: Storage
  ) {}

  initLanguage(): Promise<any> {
    return new Promise((resolve: Function) => {
      this.translate.addLangs(LANG_LIST.map((lang: Lang) => lang.code));
      const language: Lang = this.getLanguage();
      console.log(language);
      if (language) {
        this.translate.setDefaultLang(language.code);
      } else {
        this.translate.setDefaultLang(LANG_DEFAULT.code);
      }
      this.setLanguage(language);
      resolve();
    });
  }

  private getLanguage(): Lang {
    // fix init cookie
    this.request.cookie = this.request.headers["cookie"];

    let language: Lang = this.getFindLang(
      this.appStorage.getItem(STORAGE_LANG_NAME)
    );
    if (language) {
      return language;
    }
    if (isPlatformBrowser(this.platformId)) {
      language = this.getFindLang(this.translate.getBrowserLang());
    }
    if (isPlatformServer(this.platformId)) {
      try {
        const reqLangList: string[] = this.request.headers["accept-language"]
          .split(";")[0]
          .split(",");
        language = LANG_LIST.find(
          (lang: Lang) =>
            reqLangList.indexOf(lang.code) !== -1 ||
            reqLangList.indexOf(lang.culture) !== -1
        );
      } catch (err) {
        language = LANG_DEFAULT;
      }
    }
    language = language || LANG_DEFAULT;
    this.appStorage.setItem(STORAGE_LANG_NAME, language.code);
    return language;
  }

  private getFindLang(code: string): Lang | null {
    return code ? LANG_LIST.find((lang: Lang) => lang.code === code) : null;
  }

  private setLanguage(lang: Lang): void {
    this.translate.use(lang.code).subscribe(() => {
      this.meta.setTag("og:locale", lang.culture);
      this.document.documentElement.lang = lang.code;
    });
  }

  changeLang(code: string): void {
    const lang: Lang = this.getFindLang(code);
    if (!lang || lang.code === this.translate.currentLang) {
      return;
    }
    this.appStorage.setItem(STORAGE_LANG_NAME, lang.code);
    this.setLanguage(lang);
  }

  getLangList(): Observable<Lang[]> {
    return of(LANG_LIST);
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}

export class CommonMissingTranslationHandler
  implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    if (
      params.key.match(/\w+\.\w+/) &&
      params.translateService.translations["ru"] &&
      !params.translateService.translations["ru"][params.key]
    ) {
      console.warn(`Missing translation for "${params.key}"`);
    }
    return params.key;
  }
}
