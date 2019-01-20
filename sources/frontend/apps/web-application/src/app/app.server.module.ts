import { NgModule } from '@angular/core';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    NoopAnimationsModule,
    FlexLayoutServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent],
  declarations: []
})
export class AppServerModule {}
