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

import { UiRenderForceGraphService } from "../../services";

import { UiRenderForceGraphBaseComponent } from "@applications/features";
import { WINDOW } from "@ng-toolkit/universal";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-ui-render-force-graph",
  template: `
    <div #surface *ngIf="isBrowser"></div>
  `,
  styles: [
    `
      :host div {
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiRenderForceGraphComponent extends UiRenderForceGraphBaseComponent
  implements OnInit, AfterViewInit {
  @ViewChild("surface")
  surface: ElementRef;

  @Input()
  sceneInstance: Function;

  @Input()
  controlType: string;

  isBrowser: Boolean = false;

  scene: any;

  constructor(
    private engine: UiRenderForceGraphService,
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
      this.engine.createEngine(
        this.surface.nativeElement,
        this.window,
        this.controlType
      );
      this.createScene(this.sceneInstance);
    }
  }

  createScene(sceneInstance) {
    this.scene = sceneInstance.createScene(
      this.surface.nativeElement,
      this.engine.getEngine()
    );
  }
}
