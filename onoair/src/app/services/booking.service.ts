import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  // Mock data for bookings
  private bookings = [
    {
      bookingCode: 'BK123',
      flightNumber: 'LH123',
      numberOfPassengers: 2,
      passengerNames: ['John Doe', 'Jane Doe'],
      passportNumbers: ['A1234567', 'B7654321'],
    },
    {
      bookingCode: 'BK124',
      flightNumber: 'FR456',
      numberOfPassengers: 1,
      passengerNames: ['Alice Smith'],
      passportNumbers: ['C9876543'],
    },
    {
      bookingCode: 'BK125',
      flightNumber: 'AA789',
      numberOfPassengers: 3,
      passengerNames: ['Bob Brown', 'Charlie Brown', 'Daisy Brown'],
      passportNumbers: ['D5678901', 'E7654321', 'F1234567'],
    },
    {
      bookingCode: 'BK126',
      flightNumber: 'UA345',
      numberOfPassengers: 4,
      passengerNames: ['Eve Adams', 'Frank Adams', 'Grace Adams', 'Hank Adams'],
      passportNumbers: ['G1234567', 'H7654321', 'I9876543', 'J1234567'],
    },
    {
      bookingCode: 'BK127',
      flightNumber: 'QR901',
      numberOfPassengers: 2,
      passengerNames: ['Sam Wilson', 'Ella Wilson'],
      passportNumbers: ['K9876543', 'L5678901'],
    },
    {
      bookingCode: 'BK128',
      flightNumber: 'EK450',
      numberOfPassengers: 1,
      passengerNames: ['James Dean'],
      passportNumbers: ['M1234567'],
    },
    {
      bookingCode: 'BK129',
      flightNumber: 'BA330',
      numberOfPassengers: 5,
      passengerNames: ['Anna White', 'Ben White', 'Cathy White', 'David White', 'Emma White'],
      passportNumbers: ['N7654321', 'O9876543', 'P1234567', 'Q5678901', 'R9876543'],
    },
    {
      bookingCode: 'BK130',
      flightNumber: 'AF780',
      numberOfPassengers: 3,
      passengerNames: ['Olivia Green', 'Peter Green', 'Sophia Green'],
      passportNumbers: ['S1234567', 'T7654321', 'U9876543'],
    },
    {
      bookingCode: 'BK131',
      flightNumber: 'LH200',
      numberOfPassengers: 2,
      passengerNames: ['Lucas Gray', 'Mia Gray'],
      passportNumbers: ['V5678901', 'W9876543'],
    },
    {
      bookingCode: 'BK132',
      flightNumber: 'QR902',
      numberOfPassengers: 1,
      passengerNames: ['Ethan Hall'],
      passportNumbers: ['X1234567'],
    },
  ];

  // Method to list all bookings
  list(): any[] {
    return this.bookings;
  }

  // Method to get details of a specific booking by code
  get(bookingCode: string): any | undefined {
    return this.bookings.find((booking) => booking.bookingCode === bookingCode);
  }
}
