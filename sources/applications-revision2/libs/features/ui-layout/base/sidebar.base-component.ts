import { OnInit } from "@angular/core";

import { BaseComponent } from "@applications/core";

const LINKS: any[] = [
  { link: "/home", name: "home", icon: "home" },
  { link: "/mock", name: "mock", icon: "info_outline" },
  { link: "/async", name: "async-http", icon: "swap_vert" },
  { link: "/back", name: "back-http", icon: "swap_vert" },
  { link: "/static/back", name: "static-back-http", icon: "swap_vert" }
];

export abstract class SidebarBaseComponent extends BaseComponent
  implements OnInit {
  links: any[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    const linkTemp = JSON.parse(JSON.stringify(LINKS));
    this.links = linkTemp.map(link => {
      link.name = `sidebar.${link.name}`;
      return link;
    });
  }
}
