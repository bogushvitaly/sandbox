import { async, TestBed } from '@angular/core/testing';
import { FanMenuModule } from './fan-menu.module';

describe('FanMenuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FanMenuModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FanMenuModule).toBeDefined();
  });
});
