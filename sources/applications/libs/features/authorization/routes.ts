import { Routes } from '@angular/router';

import { environment } from '@application/core';

export function routeAuthorization(index: any): Routes {
  return [
    {
      path: '',
      component: index,
      children: []
    }
  ];
}
