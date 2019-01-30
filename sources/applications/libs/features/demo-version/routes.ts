import { Routes } from '@angular/router';

import { environment } from '@application/core';

export function routeDemoVersion(index: any): Routes {
  return [
    {
      path: '',
      component: index
    }
  ];
}
