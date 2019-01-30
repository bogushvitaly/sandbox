import { Routes } from '@angular/router';

export function routeDemoAngularMaterial(
  index: any,
  address: any,
  dashboard: any,
  dragAndDrop: any,
  table: any,
  tree: any
): Routes {
  return [
    {
      path: '',
      component: index,
      children: [
        {
          path: 'address',
          component: address
        },
        {
          path: 'dashboard',
          component: dashboard
        },
        {
          path: 'drag-and-drop',
          component: dragAndDrop
        },
        {
          path: 'table',
          component: table
        },
        {
          path: 'tree',
          component: tree
        }
      ]
    }
  ];
}
