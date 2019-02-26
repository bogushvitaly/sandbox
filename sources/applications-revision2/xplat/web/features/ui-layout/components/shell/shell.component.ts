import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ShellBaseComponent } from "@applications/features";
import { fadeAnimation } from "@applications/utils";

@Component({
  selector: "app-shell",
  templateUrl: "shell.component.html",
  styleUrls: ["shell.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation]
})
export class ShellComponent extends ShellBaseComponent {
  constructor() {
    super();
  }
}
