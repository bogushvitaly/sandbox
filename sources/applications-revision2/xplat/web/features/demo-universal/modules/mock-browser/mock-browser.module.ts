import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MockBrowserComponent } from "./mock-browser.component";
import { MockBrowserRoutes } from "./mock-browser.routing";

@NgModule({
  imports: [CommonModule, MockBrowserRoutes],
  declarations: [MockBrowserComponent],
  exports: [MockBrowserComponent]
})
export class MockBrowserModule {}
