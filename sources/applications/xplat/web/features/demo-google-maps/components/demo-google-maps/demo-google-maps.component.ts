import { Component } from '@angular/core';

import { DemoGoogleMapsBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-google-maps',
  templateUrl: 'demo-google-maps.component.html'
})
export class DemoGoogleMapsComponent extends DemoGoogleMapsBaseComponent {

  constructor() {
    super();
  }
}