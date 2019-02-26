import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";

import { DemoCovalentUiBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-covalent-ui",
  templateUrl: "demo-covalent-ui.component.html"
})
export class DemoCovalentUiComponent extends DemoCovalentUiBaseComponent {
  routes: Object[] = [
    {
      title: "Dashboard",
      route: "/demo-covalent-ui/dashboard",
      icon: "dashboard"
    },
    {
      title: "Manage Users",
      route: "/demo-covalent-ui/users",
      icon: "people"
    },
    {
      title: "Contacts",
      route: "/demo-covalent-ui/contacts",
      icon: "people"
    },
    {
      title: "Email",
      route: "/demo-covalent-ui/email",
      icon: "people"
    },
    {
      title: "Chat",
      route: "/demo-covalent-ui/chat",
      icon: "people"
    },
    {
      title: "Starter",
      route: "/demo-covalent-ui/starter",
      icon: "people"
    },
    {
      title: "Landing",
      route: "/demo-covalent-ui/landing",
      icon: "people"
    }
  ];

  constructor(
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    super();

    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "teradata",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/teradata.svg"
      )
    );
    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/github.svg"
      )
    );
    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "covalent",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/covalent.svg"
      )
    );
    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "covalent-mark",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/covalent-mark.svg"
      )
    );
    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "teradata-ux",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/teradata-ux.svg"
      )
    );
    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "appcenter",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/appcenter.svg"
      )
    );
    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "listener",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/listener.svg"
      )
    );
    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "querygrid",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/querygrid.svg"
      )
    );
  }

  logout(): void {
    this.router.navigate(["/demo-covalent-ui/login"]);
  }
}
