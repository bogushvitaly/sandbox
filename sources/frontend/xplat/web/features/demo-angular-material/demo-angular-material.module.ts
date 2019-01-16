import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoAngularMaterialModule as SharedDemoAngularMaterialModule } from '@frontend/features';

import { UIModule } from '../ui/ui.module';
import {
  AddressComponent,
  DashboardComponent,
  DEMOANGULARMATERIAL_COMPONENTS,
  DemoAngularMaterialComponent,
  DragDropComponent,
  TableComponent,
  TreeComponent
} from './components';

@NgModule({
  imports: [
    SharedDemoAngularMaterialModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoAngularMaterialComponent,
        children: [
          {
            path: 'address',
            component: AddressComponent
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'drag-drop',
            component: DragDropComponent
          },
          {
            path: 'table',
            component: TableComponent
          },
          {
            path: 'tree',
            component: TreeComponent
          }
        ]
      }
    ])
  ],
  declarations: [...DEMOANGULARMATERIAL_COMPONENTS],
  exports: [...DEMOANGULARMATERIAL_COMPONENTS]
})
export class DemoAngularMaterialModule {}
