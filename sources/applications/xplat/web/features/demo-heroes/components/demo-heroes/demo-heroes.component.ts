import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DemoHeroesBaseComponent } from '@application/features';

@Component({
  selector: 'app-demo-heroes',
  templateUrl: 'demo-heroes.component.html',
  styleUrls: ['./demo-heroes.component.scss']
})
export class DemoHeroesComponent extends DemoHeroesBaseComponent implements OnInit {
  title = 'Tour of Heroes';
  constructor(private titleService: Title) {
    super();
  }
  ngOnInit() {
    this.setTitle(this.title);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
