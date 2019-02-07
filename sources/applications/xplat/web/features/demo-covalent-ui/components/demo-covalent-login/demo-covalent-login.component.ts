import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core/loading';

import { DemoCovalentLoginBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-covalent-login',
  templateUrl: 'demo-covalent-login.component.html',
  styleUrls: ['demo-covalent-login.component.scss']
})
export class DemoCovalentLoginComponent extends DemoCovalentLoginBaseComponent {
  username: string;
  password: string;

  constructor(private _router: Router, private _loadingService: TdLoadingService) {
    super();
  }

  login(): void {
    this._loadingService.register();
    alert('Mock log in as ' + this.username);
    setTimeout(() => {
      this._router.navigate(['/']);
      this._loadingService.resolve();
    }, 100);
  }
}
