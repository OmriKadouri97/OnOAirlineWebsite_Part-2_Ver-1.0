import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-flight-management',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './FlightManagement.component.html',
  styleUrls: ['./FlightManagement.component.css']
})
export class FlightManagementComponent {
  flights = [
    {
      flightNumber: 'LH123',
      origin: 'Berlin',
      destination: 'Paris',
      departure: '02.12.2024, 10:00 AM',
      arrival: '02.12.2024, 12:30 PM',
      seats: 180
    },
    {
      flightNumber: 'FR456',
      origin: 'Dublin',
      destination: 'London',
      departure: '03.12.2024, 3:00 PM',
      arrival: '03.12.2024, 4:15 PM',
      seats: 150
    },
    {
      flightNumber: 'AA789',
      origin: 'New York',
      destination: 'Los Angeles',
      departure: '04.12.2024, 8:00 AM',
      arrival: '04.12.2024, 11:00 AM',
      seats: 200
    }
  ];

  viewFlight(flight: any): void {
    console.log(`Viewing details for flight ${flight.flightNumber}`);
    // Add logic to navigate to a flight details page if needed
  }
}
