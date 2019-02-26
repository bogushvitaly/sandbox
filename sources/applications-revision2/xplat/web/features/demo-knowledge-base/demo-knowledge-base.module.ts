import { MatFaqModule } from "@angular-material-extensions/faq";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";
import { UIModule } from "../ui/ui.module";
import {
  DEMOKNOWLEDGEBASE_COMPONENTS,
  DemoKnowledgeBaseComponent
} from "./components";

import {
  DemoKnowledgeBaseModule as SharedDemoKnowledgeBaseModule,
  routeDemoKnowledgeBase
} from "@applications/features";

@NgModule({
  imports: [
    SharedDemoKnowledgeBaseModule,
    UIModule,
    SharedModule,
    MatFaqModule.forRoot(),
    RouterModule.forChild(routeDemoKnowledgeBase(DemoKnowledgeBaseComponent))
  ],
  declarations: [...DEMOKNOWLEDGEBASE_COMPONENTS],
  exports: [...DEMOKNOWLEDGEBASE_COMPONENTS]
})
export class DemoKnowledgeBaseModule {}
