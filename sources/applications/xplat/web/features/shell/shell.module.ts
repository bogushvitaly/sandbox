import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { SHELL_COMPONENTS, ShellComponent } from './components';

import { routeShell, ShellModule as SharedShellModule } from '@application/features';

@NgModule({
  imports: [SharedShellModule, UIModule, RouterModule.forChild(routeShell(ShellComponent))],
  declarations: [...SHELL_COMPONENTS],
  exports: [...SHELL_COMPONENTS]
})
export class ShellModule {}
