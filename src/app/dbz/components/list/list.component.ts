import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 constructor(public dbzService:DbzService){}
  @Output()
  public  onDeleteId:EventEmitter<string>=new EventEmitter();


  @Input()
  public characterList: Character[] = [
    {name:'Trunks',
     power:10},
    {name:'Gohan',power:550}
  ];


}
