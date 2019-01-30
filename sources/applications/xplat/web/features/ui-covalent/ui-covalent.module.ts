import { NgModule } from '@angular/core';
import { UiCovalentModule as SharedUiCovalentModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { UICOVALENT_COMPONENTS } from './components';

@NgModule({
  imports: [SharedUiCovalentModule, UIModule],
  declarations: [...UICOVALENT_COMPONENTS],
  exports: [...UICOVALENT_COMPONENTS]
})
export class UiCovalentModule {}
