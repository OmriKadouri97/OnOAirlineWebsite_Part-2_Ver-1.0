import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private flightList = [
    {
      flightNumber: 'LH123',
      origin: 'Berlin',
      destination: 'Paris',
      departure: '2024-12-02 10:00 AM',
      arrival: '2024-12-02 12:30 PM',
      seats: 180,
      passengerNames: ['John Doe', 'Jane Smith', 'Alice Brown', 'Bob Johnson', 'Emily Davis'],
      passportNumbers: ['A1234567', 'B7654321', 'C9876543', 'D5678901', 'E1234567'],
    },
    {
      flightNumber: 'FR456',
      origin: 'Dublin',
      destination: 'London',
      departure: '2024-12-03 15:00 PM',
      arrival: '2024-12-03 16:15 PM',
      seats: 150,
      passengerNames: ['Charlie Wilson', 'Olivia Thomas'],
      passportNumbers: ['F1234567', 'G7654321'],
    },
    {
      flightNumber: 'AA789',
      origin: 'New York',
      destination: 'Los Angeles',
      departure: '2024-12-04 08:00 AM',
      arrival: '2024-12-04 11:00 AM',
      seats: 200,
      passengerNames: ['Sophia Lee', 'Mason Harris', 'Liam Walker'],
      passportNumbers: ['H1234567', 'I7654321', 'J5678901'],
    },
    {
      flightNumber: 'BA321',
      origin: 'London',
      destination: 'Rome',
      departure: '2024-12-05T14:00',
      arrival: '2024-12-05T16:30',
      seats: 170,
    },
    {
      flightNumber: 'EK001',
      origin: 'Dubai',
      destination: 'Sydney',
      departure: '2024-12-06T22:00',
      arrival: '2024-12-07T10:00',
      seats: 300,
    },
    {
      flightNumber: 'QR456',
      origin: 'Doha',
      destination: 'Mumbai',
      departure: '2024-12-07T06:00',
      arrival: '2024-12-07T08:30',
      seats: 250,
    },
    {
      flightNumber: 'AF789',
      origin: 'Paris',
      destination: 'Toronto',
      departure: '2024-12-08T09:00',
      arrival: '2024-12-08T13:00',
      seats: 220,
    },
    {
      flightNumber: 'DL123',
      origin: 'Atlanta',
      destination: 'New York',
      departure: '2024-12-09T07:30',
      arrival: '2024-12-09T09:00',
      seats: 180,
    },
    {
      flightNumber: 'UA321',
      origin: 'San Francisco',
      destination: 'Seattle',
      departure: '2024-12-10T10:00',
      arrival: '2024-12-10T11:30',
      seats: 160,
    },
    {
      flightNumber: 'CA987',
      origin: 'Beijing',
      destination: 'Shanghai',
      departure: '2024-12-11T08:00',
      arrival: '2024-12-11T09:30',
      seats: 190,
    },
  ];

  constructor() {}

  // Method to return all flights
  list(): any[] {
    return this.flightList;
  }

  // Method to return a flight by flight number
  get(flightNumber: string): any | null {
    return this.flightList.find((flight) => flight.flightNumber === flightNumber) || null;
  }
}
