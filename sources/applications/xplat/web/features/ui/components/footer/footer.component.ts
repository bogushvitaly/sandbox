import { Component } from '@angular/core';

import { FooterBaseComponent } from '@application/features';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent extends FooterBaseComponent {
  constructor() {
    super();
  }
}
