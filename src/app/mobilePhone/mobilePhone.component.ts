
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobilePhone.component.html',
  styleUrls: ['./mobilePhone.component.scss']
})
export class MobileComponent {
  productData = [
    { model: 'Mobile1', launchYear: 2022, price: 500 },
    { model: 'Mobile2', launchYear: 2023, price: 600 },
    // Add more mobile models as needed
  ];
}
