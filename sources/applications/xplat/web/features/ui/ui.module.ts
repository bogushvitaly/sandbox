import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NOTFOUND_COMPONENTS } from './components';
import { MaterialModule } from './material.module';

// libs
import { UISharedModule } from '@application/features';

const MODULES = [
  CommonModule,
  RouterModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  LayoutModule,
  DragDropModule,
  ReactiveFormsModule,
  UISharedModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...NOTFOUND_COMPONENTS],
  exports: [...MODULES]
})
export class UIModule {}
