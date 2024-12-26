import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  standalone: true,
  template: `
    <h2>My Bookings</h2>
    <p>This is the My Bookings page.</p>
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
export class BookingsComponent {}
