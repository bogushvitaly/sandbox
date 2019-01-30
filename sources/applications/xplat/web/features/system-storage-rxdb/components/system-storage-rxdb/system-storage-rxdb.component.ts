import { Component } from '@angular/core';

import { SystemStorageRxdbBaseComponent } from '@application/features';

@Component({
  selector: 'app-system-storage-rxdb',
  templateUrl: 'system-storage-rxdb.component.html'
})
export class SystemStorageRxdbComponent extends SystemStorageRxdbBaseComponent {
  constructor() {
    super();
  }
}
