import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { LogService } from "@applications/core";
import {
  DemoItemsItemDetailBaseComponent,
  DemoItemsService
} from "@applications/features";

@Component({
  selector: "app-demo-items-item-detail",
  templateUrl: "demo-items-item-detail.component.html"
})
export class DemoItemsItemDetailComponent extends DemoItemsItemDetailBaseComponent {
  constructor(
    log: LogService,
    itemService: DemoItemsService,
    route: ActivatedRoute
  ) {
    super(log, itemService, route);
  }
}
