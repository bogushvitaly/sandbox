import { Injectable } from '@angular/core';
import { IHttpInterceptor } from '@covalent/http-deprec';

@Injectable()
export class RequestInterceptor implements IHttpInterceptor {
  onRequest(requestOptions) {
    // you add headers or do something before a request here.
    return requestOptions;
  }
}
