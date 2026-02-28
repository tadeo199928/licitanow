import { Component, signal } from '@angular/core';
import { Header } from './component/header/header';
import { Hero } from './component/hero/hero';
import { Content } from "./component/content/content";
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
