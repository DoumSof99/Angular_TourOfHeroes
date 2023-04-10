import { Component } from '@angular/core';
import { IHero } from '../entities/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
  hero: IHero = {
    id: 1,
    name: 'Windstrom'
  };

}
