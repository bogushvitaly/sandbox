import { NGXLogger } from 'ngx-logger';
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
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

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
    private injector: Injector,
    private logger: NGXLogger,
    @Inject(PLATFORM_ID) private platformId: Object,
    element: ElementRef,
    renderer: Renderer2,
    private router: Router
  ) {
    super();

    if (environment.production) {
      this.swUpdate = this.injector.get(SwUpdate) as SwUpdate;
    }
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
          swUpdate.activateUpdate().then(() => window.reload());
        }
      });
      swUpdate.activated.subscribe(event => {
        this.logger.debug(`Service worker activated`);
        this.logger.debug(`old version was ${event.previous}`);
        this.logger.debug(`new version is ${event.current}`);
      });

      Observable.interval(6 * 60 * 60).subscribe(() =>
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
