import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { UIAUTHFIREBASE_COMPONENTS } from './components';
import { UiAuthFirebaseComponent } from './components/ui-auth-firebase/ui-auth-firebase.component';

import {
  routeUiAuthFirebase,
  UiAuthFirebaseModule as SharedUiAuthFirebaseModule
} from '@application/features';

@NgModule({
  imports: [
    SharedUiAuthFirebaseModule,
    UIModule,
    NgxAuthFirebaseUIModule,
    RouterModule.forChild(routeUiAuthFirebase(UiAuthFirebaseComponent))
  ],
  declarations: [...UIAUTHFIREBASE_COMPONENTS],
  exports: [...UIAUTHFIREBASE_COMPONENTS]
})
export class UiAuthFirebaseModule {}
