import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { BrowserTransferStateModule } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { SharedModule } from "../../shared";
import { UIModule } from "../../ui";
import { MessageService } from "./message.service";

describe("MessageService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        UIModule,
        SharedModule,
        BrowserTransferStateModule,
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
  );

  it("should be created", () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });
});
