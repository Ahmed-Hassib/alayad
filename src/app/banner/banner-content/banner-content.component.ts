import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-content',
  templateUrl: './banner-content.component.html',
  styleUrls: ['./banner-content.component.css'],
})
export class BannerContentComponent {
  @Input() lang: string;
  @Input() dir: string;

  constructor() {
    this.lang = localStorage.getItem('currentLang') || 'en';
    this.dir = this.lang == 'ar' ? 'rtl' : 'ltr';
  }
}
