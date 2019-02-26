import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component } from "@angular/core";

import { DemoMaterialNavigationBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-material-navigation",
  templateUrl: "demo-material-navigation.component.html",
  styleUrls: ["demo-material-navigation.component.scss"]
})
export class DemoMaterialNavigationComponent extends DemoMaterialNavigationBaseComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {
    super();
  }
}
