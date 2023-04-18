import { Component, OnInit } from '@angular/core';
import { IHero } from '../entities/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: IHero[] = [];
  selectedHero?: IHero;

  constructor(private heroService: HeroService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    this.messageService.add(`From the hero Component: Selected Hero id=${hero.id}, with name=${hero.name}`);
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
