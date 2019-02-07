import { Component } from '@angular/core';

import { DemoBpmnEditorBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-bpmn-editor',
  templateUrl: 'demo-bpmn-editor.component.html'
})
export class DemoBpmnEditorComponent extends DemoBpmnEditorBaseComponent {

  constructor() {
    super();
  }
}