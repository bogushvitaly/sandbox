import { ChangeDetectionStrategy, Component } from "@angular/core";

import { SidebarBaseComponent } from "@applications/features";

@Component({
  selector: "app-sidebar",
  templateUrl: "sidebar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent extends SidebarBaseComponent {
  constructor() {
    super();
  }
}
