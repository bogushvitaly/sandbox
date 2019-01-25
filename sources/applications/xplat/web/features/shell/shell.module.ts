import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routeShell, ShellModule as SharedShellModule } from '@application/features';

import { UIModule } from '../ui/ui.module';
import { SHELL_COMPONENTS, ShellComponent } from './components';

@NgModule({
  imports: [SharedShellModule, UIModule, NgxAuthFirebaseUIModule, RouterModule.forChild(routeShell(ShellComponent))],
  declarations: [...SHELL_COMPONENTS],
  exports: [...SHELL_COMPONENTS]
})
export class ShellModule {}
