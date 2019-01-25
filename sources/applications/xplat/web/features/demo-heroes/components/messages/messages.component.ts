import { Component } from '@angular/core';

import { MessagesBaseComponent } from '@application/features';

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.component.html'
})
export class MessagesComponent extends MessagesBaseComponent {

  constructor() {
    super();
  }
}