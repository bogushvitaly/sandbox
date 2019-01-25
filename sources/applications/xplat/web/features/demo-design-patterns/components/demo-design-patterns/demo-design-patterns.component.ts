import { Component } from '@angular/core';

import { DemoDesignPatternsBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-design-patterns',
  templateUrl: 'demo-design-patterns.component.html'
})
export class DemoDesignPatternsComponent extends DemoDesignPatternsBaseComponent {
  constructor() {
    super();
  }
}
