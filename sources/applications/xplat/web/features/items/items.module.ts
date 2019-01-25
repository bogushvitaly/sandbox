import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// libs
import { routeItems } from '@application/features';

import { UIModule } from '../ui/ui.module';
// app
import { ITEM_COMPONENTS, ItemDetailComponent, ItemsComponent } from './components';

@NgModule({
  imports: [UIModule, RouterModule.forChild(routeItems(ItemsComponent, ItemDetailComponent))],
  declarations: [...ITEM_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ItemsModule {}
