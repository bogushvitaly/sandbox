import { Component } from "@angular/core";

import { ViewWelcomeBaseComponent } from "@applications/features";
import { HttpService } from "@applications/core";

@Component({
  selector: "app-view-welcome",
  templateUrl: "view-welcome.component.html"
})
export class ViewWelcomeComponent extends ViewWelcomeBaseComponent {
  constructor(apiService: HttpService) {
    super(apiService);
  }
}
