import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { TdMediaService } from "@covalent/core";

import { DemoCovalentContactsBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-covalent-contacts",
  templateUrl: "demo-covalent-contacts.component.html"
})
export class DemoCovalentContactsComponent extends DemoCovalentContactsBaseComponent {
  name = "Contacts";

  routes: Object[] = [
    {
      title: "Inbox",
      route: "/",
      icon: "email"
    },
    {
      title: "Snoozed",
      route: "/",
      icon: "access_time"
    },
    {
      title: "Drafts",
      route: "/",
      icon: "drafts"
    },
    {
      title: "Sent",
      route: "/",
      icon: "send"
    },
    {
      title: "Trash",
      route: "/",
      icon: "delete"
    }
  ];

  constructor(
    private media: TdMediaService,
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    super();
    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "teradata-ux",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg"
      )
    );
    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "covalent",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg"
      )
    );
    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "covalent-mark",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg"
      )
    );
  }
}
