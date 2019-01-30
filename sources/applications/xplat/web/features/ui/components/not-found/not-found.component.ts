import { isPlatformServer } from '@angular/common';
import { APP_ID, Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

import { BaseComponent } from '@application/core';
import { NotFoundBaseComponent, PartialResponse } from '@application/features';

@Component({
  selector: 'app-not-found',
  templateUrl: 'not-found.component.html'
})
export class NotFoundComponent extends NotFoundBaseComponent {
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(APP_ID) appId: string,
    @Optional() @Inject(RESPONSE) response: PartialResponse
  ) {
    super(platformId, appId, response);
  }
}
