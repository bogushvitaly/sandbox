import { Routes } from '@angular/router';
import { environment } from '@frontend/core';

export function routeAuthorization(index: any): Routes {
  return [
    {
      path: '',
      component: index,
      children: []
    }
  ];
}
