import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiOverlayModule } from '../ui-overlay/ui-overlay.module';
import { UIModule } from '../ui/ui.module';
import { UIAPPSHELL_COMPONENTS } from './components';
import { UiAppShellComponent } from './components/ui-app-shell/ui-app-shell.component';

import { routeUiAppShell, UiAppShellModule as SharedUiAppShellModule } from '@application/features';

@NgModule({
  imports: [SharedUiAppShellModule, UIModule, UiOverlayModule, RouterModule],
  declarations: [...UIAPPSHELL_COMPONENTS],
  exports: [...UIAPPSHELL_COMPONENTS]
})
export class UiAppShellModule {}
