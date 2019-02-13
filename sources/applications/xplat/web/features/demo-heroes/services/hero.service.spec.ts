import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroService } from './hero.service';

import { UIModule } from '@application/web';

describe('HeroService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [UIModule, HttpClientTestingModule, BrowserTransferStateModule, HttpClientModule, RouterTestingModule]
    })
  );

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
