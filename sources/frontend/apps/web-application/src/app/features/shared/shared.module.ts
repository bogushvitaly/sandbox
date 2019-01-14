import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@frontend/web';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
