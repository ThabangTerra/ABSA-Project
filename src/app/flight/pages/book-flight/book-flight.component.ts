import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FlightService } from '../../services/flight.service';

declare const M: any;

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss'],
})
export class BookFlightComponent implements OnInit, AfterViewInit {
  @ViewChild('departure') _departure: ElementRef<HTMLInputElement>;
  @ViewChild('return') _return: ElementRef<HTMLInputElement>;
  @ViewChild('from') _from: ElementRef<HTMLInputElement>;
  @ViewChild('to') _to: ElementRef<HTMLInputElement>;

  form = this.fb.group({
    From: [''],
    To: [''],
    Departure: [''],
    Return: [''],
    NumberOfAdults: [''],
    FlightType: [''],
  });

  flightType: { Key: string; Value: string }[] = [
    { Key: 'domestic', Value: 'Domestic' },
    { Key: 'international', Value: 'International' },
  ];

  airportsSub: Subscription;
  instance: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initAutocomplete();
    this.initPicker();
  }

  onFind(): void {
    const flights = this.flightService.fetchFlights(this.form.value);
    this.flightService.changeData(flights);
    this.router.navigate(['/flights/results']);
  }

  onFromChange(): void {
    this.form.controls['From'].setValue(this._from.nativeElement.value);
  }

  onToChange(): void {
    this.form.controls['To'].setValue(this._to.nativeElement.value);
  }

  onDepartureChange(): void {
    this.form.controls['Departure'].setValue(
      this._departure.nativeElement.value
    );
  }

  onReturnChange(): void {
    this.form.controls['Return'].setValue(this._return.nativeElement.value);
  }

  private initPicker(): void {
    let elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, { format: 'dd/mm/yyyy' });
  }

  private initAutocomplete(): void {
    const data = this.flightService.fetchAirports('');
    let elems = document.querySelectorAll('.autocomplete');
    this.instance = M.Autocomplete.init(elems, { data: data });
  }
}
