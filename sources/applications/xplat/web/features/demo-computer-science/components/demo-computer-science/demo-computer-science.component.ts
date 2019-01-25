import { Component } from '@angular/core';

import { DemoComputerScienceBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-computer-science',
  templateUrl: 'demo-computer-science.component.html'
})
export class DemoComputerScienceComponent extends DemoComputerScienceBaseComponent {
  constructor() {
    super();
  }
}
