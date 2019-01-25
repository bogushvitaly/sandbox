import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// libs
import { LogService } from '@application/core';
import { ItemDetailBaseComponent, ItemService } from '@application/features';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent extends ItemDetailBaseComponent {
  constructor(log: LogService, itemService: ItemService, route: ActivatedRoute) {
    super(log, itemService, route);
  }
}
