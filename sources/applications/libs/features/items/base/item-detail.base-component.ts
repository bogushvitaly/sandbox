import { NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// libs
import { BaseComponent, LogService } from '@application/core';
import { isObject } from '@application/utils';

// app
import { Item } from '../models';
import { ItemService } from '../services/item.service';

export abstract class ItemDetailBaseComponent extends BaseComponent implements OnInit, OnDestroy {
  public item: Item;

  constructor(protected log: LogService, protected itemService: ItemService, protected route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.log.debug('ItemDetailBaseComponent ngOnInit id:', id);
    this.item = this.itemService.getItem(id);
  }
}
