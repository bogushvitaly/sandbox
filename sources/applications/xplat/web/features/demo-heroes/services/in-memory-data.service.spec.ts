import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryDataService } from './in-memory-data.service';

import { UIModule } from '@application/web';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [UIModule, HttpClientTestingModule, HttpClientModule] }));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });
});
