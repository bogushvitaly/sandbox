import { Routes } from "@angular/router";

import { environment } from "@applications/core";

export function routeDemoTensorFlow(index: any): Routes {
  return [
    {
      path: "",
      component: index
    }
  ];
}
