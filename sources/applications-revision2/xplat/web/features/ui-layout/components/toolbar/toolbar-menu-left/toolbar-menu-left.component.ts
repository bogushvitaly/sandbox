import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { Menu } from "../../../interfaces/menu.interface";

const NAV_LINKS: Menu[] = [];

@Component({
  selector: "app-toolbar-menu-left",
  templateUrl: "./toolbar-menu-left.component.html",
  styleUrls: ["./toolbar-menu-left.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarMenuLeftComponent implements OnInit {
  navLinks: Menu[] = NAV_LINKS;

  constructor() {}

  ngOnInit() {}
}
