import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import {
  NavigationBaseComponent,
  ROUTE_ENTITIES
} from "@applications/features";

@Component({
  selector: "app-navigation",
  templateUrl: "navigation.component.html",
  styleUrls: ["navigation.component.scss"]
})
export class NavigationComponent extends NavigationBaseComponent
  implements OnInit {
  constructor(private router: Router) {
    super();
  }

  routeItems = ROUTE_ENTITIES;

  ngOnInit() {}

  navigate(routeItem) {
    this.router.navigate([`/${routeItem.url}`]);
  }
}
