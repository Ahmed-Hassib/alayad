import { Component } from '@angular/core';

interface Customers {
  id: number;
  name: string;
  img: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  customers: Customers[];

  constructor() {
    this.customers = [
      { id: 1, name: 'alex apparels', img: 'alex_apparels.jfif' },
      { id: 2, name: 'asec', img: 'asec.png' },
      { id: 3, name: 'egy army', img: 'egy_army.jpg' },
      { id: 4, name: 'jumia', img: 'jumia.png' },
      { id: 5, name: 'kazabella', img: 'kazabella.jpg' },
      { id: 6, name: 'modern systems', img: 'modern_systems.png' },
      { id: 7, name: 'npc', img: 'npc.jfif' },
      { id: 8, name: 'police', img: 'police.jfif' },
      { id: 9, name: 'radisson', img: 'radisson.png' },
      { id: 10, name: 'sigma', img: 'sigma.png' },
    ];
  }
}
