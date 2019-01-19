import { isPlatformServer } from '@angular/common';
import { APP_ID, Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { BaseComponent } from '@frontend/core';
import { NotFoundBaseComponent } from '@frontend/features';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

interface PartialResponse {
  status(code: number): this;
}
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
