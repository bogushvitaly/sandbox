import { NgModule, NO_ERRORS_SCHEMA, Type } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { CovalentHttpModule } from "@covalent/http-deprec";

import { COVALENT_MOCK_API } from "./configs/api.config";
import { RequestInterceptor } from "./interceptors/request.interceptor";
import { DEMOCOVALENTUI_PROVIDERS } from "./services";

const httpInterceptorProviders: Array<Type<any>> = [RequestInterceptor];

export function getCovalentAPI(): string {
  return COVALENT_MOCK_API;
}

@NgModule({
  imports: [
    CovalentHttpModule.forRoot({
      interceptors: [
        {
          interceptor: RequestInterceptor,
          paths: ["**"]
        }
      ]
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [...DEMOCOVALENTUI_PROVIDERS, httpInterceptorProviders, Title]
})
export class DemoCovalentUiModule {}
