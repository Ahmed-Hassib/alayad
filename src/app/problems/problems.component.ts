import { Component } from '@angular/core';

interface Problems {
  name: string;
}

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css'],
})
export class ProblemsComponent {
  problems: Problems[];

  constructor() {
    this.problems = [
      { name: 'problem 1' },
      { name: 'problem 2' },
      { name: 'problem 3' },
      { name: 'problem 4' },
      { name: 'problem 5' },
      { name: 'problem 6' },
      { name: 'problem 7' },
    ];
  }
}
