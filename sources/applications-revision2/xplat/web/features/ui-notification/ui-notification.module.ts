import { SimpleNotificationsModule } from "angular2-notifications";

import { NgModule } from "@angular/core";

import { SharedModule } from "../shared";
import { UiMaterialModule } from "../ui-material";
import { UIModule } from "../ui/ui.module";

import { UiNotificationModule as SharedUiNotificationModule } from "@applications/features";

@NgModule({
  imports: [
    SharedUiNotificationModule,
    UIModule,
    UiMaterialModule,
    SharedModule,
    SimpleNotificationsModule
  ]
})
export class UiNotificationModule {}
