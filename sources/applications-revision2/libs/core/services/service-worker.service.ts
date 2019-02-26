import { Injectable, Injector } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

import { environment as buildEnvironment } from "@applications/portal-web/environment/environment";

@Injectable({
  providedIn: "root"
})
export class ServiceWorkerService {
  private swUpdate: SwUpdate;
  constructor(private injector: Injector) {
    if (buildEnvironment.production) {
      this.swUpdate = this.injector.get(SwUpdate) as SwUpdate;
    }

    if (buildEnvironment.production && this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(evt => {
        console.log("service worker updated");
      });

      this.swUpdate
        .checkForUpdate()
        .then(() => {
          // noop
        })
        .catch(err => {
          console.error("error when checking for update", err);
        });
    }
  }
}
