import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { AUTHORIZATION_COMPONENTS, AuthorizationComponent } from './components';

import { AuthorizationModule as SharedAuthorizationModule } from '@application/features';
import { routeAuthorization } from '@application/features/authorization/routes';

@NgModule({
  imports: [
    SharedAuthorizationModule,
    UIModule,
    NgxAuthFirebaseUIModule,
    RouterModule.forChild(routeAuthorization(AuthorizationComponent))
  ],
  declarations: [...AUTHORIZATION_COMPONENTS],
  exports: [...AUTHORIZATION_COMPONENTS]
})
export class AuthorizationModule {}
