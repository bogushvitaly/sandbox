import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { DemoTensorflowBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-tensorflow',
  templateUrl: 'demo-tensorflow.component.html',
  styleUrls: ['demo-tensorflow.component.scss']
})
export class DemoTensorflowComponent extends DemoTensorflowBaseComponent {
  public isBrowser: Boolean = false;
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);

    this.isBrowser = isPlatformBrowser(platformId);
  }
}
