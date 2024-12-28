import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BookingService } from '../../services/booking.service';


@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './MyBookings.component.html',
  styleUrls: ['./MyBookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookings = this.bookingService.list();
  }

  viewBooking(bookingCode: string): void {
    const booking = this.bookingService.get(bookingCode);
    console.log('Booking Details:', booking);
  }
}
