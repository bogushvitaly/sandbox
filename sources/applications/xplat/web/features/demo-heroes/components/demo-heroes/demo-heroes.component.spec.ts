import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { RemovespacesPipe } from '../../pipes';
import { MessagesComponent } from '../messages/messages.component';

import { DemoHeroesComponent, UIModule } from '@application/web';

describe('DemoHeroesComponent', () => {
  let component: DemoHeroesComponent;
  let fixture: ComponentFixture<DemoHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UIModule, RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [DemoHeroesComponent, MessagesComponent, RemovespacesPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
