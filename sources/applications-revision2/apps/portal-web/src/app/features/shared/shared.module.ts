import { NgModule } from "@angular/core";

// xplat
import {
  SharedModule as FeatureSharedModule,
  UIModule
} from "@applications/web";

const MODULES = [UIModule, FeatureSharedModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
