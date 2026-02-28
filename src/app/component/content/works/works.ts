import { Component } from '@angular/core';
import {
  faAward,
  faListCheck,
  faStopwatch,
  faComment,
  faArrowRight,
  faHandPointUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-works',
  imports: [FontAwesomeModule],
  templateUrl: './works.html',
  styleUrl: './works.scss',
})
export class Works {
  faList = faListCheck;
  faStop = faStopwatch;
  faTrophy = faAward;
  faComment = faComment;
  faArrowRight = faArrowRight;
  faHandPointUp = faHandPointUp;
}
