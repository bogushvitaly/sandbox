import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { VersionBaseComponent, VersionService } from '@frontend/features';
import { stack, VERSION } from '@frontend/version';

@Component({
  selector: 'app-version',
  templateUrl: 'version.component.html'
})
export class VersionComponent extends VersionBaseComponent
  implements OnInit, OnDestroy {
  public client = {
    version: VERSION,
    stack: stack
  };
  public server = {};

  private sub: Subscription;

  constructor(private service: VersionService) {
    super();
  }

  ngOnInit() {
    this.sub = this.service
      .getStatus()
      .subscribe(status => (this.server = status));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
