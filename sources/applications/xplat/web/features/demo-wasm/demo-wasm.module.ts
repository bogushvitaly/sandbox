import { NgModule } from '@angular/core';
import { DemoWasmModule as SharedDemoWasmModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { DEMOWASM_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedDemoWasmModule,UIModule
  ],
  declarations: [
    ...DEMOWASM_COMPONENTS
  ],
  exports: [
    ...DEMOWASM_COMPONENTS
  ]
})
export class DemoWasmModule {}

