import { Component } from '@angular/core';

import { DemoCovalentSlackChatBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-slack-chat',
  templateUrl: 'demo-covalent-slack-chat.component.html'
})
export class DemoCovalentSlackChatComponent extends DemoCovalentSlackChatBaseComponent {
  constructor() {
    super();
  }
}
