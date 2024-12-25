import { Routes } from '@angular/router';
import { HelpComponent } from './pages/help/help.component';
import { MainScreenComponent } from './pages/MainScreen/MainScreen.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { SearchComponent } from './pages/search/search.component'; 
import { FlightManagementComponent } from './pages/FlightManagement/FlightManagement.component';


export const routes: Routes = [
  { path: 'help', component: HelpComponent },
  { path: '', component: MainScreenComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'FlightManagement', component: FlightManagementComponent },
];
