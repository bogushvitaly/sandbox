import { isPlatformServer } from '@angular/common';
import { APP_ID, Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

import { BaseComponent } from '@application/core';

export interface PartialResponse {
  status(code: number): this;
}

export class NotFoundBaseComponent extends BaseComponent {
  public text = 'Not Found';

  constructor(platformId: Object, appId: string, response: PartialResponse) {
    super();
  }
}
