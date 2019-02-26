import * as screenfull from "screenfull";

import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[foggleFullscreen]"
})
export class FullscreenDirective {
  constructor() {}
  @HostListener("click")
  onClick() {
    if ((screenfull as any).enabled) {
      (screenfull as any).toggle();
    }
  }
}
