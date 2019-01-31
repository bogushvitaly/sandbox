import { NgModule } from '@angular/core';
import { SystemMetadataModule as SharedSystemMetadataModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMMETADATA_COMPONENTS } from './components';


@NgModule({
  imports: [
    SharedSystemMetadataModule,UIModule
  ],
  declarations: [
    ...SYSTEMMETADATA_COMPONENTS
  ],
  exports: [
    ...SYSTEMMETADATA_COMPONENTS
  ]
})
export class SystemMetadataModule {}

