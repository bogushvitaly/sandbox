import { HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  TransferHttpModule,
  TransferHttpService
} from "@gorniv/ngx-transfer-http";

import { SYSTEMAPIREST_PROVIDERS } from "./services";

@NgModule({
  imports: [HttpClientModule, TransferHttpModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [...SYSTEMAPIREST_PROVIDERS, TransferHttpService]
})
export class SystemApiRestModule {}
