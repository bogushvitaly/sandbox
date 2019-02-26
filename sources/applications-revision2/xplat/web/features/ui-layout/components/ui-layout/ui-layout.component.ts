import { Component, OnInit } from "@angular/core";

import { UiLayoutBaseComponent } from "@applications/features";

@Component({
  selector: "app-ui-layout",
  templateUrl: "ui-layout.component.html"
})
export class UiLayoutComponent extends UiLayoutBaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
