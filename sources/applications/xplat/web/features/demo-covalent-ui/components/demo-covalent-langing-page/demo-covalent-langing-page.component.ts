import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { TdMediaService } from '@covalent/core';

import { DemoCovalentLangingPageBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-langing-page',
  templateUrl: 'demo-covalent-langing-page.component.html'
})
export class DemoCovalentLangingPageComponent extends DemoCovalentLangingPageBaseComponent {
  name = 'Landing Page';

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
