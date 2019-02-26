import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CovalentDialogsModule } from "@covalent/core/dialogs";
import { CovalentLoadingModule } from "@covalent/core/loading";
import { CovalentMediaModule } from "@covalent/core/media";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { SharedModule } from "../shared";
import { UiCovalentModule } from "../ui-covalent";
import { UiMaterialModule } from "../ui-material";
import { UIModule } from "../ui/ui.module";
import {
  DemoCovalentContactsComponent,
  DemoCovalentDashboardComponent,
  DemoCovalentEmailComponent,
  DemoCovalentLangingPageComponent,
  DemoCovalentLoginComponent,
  DemoCovalentSlackChatComponent,
  DemoCovalentStarterTemplateComponent,
  DEMOCOVALENTUI_COMPONENTS,
  DemoCovalentUiComponent,
  DemoCovalentUiUsersComponent,
  DemoCovalentUiUsersFormComponent
} from "./components";

import {
  DemoCovalentUiModule as SharedDemoCovalentUiModule,
  routeDemoCovalentUi
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoCovalentUiModule,
    UIModule,
    SharedModule,
    UiMaterialModule,
    UiCovalentModule,
    NgxChartsModule,
    CovalentLoadingModule,
    CovalentDialogsModule,
    CovalentMediaModule,
    RouterModule.forChild(
      routeDemoCovalentUi(
        DemoCovalentUiComponent,
        DemoCovalentLoginComponent,
        DemoCovalentContactsComponent,
        DemoCovalentDashboardComponent,
        DemoCovalentUiUsersComponent,
        DemoCovalentUiUsersFormComponent,
        DemoCovalentEmailComponent,
        DemoCovalentLangingPageComponent,
        DemoCovalentSlackChatComponent,
        DemoCovalentStarterTemplateComponent
      )
    )
  ],
  declarations: [...DEMOCOVALENTUI_COMPONENTS],
  exports: [...DEMOCOVALENTUI_COMPONENTS]
})
export class DemoCovalentUiModule {}
