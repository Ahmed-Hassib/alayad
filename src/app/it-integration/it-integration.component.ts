import { Component, Input } from '@angular/core';

interface Items {
  list_title: string;
}

interface Products {
  title: string;
  list: Items[];
  img_name: string;
  img_ext: string;
}

@Component({
  selector: 'app-it-integration',
  templateUrl: './it-integration.component.html',
  styleUrls: ['./it-integration.component.css'],
})
export class ItIntegrationComponent {
  products: Products[];

  @Input() lang: string;
  @Input() dir: string;

  constructor() {
    this.products = [
      {
        title: 'product 1',
        img_name: 'cofense',
        img_ext: 'svg',
        list: [
          { list_title: 'detection' },
          { list_title: 'prevention' },
          { list_title: 'intelligence' },
          { list_title: 'simulating attacks' },
          { list_title: 'employee awareness' },
        ],
      },
      {
        title: 'product 2',
        img_name: 'ridge',
        img_ext: 'svg',
        list: [
          { list_title: 'schedule testing' },
          { list_title: 'adversary cyber emulation' },
          { list_title: 'database of vulnerabilities' },
          { list_title: 'reporting and action Plan' },
        ],
      },
      {
        title: 'product 3',
        img_name: 'acalvio',
        img_ext: 'svg',
        list: [
          { list_title: 'simulating your network' },
          { list_title: 'protect original network' },
          { list_title: 'trap your attacker' },
          { list_title: 'learn and enhance' },
        ],
      },
      {
        title: 'product 4',
        img_name: 'vpsie',
        img_ext: 'svg',
        list: [
          { list_title: 'global availability' },
          { list_title: 'HCI' },
          { list_title: 'high availability - replication' },
          { list_title: 'DNS – VPNs – SSL – FWs' },
          { list_title: 'all os and platforms' },
        ],
      },
    ];

    this.lang = localStorage.getItem('currentLang') || 'en';
    this.dir = this.lang == 'ar' ? 'rtl' : 'ltr';
  }
}
