import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private localStorageKey = 'bookedFlights';
  private bookedFlights: any[] = this.getBookingsFromLocalStorage();
  private selectedFlightSource = new BehaviorSubject<any[]>(this.bookedFlights);
  selectedFlight$ = this.selectedFlightSource.asObservable();

  constructor() {
    // Load bookings from local storage into the BehaviorSubject on initialization
    this.selectedFlightSource.next([...this.bookedFlights]);
  }

  /**
   * Add a flight to the bookings, save it to local storage, and notify subscribers.
   * @param flight - The flight object to add.
   */
  setSelectedFlight(flight: any): void {
    const booking = {
      ...flight,
      passengerNames: flight.passengerNames || ['No passengers listed'],
      passportNumbers: flight.passportNumbers || ['No passport numbers listed'],
    };
    this.bookedFlights.push(booking); // Add new booking to the array
    this.saveBookingsToLocalStorage(); // Save the updated bookings to local storage
    this.selectedFlightSource.next([...this.bookedFlights]); // Notify subscribers with a new copy of the array
  }

  /**
   * Retrieve all bookings from local storage.
   * @returns - The list of booked flights.
   */
  private getBookingsFromLocalStorage(): any[] {
    const storedBookings = localStorage.getItem(this.localStorageKey);
    return storedBookings ? JSON.parse(storedBookings) : [];
  }

  /**
   * Save all bookings to local storage.
   */
  private saveBookingsToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.bookedFlights));
  }

  /**
   * Get a list of all booked flights (useful for synchronous access).
   * @returns - The current list of booked flights.
   */
  getBookings(): any[] {
    return [...this.bookedFlights];
  }
}
