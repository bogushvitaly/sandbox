import { Observable } from "rxjs";

import { OnInit } from "@angular/core";
import { Emittable, Emitter } from "@ngxs-labs/emitter";
import { Select } from "@ngxs/store";

import { CounterState, CounterStateModel } from "../state/counter.state";

import {
  BaseComponent,
  HttpService,
  SystemOutputScreenModel,
  SystemOutputScreenState
} from "@applications/core";

export abstract class ViewWelcomeBaseComponent extends BaseComponent
  implements OnInit {
  constructor(private apiService: HttpService) {
    super();
  }
  data: any;
  dataDelay: any;

  @Select(CounterState)
  count$: Observable<CounterStateModel>;

  @Select(SystemOutputScreenState)
  window$: Observable<SystemOutputScreenModel>;

  @Emitter(CounterState.setValue)
  counterValue: Emittable<number>;

  ngOnInit(): void {
    this.getData();
    this.getDelayData();
  }

  getData(): void {
    const params = {
      name: "morpheus",
      job: "leader"
    };
    this.apiService
      .post("https://reqres.in/api/users", params)
      .subscribe(res => (this.data = res));
  }

  getDelayData(): void {
    const params = { delay: 3 };
    this.apiService
      .get("https://reqres.in/api/users", params)
      .subscribe(res => (this.dataDelay = res));
  }
}
