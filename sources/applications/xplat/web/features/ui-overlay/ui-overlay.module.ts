import { NgModule } from '@angular/core';

import { UIModule } from '../ui/ui.module';
import { UIOVERLAY_COMPONENTS } from './components';
import { UiOverlayComponent } from './components/ui-overlay/ui-overlay.component';
import { UIOVERLAY_PROVIDERS } from './services';

import { UiOverlayModule as SharedUiOverlayModule } from '@application/features';

@NgModule({
  imports: [SharedUiOverlayModule, UIModule],
  declarations: [...UIOVERLAY_COMPONENTS],
  providers: [...UIOVERLAY_PROVIDERS],
  exports: [...UIOVERLAY_COMPONENTS],
  entryComponents: [UiOverlayComponent]
})
export class UiOverlayModule {}
