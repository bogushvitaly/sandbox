import { SimpleNotificationsModule } from "angular2-notifications";

import { NgModule } from "@angular/core";

import { SystemNotificationModule as SharedSystemNotificationModule } from "@applications/core";

@NgModule({
  imports: [SharedSystemNotificationModule, SimpleNotificationsModule.forRoot()]
})
export class SystemNotificationModuled {}
