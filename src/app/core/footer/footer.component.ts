import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentLang: string;
  dir: string;

  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.dir = this.currentLang == 'ar' ? 'rtl' : 'ltr';

    this.translate.onLangChange.subscribe((param) => {
      this.currentLang = param.lang;
      this.dir = param.lang == 'ar' ? 'rtl' : 'ltr';
    });
  }
}
