import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationComponent } from './navigation.component';

import { environment } from '@application/core';

const firebaseConfigMock = {
  apiKey: 'firebase-apiKey',
  authDomain: 'firebase-authDomain',
  databaseURL: 'firebase-databaseURL',
  projectId: 'firebase-projectId',
  storageBucket: 'firebase-storageBucket',
  messagingSenderId: 'firebase-messagingSenderId'
};

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule,
        AngularFirestoreModule,
        NgxAuthFirebaseUIModule.forRoot(firebaseConfigMock)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
