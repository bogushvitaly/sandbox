
    import { async, TestBed } from '@angular/core/testing';
    import { UiFanMenuModule } from './ui-fan-menu.module';
    
    describe('UiFanMenuModule', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ UiFanMenuModule ]
        })
        .compileComponents();
      }));
    
      it('should create', () => {
        expect(UiFanMenuModule).toBeDefined();
      });
    });
          