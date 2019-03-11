import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { UIAPPMENU_COMPONENTS, UiAppMenuComponent } from './components';

import { routeUiAppMenu, UiAppMenuModule as SharedUiAppMenuModule } from '@application/features';

@NgModule({
  imports: [SharedUiAppMenuModule, UIModule, RouterModule],

  declarations: [...UIAPPMENU_COMPONENTS],
  exports: [...UIAPPMENU_COMPONENTS]
})
export class UiAppMenuModule {}
