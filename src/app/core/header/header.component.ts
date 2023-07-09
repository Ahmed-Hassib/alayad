import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set('Accept', 'application/pdf');
  }

  downloadMedia(src: string = 'assets/files/Catalouge.pdf') {
    let media_name = `catalogue.pdf`;

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
}
