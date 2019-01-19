import 'hammerjs';

import { ApplicationRef, enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createNewHosts } from '@angularclass/hmr';
// libs
import { environment } from '@frontend/core';

// app
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

function bootstrap(boot: () => Promise<NgModuleRef<any>>) {
  if (module.hot) {
    return bootstrapWithHmr(boot);
  }

  return boot();
}

function bootstrapWithHmr(boot: () => Promise<NgModuleRef<any>>) {
  let ngModule: NgModuleRef<any>;

  module.hot.accept();

  const booting = boot().then(mod => {
    ngModule = mod;

    return mod;
  });

  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);

    ngModule.destroy();

    makeVisible();
  });

  return booting;
}

function main() {
  bootstrap(() => platformBrowserDynamic().bootstrapModule(AppModule))
    .then(ngModule => console.log('AppModule boostraped!'))
    .catch(console.error);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
