import { NgModule } from "@angular/core";

import { SharedModule as SharedSharedModule } from "@applications/features";

@NgModule({
  imports: [SharedSharedModule],
  exports: [SharedSharedModule]
})
export class SharedModule {}
