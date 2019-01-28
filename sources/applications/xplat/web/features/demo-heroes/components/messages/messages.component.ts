import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MessageService } from '../../services';

import { MessagesBaseComponent } from '@application/features';

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent extends MessagesBaseComponent implements OnInit {
  constructor(public messageService: MessageService) {
    super();
  }

  ngOnInit() {}
}
