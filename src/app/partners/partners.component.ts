import { Component } from '@angular/core';

interface Partners {
  id: number;
  name: string;
  img_ext: string;
}

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
  partners: Partners[];
  constructor() {
    this.partners = [
      { id: 1, name: 'cofense', img_ext: 'svg' },
      { id: 2, name: 'ridge', img_ext: 'svg' },
      { id: 3, name: 'acalvio', img_ext: 'svg' },
      { id: 4, name: 'fortinet', img_ext: 'svg' },
      { id: 5, name: 'sophos', img_ext: 'svg' },
      { id: 6, name: 'kaspersky', img_ext: 'svg' },
      { id: 7, name: 'cisco', img_ext: 'svg' },
      { id: 8, name: 'vpsie', img_ext: 'svg' },
      { id: 9, name: '3cx', img_ext: 'svg' },
      { id: 10, name: 'grandstream', img_ext: 'svg' },
      { id: 11, name: 'microsoft', img_ext: 'svg' },
      { id: 12, name: 'dell', img_ext: 'svg' },
      { id: 13, name: 'hp', img_ext: 'png' },
      { id: 14, name: 'aruba', img_ext: 'svg' },
      { id: 15, name: 'manage-engine', img_ext: 'svg' },
      { id: 16, name: 'U', img_ext: 'png' },
      { id: 17, name: 'mimosa', img_ext: 'png' },
      { id: 18, name: 'mikrotik', img_ext: 'svg' },
      { id: 19, name: 'dahua', img_ext: 'svg' },
      { id: 20, name: 'hikvision', img_ext: 'png' },

      // { id: 10, name: 'schneider', img_ext: 'png' },
      // { id: 11, name: 'sk-logo-1', img_ext: 'svg' },
      // { id: 12, name: 'sonoff', img_ext: 'png' },
      // { id: 13, name: 'tplink', img_ext: 'png' },
      // { id: 2, name: 'extreme', img_ext: 'png' },
      // { id: 5, name: 'juniper', img_ext: 'png' },
      // { id: 6, name: 'kt', img_ext: 'png' },
      // { id: 7, name: 'lg', img_ext: 'png' },
    ];
  }
}
