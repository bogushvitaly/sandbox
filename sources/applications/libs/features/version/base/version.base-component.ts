import { BaseComponent } from '@application/core';

export abstract class VersionBaseComponent extends BaseComponent {
  public text = 'Version';

  constructor() {
    super();
  }
}
