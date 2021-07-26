import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hotel } from 'src/app/shared/models/hotel.model';

import hotels from '../../../assets/mocks/hotels.json';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}

  fetch(id: string): Observable<Hotel> {
    return of(hotels.find((h) => h.ID === id));
  }

  fetchAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('assets/mocks/hotels.json');
  }
}
