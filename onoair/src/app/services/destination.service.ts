import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service available globally
})
export class DestinationService {
  // Mock data for destinations
  private destinations = [
    {
      id: 1,
      name: 'Berlin',
      imageUrl: 'https://via.placeholder.com/150',
      airportName: 'Berlin Brandenburg Airport',
      airportCode: 'BER',
      location: 'Berlin, Germany',
    },
    {
      id: 2,
      name: 'Dublin',
      imageUrl: 'https://via.placeholder.com/150',
      airportName: 'Dublin Airport',
      airportCode: 'DUB',
      location: 'Dublin, Ireland',
    },
    {
      id: 3,
      name: 'Paris',
      imageUrl: 'https://via.placeholder.com/150',
      airportName: 'Charles de Gaulle Airport',
      airportCode: 'CDG',
      location: 'Paris, France',
    },
    {
      id: 4,
      name: 'New York',
      imageUrl: 'https://via.placeholder.com/150',
      airportName: 'John F. Kennedy International Airport',
      airportCode: 'JFK',
      location: 'New York, USA',
    },
    {
      id: 5,
      name: 'Tokyo',
      imageUrl: 'https://via.placeholder.com/150',
      airportName: 'Narita International Airport',
      airportCode: 'NRT',
      location: 'Tokyo, Japan',
    },
  ];

  // Method to LIST all destinations
  listDestinations() {
    return this.destinations;
  }

  // Method to GET a specific destination by ID
  getDestinationById(id: number) {
    return this.destinations.find(destination => destination.id === id);
  }
}
