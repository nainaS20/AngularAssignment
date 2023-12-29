
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
}
