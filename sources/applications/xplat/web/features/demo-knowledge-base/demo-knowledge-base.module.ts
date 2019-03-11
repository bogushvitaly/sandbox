import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { DEMOKNOWLEDGEBASE_COMPONENTS, DemoKnowledgeBaseComponent } from './components';

import {
  DemoKnowledgeBaseModule as SharedDemoKnowledgeBaseModule,
  routeDemoKnowledgeBase
} from '@application/features';

@NgModule({
  imports: [
    SharedDemoKnowledgeBaseModule,
    UIModule,
    RouterModule.forChild(routeDemoKnowledgeBase(DemoKnowledgeBaseComponent))
  ],
  declarations: [...DEMOKNOWLEDGEBASE_COMPONENTS],
  exports: [...DEMOKNOWLEDGEBASE_COMPONENTS]
})
export class DemoKnowledgeBaseModule {}
