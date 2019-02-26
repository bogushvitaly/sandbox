import { LoggerModule, NgxLoggerLevel } from "ngx-logger";

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

@NgModule({
  imports: [LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG })],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SystemLoggingModule {}
