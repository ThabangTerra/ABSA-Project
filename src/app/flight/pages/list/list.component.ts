import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Flight } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.flightService.currentData$.subscribe((f) => (this.flights = f));
  }

  onClick(): void {
    this.router.navigate(['/flights']);
  }
}
