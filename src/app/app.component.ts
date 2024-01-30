import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'al-ayad';
  loading: boolean;

  // constructor
  constructor() {
    this.loading = true;
  }

  // after view initialization
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  changeLoading(value: any) {
    this.loading = value;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
