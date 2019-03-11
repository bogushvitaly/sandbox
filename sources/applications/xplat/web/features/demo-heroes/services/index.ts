import { HeroService } from './hero.service';
import { MessageService } from './message.service';

export const DEMOHEROES_PROVIDERS = [HeroService, MessageService];

export * from './hero.service';
export * from './message.service';
