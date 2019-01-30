import { Component, OnInit } from '@angular/core';

import { LogService } from '@application/core';
import { DemoItemsBaseComponent, DemoItemsService } from '@application/features';

@Component({
  selector: 'app-demo-items',
  templateUrl: 'demo-items.component.html'
})
export class DemoItemsComponent extends DemoItemsBaseComponent {
  constructor(log: LogService, itemService: DemoItemsService) {
    super(log, itemService);
  }
}
