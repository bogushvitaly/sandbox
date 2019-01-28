import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'First Hero' },
      { id: 12, name: 'Second Hero' },
      { id: 13, name: 'Third Hero' },
      { id: 14, name: 'Fourth Hero' },
      { id: 15, name: 'Fifth Hero' },
      { id: 16, name: 'Sixth Hero' },
      { id: 17, name: 'Seventh Hero' },
      { id: 18, name: 'Eighth Hero' },
      { id: 19, name: 'Ninth Hero' }
    ];
    return { heroes };
  }
}
