import { Routes } from '@angular/router';

import { environment } from '@application/core';

const homePath = `/${environment.baseRoutePath}`;

export interface IRouteBase {
  // base: string;
  // items: string;
  // version: string;
  heroes: string;
  // authorization: string;
}

export function routeBase(lazyLoad: IRouteBase, additional: Routes = [], redirectTo: string = homePath): Routes {
  return [
    // {
    //   path: environment.baseRoutePath,
    //   loadChildren: lazyLoad.base
    // },
    // {
    //   path: environment.itemsRoutePath,
    //   loadChildren: lazyLoad.items
    // },
    // {
    //   path: environment.versionRoutePath,
    //   loadChildren: lazyLoad.version
    // },
    {
      path: environment.heroesRoutePath,
      loadChildren: lazyLoad.heroes
    },
    // {
    //   path: environment.authorizationRoutePath,
    //   loadChildren: lazyLoad.authorization
    // },
    { path: '**', pathMatch: 'full', redirectTo },
    ...additional
  ];
}
