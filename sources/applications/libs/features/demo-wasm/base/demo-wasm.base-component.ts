import { BaseComponent } from '@application/core';

export abstract class DemoWasmBaseComponent extends BaseComponent {
  
  public text: string = 'DemoWasm';
  
  constructor() {
    super();
  }
}