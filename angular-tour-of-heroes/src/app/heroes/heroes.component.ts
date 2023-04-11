import { Component } from '@angular/core';
import { IHero } from '../entities/hero';
import { HEROES } from '../mock-data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes = HEROES;
  selectedHero?: IHero;

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

}
