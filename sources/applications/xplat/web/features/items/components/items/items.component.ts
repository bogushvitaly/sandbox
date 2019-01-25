import { Component, OnInit } from '@angular/core';
// libs
import { LogService } from '@application/core';
import { ItemsBaseComponent, ItemService } from '@application/features';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent extends ItemsBaseComponent {
  constructor(log: LogService, itemService: ItemService) {
    super(log, itemService);
  }
}
