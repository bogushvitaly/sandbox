import { Subscription } from "rxjs";

import { Component, OnDestroy, OnInit } from "@angular/core";

import {
  DemoVersionBaseComponent,
  DemoVersionService,
  stack,
  VERSION
} from "@applications/features";

@Component({
  selector: "app-demo-version",
  templateUrl: "demo-version.component.html",
  styleUrls: ["demo-version.component.scss"]
})
export class DemoVersionComponent extends DemoVersionBaseComponent
  implements OnInit, OnDestroy {
  client = {
    version: VERSION,
    stack
  };
  server = {};

  private sub: Subscription;

  constructor(private service: DemoVersionService) {
    super();
  }

  ngOnInit() {
    this.sub = this.service
      .getStatus()
      .subscribe(status => (this.server = status));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
