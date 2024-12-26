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
      imageUrl: 'https://via.placeholder.com/150',
      airportName: 'Berlin Brandenburg Airport',
      airportCode: 'BER',
      location: 'Berlin, Germany'
    },
    {
      name: 'Dublin',
      imageUrl: 'https://via.placeholder.com/150',
      airportName: 'Dublin Airport',
      airportCode: 'DUB',
      location: 'Dublin, Ireland'
    },
    {
      name: 'Paris',
      imageUrl: 'https://via.placeholder.com/150',
      airportName: 'Charles de Gaulle Airport',
      airportCode: 'CDG',
      location: 'Paris, France'
    }
  ];

  viewDestination(destination: any): void {
    console.log(`Viewing details for ${destination.name}`);
    // Add logic to navigate to a destination details page if needed
  }
}
