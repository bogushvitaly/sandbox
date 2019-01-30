import { Routes } from '@angular/router';

import { environment } from '@application/core';

export function routeUiAppMenu(index: any): Routes {
  return [
    {
      path: '',
      component: index
    }
  ];
}
