import { Component, Input } from '@angular/core';

interface Solutions {
  title: string;
  paragraph: string;
}

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
})
export class SolutionsComponent {
  solutions: Solutions[];

  @Input() lang: string;
  @Input() dir: string;

  constructor() {
    this.solutions = [
      { title: 'solution 1', paragraph: 'solution p 1' },
      { title: 'solution 2', paragraph: 'solution p 2' },
      { title: 'solution 3', paragraph: 'solution p 3' },
      { title: 'solution 4', paragraph: 'solution p 4' },
    ];

    this.lang = localStorage.getItem('currentLang') || 'en';
    this.dir = this.lang == 'ar' ? 'rtl' : 'ltr';
  }
}
