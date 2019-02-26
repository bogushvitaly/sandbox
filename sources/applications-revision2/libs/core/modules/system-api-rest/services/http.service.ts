import { Observable } from "rxjs";

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TransferHttpService } from "@gorniv/ngx-transfer-http";

interface Params {
  [key: string]: any;
}

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(
    private httpClient: HttpClient,
    private transferHttp: TransferHttpService
  ) {}

  get(url: string, params: Params = null): Observable<any> {
    const httpParams: HttpParams = this.buildHttpParams(params);
    return this.transferHttp.get(url, { params: httpParams });
  }

  post(url: string, params: Params): Observable<any> {
    return this.transferHttp.post(url, params);
  }

  put(url: string, params: Params): Observable<any> {
    return this.transferHttp.put(url, params);
  }

  delete(url: string, params: Params): Observable<any> {
    return this.httpClient.delete(url, params);
  }

  file(url: string, params: Params): Observable<any> {
    const httpParams: HttpParams = this.buildHttpParams(params);
    return this.httpClient.get(url, {
      responseType: "blob",
      params: httpParams
    });
  }

  private buildHttpParams(params: Params): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    for (const key of Object.keys(params)) {
      httpParams = httpParams.set(key, params[key]);
    }
    return httpParams;
  }
}
