import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

import { DemoMaterialDragAndDropBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-material-drag-and-drop',
  templateUrl: 'demo-material-drag-and-drop.component.html',
  styleUrls: ['demo-material-drag-and-drop.component.scss']
})
export class DemoMaterialDragAndDropComponent extends DemoMaterialDragAndDropBaseComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor() {
    super();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
