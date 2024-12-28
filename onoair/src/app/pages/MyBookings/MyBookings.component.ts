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

  constructor(private MyBookings: BookingService) {}

  ngOnInit(): void {
    this.bookings = this.MyBookings.list();
  }

  viewBooking(bookingCode: string): void {
    const booking = this.MyBookings.get(bookingCode);
    console.log('Booking Details:', booking);
  }
}
