import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../models/hero.interfaces';
import { HeroService } from '../../services';

import { HeroDetailBaseComponent } from '@application/features';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent extends HeroDetailBaseComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {
    super();
  }
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
