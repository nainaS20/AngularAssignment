// television.component.ts

import { Component } from '@angular/core';


@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.scss']
})
export class TelevisionComponent {
  productData = [
    { model: 'TV1', launchYear: 2020, price: 1000 },
    { model: 'TV2', launchYear: 2021, price: 1200 },
    // Add more TV models as needed
  ];
}
