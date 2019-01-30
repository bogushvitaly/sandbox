import { Component } from '@angular/core';

import { LoaderBaseComponent } from '@application/features';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.scss']
})
export class LoaderComponent extends LoaderBaseComponent {
  constructor() {
    super();
  }
}
