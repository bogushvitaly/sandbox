import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { HeaderBaseComponent } from "@applications/features";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends HeaderBaseComponent {
  @Input()
  title: string;
  @Input()
  description: string;

  constructor() {
    super();
  }
}
