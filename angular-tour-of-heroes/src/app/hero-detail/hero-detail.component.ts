import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHero } from '../entities/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
  //@Input() hero?: IHero;
  hero: IHero | undefined;

  constructor(private route: ActivatedRoute, private heroService: HeroService){}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    window.history.back();
  }

  save(): void{
    if(this.hero){
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  

}
