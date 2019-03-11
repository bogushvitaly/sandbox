import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { DEMOGOOGLEMAPS_COMPONENTS, DemoGoogleMapsComponent } from './components';

import {
  DemoGoogleMapsModule as SharedDemoGoogleMapsModule,
  routeDemoGoogleMaps
} from '@application/features';

@NgModule({
  imports: [
    SharedDemoGoogleMapsModule, UIModule,
    RouterModule.forChild(routeDemoGoogleMaps(DemoGoogleMapsComponent))
  ],
  declarations: [
    ...DEMOGOOGLEMAPS_COMPONENTS
  ],
  exports: [
    ...DEMOGOOGLEMAPS_COMPONENTS
  ]
})
export class DemoGoogleMapsModule { }

