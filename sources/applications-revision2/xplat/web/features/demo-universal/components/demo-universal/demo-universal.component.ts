import { ChangeDetectionStrategy, Component } from "@angular/core";

import { DemoUniversalBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-universal",
  templateUrl: "demo-universal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoUniversalComponent extends DemoUniversalBaseComponent {
  constructor() {
    super();
  }
}
