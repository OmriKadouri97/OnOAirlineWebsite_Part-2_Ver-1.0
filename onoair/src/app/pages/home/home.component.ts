import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h1>Welcome to OnoAir</h1>`,
  styles: [`
    h1 {
      text-align: center;
      margin-top: 50px;
    }
  `]
})
export class HomeComponent {}
