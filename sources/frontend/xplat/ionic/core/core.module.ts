import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@frontend/utils';
import { AppCoreModule } from '@frontend/web';

@NgModule({
  imports: [AppCoreModule, IonicModule.forRoot()]
})
export class AppIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AppIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'AppIonicCoreModule');
  }
}
