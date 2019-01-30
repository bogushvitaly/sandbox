// from workaround:
// https://github.com/angular/angular-cli/issues/6373#issuecomment-319116889
import { NgModule } from '@angular/core';

// xplat
import { DemoAngularMaterialModule } from '@application/web';

@NgModule({
  imports: [DemoAngularMaterialModule]
})
export class DemoAngularMaterialLoaderModule {}
