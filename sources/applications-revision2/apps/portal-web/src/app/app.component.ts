import { Component } from "@angular/core";

import { AppBaseComponent } from "@applications/web";

@Component({
  selector: "app-root",
  template: "<router-outlet></router-outlet>"
})
export class AppComponent extends AppBaseComponent {}
