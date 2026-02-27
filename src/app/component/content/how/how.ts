import { Component } from '@angular/core';
import { faPersonDigging, faNewspaper, faHelmetSafety, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-how',
  imports: [FontAwesomeModule],
  templateUrl: './how.html',
  styleUrl: './how.scss',
})
export class How {

  faDigging = faPersonDigging;
  faNewspaper = faNewspaper;
  faHelmet = faHelmetSafety;
  faScrews = faScrewdriverWrench;
}
