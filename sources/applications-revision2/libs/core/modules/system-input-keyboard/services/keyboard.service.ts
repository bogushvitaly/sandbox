import {
  NgxKeyboardEvent,
  NgxKeyboardEventsService
} from "ngx-keyboard-events";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class KeyboardService {
  constructor(private keyboardEventsService: NgxKeyboardEventsService) {
    this.keyboardEventsService.onKeyPressed.subscribe(
      (keyEvent: NgxKeyboardEvent) => {
        console.log("key event", keyEvent);
      }
    );
  }
}
