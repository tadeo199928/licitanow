import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCirclePlay, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-buttonbanner',
  imports: [FontAwesomeModule],
  templateUrl: './buttonbanner.html',
  styleUrl: './buttonbanner.scss',
})
export class Buttonbanner {
  faCirclePlay = faCirclePlay;
  faPersonChalkboard = faPersonChalkboard;
}
