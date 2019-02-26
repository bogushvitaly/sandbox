import { TranslationService } from "./translation.service";

export * from "./translation-loader-browser.service";
export * from "./translation-loader-server.service";
export * from "./translation.service";

export const SYSTEMINTERNATIONALIZATION_PROVIDERS = [TranslationService];
