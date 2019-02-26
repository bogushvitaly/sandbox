import { Routes } from "@angular/router";

export function routeDemoItems(index: any, detail: any): Routes {
  return [
    {
      path: "",
      component: index
    },
    {
      path: ":id",
      component: detail
    }
  ];
}
