import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { DEMOIMAGEPREVIEW_COMPONENTS, DemoImagePreviewComponent } from './components';

import {
  DemoImagePreviewModule as SharedDemoImagePreviewModule,
  routeDemoImagePreview
} from '@application/features';

@NgModule({
  imports: [
    SharedDemoImagePreviewModule,
    UIModule,
    RouterModule.forChild(routeDemoImagePreview(DemoImagePreviewComponent))
  ],
  declarations: [...DEMOIMAGEPREVIEW_COMPONENTS],
  exports: [...DEMOIMAGEPREVIEW_COMPONENTS]
})
export class DemoImagePreviewModule {}
