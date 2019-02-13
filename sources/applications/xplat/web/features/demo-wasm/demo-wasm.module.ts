import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { DEMOWASM_COMPONENTS, DemoWasmComponent } from './components';

import { DemoWasmModule as SharedDemoWasmModule, routeDemoWasm } from '@application/features';

@NgModule({
  imports: [SharedDemoWasmModule, UIModule, RouterModule.forChild(routeDemoWasm(DemoWasmComponent))],
  declarations: [...DEMOWASM_COMPONENTS],
  exports: [...DEMOWASM_COMPONENTS]
})
export class DemoWasmModule { }
