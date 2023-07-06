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
      { id: 1, name: 'dahua', img_ext: 'png' },
      { id: 2, name: 'extreme', img_ext: 'png' },
      { id: 3, name: 'hikvision', img_ext: 'png' },
      { id: 4, name: 'hp', img_ext: 'png' },
      { id: 5, name: 'juniper', img_ext: 'png' },
      { id: 6, name: 'kt', img_ext: 'png' },
      { id: 7, name: 'lg', img_ext: 'png' },
      { id: 8, name: 'mikrotik', img_ext: 'png' },
      { id: 9, name: 'mimosa', img_ext: 'png' },
      { id: 10, name: 'schneider', img_ext: 'png' },
      { id: 11, name: 'sk-logo-1', img_ext: 'svg' },
      { id: 12, name: 'sonoff', img_ext: 'png' },
      { id: 13, name: 'tplink', img_ext: 'png' },
      { id: 14, name: 'U', img_ext: 'png' },
    ];
  }
}
