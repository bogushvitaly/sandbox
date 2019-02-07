import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { TdMediaService } from '@covalent/core';

import { DemoCovalentSlackChatBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-slack-chat',
  templateUrl: 'demo-covalent-slack-chat.component.html'
})
export class DemoCovalentSlackChatComponent extends DemoCovalentSlackChatBaseComponent {
  name = 'Contacts';

  routes: Object[] = [
    {
      title: 'Inbox',
      route: '/',
      icon: 'email'
    },
    {
      title: 'Snoozed',
      route: '/',
      icon: 'access_time'
    },
    {
      title: 'Drafts',
      route: '/',
      icon: 'drafts'
    },
    {
      title: 'Sent',
      route: '/',
      icon: 'send'
    },
    {
      title: 'Trash',
      route: '/',
      icon: 'delete'
    }
  ];

  constructor(
    public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    super();
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'
      )
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'
      )
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'
      )
    );
  }
}
