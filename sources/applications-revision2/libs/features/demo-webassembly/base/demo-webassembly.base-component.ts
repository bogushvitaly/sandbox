import { WasmLoaderService } from "../services/wasm-loader.service";

import { BaseComponent } from "@applications/core";

export abstract class DemoWebassemblyBaseComponent extends BaseComponent {
  text = "DemoWebassembly";

  title = "Angular + WebAssembly + Rust";

  private _factorial: string;
  private _fibonacci: string;

  factor: any = 0;
  fibo: any = 1;

  constructor(protected service: WasmLoaderService) {
    super();
  }

  get factorial() {
    return this._factorial;
  }

  get fibonacci() {
    return this._fibonacci;
  }

  async calcFactorial() {
    this._factorial = await this.service.calculateFactorial(this.factor);
  }

  async calcFibonacci() {
    this._fibonacci = await this.service.calculateFebinacci(this.fibo);
  }
}
