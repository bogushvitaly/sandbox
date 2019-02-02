import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { UiOverlayService } from '../../../ui-overlay/services/ui-overlay.service';
import { UiOverlayRef } from '../../../ui-overlay/ui-overlay-ref'; 

import { UiAppShellBaseComponent } from '@application/features';
import { fadeAnimation } from '@application/utils';

@Component({
  selector: 'app-ui-app-shell',
  templateUrl: 'ui-app-shell.component.html',
  styleUrls: ['ui-app-shell.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation]
})
export class UiAppShellComponent extends UiAppShellBaseComponent implements OnInit {
  constructor(private previewDialog: UiOverlayService) {
    super();
  }

  ngOnInit() {}

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  showPreview(file) {
    let dialogRef: UiOverlayRef = this.previewDialog.open({
      image: file
    });
  }
}
