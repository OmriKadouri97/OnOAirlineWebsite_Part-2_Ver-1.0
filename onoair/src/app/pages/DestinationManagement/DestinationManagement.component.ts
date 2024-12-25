import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-destination-management',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './DestinationManagement.component.html',
  styleUrls: ['./DestinationManagement.component.css']
})
export class DestinationManagementComponent {
  destinations = [
    {
      name: 'Berlin',
      airport: 'Berlin Brandenburg Airport',
      airportCode: 'BER',
      location: 'Berlin, Germany',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dublin',
      airport: 'Dublin Airport',
      airportCode: 'DUB',
      location: 'Dublin, Ireland',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Paris',
      airport: 'Charles de Gaulle Airport',
      airportCode: 'CDG',
      location: 'Paris, France',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  viewDestination(destination: any): void {
    console.log(`Viewing details for ${destination.name}`);
    // Add navigation logic here (e.g., route to a destination details page)
  }
}
