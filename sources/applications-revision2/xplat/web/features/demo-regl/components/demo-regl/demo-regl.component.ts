import { Component, OnInit } from "@angular/core";

import { Main } from "../../classes/basic";

import { DemoReglBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-regl",
  templateUrl: "demo-regl.component.html"
})
export class DemoReglComponent extends DemoReglBaseComponent implements OnInit {
  sceneInstance: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.sceneInstance = new Main();
  }
}
