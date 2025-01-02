import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './MyBookings.component.html',
  styleUrls: ['./MyBookings.component.css'],
})
export class MyBookingsComponent implements OnInit {
  upcomingBookings: any[] = [];
  previousBookings: any[] = [];

  constructor(private sharedService: SharedService, private router: RouterModule) {}

  ngOnInit(): void {
    // Subscribe to booked flights and split into upcoming and previous bookings
    this.sharedService.selectedFlight$.subscribe((bookings) => {
      const currentTime = new Date();
      this.upcomingBookings = bookings.filter(
        (booking) => new Date(booking.departure) > currentTime
      );
      this.previousBookings = bookings.filter(
        (booking) => new Date(booking.departure) <= currentTime
      );
    });
  }
}
