import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: HomeComponent }, // Replace with actual Admin Component later
  { path: 'search', component: HomeComponent }, // Replace with Search Component
  { path: 'bookings', component: HomeComponent } // Replace with Bookings Component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
