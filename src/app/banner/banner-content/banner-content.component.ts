import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner-content',
  templateUrl: './banner-content.component.html',
  styleUrls: ['./banner-content.component.css'],
})
export class BannerContentComponent {
  @Input() lang: string;
  @Input() dir: string;

  constructor(private translate: TranslateService) {
    this.lang = localStorage.getItem('currentLang') || 'en';
    this.dir = this.lang == 'ar' ? 'rtl' : 'ltr';

    this.translate.onLangChange.subscribe((param) => {
      this.lang = param.lang;
      this.dir = param.lang == 'ar' ? 'rtl' : 'ltr';
    });
  }
}
