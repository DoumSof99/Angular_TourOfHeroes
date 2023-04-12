import { Injectable } from '@angular/core';
import { IHero } from '../entities/hero';
import { HEROES } from '../mock-data/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : IHero[] {
    return HEROES;
  }
}
