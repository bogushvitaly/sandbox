import { Component } from "@angular/core";

import { DemoOpencvBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-opencv",
  templateUrl: "demo-opencv.component.html"
})
export class DemoOpencvComponent extends DemoOpencvBaseComponent {
  constructor() {
    super();
  }
}
