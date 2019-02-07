import { NGXLogger } from 'ngx-logger';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Injector,
  OnInit,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { WINDOW } from '@ng-toolkit/universal';

import { environment } from '../environments/environment';

// xplat
import { AppBaseComponent } from '@application/web';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent implements OnInit {
  title = 'Web Application';
  private swUpdate: SwUpdate;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(WINDOW) private window: Window,
    private injector: Injector,
    private logger: NGXLogger,
    private router: Router,
    element: ElementRef,
    renderer: Renderer2,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    super();

    if (environment.production) {
      this.swUpdate = this.injector.get(SwUpdate) as SwUpdate;
    }

    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-mark.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-ux.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'appcenter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'listener',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'querygrid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg')
    );
  }

  public ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.logger.debug(`Application loaded at ${+new Date().toISOString()}`);
    }
    if (isPlatformBrowser(this.platformId)) {
      this.logger.debug(`Application loaded at ${+new Date().toISOString()}`);
      const navEndEvent$ = this.router.events.pipe(filter(e => e instanceof NavigationEnd));
      navEndEvent$.subscribe((e: NavigationEnd) => {
        gtag('config', 'MY_ID', { page_path: e.urlAfterRedirects });
      });
    }

    if (environment.production && this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        this.logger.debug(`Service worker update available`);
        this.logger.debug(`current version is ${event.current}`);
        this.logger.debug(`available version is ${event.available}`);

        let updateAccepted = confirm('Apply Updates!');
        if (updateAccepted) {
          this.swUpdate.activateUpdate().then(() => this.window.location.reload());
        }
      });
      this.swUpdate.activated.subscribe(event => {
        this.logger.debug(`Service worker activated`);
        this.logger.debug(`old version was ${event.previous}`);
        this.logger.debug(`new version is ${event.current}`);
      });

      interval(6 * 60 * 60).subscribe(() =>
        this.swUpdate
          .checkForUpdate()
          .then(() => {})
          .catch(error => {
            this.logger.error('Error when checking for update: ', error);
          })
      );
    }
  }
}
