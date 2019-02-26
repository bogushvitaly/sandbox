import { Scene } from "babylonjs";

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  Inject,
  PLATFORM_ID
} from "@angular/core";

import { UiRenderBabylonService } from "../../services";

import { UiRenderBabylonBaseComponent } from "@applications/features";
import { isPlatformBrowser } from "@angular/common";
import { WINDOW } from "@ng-toolkit/universal";

@Component({
  selector: "app-ui-render-babylon",
  template: `
    <canvas #surface></canvas>
  `,
  styles: [
    `
      :host canvas {
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;

        touch-action: none;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiRenderBabylonComponent extends UiRenderBabylonBaseComponent
  implements OnInit, AfterViewInit {
  isBrowser: Boolean = false;

  @ViewChild("surface")
  surface: ElementRef;

  @Input()
  sceneInstance: Function;

  scene: Scene;

  constructor(
    private engine: UiRenderBabylonService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(WINDOW) private window: Window
  ) {
    super();
  }

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    this.engine.createEngine(this.surface.nativeElement, this.window);
    this.createScene(this.sceneInstance);
    this.animate();

    console.log(this.engine.getUID);
  }

  createScene(sceneInstance) {
    this.scene = sceneInstance.createScene(this.surface.nativeElement);
  }

  animate() {
    this.engine.start(this.scene);
  }
}
