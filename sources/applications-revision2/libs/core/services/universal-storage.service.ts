import { CookieService } from "ngx-cookie";

import { Injectable } from "@angular/core";

@Injectable()
export class UniversalStorageService implements Storage {
  [index: number]: string;
  [key: string]: any;
  length: number;
  cookies: any;

  constructor(private cookieService: CookieService) {}

  clear(): void {
    this.cookieService.removeAll();
  }

  getItem(key: string): string {
    return this.cookieService.get(key);
  }

  key(index: number): string {
    return this.cookieService.getAll().propertyIsEnumerable[index];
  }

  removeItem(key: string): void {
    this.cookieService.remove(key);
  }

  setItem(key: string, data: string): void {
    this.cookieService.put(key, data);
  }
}
