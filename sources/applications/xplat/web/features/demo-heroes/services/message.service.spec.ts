import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { MessageService } from './message.service';

import { UIModule } from '@application/web';

describe('MessageService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [UIModule, BrowserTransferStateModule, HttpClientTestingModule, HttpClientModule, RouterTestingModule]
    })
  );

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });
});
