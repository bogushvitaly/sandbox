import { Component } from '@angular/core';
// xplat
import { AppBaseComponent } from '@frontend/web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
