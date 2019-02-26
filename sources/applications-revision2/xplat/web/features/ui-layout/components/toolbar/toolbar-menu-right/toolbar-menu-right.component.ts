import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { Menu } from "../../../interfaces/menu.interface";

const NAV_LINKS: Menu[] = [
  { path: "/", label: "MENU.HOME", icon: "icon" },
  { path: "/view-welcome", label: "MENU.GUIDE", icon: "icon" }
];

@Component({
  selector: "app-toolbar-menu-right",
  templateUrl: "./toolbar-menu-right.component.html",
  styleUrls: ["./toolbar-menu-right.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarMenuRightComponent implements OnInit {
  navLinks: Menu[] = NAV_LINKS;

  constructor() {}

  ngOnInit() {}
}
