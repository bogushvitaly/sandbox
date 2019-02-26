import { Routes } from "@angular/router";
import { MetaGuard } from "@ngx-meta/core";

import { environment } from "../core/environments/environment";

const homePath = `/${environment.baseRoutePath}`;

export const ROUTE_ENTITIES = [
  { name: "Animations Demo", url: environment.demoAnimationsPath },
  // { name: "AssemblyScript Demo", url: environment.demoAssemblyscriptPath },
  { name: "Babylon Demo", url: environment.demoBabylonPath },
  // { name: "Business Modeling Tools Demo", url: environment.demoBmToolsPath },
  // { name: "Covalent UI Demo", url: environment.demoCovalentUiPath },
  { name: "CSS Layouts Demo", url: environment.demoCssLayoutsPath },
  { name: "Force Graph Demo", url: environment.demoForceGraphPath },
  // { name: "Google Maps Demo", url: environment.demoGoogleMapsPath },
  // { name: "Heroes Demo", url: environment.demoHeroesPath },
  // { name: "Image Preview Demo", url: environment.demoImagePreviewPath },
  // { name: "Khowledgebase Demo", url: environment.demoKnowledgeBasePath },
  // { name: "Material Demo", url: environment.demoMaterialPath },
  { name: "OpenCV Demo", url: environment.demoOpencvPath },
  { name: "Regl Demo", url: environment.demoReglPath },
  // { name: "Tensorflow Demo", url: environment.demoTensorflowPath },
  // { name: "Universal Demo", url: environment.demoVersionPath },
  // { name: "Version Report", url: environment.demoVersionPath },
  { name: "Webassembly Demo", url: environment.demoWebassemblyPath },
  // { name: "Firebase Auth", url: environment.uiAuthFirebasePath },
  { name: "Items Demo", url: environment.demoItemsPath },
  { name: "Welcome View", url: environment.viewWelcomePath }
];

export interface RouteBase {
  demoAnimations: string;
  demoAssemblyscript: string;
  demoBabylon: string;
  demoBmTools: string;
  demoCovalentUi: string;
  demoCssLayouts: string;
  demoForceGraph: string;
  demoGoogleMaps: string;
  demoHeroes: string;
  demoImagePreview: string;
  demoKnowledgeBase: string;
  demoMaterial: string;
  demoOpencv: string;
  demoRegl: string;
  demoTensorflow: string;
  demoUniversal: string;
  demoVersion: string;
  demoWebassembly: string;
  uiAuthFirebase: string;
  demoItems: string;
  viewWelcome: string;
}

export function routeBase(
  uiShell: any,
  uiNavigation: any,
  lazyLoad: RouteBase,
  additional: Routes = [],
  redirectTo: string = homePath
): Routes {
  return [
    {
      path: environment.baseRoutePath,
      component: uiShell,
      canActivateChild: [MetaGuard],
      children: [
        {
          path: environment.baseRoutePath,
          component: uiNavigation,
          pathMatch: "full"
        },
        {
          path: environment.demoAnimationsPath,
          loadChildren: lazyLoad.demoAnimations
        },
        {
          path: environment.demoAssemblyscriptPath,
          loadChildren: lazyLoad.demoAssemblyscript
        },
        {
          path: environment.demoBabylonPath,
          loadChildren: lazyLoad.demoBabylon
        },
        {
          path: environment.demoBmToolsPath,
          loadChildren: lazyLoad.demoBmTools
        },
        {
          path: environment.demoCovalentUiPath,
          loadChildren: lazyLoad.demoCovalentUi
        },
        {
          path: environment.demoCssLayoutsPath,
          loadChildren: lazyLoad.demoCssLayouts
        },
        {
          path: environment.demoForceGraphPath,
          loadChildren: lazyLoad.demoForceGraph
        },
        {
          path: environment.demoGoogleMapsPath,
          loadChildren: lazyLoad.demoGoogleMaps
        },
        {
          path: environment.demoHeroesPath,
          loadChildren: lazyLoad.demoHeroes
        },
        {
          path: environment.demoImagePreviewPath,
          loadChildren: lazyLoad.demoImagePreview
        },
        {
          path: environment.demoKnowledgeBasePath,
          loadChildren: lazyLoad.demoKnowledgeBase
        },
        {
          path: environment.demoMaterialPath,
          loadChildren: lazyLoad.demoMaterial
        },
        {
          path: environment.demoOpencvPath,
          loadChildren: lazyLoad.demoOpencv
        },
        {
          path: environment.demoReglPath,
          loadChildren: lazyLoad.demoRegl
        },
        {
          path: environment.demoTensorflowPath,
          loadChildren: lazyLoad.demoTensorflow
        },
        {
          path: environment.demoUniversalPath,
          loadChildren: lazyLoad.demoUniversal
        },
        {
          path: environment.demoVersionPath,
          loadChildren: lazyLoad.demoVersion
        },
        {
          path: environment.demoWebassemblyPath,
          loadChildren: lazyLoad.demoWebassembly
        },
        {
          path: environment.uiAuthFirebasePath,
          loadChildren: lazyLoad.uiAuthFirebase
        },
        {
          path: environment.demoItemsPath,
          loadChildren: lazyLoad.demoItems
        },
        {
          path: environment.viewWelcomePath,
          loadChildren: lazyLoad.viewWelcome
        }
      ]
    },
    { path: "**", redirectTo },
    ...additional
  ];
}
