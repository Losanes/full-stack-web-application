import { Component } from '@angular/core';
import { Handler } from '../handler';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component {
  nome:string = "";

  constructor(public handler:Handler){}
}
