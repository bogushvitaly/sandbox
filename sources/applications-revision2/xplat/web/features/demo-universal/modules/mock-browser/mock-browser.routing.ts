import { RouterModule, Routes } from "@angular/router";

import { MockBrowserComponent } from "./mock-browser.component";

const routes: Routes = [{ path: "", component: MockBrowserComponent }];

export const MockBrowserRoutes = RouterModule.forChild(routes);
