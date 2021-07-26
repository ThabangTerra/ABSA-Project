import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import airports from '../../../assets/mocks/airports.json';
import flights from '../../../assets/mocks/flights.json';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor() {}

  fetchAirports(type: string) {
    const _airports = airports.map((a) => a.Name);
    let x = {};
    _airports.forEach((v) => {
      x[v] = null;
    });

    let obj = Object.assign({}, x);

    return obj;
  }

  fetchFlights(query: any) {
    let obj = {};

    Object.keys(query).forEach((key) => {
      if (query[key] !== '') {
        obj[key] = query[key];
      }
    });

    const data = flights.filter((f) => {
      let found: boolean[] = [];
      const keys = Object.keys(obj);

      keys.forEach((k) => {
        if (f.hasOwnProperty(k)) {
          f[k] !== obj[k] ? found.push(false) : found.push(true);
        }
      });

      return found.every((i) => i);
    });

    return obj.hasOwnProperty('NumberOfAdults')
      ? data.filter((d) => d.AvailableSeats > obj['NumberOfAdults'])
      : data;
  }

  public data: Flight[] = [];

  public subject = new Subject<Flight[]>();

  private dataSource = new BehaviorSubject(this.data);

  currentData$ = this.dataSource.asObservable();

  changeData = (f: Flight[]) => this.dataSource.next(f);
}
