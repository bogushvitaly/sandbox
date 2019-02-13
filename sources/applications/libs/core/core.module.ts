import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Inject, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-transfer-http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { TranslateService } from '@ngx-translate/core';
import { NxModule } from '@nrwl/nx';

import { environment } from './environments/environment';
import { CORE_PROVIDERS, LoadingStrategyService, PlatformLanguageToken } from './services';
import { LogService } from './services/log.service';

import { throwIfAlreadyLoaded } from '@application/utils';

LogService.DEBUG.LEVEL_4 = !environment.production;

export const BASE_PROVIDERS: any[] = [
  ...CORE_PROVIDERS,
  {
    provide: APP_BASE_HREF,
    useValue: '/'
  }
];

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG }),
    TransferHttpModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googeMapsApiKey,
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule.forRoot(),
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig)
  ],
  providers: [LoadingStrategyService]
})
export class CoreModule {
  // configuredProviders: *required to configure WindowService and others per platform
  static forRoot(configuredProviders: any[]): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [...BASE_PROVIDERS, ...configuredProviders]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    @Inject(PlatformLanguageToken) lang: string,
    translate: TranslateService
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');

    // ensure default platform language is set
    translate.use(lang);
  }
}
