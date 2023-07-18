import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headers = new HttpHeaders();
  currentLang: string;
  dir: string;

  constructor(private http: HttpClient, private translate: TranslateService) {
    this.headers.set('Accept', 'application/pdf');

    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.changeLang(this.currentLang);
    this.dir = this.currentLang == 'ar' ? 'rtl' : 'ltr';

    this.translate.onLangChange.subscribe((param) => {
      this.currentLang = param.lang;
      this.dir = param.lang == 'ar' ? 'rtl' : 'ltr';
    });
  }

  downloadMedia(src: string = 'assets/files/Catalouge.pdf') {
    let media_name = `mam_catalogue.pdf`;

    this.http
      .get(src, { headers: this.headers, responseType: 'blob' })
      .subscribe((res) => {
        const url = window.URL.createObjectURL(new Blob([res]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', media_name);
        document.body.appendChild(link);
        link.click();
      });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }
}
