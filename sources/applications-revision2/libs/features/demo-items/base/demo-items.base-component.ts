import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DemoItem } from "../models";
import { DemoItemsService } from "../services";

import { BaseComponent } from "@applications/core/base";
import { LogService } from "@applications/core/services/log.service";

export abstract class DemoItemsBaseComponent extends BaseComponent
  implements OnInit {
  items: DemoItem[];

  constructor(
    protected log: LogService,
    protected itemService: DemoItemsService
  ) {
    super();
  }

  ngOnInit() {
    this.log.debug("ItemsBaseComponent ngOnInit");
    this.items = this.itemService.getItems();
  }
}
