import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxsEmitPluginModule } from "@ngxs-labs/emitter";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsModule } from "@ngxs/store";

import { I18nState, SystemLogging, SystemOutputScreenState } from "../modules";
import {
  DEVTOOLS_REDUX_CONFIG,
  LOGGER_CONFIG,
  OPTIONS_CONFIG
} from "./system-state.config";

export const STATES_MODULES = [
  I18nState,
  SystemOutputScreenState,
  SystemLogging
];

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot(STATES_MODULES, OPTIONS_CONFIG),
    NgxsReduxDevtoolsPluginModule.forRoot(DEVTOOLS_REDUX_CONFIG),
    NgxsLoggerPluginModule.forRoot(LOGGER_CONFIG),
    NgxsStoragePluginModule.forRoot(),
    NgxsEmitPluginModule.forRoot()
  ],
  exports: []
})
export class SystemStateModule {}
