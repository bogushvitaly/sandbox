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
    this.logger.debug('Your log message goes here');
    this.logger.debug('Multiple', 'Argument', 'support');

    if (environment.production) {
      this.swUpdate = this.injector.get(SwUpdate) as SwUpdate;
    }
  }

  public ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
    }
    if (isPlatformBrowser(this.platformId)) {
      const navEndEvent$ = this.router.events.pipe(filter(e => e instanceof NavigationEnd));
      navEndEvent$.subscribe((e: NavigationEnd) => {
        gtag('config', 'MY_ID', { page_path: e.urlAfterRedirects });
      });
    }

    if (environment.production && this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(evt => {
        console.log('service worker updated');
      });

      this.swUpdate
        .checkForUpdate()
        .then(() => {})
        .catch(err => {
          console.error('error when checking for update', err);
        });
    }
  }
}
