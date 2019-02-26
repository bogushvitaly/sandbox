import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { TdMediaService } from "@covalent/core";

import { DemoCovalentLangingPageBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-covalent-langing-page",
  templateUrl: "demo-covalent-langing-page.component.html"
})
export class DemoCovalentLangingPageComponent extends DemoCovalentLangingPageBaseComponent {
  name = "Landing Page";

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
