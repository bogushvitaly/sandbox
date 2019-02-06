import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-transfer-http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
// libs
import { TransferHttpCacheModule } from '@nguniversal/common';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG }),
    TransferHttpModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent],
  providers: [TransferHttpService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
