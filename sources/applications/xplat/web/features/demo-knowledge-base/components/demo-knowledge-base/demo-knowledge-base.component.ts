import { Component } from '@angular/core';

import { DemoKnowledgeBaseBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-knowledge-base',
  templateUrl: 'demo-knowledge-base.component.html'
})
export class DemoKnowledgeBaseComponent extends DemoKnowledgeBaseBaseComponent {

  constructor() {
    super();
  }
}