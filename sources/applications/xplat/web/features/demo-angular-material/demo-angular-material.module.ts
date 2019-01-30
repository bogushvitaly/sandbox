import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import {
  DEMOANGULARMATERIAL_COMPONENTS,
  DemoAngularMaterialComponent,
  DemoMaterialAddressComponent,
  DemoMaterialDashboardComponent,
  DemoMaterialDragAndDropComponent,
  DemoMaterialTableComponent,
  DemoMaterialTreeComponent
} from './components';

import {
  DemoAngularMaterialModule as SharedDemoAngularMaterialModule,
  routeDemoAngularMaterial
} from '@application/features';

@NgModule({
  imports: [
    SharedDemoAngularMaterialModule,
    UIModule,
    RouterModule.forChild(
      routeDemoAngularMaterial(
        DemoAngularMaterialComponent,
        DemoMaterialAddressComponent,
        DemoMaterialDashboardComponent,
        DemoMaterialDragAndDropComponent,
        DemoMaterialTableComponent,
        DemoMaterialTreeComponent
      )
    )
  ],
  declarations: [...DEMOANGULARMATERIAL_COMPONENTS],
  exports: [...DEMOANGULARMATERIAL_COMPONENTS]
})
export class DemoAngularMaterialModule {}
