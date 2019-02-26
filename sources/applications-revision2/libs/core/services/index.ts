import { LogService } from "./log.service";
import { ServiceWorkerService } from "./service-worker.service";
import { StatusService } from "./status.service";
import { UniversalStorageService } from "./universal-storage.service";
import { WindowService } from "./window.service";

export * from "./universal-storage.service";
export * from "./status.service";
export * from "./window.service";
export * from "./loading-strategy.service";
export * from "./log.service";
export * from "./tokens";
export * from "./service-worker.service";

export const CORE_PROVIDERS: any[] = [
  LogService,
  WindowService,
  UniversalStorageService,
  StatusService,
  ServiceWorkerService
];
