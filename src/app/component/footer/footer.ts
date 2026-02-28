import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane, faCopyright } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  faFacebook = faFacebookF;
  faX = faXTwitter;
  faInstagram = faInstagram; 
  faLinkedIn = faLinkedin;
  faEmail = faEnvelope;
  faPaper = faPaperPlane;
  faCopyright = faCopyright;
}
