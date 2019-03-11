import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import {
  DEMOITEMS_COMPONENTS,
  DemoItemsComponent,
  DemoItemsItemDetailComponent
} from './components';

import {
  DEMOITEMS_PROVIDERS,
  DemoItemsModule as SharedDemoItemsModule,
  routeDemoItems
} from '@application/features';

@NgModule({
  imports: [
    SharedDemoItemsModule,
    UIModule,
    RouterModule.forChild(routeDemoItems(DemoItemsComponent, DemoItemsItemDetailComponent))
  ],
  declarations: [...DEMOITEMS_COMPONENTS],
  providers: [...DEMOITEMS_PROVIDERS],
  exports: [...DEMOITEMS_COMPONENTS]
})
export class DemoItemsModule {}
