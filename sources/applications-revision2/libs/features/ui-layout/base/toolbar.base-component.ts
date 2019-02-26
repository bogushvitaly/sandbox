import { EventEmitter, Input, OnInit, Output } from "@angular/core";

import { BaseComponent } from "@applications/core";

export abstract class ToolbarBaseComponent extends BaseComponent
  implements OnInit {
  @Input() title: string;
  @Input() rightButton: string;
  @Output() tappedRight: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
