import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Hero } from './component/hero/hero';
import { Content } from "./component/content/content";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Content],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
