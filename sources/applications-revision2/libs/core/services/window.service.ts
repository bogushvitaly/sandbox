// angular
import { Inject, Injectable } from "@angular/core";

import { XPlatWindow } from "../models";
import { PlatformWindowToken } from "./tokens";

// app
import { isNativeScript, isObject } from "@applications/utils";

@Injectable()
export class WindowService {
  constructor(
    @Inject(PlatformWindowToken) private _platformWindow: XPlatWindow
  ) {}

  get navigator() {
    return this._platformWindow.navigator;
  }

  get location() {
    return this._platformWindow.location;
  }

  get process() {
    return this._platformWindow.process;
  }

  get require() {
    return this._platformWindow.require;
  }

  alert(msg: any): Promise<any> {
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

  confirm(
    msg: any,
    action?: Function /* used for fancyalerts on mobile*/
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const result: any = (<any>this._platformWindow).confirm(
        msg,
        isNativeScript() ? action : undefined
      );
      if (isObject(result) && result.then) {
        result.then(resolve, reject);
      } else if (result) {
        resolve();
      } else {
        reject();
      }
    });
  }

  setTimeout(handler: (...args: any[]) => void, timeout?: number): number {
    return this._platformWindow.setTimeout(handler, timeout);
  }

  clearTimeout(timeoutId: number): void {
    return this._platformWindow.clearTimeout(timeoutId);
  }

  setInterval(
    handler: (...args: any[]) => void,
    ms?: number,
    ...args: any[]
  ): number {
    return this._platformWindow.setInterval(handler, ms, args);
  }

  clearInterval(intervalId: number): void {
    return this._platformWindow.clearInterval(intervalId);
  }
}
