import { Routes } from "@angular/router";

export function routeDemoMaterial(
  index: any,
  address: any,
  dashboard: any,
  dragAndDrop: any,
  table: any,
  tree: any
): Routes {
  return [
    {
      path: "",
      component: index,
      children: [
        {
          path: "",
          redirectTo: "dashboard"
        },
        {
          path: "dashboard",
          component: dashboard
        },
        {
          path: "address",
          component: address
        },
        {
          path: "drag-and-drop",
          component: dragAndDrop
        },
        {
          path: "table",
          component: table
        },
        {
          path: "tree",
          component: tree
        }
      ]
    }
  ];
}
