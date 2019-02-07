import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UiAngularMaterialModule } from '../ui-angular-material';
import { UiCovalentModule } from '../ui-covalent';
import { NOTFOUND_COMPONENTS } from './components';

// libs
import { UISharedModule } from '@application/features';

const MODULES = [
  CommonModule,
  RouterModule,
  FlexLayoutModule,
  FormsModule,
  UiAngularMaterialModule,
  UiCovalentModule,
  ReactiveFormsModule,
  UISharedModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...NOTFOUND_COMPONENTS],
  exports: [...MODULES]
})
export class UIModule {}
