import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { DEMOVERSION_COMPONENTS } from './components';
import { DemoVersionComponent } from './components/demo-version/demo-version.component';
import { DEMOVERSION_PROVIDERS } from './services';

import {
  DemoVersionModule as SharedDemoVersionModule,
  routeDemoVersion
} from '@application/features';

@NgModule({
  imports: [SharedDemoVersionModule, UIModule, RouterModule.forChild(routeDemoVersion(DemoVersionComponent))],
  declarations: [...DEMOVERSION_COMPONENTS],
  providers: [...DEMOVERSION_PROVIDERS],
  exports: [...DEMOVERSION_COMPONENTS]
})
export class DemoVersionModule {}
