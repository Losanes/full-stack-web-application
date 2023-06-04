import { Component } from '@angular/core';
import { Handler } from '../handler';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component {
  nome:string = "";
  cognome:string = "";
  email:string = "";
  telefono:string = "";
  idacquario:number = 0;

  constructor(public handler:Handler){}
}
