import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, HostBinding, OnInit } from "@angular/core";

import { UiOverlayRef } from "../../ui-overlay-ref";

import { UiOverlayToolbarBaseComponent } from "@applications/features";

@Component({
  selector: "app-ui-overlay-toolbar",
  templateUrl: "ui-overlay-toolbar.component.html",
  styleUrls: ["ui-overlay-toolbar.component.scss"],
  animations: [
    trigger("slideDown", [
      state("void", style({ transform: "translateY(-100%)" })),
      state("enter", style({ transform: "translateY(0)" })),
      state("leave", style({ transform: "translateY(100vh)" })),
      transition("* => *", animate("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))
    ])
  ]
})
export class UiOverlayToolbarComponent extends UiOverlayToolbarBaseComponent
  implements OnInit {
  @HostBinding("@slideDown") slideDown = "enter";

  constructor(private dialogRef: UiOverlayRef) {
    super();
  }

  ngOnInit() {
    this.dialogRef.beforeClose().subscribe(() => (this.slideDown = "leave"));
  }
}
