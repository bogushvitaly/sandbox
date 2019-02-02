import { BaseComponent } from '@application/core';

export abstract class DemoBabylonBaseComponent extends BaseComponent {
  
  public text: string = 'DemoBabylon';
  
  constructor() {
    super();
  }
}