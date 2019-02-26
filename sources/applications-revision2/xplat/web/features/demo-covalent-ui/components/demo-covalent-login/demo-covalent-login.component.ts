import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TdLoadingService } from "@covalent/core/loading";

import { DemoCovalentLoginBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-covalent-login",
  templateUrl: "demo-covalent-login.component.html",
  styleUrls: ["demo-covalent-login.component.scss"]
})
export class DemoCovalentLoginComponent extends DemoCovalentLoginBaseComponent {
  username: string;
  password: string;

  constructor(
    private router: Router,
    private loadingService: TdLoadingService
  ) {
    super();
  }

  login(): void {
    this.loadingService.register();
    alert("Mock log in as " + this.username);
    setTimeout(() => {
      this.router.navigate(["/"]);
      this.loadingService.resolve();
    }, 100);
  }
}
