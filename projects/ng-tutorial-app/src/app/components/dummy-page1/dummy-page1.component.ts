import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { LogService } from '../../services/log.service';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dummy-page1',
  templateUrl: './dummy-page1.component.html',
  styleUrls: ['./dummy-page1.component.css']
})
export class DummyPage1Component implements OnInit {

  heroes: Hero[] = [];
  
  constructor(
    private logService: LogService,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.logService.add("In DummyPage1Component OnInit");
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
