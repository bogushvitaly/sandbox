// app
import { isPlatformBrowser } from '@angular/common';
// angular
import {
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  PLATFORM_ID,
  ViewContainerRef
} from '@angular/core';

import { isNativeScript, isObject } from '@application/utils';

@Injectable()
export class WindowPlatformService {
  public navigator: any = {};
  public location: any = {};
  public localStorage: any;
  public process: any;
  public require: any;
  public alert(msg: any) {}
  public confirm(msg: any) {}
  public setTimeout(handler: (...args: any[]) => void, timeout?: number) {
    return 0;
  }
  public clearTimeout(timeoutId: number) {}
  public setInterval(handler: (...args: any[]) => void, ms?: number, ...args: any[]) {
    return 0;
  }
  public clearInterval(intervalId: number) {}

  // ...You can expand support for more window methods as you need them here...
}

@Injectable()
export class WindowService {
  constructor(private _platformWindow: WindowPlatformService) {}

  public get navigator() {
    return this._platformWindow.navigator;
  }

  public get location() {
    return this._platformWindow.location;
  }

  public get process() {
    return this._platformWindow.process;
  }

  public get require() {
    return this._platformWindow.require;
  }

  public alert(msg: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const result: any = this._platformWindow.alert(msg);
      if (isObject(result) && result.then) {
        // console.log('WindowService -- using result.then promise');
        result.then(resolve, reject);
      } else {
        resolve();
      }
    });
  }

  public confirm(msg: any, action?: Function /* used for fancyalerts on mobile*/): Promise<any> {
    return new Promise((resolve, reject) => {
      const result: any = (this._platformWindow as any).confirm(msg, isNativeScript() ? action : undefined);
      if (isObject(result) && result.then) {
        result.then(resolve, reject);
      } else if (result) {
        resolve();
      } else {
        reject();
      }
    });
  }

  public setTimeout(handler: (...args: any[]) => void, timeout?: number): number {
    return this._platformWindow.setTimeout(handler, timeout);
  }

  public clearTimeout(timeoutId: number): void {
    return this._platformWindow.clearTimeout(timeoutId);
  }

  public setInterval(handler: (...args: any[]) => void, ms?: number, ...args: any[]): number {
    return this._platformWindow.setInterval(handler, ms, args);
  }

  public clearInterval(intervalId: number): void {
    return this._platformWindow.clearInterval(intervalId);
  }
}

@Injectable()
export class WindowRef {
  private _window;
  constructor(@Inject(PLATFORM_ID) platformId, private injector: Injector) {
    if (!isPlatformBrowser(platformId)) {
      this._window = { navigator: { userAgent: 'fakeAgent' } };
    } else {
      this._window = window;
    }
  }

  get nativeWindow(): any {
    return this._window;
  }
}

export const USERAGENTTOKEN = new InjectionToken('requestToken');
