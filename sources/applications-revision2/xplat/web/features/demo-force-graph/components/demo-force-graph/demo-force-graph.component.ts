import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

// import { Main } from '../../classes/async-load';
// import { Main } from '../../classes/auto-colored';
// import { Main } from '../../classes/basic';
// import { Main } from '../../classes/camera-auto-orbit';
// import { Main } from '../../classes/click-to-focus';
// import { Main } from '../../classes/collision-detection';
// import { Main } from '../../classes/controls';
// import { Main } from '../../classes/curved-links';
// import { Main } from '../../classes/custom-node-geometry';
// import { Main } from '../../classes/directional-links-arrows';
// import { Main } from '../../classes/directional-links-particles';
// import { Main } from '../../classes/dynamic';
// import { Main } from '../../classes/highlight';
// import { Main } from '../../classes/img-nodes';
import { Main } from "../../classes/large-graph";

// import { Main } from '../../classes/manipulate-link-force';
// import { Main } from '../../classes/pause-resume';
// import { Main } from '../../classes/scene';
// import { Main } from '../../classes/text-links';
// import { Main } from '../../classes/text-nodes';
// import { Main } from '../../classes/tree';
import { DemoForceGraphBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-force-graph",
  templateUrl: "demo-force-graph.component.html",
  styleUrls: ["demo-force-graph.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoForceGraphComponent extends DemoForceGraphBaseComponent
  implements OnInit {
  sceneInstance: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.sceneInstance = new Main();
  }
}
