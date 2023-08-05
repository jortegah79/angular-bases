import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',

  template: `
  <style>
    button{
  border-radius:2%;
  height:50px;
  width:135px;
  margin:5px;
  font-size: 35px;
  color:white;
  background:blue;
  border:3px solid orangered;
  box-shadow:1px 1px 6px 3px gray;
}
button:active{
  background:white;
  color:blue;
}

  </style>
  <h2>Counter: {{counter}}</h2>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  public counter: number=10;

  increaseBy(value:number):void{
   this.counter +=value;
  }
  resetCounter():void{
    this.counter=10;
  }

}
