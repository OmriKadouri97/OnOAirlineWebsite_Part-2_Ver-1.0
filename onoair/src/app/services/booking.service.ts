import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookings = [
    {
      bookingCode: 'BK123',
      flightNumber: 'LH123',
      numberOfPassengers: 2,
      passengerNames: ['John Doe', 'Jane Doe'],
      passportNumbers: ['A1234567', 'B7654321'],
      departure: '02.12.2024, 10:00 AM',
      arrival: '02.12.2024, 12:30 PM',
    },
    {
      bookingCode: 'BK124',
      flightNumber: 'FR456',
      numberOfPassengers: 1,
      passengerNames: ['Alice Smith'],
      passportNumbers: ['C9876543'],
      departure: '03.12.2024, 3:00 PM',
      arrival: '03.12.2024, 4:15 PM',
    },
    {
      bookingCode: 'BK125',
      flightNumber: 'AA789',
      numberOfPassengers: 3,
      passengerNames: ['Bob Brown', 'Charlie Brown', 'Daisy Brown'],
      passportNumbers: ['D5678901', 'E7654321', 'F1234567'],
      departure: '04.12.2024, 8:00 AM',
      arrival: '04.12.2024, 11:00 AM',
    },
  ];

  list(): any[] {
    return this.bookings;
  }

  get(bookingCode: string): any | undefined {
    return this.bookings.find((booking) => booking.bookingCode === bookingCode);
  }
}
