import { animate, AnimationEvent, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, Inject, Input } from '@angular/core';

import { UiOverlayRef } from '../../ui-overlay-ref';
import { OVERLAY_DATA } from '../../ui-overlay.tokens';

const ESCAPE = 27;
const ANIMATION_TIMINGS = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)';

@Component({
  selector: 'app-ui-overlay',
  templateUrl: 'ui-overlay.component.html',
  styleUrls: ['ui-overlay.component.scss'],
  animations: [
    trigger('fade', [
      state('fadeOut', style({ opacity: 0 })),
      state('fadeIn', style({ opacity: 1 })),
      transition('* => fadeIn', animate(ANIMATION_TIMINGS))
    ]),
    trigger('slideContent', [
      state('void', style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })),
      state('enter', style({ transform: 'none', opacity: 1 })),
      state('leave', style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
      transition('* => *', animate(ANIMATION_TIMINGS))
    ])
  ]
})
export class UiOverlayComponent {
  loading = true;

  animationState: 'void' | 'enter' | 'leave' = 'enter';

  animationStateChanged = new EventEmitter<AnimationEvent>();

  @HostListener('document:keydown', ['$event']) private handleKeydown(event: KeyboardEvent) {
    if (event.keyCode === ESCAPE) {
      this.dialogRef.close();
    }
  }

  constructor(public dialogRef: UiOverlayRef, @Inject(OVERLAY_DATA) public image: any) {}

  onLoad(event: Event) {
    this.loading = false;
  }

  onAnimationStart(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  onAnimationDone(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  startExitAnimation() {
    this.animationState = 'leave';
  }
}
