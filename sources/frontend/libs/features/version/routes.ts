import { Routes } from '@angular/router';
import { environment } from '@frontend/core';

export function routeVersion(index: any): Routes {
  return [
    {
      path: '',
      component: index
    }
  ];
}
