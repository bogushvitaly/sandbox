import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '@covalent/http-deprec';

@Injectable()
export class DemoCovalentUiAlertsService {
  constructor(private _http: HttpInterceptorService) {}

  query(): any {
    return this._http.get('/assets/demo-covalent-mock-data/alerts.json').pipe(
      map(res => {
        return res.json();
      })
    );
  }

  get(id: string): any {
    return this._http.get('/assets/demo-covalent-mock-data/alerts.json').pipe(
      map(res => {
        let item: any;
        res.json().forEach((s: any) => {
          if (s.item_id === id) {
            item = s;
          }
        });
        return item;
      })
    );
  }
}
