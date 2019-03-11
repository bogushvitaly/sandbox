import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TdMediaService } from '@covalent/core';

import { DemoCovalentStarterTemplateBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-starter-template',
  templateUrl: 'demo-covalent-starter-template.component.html'
})
export class DemoCovalentStarterTemplateComponent extends DemoCovalentStarterTemplateBaseComponent {
  name = 'Starter Template';

  routes: Object[] = [
    {
      icon: 'home',
      route: '.',
      title: 'Home'
    },
    {
      icon: 'library_books',
      route: '.',
      title: 'Documentation'
    },
    {
      icon: 'color_lens',
      route: '.',
      title: 'Style Guide'
    },
    {
      icon: 'view_quilt',
      route: '.',
      title: 'Layouts'
    },
    {
      icon: 'picture_in_picture',
      route: '.',
      title: 'Components & Addons'
    }
  ];
  usermenu: Object[] = [
    {
      icon: 'swap_horiz',
      route: '.',
      title: 'Switch account'
    },
    {
      icon: 'tune',
      route: '.',
      title: 'Account settings'
    },
    {
      icon: 'exit_to_app',
      route: '.',
      title: 'Sign out'
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
