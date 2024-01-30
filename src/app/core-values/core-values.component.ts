import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-core-values',
  templateUrl: './core-values.component.html',
  styleUrls: ['./core-values.component.css'],
})
export class CoreValuesComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';

    this.translate.onLangChange.subscribe((param) => {
      this.currentLang = param.lang;
    });
  }
}
