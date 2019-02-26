import { Component } from "@angular/core";

import { DemoMaterialBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-material",
  templateUrl: "demo-material.component.html"
})
export class DemoMaterialComponent extends DemoMaterialBaseComponent {
  constructor() {
    super();
  }
}
