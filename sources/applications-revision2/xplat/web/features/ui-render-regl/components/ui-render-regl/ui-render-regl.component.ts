import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  ViewChild,
  Inject,
  PLATFORM_ID
} from "@angular/core";

import { UiRenderReglService } from "../../services";

import { UiRenderReglBaseComponent } from "@applications/features";
import { isPlatformBrowser } from "@angular/common";
import { WINDOW } from "@ng-toolkit/universal";

@Component({
  selector: "app-ui-render-regl",
  template: `
    <canvas #surface *ngIf="isBrowser"></canvas>
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
export class UiRenderReglComponent extends UiRenderReglBaseComponent
  implements OnInit, AfterViewInit {
  @ViewChild("surface")
  surface: ElementRef;

  @Input()
  sceneInstance: Function;

  isBrowser: Boolean = false;

  scene: any;

  constructor(
    private zone: NgZone,
    private engine: UiRenderReglService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(WINDOW) private window: Window
  ) {
    super();
  }

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.createScene(this.sceneInstance);
      this.engine.handleResize(this.surface.nativeElement, this.window);
    }
  }

  createScene(sceneInstance) {
    this.zone.runOutsideAngular(() => {
      this.scene = sceneInstance.createScene(this.surface.nativeElement);
    });
  }
}
