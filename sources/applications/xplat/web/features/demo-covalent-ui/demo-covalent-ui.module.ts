import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import {
  DemoCovalentContactsComponent,
  DemoCovalentDashboardComponent,
  DemoCovalentEmailComponent,
  DemoCovalentLangingPageComponent,
  DemoCovalentSlackChatComponent,
  DemoCovalentStarterTemplateComponent,
  DEMOCOVALENTUI_COMPONENTS,
  DemoCovalentUiComponent
} from './components';

import {
  DemoCovalentUiModule as SharedDemoCovalentUiModule,
  routeDemoCovalentUi
} from '@application/features';

@NgModule({
  imports: [
    SharedDemoCovalentUiModule,
    UIModule,
    RouterModule.forChild(
      routeDemoCovalentUi(
        DemoCovalentUiComponent,
        DemoCovalentContactsComponent,
        DemoCovalentDashboardComponent,
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
