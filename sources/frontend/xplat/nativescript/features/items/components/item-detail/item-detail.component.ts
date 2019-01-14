import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// libs
import { LogService } from '@frontend/core';
import { ItemService, ItemDetailBaseComponent } from '@frontend/features';
import { AppService } from '@frontend/nativescript/core/services/app.service';

@Component({
  moduleId: module.id,
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent extends ItemDetailBaseComponent {
  constructor(
    log: LogService,
    itemService: ItemService,
    route: ActivatedRoute,
    public appService: AppService
  ) {
    super(log, itemService, route);
  }
}
