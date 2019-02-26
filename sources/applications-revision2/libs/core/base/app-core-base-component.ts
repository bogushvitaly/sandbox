import { NGXLogger } from "ngx-logger";
import { fromEvent, interval } from "rxjs";
import { debounceTime, filter } from "rxjs/operators";

import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { Inject, Injector, OnInit, PLATFORM_ID } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { SwUpdate } from "@angular/service-worker";
import { WINDOW } from "@ng-toolkit/universal";
import { Emittable, Emitter } from "@ngxs-labs/emitter";

import { I18nState, SystemOutputScreenState } from "../modules";
import { BaseComponent } from "./base-component";

import { environment } from "@applications/portal-web/environment/environment";
import { SystemScreen } from "../modules/system-output-screen/models/screen.interface";

declare var gtag;

export abstract class AppCoreBaseComponent extends BaseComponent
  implements OnInit {
  @Emitter(I18nState.setLanguagesList)
  private setLanguagesList: Emittable<void>;

  @Emitter(SystemOutputScreenState.setWindowViewportDimensions)
  private setWindowViewportDimensions: Emittable<SystemScreen>;

  private swUpdate: SwUpdate;

  constructor(
    @Inject("ORIGIN_URL") private baseUrl: string,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(WINDOW) private window: Window,
    private injector: Injector,
    private logger: NGXLogger,
    private router: Router
  ) {
    super();
    console.log(`ORIGIN_URL=${this.baseUrl}`);

    this.setupLanguage();

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
      this.setupViewport();
      this.setupAnalytics();
      this.setupServiceWorkers();
    }
  }

  setupServiceWorkers() {
    if (environment.production && this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        this.logger.debug(`Service worker update available`);
        this.logger.debug(`current version is ${event.current}`);
        this.logger.debug(`available version is ${event.available}`);
        let updateAccepted = confirm("Apply Updates!");
        if (updateAccepted) {
          this.swUpdate
            .activateUpdate()
            .then(() => this.window.location.reload());
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
            this.logger.error("Error when checking for update: ", error);
          })
      );
    }
  }

  setupLanguage() {
    this.setLanguagesList.emit();
  }

  setupViewport() {
    this.setWindowViewportDimensions.emit({
      width: this.window.innerWidth,
      height: this.window.innerHeight
    });
    fromEvent(window, "resize")
      .pipe(debounceTime(100))
      .subscribe(event => {
        this.setWindowViewportDimensions.emit({
          width: this.window.innerWidth,
          height: this.window.innerHeight
        });
      });
  }

  setupAnalytics() {
    const navEndEvent$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    if (environment.production) {
      navEndEvent$.subscribe((e: NavigationEnd) => {
        gtag("config", "MY_ID", { page_path: e.urlAfterRedirects });
      });
    }
  }
}
