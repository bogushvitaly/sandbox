import { Subject } from "rxjs";

import { Injectable } from "@angular/core";

import { MenuOptionsService } from "./menu-options.service";

@Injectable({
  providedIn: "root"
})
export class MenuSpinService {
  private lastSpinDegree = 0;

  /* Property startPosition */
  private startPositionDegrees: number;

  private wingSpunSource = new Subject<number>();

  wingSpun = this.wingSpunSource.asObservable();

  constructor(private menuOptions: MenuOptionsService) {}

  setStartPosition(position: { x: number; y: number }): void {
    this.startPositionDegrees = this.radToDeg(
      Math.atan2(
        position.y - this.menuOptions.Center.y,
        position.x - this.menuOptions.Center.x
      )
    );
  }

  calculateSpinDegrees(position: { x: number; y: number }): void {
    const degrees =
      this.radToDeg(
        Math.atan2(
          position.y - this.menuOptions.Center.y,
          position.x - this.menuOptions.Center.x
        )
      ) - this.startPositionDegrees;

    const deg = this.lastSpinDegree + degrees;
    this.wingSpunSource.next(deg);
  }

  setLastSpinDegrees(position: { x: number; y: number }): void {
    this.lastSpinDegree +=
      this.radToDeg(
        Math.atan2(
          position.y - this.menuOptions.Center.y,
          position.x - this.menuOptions.Center.x
        )
      ) - this.startPositionDegrees;
  }

  private radToDeg(angle: number): number {
    return angle * (180 / Math.PI);
  }
}
