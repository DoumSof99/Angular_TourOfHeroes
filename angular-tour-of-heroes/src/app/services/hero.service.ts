import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHero } from '../entities/hero';
import { HEROES } from '../mock-data/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Observable<IHero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
