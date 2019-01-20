import { NgModule } from '@angular/core';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { RouterModule, Routes } from '@angular/router';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule, ServerModule, ServerTransferStateModule, FlexLayoutServerModule, ModuleMapLoaderModule],
  bootstrap: [AppComponent],
  declarations: []
})
export class AppServerModule {}