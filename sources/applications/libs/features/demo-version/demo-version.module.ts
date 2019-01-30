import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DEMOVERSION_PROVIDERS } from './services';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  providers: [...DEMOVERSION_PROVIDERS]
})
export class DemoVersionModule {}
