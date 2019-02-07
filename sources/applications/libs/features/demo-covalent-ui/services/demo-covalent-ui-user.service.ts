import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable, InjectionToken, Optional, Provider, SkipSelf } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http-deprec';

import { COVALENT_MOCK_API } from '../configs/api.config';
import { CovalentUser } from '../models';

@Injectable()
export class DemoCovalentUiUserService extends RESTService<CovalentUser> {
  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: COVALENT_MOCK_API,
      path: '/users'
    });
  }

  staticQuery(): Observable<CovalentUser[]> {
    return this._http.get('/assets/demo-covalent-mock-data/users.json').pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
}
