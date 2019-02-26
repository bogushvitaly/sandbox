import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  AfterViewInit
} from "@angular/core";

import { DemoBabylonBaseComponent } from "@applications/features";
import { Main } from "../../class/example";

@Component({
  selector: "app-demo-babylon",
  templateUrl: "demo-babylon.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoBabylonComponent extends DemoBabylonBaseComponent
  implements OnInit {
  sceneInstance: any;
  isBrowser: Boolean = false;

  constructor() {
    super();
  }

  ngOnInit() {
    this.sceneInstance = new Main();
  }
}
