import { APP_BASE_HREF, CommonModule } from "@angular/common";
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from "@angular/core";
// libs
import { NxModule } from "@nrwl/nx";

import {
  SystemAnalyticsModule,
  SystemApiGraphqlModule,
  SystemApiGrpcModule,
  SystemApiRestModule,
  SystemAuthenticationModule,
  SystemAuthorizationModule,
  SystemDeviceBluetoothModule,
  SystemDeviceGeolocationModule,
  SystemDeviceNfcModule,
  SystemDeviceOrientationModule,
  SystemDeviceProximityModule,
  SystemDeviceVibrationModule,
  SystemFirebaseModule,
  SystemInputClipboardModule,
  SystemInputGestureModule,
  SystemInputJoystickModule,
  SystemInputKeyboardModule,
  SystemInputSpeechModule,
  SystemInternationalizationModule,
  SystemLoggingModule,
  SystemMetadataModule,
  SystemNotificationModule,
  SystemOutputHmdModule,
  SystemOutputScreenModule,
  SystemStorageRxdbModule
} from "./modules";
// app
import { CORE_PROVIDERS } from "./services";
import { LogService } from "./services/log.service";
import { SystemStateModule } from "./state/system-state.module";

import { environment } from "@applications/portal-web/environment/environment";
import { throwIfAlreadyLoaded } from "@applications/utils";

/**
 * DEBUGGING
 */
LogService.DEBUG.LEVEL_4 = !environment.production;

export const CORE_MODULES = [
  SystemStateModule,
  SystemAnalyticsModule,
  SystemApiGraphqlModule,
  SystemApiGrpcModule,
  SystemApiRestModule,
  SystemAuthenticationModule,
  SystemAuthorizationModule,
  SystemDeviceBluetoothModule,
  SystemDeviceGeolocationModule,
  SystemDeviceNfcModule,
  SystemDeviceOrientationModule,
  SystemDeviceProximityModule,
  SystemDeviceVibrationModule,
  SystemFirebaseModule,
  SystemInputClipboardModule,
  SystemInputGestureModule,
  SystemInputJoystickModule,
  SystemInputKeyboardModule,
  SystemInputSpeechModule,
  SystemInternationalizationModule,
  SystemLoggingModule,
  SystemMetadataModule,
  SystemNotificationModule,
  SystemOutputHmdModule,
  SystemOutputScreenModule,
  SystemStorageRxdbModule
];

export const BASE_PROVIDERS: any[] = [
  ...CORE_PROVIDERS,
  {
    provide: APP_BASE_HREF,
    useValue: "/"
  }
];

@NgModule({
  imports: [CommonModule, NxModule.forRoot(), ...CORE_MODULES]
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
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
