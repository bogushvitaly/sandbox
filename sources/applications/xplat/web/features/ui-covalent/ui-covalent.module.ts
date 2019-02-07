import { NgModule } from '@angular/core';
import {
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentStepsModule
} from '@covalent/core';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { UiCovalentModule as SharedUiCovalentModule } from '@application/features';

const UICOVALENT_MODULES = [
  CovalentCommonModule,
  CovalentLayoutModule,
  CovalentMediaModule,
  CovalentExpansionPanelModule,
  CovalentStepsModule,
  CovalentDialogsModule,
  CovalentLoadingModule,
  CovalentSearchModule,
  CovalentPagingModule,
  CovalentDataTableModule,
  CovalentMessageModule,
  CovalentNotificationsModule,
  CovalentMenuModule,
  CovalentHighlightModule,
  CovalentMarkdownModule,
  CovalentDynamicFormsModule
];

@NgModule({
  imports: [SharedUiCovalentModule, ...UICOVALENT_MODULES],
  declarations: [],
  exports: [...UICOVALENT_MODULES]
})
export class UiCovalentModule {}
