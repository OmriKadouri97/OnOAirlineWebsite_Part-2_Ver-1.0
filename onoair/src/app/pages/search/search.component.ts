import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  template: `
    <h2>Search a Flight</h2>
    <p>This is the Search a Flight page.</p>
  `,
  styles: [`
    h2 {
      text-align: center;
      margin-top: 20px;
    }
    p {
      text-align: center;
      font-size: 1.1rem;
    }
  `]
})
export class SearchComponent {}
