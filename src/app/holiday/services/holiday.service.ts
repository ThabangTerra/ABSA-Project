import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import holidays from '../../../assets/mocks/holidays.json';
import { Holiday } from '../models/holiday.model';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  constructor(private http: HttpClient) {}

  fetch(id: string): Observable<Holiday> {
    return of(holidays.find((h) => h.ID === id));
  }

  fetchAll(): Observable<Holiday[]> {
    return this.http.get<Holiday[]>('assets/mocks/holidays.json');
  }
}
