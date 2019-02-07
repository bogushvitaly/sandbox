import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http-deprec';

@Injectable()
export class DemoCovalentUiProductsService {
  constructor(private _http: HttpInterceptorService) {}

  query(): any {
    return this._http.get('/assets/demo-covalent-mock-data/products.json').pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  get(id: string): any {
    return this._http.get('/assets/demo-covalent-mock-data/products.json').pipe(
      map((res: Response) => {
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
