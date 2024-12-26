import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './MyBookings.component.html',
  styleUrls: ['./MyBookings.component.css']
})
export class MyBookingsComponent {
  bookings = [
    {
      bookingCode: 'BK001',
      flightNumber: 'LH123',
      passengerCount: 2,
      passengerNames: ['John Doe', 'Jane Doe'],
      departure: '02.12.2024, 10:00 AM',
      arrival: '02.12.2024, 12:30 PM'
    },
    {
      bookingCode: 'BK002',
      flightNumber: 'FR456',
      passengerCount: 1,
      passengerNames: ['Alice Smith'],
      departure: '03.12.2024, 3:00 PM',
      arrival: '03.12.2024, 4:15 PM'
    },
    {
      bookingCode: 'BK003',
      flightNumber: 'AA789',
      passengerCount: 3,
      passengerNames: ['Bob Brown', 'Charlie Brown', 'Lucy Brown'],
      departure: '04.12.2024, 8:00 AM',
      arrival: '04.12.2024, 11:00 AM'
    }
  ];

  viewBooking(booking: any): void {
    console.log(`Viewing details for booking ${booking.bookingCode}`);
    // Add navigation logic to a booking details page if required
  }
}
