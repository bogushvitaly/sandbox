import { Observable } from "rxjs";

import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Emittable, Emitter } from "@ngxs-labs/emitter";
import { Select } from "@ngxs/store";

import { I18nState, I18nStateModel, Lang } from "@applications/core";
import { ToolbarBaseComponent } from "@applications/features";

const GIT_HUB_LINK = "https://github.com/bohushvitali/sandbox";

@Component({
  selector: "app-toolbar",
  templateUrl: "toolbar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent extends ToolbarBaseComponent implements OnInit {
  gitHubLint: string = GIT_HUB_LINK;
  langList: Lang[];
  currentLang: string;

  @Select(I18nState)
  i18n$: Observable<I18nStateModel>;

  @Emitter(I18nState.changeLanguage)
  changeLanguage: Emittable<string>;

  constructor() {
    super();
  }

  changeLang(code) {
    console.log(code);
    this.changeLanguage.emit(code);
  }

  ngOnInit() {
    this.i18n$.subscribe(state => {
      this.langList = state.langList;
      this.currentLang = state.currentLang;
    });
  }
}
