import { LoadingStrategyService } from './loading-strategy.service';
import { LogService } from './log.service';
import { WindowService } from './window.service';

export const CORE_PROVIDERS: any[] = [LogService, WindowService, LoadingStrategyService];

export * from './log.service';
export * from './window.service';
export * from './tokens';
export * from './loading-strategy.service';
