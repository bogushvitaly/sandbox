import { Component } from '@angular/core';

import { SystemApiGraphqlBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-api-graphql',
  templateUrl: 'system-api-graphql.component.html'
})
export class SystemApiGraphqlComponent extends SystemApiGraphqlBaseComponent {
  constructor() {
    super();
  }
}
