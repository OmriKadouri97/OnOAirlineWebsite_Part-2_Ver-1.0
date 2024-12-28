import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DestinationService } from '../../services/destination.service';


@Component({
  selector: 'app-destination-management',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './DestinationManagement.component.html',
  styleUrls: ['./DestinationManagement.component.css']
})
export class DestinationManagementComponent {
  destinations: any[] = [];

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    // Fetch all destinations using the service
    this.destinations = this.destinationService.listDestinations();
  }

    // Method to handle viewing a destination
    viewDestination(destination: any): void {
      console.log(`Viewing details for destination: ${destination.name}`);
      // Add navigation logic or detailed viewing logic here
    }
}
