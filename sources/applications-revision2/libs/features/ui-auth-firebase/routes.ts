import { Routes } from "@angular/router";

import { environment } from "@applications/core";

export function routeUiAuthFirebase(index: any): Routes {
  return [
    {
      path: "",
      component: index
    }
  ];
}
