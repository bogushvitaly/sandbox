import { AgmCoreModule } from "@agm/core";
import { MatGoogleMapsAutocompleteModule } from "@angular-material-extensions/google-maps-autocomplete";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { environment } from "../../environments/environment";

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.googeMapsApiKey,
      libraries: ["places"]
    }),
    MatGoogleMapsAutocompleteModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SystemGoogleMapsModule {}
