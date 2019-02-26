import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { BrowserTransferStateModule } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { SharedModule } from "../../shared";
import { UIModule } from "../../ui";
import { HeroService } from "./hero.service";

describe("HeroService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        UIModule,
        SharedModule,
        HttpClientTestingModule,
        BrowserTransferStateModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
  );

  it("should be created", () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
