import { Component, ChangeDetectionStrategy, HostListener, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faClipboardQuestion,
  faPersonCircleQuestion,
  faAngleDown,
  faMagnifyingGlass,
  faHandshakeAngle,
  faUser,
  faUsers,
  faMoneyBill1,
  faMoneyCheckDollar,
  faCalendar,
  faGavel,
  faRectangleList,
  faBoxArchive,
  faHelmetSafety,
  faPeopleGroup,
  faBars,
  faAngleUp
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  submenuOpen: { [key: string]: boolean } = {};
  menuOpen = false;
  faInfo = faClipboardQuestion;
  faQuestion = faPersonCircleQuestion;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faMagnifyingGlass = faMagnifyingGlass;
  faHandshakeAngle = faHandshakeAngle;
  faUser = faUser;
  faUsers = faUsers;
  faMoneyBill1 = faMoneyBill1;
  faMoneyCheckDollar = faMoneyCheckDollar;
  faCalendar = faCalendar;
  faGavel = faGavel;
  faRectangleList = faRectangleList;
  faBoxArchive = faBoxArchive;
  faHelmetSafety = faHelmetSafety;
  faPeopleGroup = faPeopleGroup;
  faBars = faBars;


  constructor(private elementRef: ElementRef) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleSubmenu(menu: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = !!this.submenuOpen[menu];
    this.submenuOpen = isOpen ? {} : { [menu]: true };
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
      this.submenuOpen = {};
    }
  }
}
