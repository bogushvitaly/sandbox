import { RouterModule, Routes } from "@angular/router";

import { ResponseTransferComponent } from "./response-transfer.component";

const routes: Routes = [{ path: "", component: ResponseTransferComponent }];

export const ResponseTransferRoutes = RouterModule.forChild(routes);
