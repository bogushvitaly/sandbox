import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

import { EmitterAction, Receiver } from "@ngxs-labs/emitter";
import { produce } from "@ngxs-labs/immer-adapter";
import { State, StateContext } from "@ngxs/store";

import { Lang } from "../models";
import { TranslationService } from "../services";

export interface I18nStateModel {
  langList: Lang[];
  currentLang: string;
}

@State<I18nStateModel>({
  name: "i18n",
  defaults: {
    langList: null,
    currentLang: "en"
  }
})
export class I18nState {
  static translationService: TranslationService;
  langList$: Observable<Lang[]>;
  currentLang: string;

  constructor(private translationService: TranslationService) {
    I18nState.translationService = this.translationService;
  }

  @Receiver({ type: "[Internationalization] Set Language List" })
  static setLanguagesList(ctx: StateContext<I18nStateModel>) {
    let langList: Lang[];

    I18nState.translationService
      .getLangList()
      .subscribe(val => (langList = val));

    produce(ctx, (draft: I18nStateModel) => {
      draft.langList = langList;
    });
  }

  @Receiver({ type: "[Internationalization] Set Current Language" })
  static changeLanguage(
    ctx: StateContext<I18nStateModel>,
    { payload }: EmitterAction<string>
  ) {
    of(true)
      .pipe(
        tap(() => I18nState.translationService.changeLang(payload)),
        tap(
          produce(ctx, (draft: I18nStateModel) => {
            draft.currentLang = payload;
          })
        )
      )
      .subscribe();
  }
}
