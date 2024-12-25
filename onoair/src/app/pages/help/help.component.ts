import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  constructor(private router: Router) {}

  // Method to navigate to the Home page
  goToHome(): void {
    this.router.navigate(['/']);
  }
}
