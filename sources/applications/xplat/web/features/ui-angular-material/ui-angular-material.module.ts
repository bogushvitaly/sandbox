import { NgModule } from '@angular/core';
import { UiAngularMaterialModule as SharedUiAngularMaterialModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { UIANGULARMATERIAL_COMPONENTS } from './components';

@NgModule({
  imports: [SharedUiAngularMaterialModule, UIModule],
  declarations: [...UIANGULARMATERIAL_COMPONENTS],
  exports: [...UIANGULARMATERIAL_COMPONENTS]
})
export class UiAngularMaterialModule {}
