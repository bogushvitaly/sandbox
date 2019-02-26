import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NgxsModule } from "@ngxs/store";

import { CounterState } from "./state/counter.state";

@NgModule({
  imports: [NgxsModule.forFeature([CounterState])],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewWelcomeModule {}
