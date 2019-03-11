import { NgModule } from '@angular/core';
import { DemoBpmnEditorModule as SharedDemoBpmnEditorModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { DEMOBPMNEDITOR_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedDemoBpmnEditorModule,UIModule
  ],
  declarations: [
    ...DEMOBPMNEDITOR_COMPONENTS
  ],
  exports: [
    ...DEMOBPMNEDITOR_COMPONENTS
  ]
})
export class DemoBpmnEditorModule {}

