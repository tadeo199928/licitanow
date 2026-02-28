import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  imports: [FontAwesomeModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {

  faPaperPlane = faPaperPlane;

}
