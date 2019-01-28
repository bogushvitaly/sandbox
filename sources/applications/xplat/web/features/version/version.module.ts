import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { VERSION_COMPONENTS, VersionComponent } from './components';

import {
  routeVersion,
  VERSION_PROVIDERS,
  VersionModule as SharedVersionModule
} from '@application/features';

@NgModule({
  imports: [SharedVersionModule, UIModule, RouterModule.forChild(routeVersion(VersionComponent))],
  declarations: [...VERSION_COMPONENTS],
  exports: [...VERSION_COMPONENTS],
  providers: [...VERSION_PROVIDERS]
})
export class VersionModule {}
