import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatButtonModule],
  templateUrl: './SearchFlight.component.html',
  styleUrls: ['./SearchFlight.component.css']
})
export class SearchFlightComponent {
  displayedColumns: string[] = ['flightNumber', 'origin', 'destination', 'departure', 'arrival', 'actions'];

  flights = [
    {
      flightNumber: 'LH123',
      origin: 'Berlin',
      destination: 'Paris',
      departure: '02.12.2024, 10:00 AM',
      arrival: '02.12.2024, 12:30 PM'
    },
    {
      flightNumber: 'FR456',
      origin: 'Dublin',
      destination: 'London',
      departure: '03.12.2024, 3:00 PM',
      arrival: '03.12.2024, 4:15 PM'
    },
    {
      flightNumber: 'AA789',
      origin: 'New York',
      destination: 'Los Angeles',
      departure: '04.12.2024, 8:00 AM',
      arrival: '04.12.2024, 11:00 AM'
    }
  ];

  bookFlight(flight: any): void {
    console.log(`Navigating to booking page for flight ${flight.flightNumber}`);
    // Add navigation logic here
  }
}
