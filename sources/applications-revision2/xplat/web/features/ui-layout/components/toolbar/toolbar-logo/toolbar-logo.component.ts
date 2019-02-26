import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

const APPLICATION_LOGO = "assets/icons/safari-pinned-tab.svg";

@Component({
  selector: "app-toolbar-logo",
  templateUrl: "./toolbar-logo.component.html",
  styleUrls: ["./toolbar-logo.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarLogoComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "unicorn",
      this.domSanitizer.bypassSecurityTrustResourceUrl(APPLICATION_LOGO)
    );
  }

  ngOnInit() {}
}
