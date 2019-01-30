import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UiOverlayService } from '../../../ui-overlay/services/ui-overlay.service';
import { UiOverlayRef } from '../../../ui-overlay/ui-overlay-ref';

import { ROUTE_ENTITIES, UiAppMenuBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-app-menu',
  templateUrl: 'ui-app-menu.component.html'
})
export class UiAppMenuComponent extends UiAppMenuBaseComponent implements OnInit {
  constructor(public router: Router) {
    super();
  }

  menuItems = ROUTE_ENTITIES;

  ngOnInit() {}

  navigate(menuItem) {
    this.router.navigate([`/${menuItem.url}`]);
  }
}
