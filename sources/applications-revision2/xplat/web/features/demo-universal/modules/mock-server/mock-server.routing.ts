import { RouterModule, Routes } from "@angular/router";

import { MockServerComponent } from "./mock-server.component";

const routes: Routes = [{ path: "", component: MockServerComponent }];

export const MockServerRoutes = RouterModule.forChild(routes);
