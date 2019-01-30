import { Component } from '@angular/core';

import { SystemApiGrpcBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-api-grpc',
  templateUrl: 'system-api-grpc.component.html'
})
export class SystemApiGrpcComponent extends SystemApiGrpcBaseComponent {
  constructor() {
    super();
  }
}
