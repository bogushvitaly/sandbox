import { Routes } from '@angular/router';
import { environment } from '@frontend/core';

export function routeShell(index: any): Routes {
  return [
    {
      path: '',
      component: index,
      children: [
        {
          path: 'demo-angular-material',
          loadChildren:
            '../demo-angular-material/demo-angular-material.module#DemoAngularMaterialModule'
        },
        {
          path: 'demo-computer-science',
          loadChildren:
            '../demo-computer-science/demo-computer-science.module#DemoComputerScienceModule'
        },
        {
          path: 'demo-covalent-ui',
          loadChildren:
            '../demo-covalent-ui/demo-covalent-ui.module#DemoCovalentUiModule'
        },
        {
          path: 'demo-design-patterns',
          loadChildren:
            '../demo-design-patterns/demo-design-patterns.module#DemoDesignPatternsModule'
        },
        {
          path: 'demo-heroes',
          loadChildren: '../demo-heroes/demo-heroes.module#DemoHeroesModule'
        }
      ]
    }
  ];
}
