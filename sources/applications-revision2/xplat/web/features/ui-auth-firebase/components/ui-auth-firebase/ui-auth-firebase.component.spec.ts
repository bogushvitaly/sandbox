import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";

import { LayoutModule } from "@angular/cdk/layout";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  AngularFirestoreModule,
  FirestoreSettingsToken
} from "@angular/fire/firestore";
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";

import { UiAuthFirebaseComponent } from "./ui-auth-firebase.component";

const firebaseConfigMock = {
  apiKey: "firebase-apiKey",
  authDomain: "firebase-authDomain",
  databaseURL: "firebase-databaseURL",
  projectId: "firebase-projectId",
  storageBucket: "firebase-storageBucket",
  messagingSenderId: "firebase-messagingSenderId"
};

describe("UiAuthFirebaseComponent", () => {
  let component: UiAuthFirebaseComponent;
  let fixture: ComponentFixture<UiAuthFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiAuthFirebaseComponent],
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
    fixture = TestBed.createComponent(UiAuthFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
