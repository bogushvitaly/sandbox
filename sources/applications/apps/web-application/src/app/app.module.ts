import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-transfer-http';
// libs
import { TransferHttpCacheModule } from '@nguniversal/common';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG }),
    TransferHttpModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent, NotFoundComponent],
  providers: [TransferHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
