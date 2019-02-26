import { Angulartics2Module } from "angulartics2";

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

@NgModule({
  imports: [Angulartics2Module.forRoot()],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SystemAnalyticsModule {}
