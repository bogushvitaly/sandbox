import { Component, OnInit } from '@angular/core';

import { HeroService } from '../../services';

import { Hero, HeroesDashboardBaseComponent } from '@application/features';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: 'heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.scss']
})
export class HeroesDashboardComponent extends HeroesDashboardBaseComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    super();
  }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes.slice(0, 4)));
  }
}
