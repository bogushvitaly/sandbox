import { OnInit } from "@angular/core";

import { BaseComponent } from "@applications/core";

export abstract class HeaderBaseComponent extends BaseComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
