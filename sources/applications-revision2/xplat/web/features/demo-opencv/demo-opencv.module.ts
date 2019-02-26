import { NgOpenCVModule, OpenCVOptions } from "ng-open-cv";

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UIModule } from "../ui/ui.module";
import {
  DEMOOPENCV_COMPONENTS,
  DemoOpencvComponent,
  DemoOpencvFaceDetectionComponent
} from "./components";

import {
  DemoOpencvModule as SharedDemoOpencvModule,
  routeDemoOpencv
} from "@applications/features";

const openCVConfig: OpenCVOptions = {
  scriptUrl: `assets/opencv/opencv.js`,
  wasmBinaryFile: "wasm/opencv_js.wasm",
  usingWasm: true
};

@NgModule({
  imports: [
    SharedDemoOpencvModule,
    UIModule,
    SharedModule,
    NgOpenCVModule.forRoot(openCVConfig),
    RouterModule.forChild(
      routeDemoOpencv(DemoOpencvComponent, DemoOpencvFaceDetectionComponent)
    )
  ],
  declarations: [...DEMOOPENCV_COMPONENTS],
  exports: [...DEMOOPENCV_COMPONENTS]
})
export class DemoOpencvModule {}
