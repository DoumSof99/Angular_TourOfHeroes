import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHero } from '../entities/hero';
import { HEROES } from '../mock-data/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes() : Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Hero service fetched the hero data.');
    return heroes;
  }

  getHero(id: number): Observable<IHero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero with id=${id}`);
    return of(hero);
  }
}
