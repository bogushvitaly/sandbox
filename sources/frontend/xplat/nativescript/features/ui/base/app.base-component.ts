import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@frontend/core';
import { AppService } from '@frontend/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
