import { Component } from '@angular/core';
import { Sobre } from './sobre/sobre';
import { Numbers } from './numbers/numbers';
import { Separators } from "./separators/separators";
import { How } from './how/how';

@Component({
  selector: 'app-content',
  imports: [Sobre, Numbers, Separators, How],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {

}
