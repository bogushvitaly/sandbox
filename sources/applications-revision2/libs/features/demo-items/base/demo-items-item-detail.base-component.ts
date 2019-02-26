import { NgZone, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DemoItem } from "../models";
import { DemoItemsService } from "../services";

import { BaseComponent, LogService } from "@applications/core";

export abstract class DemoItemsItemDetailBaseComponent extends BaseComponent
  implements OnInit, OnDestroy {
  item: DemoItem;

  constructor(
    protected log: LogService,
    protected itemService: DemoItemsService,
    protected route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.log.debug("ItemDetailBaseComponent ngOnInit id:", id);
    this.item = this.itemService.getItem(id);
  }
}
