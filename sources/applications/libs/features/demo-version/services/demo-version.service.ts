import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@application/core';

@Injectable()
export class DemoVersionService {
  constructor(private http: HttpClient) {}

  public getStatus() {
    return this.http.get(environment.apiUrl + '/status');
  }
}
