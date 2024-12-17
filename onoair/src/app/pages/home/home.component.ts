import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor

@Component({
  selector: 'app-home',
  standalone: true, // Mark as standalone
  imports: [CommonModule, HeaderComponent], // Add CommonModule and HeaderComponent
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    // Add the missing property with mock data
    lastMinuteFlights = [
      { destination: 'Berlin', date: '25.11.2024' },
      { destination: 'Paris', date: '29.11.2024' },
      { destination: 'Dublin', date: '1.12.2024' }
    ];
}
