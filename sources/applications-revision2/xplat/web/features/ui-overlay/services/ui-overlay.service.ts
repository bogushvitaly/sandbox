import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal, PortalInjector } from "@angular/cdk/portal";
import { ComponentRef, Injectable, Injector } from "@angular/core";

import { UiOverlayComponent } from "../components/ui-overlay/ui-overlay.component";
import { UiOverlayRef } from "../ui-overlay-ref";
import { OVERLAY_DATA } from "../ui-overlay.tokens";

export interface Image {
  name: string;
  url: string;
}

interface UiOverlayConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  image?: Image;
}

const DEFAULT_CONFIG: UiOverlayConfig = {
  hasBackdrop: true,
  backdropClass: "dark-backdrop",
  panelClass: "overlay-panel",
  image: null
};

@Injectable()
export class UiOverlayService {
  constructor(private injector: Injector, private overlay: Overlay) {}

  open(config: UiOverlayConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new UiOverlayRef(overlayRef);

    const overlayComponent = this.attachDialogContainer(
      overlayRef,
      dialogConfig,
      dialogRef
    );

    dialogRef.componentInstance = overlayComponent;

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private createOverlay(config: UiOverlayConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer(
    overlayRef: OverlayRef,
    config: UiOverlayConfig,
    dialogRef: UiOverlayRef
  ) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(
      UiOverlayComponent,
      null,
      injector
    );
    const containerRef: ComponentRef<UiOverlayComponent> = overlayRef.attach(
      containerPortal
    );

    return containerRef.instance;
  }

  private createInjector(
    config: UiOverlayConfig,
    dialogRef: UiOverlayRef
  ): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(UiOverlayRef, dialogRef);
    injectionTokens.set(OVERLAY_DATA, config.image);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(config: UiOverlayConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}
