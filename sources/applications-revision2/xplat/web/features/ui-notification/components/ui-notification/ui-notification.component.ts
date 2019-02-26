import {
  Icons,
  NotificationAnimationType,
  Options,
  Position
} from "angular2-notifications";

import { Component } from "@angular/core";

import { UiNotificationBaseComponent } from "@applications/features";

const POSITION: Position = ["top", "right"];
const TIME_OUT = 3000;
const SHOW_PROGRESS_BAR = true;
const PAUSE_ON_HOVER = true;
const LAST_ON_BOTTOM = true;
const CLICK_TO_CLOSE = true;
const MAX_LENGTH = 0;
const MAX_STACK = 4;
const THE_CLASS = "app-notify";
const ANIMATE = NotificationAnimationType.FromRight;
const ICONS: Icons = { alert: "", error: "", info: "", success: "", warn: "" };

@Component({
  selector: "app-ui-notification",
  templateUrl: "ui-notification.component.html"
})
export class UiNotificationComponent extends UiNotificationBaseComponent {
  options: Options = {
    position: POSITION,
    timeOut: TIME_OUT,
    showProgressBar: SHOW_PROGRESS_BAR,
    pauseOnHover: PAUSE_ON_HOVER,
    lastOnBottom: LAST_ON_BOTTOM,
    clickToClose: CLICK_TO_CLOSE,
    maxLength: MAX_LENGTH,
    maxStack: MAX_STACK,
    theClass: THE_CLASS,
    animate: ANIMATE,
    icons: ICONS
  };

  constructor() {
    super();
  }
}
