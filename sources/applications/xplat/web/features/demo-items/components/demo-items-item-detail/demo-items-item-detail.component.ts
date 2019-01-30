import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LogService } from '@application/core';
import { DemoItemsItemDetailBaseComponent, DemoItemsService } from '@application/features';

@Component({
  selector: 'app-demo-items-item-detail',
  templateUrl: 'demo-items-item-detail.component.html'
})
export class DemoItemsItemDetailComponent extends DemoItemsItemDetailBaseComponent {
  constructor(log: LogService, itemService: DemoItemsService, route: ActivatedRoute) {
    super(log, itemService, route);
  }
}
