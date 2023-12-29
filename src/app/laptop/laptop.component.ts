// laptop.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent {
  productData = [
    { model: 'Laptop1', launchYear: 2019, price: 800 },
    { model: 'Laptop2', launchYear: 2020, price: 1000 },
    // Add more laptop models as needed
  ];
}

