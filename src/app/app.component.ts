
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product';
 
  searchQuery: string = '';
  constructor(private router: Router) {}

  
  submitSearch() {
    
    console.log('Search query:', this.searchQuery);
    switch (this.searchQuery.toLowerCase()) {
      case 'television':
        this.router.navigate(['/television']);
        break;
      case 'laptop':
        this.router.navigate(['/laptop']);
        break;
      case 'mobile':
        this.router.navigate(['/mobile']);
        break;
      default:
        this.router.navigate(['/home'])
        break;
    }
  }
  showProductDropdown = false;
  selectedProduct: string | null = null;

 
  }








