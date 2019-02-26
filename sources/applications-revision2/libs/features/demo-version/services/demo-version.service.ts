import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "@applications/core";

@Injectable()
export class DemoVersionService {
  constructor(private readonly http: HttpClient) {}

  getStatus() {
    return this.http.get(environment.apiUrl + "/status");
  }
}
