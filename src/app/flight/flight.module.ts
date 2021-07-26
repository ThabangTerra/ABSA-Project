import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { FlightRoutingModule } from './flight-routing.module';
import { BookFlightComponent } from './pages/book-flight/book-flight.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/list/list.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';

@NgModule({
  declarations: [MainComponent, BookFlightComponent, ListComponent, FlightDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlightRoutingModule,
    SharedModule,
  ],
})
export class FlightModule {}
