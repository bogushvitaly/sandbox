import { Angulartics2Module } from "angulartics2";

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NgxsEmitPluginModule } from "@ngxs-labs/emitter";

import { SystemApiRestModule } from "@applications/core";

const MODULES = [
  CommonModule,
  TranslateModule,
  NgxsEmitPluginModule,
  Angulartics2Module,
  SystemApiRestModule,
  RouterModule,
  HttpClientModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
