import { AgmCoreModule } from "@agm/core";
import { MatGoogleMapsAutocompleteModule } from "@angular-material-extensions/google-maps-autocomplete";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UiMaterialModule } from "../ui-material";
import { UIModule } from "../ui/ui.module";
import {
  DEMOGOOGLEMAPS_COMPONENTS,
  DemoGoogleMapsComponent
} from "./components";

import {
  DemoGoogleMapsModule as SharedDemoGoogleMapsModule,
  routeDemoGoogleMaps
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoGoogleMapsModule,
    UIModule,
    UiMaterialModule,
    SharedModule,
    AgmCoreModule,
    MatGoogleMapsAutocompleteModule,
    RouterModule.forChild(routeDemoGoogleMaps(DemoGoogleMapsComponent))
  ],
  declarations: [...DEMOGOOGLEMAPS_COMPONENTS],
  exports: [...DEMOGOOGLEMAPS_COMPONENTS]
})
export class DemoGoogleMapsModule {}
