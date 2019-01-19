import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routeVersion, VERSION_PROVIDERS, VersionModule as SharedVersionModule } from '@frontend/features';

import { UIModule } from '../ui/ui.module';
import { VERSION_COMPONENTS, VersionComponent } from './components';

@NgModule({
  imports: [SharedVersionModule, UIModule, RouterModule.forChild(routeVersion(VersionComponent))],
  declarations: [...VERSION_COMPONENTS],
  exports: [...VERSION_COMPONENTS],
  providers: [...VERSION_PROVIDERS]
})
export class VersionModule {}
