import { Routes } from '@angular/router';
import { HelpComponent } from './pages/help/help.component';
import { MainScreenComponent } from './pages/MainScreen/MainScreen.component';
import { MyBookingsComponent } from './pages/MyBookings/MyBookings.component';
import { SearchFlightComponent } from './pages/SearchFlight/SearchFlight.component'; 
import { FlightManagementComponent } from './pages/FlightManagement/FlightManagement.component';
import { DestinationManagementComponent } from './pages/DestinationManagement/DestinationManagement.component';


export const routes: Routes = [
  { path: 'help', component: HelpComponent },
  { path: '', component: MainScreenComponent },
  { path: 'MyBookings', component: MyBookingsComponent },
  { path: 'SearchFlight', component: SearchFlightComponent },       
  { path: 'FlightManagement', component: FlightManagementComponent },
  { path: 'DestinationManagement', component: DestinationManagementComponent},
];
