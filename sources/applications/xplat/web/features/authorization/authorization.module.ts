import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthorizationModule as SharedAuthorizationModule } from '@application/features';
import { routeAuthorization } from '@application/features/authorization/routes';

import { UIModule } from '../ui/ui.module';
import { AUTHORIZATION_COMPONENTS, AuthorizationComponent } from './components';

@NgModule({
  imports: [SharedAuthorizationModule, UIModule, RouterModule.forChild(routeAuthorization(AuthorizationComponent))],
  declarations: [...AUTHORIZATION_COMPONENTS],
  exports: [...AUTHORIZATION_COMPONENTS]
})
export class AuthorizationModule {}
