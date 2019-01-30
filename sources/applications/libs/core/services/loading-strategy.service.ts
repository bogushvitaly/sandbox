import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

const WAIT_TIME = 150;

@Injectable({
  providedIn: 'root'
})
export class LoadingStrategyService implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    const loadRoute = delay => (delay ? timer(WAIT_TIME).pipe(mergeMap(_ => load())) : load());
    return route.data && route.data.preload ? loadRoute(route.data.delay) : of(null);
  }
}
