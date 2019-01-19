import { Component, OnInit } from '@angular/core';
// libs
import { LogService } from '@frontend/core';
import { ItemsBaseComponent, ItemService } from '@frontend/features';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent extends ItemsBaseComponent {
  constructor(log: LogService, itemService: ItemService) {
    super(log, itemService);
  }
}
