import { Component } from '@angular/core';
// libs
import { LogService } from '@frontend/core';
import { ItemsBaseComponent, ItemService } from '@frontend/features';
import { AppService } from '@frontend/nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent extends ItemsBaseComponent {
  constructor(log: LogService, itemService: ItemService, public appService: AppService) {
    super(log, itemService);
  }
}
