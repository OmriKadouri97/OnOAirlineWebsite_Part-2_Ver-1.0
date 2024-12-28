import { Component ,OnInit} from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-flight-management',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './FlightManagement.component.html',
  styleUrls: ['./FlightManagement.component.css']
})
export class FlightManagementComponent implements OnInit {
  flights: any[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flights = this.flightService.list(); // Fetch all flights
  }

  viewFlight(flightNumber: string): void {
    const flight = this.flightService.get(flightNumber);
    console.log(flight); // Log flight details or navigate to a details page
  }
}
