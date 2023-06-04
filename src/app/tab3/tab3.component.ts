import { Component } from '@angular/core';
import { Handler } from '../handler';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css']
})
export class Tab3Component {
  idacquario:number = 0;
  tema:string = "";

  constructor(public handler:Handler){}
}
