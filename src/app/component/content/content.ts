import { Component } from '@angular/core';
import { Sobre } from './sobre/sobre';
import { Numbers } from './numbers/numbers';

@Component({
  selector: 'app-content',
  imports: [Sobre, Numbers],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {

}
