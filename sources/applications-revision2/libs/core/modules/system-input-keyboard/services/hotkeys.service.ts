import {
  Hotkey,
  HotkeysService as AngularHotkeysService
} from "angular2-hotkeys";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HotkeysService {
  constructor(private hotkeysService: AngularHotkeysService) {
    this.hotkeysService.add(
      new Hotkey(
        "meta+shift+g",
        (event: KeyboardEvent): boolean => {
          console.log("Typed hotkey");
          return false;
        }
      )
    );
  }
}
