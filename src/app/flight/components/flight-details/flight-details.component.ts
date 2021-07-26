import { Component, Input, OnInit } from '@angular/core';

import { Flight } from '../../models/flight.model';

@Component({
  selector: 'flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  @Input() flight: Flight;

  constructor() { }

  ngOnInit(): void {
  }

}
