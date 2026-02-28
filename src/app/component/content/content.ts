import { Component } from '@angular/core';
import { Sobre } from './sobre/sobre';
import { Numbers } from './numbers/numbers';
import { Separators } from "./separators/separators";
import { How } from './how/how';
import { Works } from './works/works';
import { Values } from './values/values';
import { Buttonbanner } from './buttonbanner/buttonbanner';


@Component({
  selector: 'app-content',
  imports: [Sobre, Numbers, Separators, How, Works, Values, Buttonbanner ],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {

}
