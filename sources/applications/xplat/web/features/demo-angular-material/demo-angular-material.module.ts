import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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

import { DemoAngularMaterialModule as SharedDemoAngularMaterialModule } from '@application/features';

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
