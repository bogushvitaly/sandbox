import { Routes } from '@angular/router';

export function routeItems(index: any, detail: any): Routes {
  return [
    {
      path: '',
      component: index
    },
    {
      path: ':id',
      component: detail
    }
  ];
}
