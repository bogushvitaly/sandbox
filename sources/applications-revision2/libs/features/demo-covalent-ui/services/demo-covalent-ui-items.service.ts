import { map } from "rxjs/operators";

import { Injectable } from "@angular/core";
import { HttpInterceptorService, RESTService } from "@covalent/http-deprec";

import { COVALENT_MOCK_API } from "../configs/api.config";

@Injectable()
export class DemoCovalentUiItemsService extends RESTService<any> {
  constructor(private readonly _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: COVALENT_MOCK_API,
      path: "/items"
    });
  }

  staticQuery(): any {
    return this._http.get("/assets/demo-covalent-mock-data/items.json").pipe(
      map(res => {
        return res.json();
      })
    );
  }

  staticGet(id: string): any {
    return this._http.get("/assets/demo-covalent-mock-data/items.json").pipe(
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
