import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Problems {
  name: string;
}

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css'],
})
export class ProblemsComponent {
  currentLang: string;
  problems: Problems[];

  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.problems = [
      { name: 'problem 1' },
      { name: 'problem 2' },
      { name: 'problem 3' },
      { name: 'problem 4' },
      { name: 'problem 5' },
      { name: 'problem 6' },
      { name: 'problem 7' },
    ];

    this.translate.onLangChange.subscribe((param) => {
      this.currentLang = param.lang;
    });
  }
}
