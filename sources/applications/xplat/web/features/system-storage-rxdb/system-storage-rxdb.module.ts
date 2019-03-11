import { NgModule } from '@angular/core';
import { SystemStorageRxdbModule as SharedSystemStorageRxdbModule } from '@application/features';
import { UIModule } from '../ui/ui.module';
import { SYSTEMSTORAGERXDB_COMPONENTS } from './components';

@NgModule({
  imports: [SharedSystemStorageRxdbModule, UIModule],
  declarations: [...SYSTEMSTORAGERXDB_COMPONENTS],
  exports: [...SYSTEMSTORAGERXDB_COMPONENTS]
})
export class SystemStorageRxdbModule {}
