import { ChartsModule } from 'ng2-charts/ng2-charts';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { DEMOTENSORFLOW_COMPONENTS, DemoTensorflowComponent } from './components';
import { DEMOTENSORFLOW_DIRECTIVES } from './directives';

import {
  DemoTensorflowModule as SharedDemoTensorflowModule,
  routeDemoTensorFlow
} from '@application/features';

@NgModule({
  imports: [
    SharedDemoTensorflowModule,
    UIModule,
    ChartsModule,
    RouterModule.forChild(routeDemoTensorFlow(DemoTensorflowComponent))
  ],
  declarations: [...DEMOTENSORFLOW_COMPONENTS, ...DEMOTENSORFLOW_DIRECTIVES],
  exports: [...DEMOTENSORFLOW_COMPONENTS]
})
export class DemoTensorflowModule {}
