import { Component } from '@angular/core';
import { Sobre } from './sobre/sobre';

@Component({
  selector: 'app-content',
  imports: [Sobre],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {

}
