import { Component } from '@angular/core';

import { SystemMetadataBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-metadata',
  templateUrl: 'system-metadata.component.html'
})
export class SystemMetadataComponent extends SystemMetadataBaseComponent {

  constructor() {
    super();
  }
}