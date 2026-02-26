import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobre',
  imports: [FontAwesomeModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  faPlus = faPlus;
}
