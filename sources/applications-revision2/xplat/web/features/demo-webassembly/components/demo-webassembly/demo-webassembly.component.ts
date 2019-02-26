import { Component } from "@angular/core";

import {
  DemoWebassemblyBaseComponent,
  WasmLoaderService
} from "@applications/features";

@Component({
  selector: "app-demo-webassembly",
  templateUrl: "demo-webassembly.component.html",
  styleUrls: ["demo-webassembly.component.scss"]
})
export class DemoWebassemblyComponent extends DemoWebassemblyBaseComponent {
  constructor(service: WasmLoaderService) {
    super(service);
  }
}
