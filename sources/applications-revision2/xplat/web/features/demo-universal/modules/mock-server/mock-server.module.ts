import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MockServerComponent } from "./mock-server.component";
import { MockServerRoutes } from "./mock-server.routing";

@NgModule({
  imports: [CommonModule, MockServerRoutes],
  declarations: [MockServerComponent],
  exports: [MockServerComponent]
})
export class MockServerModule {}
