import { Component } from '@angular/core';

import { UiOverlayService } from '../../../ui-overlay/services/ui-overlay.service';
import { UiOverlayRef } from '../../../ui-overlay/ui-overlay-ref';

import { DemoImagePreviewBaseComponent, STATIC_FILE_DATA } from '@application/features';

@Component({
  selector: 'app-demo-image-preview',
  templateUrl: 'demo-image-preview.component.html'
})
export class DemoImagePreviewComponent extends DemoImagePreviewBaseComponent {
  constructor(private previewDialog: UiOverlayService) {
    super();
  }

  files = STATIC_FILE_DATA;

  showPreview(file) {
    let dialogRef: UiOverlayRef = this.previewDialog.open({
      image: file
    });
  }
}
