import { createSpyObj } from 'jest-createspyobj';
import { of } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { HEROES } from '../../mocks/mock-heroes';
import { RemovespacesPipe } from '../../pipes';
import { HeroService } from '../../services';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

import { HeroesDashboardComponent, UIModule } from '@application/web';

describe('HeroesDashboardComponent', () => {
  let component: HeroesDashboardComponent;
  let fixture: ComponentFixture<HeroesDashboardComponent>;
  let heroService;
  let getHeroesSpy;
  beforeEach(async(() => {
    heroService = new HeroService();
    getHeroesSpy = jest.spyOn(heroService, 'getHeroes');
    getHeroesSpy.mockReturnValue(of(HEROES));

    TestBed.configureTestingModule({
      imports: [UIModule, RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [HeroesDashboardComponent, HeroSearchComponent, RemovespacesPipe],
      providers: [{ provide: HeroService, useValue: heroService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Heroes');
  });

  it('should call heroService', async(() => {
    expect(getHeroesSpy).toHaveBeenCalled();
  }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));
});
