import { Routes } from "@angular/router";

export function routeDemoOpencv(index: any, faceDetection: any): Routes {
  return [
    {
      path: "",
      component: index,
      children: [
        {
          path: "",
          redirectTo: "face-detection",
          pathMatch: "full"
        },
        {
          path: "face-detection",
          component: faceDetection
        }
      ]
    }
  ];
}
