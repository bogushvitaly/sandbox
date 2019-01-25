import { Component } from '@angular/core';
import { ShellBaseComponent } from '@application/features';

@Component({
  selector: 'app-shell',
  templateUrl: 'shell.component.html'
})
export class ShellComponent extends ShellBaseComponent {
  constructor() {
    super();
  }
}
