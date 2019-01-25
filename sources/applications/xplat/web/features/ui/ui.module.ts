import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// libs
import { UISharedModule } from '@application/features';

import { NOTFOUND_COMPONENTS, NotFoundComponent } from './components';
import { MaterialModule } from './material.module';

const MODULES = [
  CommonModule,
  RouterModule,
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
