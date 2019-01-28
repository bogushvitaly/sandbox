import { isPlatformServer } from '@angular/common';
import { APP_ID, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

import { BaseComponent } from '@application/core';

interface PartialResponse {
  status(code: number): this;
}

export abstract class NotFoundBaseComponent extends BaseComponent implements OnInit {
  public text = 'Page Not Found';

  constructor(private platformId: Object, private appId: string, private response: PartialResponse) {
    super();
  }

  ngOnInit() {
    if (isPlatformServer(this.platformId) && this.response) {
      this.response.status(404);
    }
  }
}
