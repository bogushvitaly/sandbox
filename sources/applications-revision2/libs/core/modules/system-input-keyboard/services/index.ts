import { KeyboardService } from "./keyboard.service";
import { HotkeysService } from "./hotkeys.service";

export const SYSTEMINPUTKEYBOARD_PROVIDERS = [KeyboardService, HotkeysService];

export * from "./keyboard.service";
export * from "./hotkeys.service";
