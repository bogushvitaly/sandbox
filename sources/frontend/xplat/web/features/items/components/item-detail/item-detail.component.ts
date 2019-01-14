import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// libs
import { LogService } from '@frontend/core';
import { ItemService, ItemDetailBaseComponent } from '@frontend/features';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent extends ItemDetailBaseComponent {
  constructor(
    log: LogService,
    itemService: ItemService,
    route: ActivatedRoute
  ) {
    super(log, itemService, route);
  }
}
