import { Routes } from "@angular/router";

export function routeViewWelcome(index: any): Routes {
  return [
    {
      path: "",
      component: index,
      data: {
        meta: {
          title: "WELCOME.TITLE",
          description: "WELCOME.DESC",
          override: true
        }
      }
    }
  ];
}
