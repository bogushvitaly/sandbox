import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DemoItem } from '../models';
import { DemoItemsService } from '../services';

import { BaseComponent } from '@application/core/base';
import { LogService } from '@application/core/services/log.service';

export abstract class DemoItemsBaseComponent extends BaseComponent implements OnInit {
  public items: DemoItem[];

  constructor(protected log: LogService, protected itemService: DemoItemsService) {
    super();
  }

  ngOnInit() {
    this.log.debug('ItemsBaseComponent ngOnInit');
    this.items = this.itemService.getItems();
  }
}
