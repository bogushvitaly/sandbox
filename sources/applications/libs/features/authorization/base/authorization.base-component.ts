import { BaseComponent } from '@application/core';

export abstract class AuthorizationBaseComponent extends BaseComponent {
  public text = 'Authorization';

  constructor() {
    super();
  }
}
