import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string= "ironman";
  public age:  number= 45;
  public butName: boolean=true;
  public butAge: boolean=true;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{

    return `${this.name} - ${this.age}`;
  }
  changeHero():void{
    this.name="superlopez";
    this.butName=false;
  }
  changeAge():void{
    this.age=25;
    this.butAge=false;
  }
  reset():void{
  this.butName=true;
  this.butAge=true;
   this.name= "ironman";
   this.age= 45;
  }
}
