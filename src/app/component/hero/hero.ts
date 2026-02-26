import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, NgxTypedJsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

    titleLetters: string[] = 'LICITANOW'.split('');
}
