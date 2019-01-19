import { HeroService } from './hero.service';
import { InMemoryDataService } from './in-memory-data.service';
import { MessageService } from './message.service';

export const DEMOHEROES_PROVIDERS = [
  HeroService,
  InMemoryDataService,
  MessageService
];

export * from './hero.service';
export * from './in-memory-data.service';
export * from './message.service';


