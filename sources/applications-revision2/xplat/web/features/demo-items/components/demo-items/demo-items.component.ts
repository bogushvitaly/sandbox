import { Component, OnInit } from "@angular/core";

import { LogService } from "@applications/core";
import {
  DemoItemsBaseComponent,
  DemoItemsService
} from "@applications/features";

@Component({
  selector: "app-demo-items",
  templateUrl: "demo-items.component.html"
})
export class DemoItemsComponent extends DemoItemsBaseComponent {
  constructor(log: LogService, itemService: DemoItemsService) {
    super(log, itemService);
  }
}
