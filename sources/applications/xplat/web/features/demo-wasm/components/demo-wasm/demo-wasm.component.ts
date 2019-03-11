import { Component } from '@angular/core';

import { DemoWasmBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-wasm',
  templateUrl: 'demo-wasm.component.html'
})
export class DemoWasmComponent extends DemoWasmBaseComponent {

  constructor() {
    super();
  }
}