import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-details-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './FlightDetailsView.component.html',
  styleUrls: ['./FlightDetailsView.component.css']
})
export class FlightDetailsViewComponent implements OnInit {
  flightDetails: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Add Router here
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    // Get flight details using bookingCode from the route
    const bookingCode = this.route.snapshot.paramMap.get('bookingCode');
    if (bookingCode) {
      const bookings = this.sharedService.getBookings();
      this.flightDetails = bookings.find((booking) => booking.bookingCode === bookingCode);
    }
  }

  // Method to navigate back to MyBookings
  goBack(): void {
    this.router.navigate(['/MyBookings']); // Use Router for navigation
  }
}
