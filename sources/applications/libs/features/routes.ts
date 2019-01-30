import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { environment } from '@application/core';

const homePath = `/${environment.baseRoutePath}`;

export const ROUTE_ENTITIES = [
  { name: 'Version', url: 'demo-version' },
  { name: 'Demo Items', url: 'demo-items' },
  { name: 'Heroes Example', url: 'demo-heroes' },
  { name: 'Demo Angular Material', url: 'demo-angular-material' },
  { name: 'Firebase Authentication', url: 'ui-auth-firebase' },
  { name: 'Tensorflow Integration', url: 'demo-tensorflow' }
];

export interface IRouteBase {
  demoHeroes: string;
  demoItems: string;
  demoAngularMaterial: string;
  demoTensorFlow: string;
  demoVersion: string;
  uiAuthFirebase: string;
}

export function routeBase(
  appShell: any,
  appMenu: any,
  lazyLoad: IRouteBase,
  additional: Routes = [],
  redirectTo: string = homePath
): Routes {
  return [
    {
      path: environment.baseRoutePath,
      component: appShell,
      children: [
        {
          path: environment.baseRoutePath,
          component: appMenu,
          pathMatch: 'full'
        },
        {
          path: 'demo-heroes',
          loadChildren: lazyLoad.demoHeroes,
          data: { preload: true, delay: true }
        },
        {
          path: 'demo-items',
          loadChildren: lazyLoad.demoItems,
          data: { preload: true, delay: true }
        },
        {
          path: 'demo-angular-material',
          loadChildren: lazyLoad.demoAngularMaterial,
          data: { preload: true, delay: true }
        },
        {
          path: 'demo-tensorflow',
          loadChildren: lazyLoad.demoTensorFlow,
          data: { preload: true, delay: true }
        },
        {
          path: 'demo-version',
          loadChildren: lazyLoad.demoVersion,
          data: { preload: true, delay: true }
        },
        {
          path: 'ui-auth-firebase',
          loadChildren: lazyLoad.uiAuthFirebase,
          data: { preload: true, delay: true }
        }
      ]
    },
    { path: '**', redirectTo: 'menu' },
    ...additional
  ];
}
