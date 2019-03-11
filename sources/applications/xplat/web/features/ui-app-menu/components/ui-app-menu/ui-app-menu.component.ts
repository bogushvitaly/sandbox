import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { ROUTE_ENTITIES, UiAppMenuBaseComponent } from '@application/features';

@Component({
  selector: 'app-ui-app-menu',
  templateUrl: 'ui-app-menu.component.html'
})
export class UiAppMenuComponent extends UiAppMenuBaseComponent implements OnInit {
  constructor(public router: Router) {
    super();
  }

  routeItems = ROUTE_ENTITIES;

  ngOnInit() {}

  navigate(routeItem) {
    this.router.navigate([`/${routeItem.url}`]);
  }
}
